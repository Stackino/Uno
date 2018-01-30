import * as React from 'react';
import { ReactStateDeclaration, Resolvable, StateObject, Transition } from '@uirouter/react';
import * as globals from '../globals';
import { Container } from 'inversify';
import { Provider } from 'inversify-react';
import { Newable } from "../core/newable";

export interface Store {
	enter(): Promise<any>;
}

export interface StateOptions<TStore> {
	store?: Newable<TStore>;
	data?: any;
	abstract?: boolean;
}

const defaultOptions: StateOptions<any> = {
	abstract: false,
};

export function state<TStore extends Store, TComponentProps>(name: string, url: string, options?: StateOptions<TStore>): (<TComponent extends React.ComponentClass<TComponentProps>>(target: TComponent) => TComponent) {
	const { store, data, abstract } = options || defaultOptions;

	return (target: any) => {
		const Component: React.ComponentClass = target;

		const declaration: ReactStateDeclaration = {
			name,
			url,
			component: class Page extends React.Component<{ [key: string]: any }, object> {
				static displayName = `Page(${name})`;

				render() {
					const component = <Component />;

					const container = this.props[`${name}:container`];

					if (!container) {
						return component;
					}

					return (
						<Provider container={container} standalone>
							{component}
						</Provider>
					);
				}
			},
		};
		declaration.resolve = [];

		if (abstract) {
			declaration.abstract = abstract;
		}

		if (data) {
			declaration.data = data;
		}

		declaration.resolve.push({
			token: `${name}:container`,
			// tslint:disable-next-line space-before-function-paren
			resolveFn: async (transition: Transition) => {

				// find self
				const selfStateGetter = transition.to().$$state;
				if (!selfStateGetter)
					throw new Error('Cannot get internal state object');
				const path = selfStateGetter().path;
				
				let self: StateObject | null = null;
				for (let i = 0; i < path.length; i++) {
					if (path[i].name !== name) {
						continue;
					}

					self = path[i];
					break;
				}
				if (!self) {
					throw new Error('Cannot find self state');
				}

				let parentContainerResolvable: Resolvable | null = null;
				for (let parent = self.parent; parent; parent = parent.parent) {
					for (const resolvable of parent.resolvables) {
						if (resolvable.token !== `${parent.name}:container`) {
							continue;
						}

						parentContainerResolvable = resolvable;
						break;
					}
				}

				let parentContainer: Container;
				if (parentContainerResolvable) {
					parentContainer = await transition.injector().getAsync(parentContainerResolvable.token);
				} else {
					parentContainer = globals.container;
				}

				const currentContainer = new Container();
				currentContainer.parent = parentContainer;
				currentContainer.bind(Transition).toConstantValue(transition);
				if (store) {
					currentContainer.bind(store).toSelf().inSingletonScope();
				}

				return currentContainer;
			},
			deps: [Transition]
		});
		if (store) {
			declaration.resolve.push({
				token: `${name}:store-enter`,
				resolveFn: (container: Container) => {
					const storeInstance = container.get(store);

					return storeInstance.enter();
				},
				deps: [`${name}:container`]
			});
		}

		globals.router.stateRegistry.register(declaration);

		return target;
	};
}

export default state;
