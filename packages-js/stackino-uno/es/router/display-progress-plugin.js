import { TopBar } from '../ui/topbar';
var DisplayProgressPlugin = (function () {
    function DisplayProgressPlugin(router, options) {
        this.name = 'DisplayProgressPlugin';
        // tslint:disable-next-line:ban-types
        this.disposers = [];
        var transitionService = router.transitionService;
        var handler = (options && options.handler) || TopBar;
        this.disposers.push(transitionService.onStart({}, function (transition) {
            handler.show();
        }));
        this.disposers.push(transitionService.onError({}, function (transition) {
            handler.hide();
        }));
        this.disposers.push(transitionService.onSuccess({}, function (transition) {
            handler.hide();
        }));
    }
    DisplayProgressPlugin.prototype.dispose = function (router) {
        if (this.disposers) {
            for (var _i = 0, _a = this.disposers; _i < _a.length; _i++) {
                var disposer = _a[_i];
                disposer();
            }
            this.disposers.length = 0;
        }
    };
    return DisplayProgressPlugin;
}());
export { DisplayProgressPlugin };
export default DisplayProgressPlugin;
//# sourceMappingURL=display-progress-plugin.js.map