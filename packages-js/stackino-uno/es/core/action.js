import * as tslib_1 from "tslib";
import { TopBar, Bsod } from '../ui';
// tslint:disable-next-line:ban-types
export function action(thisArg, fn) {
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        TopBar.show();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, fn.apply(this, args)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        Bsod.show('Unexpected error', err_1);
                        return [3 /*break*/, 5];
                    case 4:
                        TopBar.hide();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }).bind(thisArg);
}
//# sourceMappingURL=action.js.map