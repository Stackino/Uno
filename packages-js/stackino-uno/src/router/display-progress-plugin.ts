import { Transition, UIRouterReact, UIRouterPluginBase } from '@uirouter/react';
import { TopBar } from '../ui/topbar';

export interface DisplayProgressHandler {
	show(): void;
	hide(): void;
}

export interface DisplayProgressPluginOptions {
	handler: DisplayProgressHandler;
}

export class DisplayProgressPlugin implements UIRouterPluginBase {
	constructor(router: UIRouterReact, options: DisplayProgressPluginOptions) {
		const { transitionService } = router;

		const handler = (options && options.handler) || TopBar;

		this.disposers.push(transitionService.onStart({}, (transition: Transition) => {
			handler.show();
		}));
		this.disposers.push(transitionService.onError({}, (transition: Transition) => {
			handler.hide();
		}));
		this.disposers.push(transitionService.onSuccess({}, (transition: Transition) => {
			handler.hide();
		}));
	}

	public readonly name = 'DisplayProgressPlugin';

	// tslint:disable-next-line:ban-types
	private disposers: Function[] = [];

	dispose(router: UIRouterReact) {
		if (this.disposers) {
			for (const disposer of this.disposers) {
				disposer();
			}
			this.disposers.length = 0;
		}
	}
}

export default DisplayProgressPlugin;
