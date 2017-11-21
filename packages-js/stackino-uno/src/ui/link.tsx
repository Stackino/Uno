import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TransitionOptions, UIRouterReact, UISref, UISrefActive } from '@uirouter/react';

export interface LinkComponentProps {
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	href: string;
	onClick?: React.EventHandler<React.MouseEvent<any>>;
}

const DefaultLinkComponent: React.StatelessComponent<LinkComponentProps> = ({ href, id, className, style, onClick, children }) =>
	<a id={id} className={className} style={style} href={href} onClick={onClick}>{children}</a>;

export interface LinkProps {
	// Link
	component?: React.ComponentType<LinkComponentProps>;

	// UISref
	to: string;
	params?: { [key: string]: any };
	options?: TransitionOptions;

	// UISrefActive
	activeClassName?: string;
	exact?: boolean;

	// React
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	isListItem?: boolean;
	listItemClassName?: string;
}

export class Link extends React.Component<LinkProps, object> {
	static propTypes = {
		component: PropTypes.any,

		to: PropTypes.string.isRequired,
		params: PropTypes.object,
		options: PropTypes.object,

		activeClassName: PropTypes.string,
		exact: PropTypes.bool,

		id: PropTypes.string,
		className: PropTypes.string,
		style: PropTypes.object,

		isListItem: PropTypes.bool,
		listItemClassName: PropTypes.string
	};

	static contextTypes: React.ValidationMap<any> = {
		router: PropTypes.object,
	};

	context: {
		router: UIRouterReact;
	};

	render() {
		const { component, to, params, options, activeClassName, exact, id, className, style, children, isListItem, listItemClassName } = this.props;

		const href = this.context.router.stateService.href(to, params || {}, options);
		const Component = component || DefaultLinkComponent;

		const link = (
			<UISref to={to} params={params} options={options}>
				{isListItem ?
					<li className={listItemClassName}>
						<DefaultLinkComponent href={href} id={id} className={className} style={style}>
							{children}
						</DefaultLinkComponent>
					</li>
				:
					<Component href={href} id={id} className={className} style={style}>
						{children}
					</Component>
				}
			</UISref>
		);

		if (activeClassName) {
			return (
				<UISrefActive class={activeClassName} exact={exact}>
					{link}
				</UISrefActive>
			);
		}

		return link;
	}
}
