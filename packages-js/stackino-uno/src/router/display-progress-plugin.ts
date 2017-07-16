import { Transition, UIRouter, UIRouterPluginBase } from '@uirouter/core';
import { TopBar } from '../ui/topbar';

interface DisplayProgressHandler {
	show(): void;
	hide(): void;
}

interface DisplayProgressPluginOptions {
	handler: DisplayProgressHandler;
}

class DisplayProgressPlugin implements UIRouterPluginBase {
	constructor(router: UIRouter, options: DisplayProgressPluginOptions) {
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

	dispose(router: UIRouter) {
		if (this.disposers) {
			for (const disposer of this.disposers) {
				disposer();
			}
			this.disposers.length = 0;
		}
	}
}

export { DisplayProgressHandler, DisplayProgressPluginOptions, DisplayProgressPlugin };
export default DisplayProgressPlugin;
