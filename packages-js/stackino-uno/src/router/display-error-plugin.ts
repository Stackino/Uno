import { Rejection, RejectType, UIRouter, UIRouterPluginBase } from '@uirouter/core';
import { Bsod } from '../ui/bsod';

export interface DisplayErrorHandler {
	show(title: string, error: Error | string): void;
	hide(): void;
}

export interface DisplayErrorPluginOptions {
	handler: DisplayErrorHandler;
}

export class DisplayErrorPlugin implements UIRouterPluginBase {
	constructor(router: UIRouter, options: DisplayErrorPluginOptions) {
		const handler = (options && options.handler) || Bsod;

		router.stateService.defaultErrorHandler(error => {
			if (error instanceof Rejection) {
				if (error.type === RejectType.IGNORED || error.type === RejectType.SUPERSEDED) {
					return;
				}

				handler.show('Transition error', error.detail);
			} else {
				handler.show('Transition error', error);
			}
		});

		/*
		this.disposers.push(transitionService.onSuccess({}, (transition: Transition) => {
			console.log('success');
			handler.hide();
		}));
		*/
	}

	public readonly name = 'DisplayErrorPlugin';

	// tslint:disable-next-line:ban-types
	private disposers: Function[] = [];

	dispose(router: UIRouter) {
		if (this.disposers) {
			for (const disposer of this.disposers) {
				disposer();
			}
			this.disposers.length = 0;
		}
	}
}

export default DisplayErrorPlugin;
