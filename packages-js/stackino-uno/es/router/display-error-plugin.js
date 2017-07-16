import { Rejection, RejectType } from '@uirouter/core';
import { Bsod } from '../ui/bsod';
var DisplayErrorPlugin = (function () {
    function DisplayErrorPlugin(router, options) {
        this.name = 'DisplayErrorPlugin';
        // tslint:disable-next-line:ban-types
        this.disposers = [];
        var handler = (options && options.handler) || Bsod;
        router.stateService.defaultErrorHandler(function (error) {
            if (error instanceof Rejection) {
                if (error.type === RejectType.IGNORED || error.type === RejectType.SUPERSEDED) {
                    return;
                }
                handler.show('Transition error', error.detail);
            }
            else {
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
    DisplayErrorPlugin.prototype.dispose = function (router) {
        if (this.disposers) {
            for (var _i = 0, _a = this.disposers; _i < _a.length; _i++) {
                var disposer = _a[_i];
                disposer();
            }
            this.disposers.length = 0;
        }
    };
    return DisplayErrorPlugin;
}());
export { DisplayErrorPlugin };
export default DisplayErrorPlugin;
//# sourceMappingURL=display-error-plugin.js.map