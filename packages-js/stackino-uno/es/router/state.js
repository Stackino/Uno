var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import { Transition } from '@uirouter/react';
import * as globals from '../globals';
import { Container } from 'inversify';
import { Provider } from 'inversify-react';
var defaultOptions = {
    abstract: false,
};
export function state(name, url, options) {
    var _this = this;
    var _a = options || defaultOptions, store = _a.store, data = _a.data, abstract = _a.abstract;
    return function (target) {
        var Component = target;
        var declaration = {
            name: name,
            url: url,
            component: (_a = (function (_super) {
                    __extends(Page, _super);
                    function Page() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Page.prototype.render = function () {
                        var component = React.createElement(Component, null);
                        var container = this.props.resolves[name + ":container"];
                        if (!container) {
                            return component;
                        }
                        return (React.createElement(Provider, { container: container, standalone: true }, component));
                    };
                    return Page;
                }(React.Component)),
                _a.displayName = "Page(" + name + ")",
                _a),
            resolve: [],
        };
        if (abstract) {
            declaration.abstract = abstract;
        }
        if (data) {
            declaration.data = data;
        }
        if (store) {
            declaration.resolve = [
                {
                    token: name + ":container",
                    // tslint:disable-next-line space-before-function-paren
                    resolveFn: function (transition) { return __awaiter(_this, void 0, void 0, function () {
                        var selfStateGetter, path, self, i, parentContainerResolvable, parent_1, _i, _a, resolvable, parentContainer, currentContainer;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    selfStateGetter = transition.to().$$state;
                                    if (!selfStateGetter)
                                        throw new Error('Cannot get internal state object');
                                    path = selfStateGetter().path;
                                    self = null;
                                    for (i = 0; i < path.length; i++) {
                                        if (path[i].name !== name) {
                                            continue;
                                        }
                                        self = path[i];
                                        break;
                                    }
                                    if (!self) {
                                        throw new Error('Cannot find self state');
                                    }
                                    parentContainerResolvable = null;
                                    for (parent_1 = self.parent; parent_1; parent_1 = parent_1.parent) {
                                        for (_i = 0, _a = parent_1.resolvables; _i < _a.length; _i++) {
                                            resolvable = _a[_i];
                                            if (resolvable.token !== parent_1.name + ":container") {
                                                continue;
                                            }
                                            parentContainerResolvable = resolvable;
                                            break;
                                        }
                                    }
                                    if (!parentContainerResolvable) return [3 /*break*/, 2];
                                    return [4 /*yield*/, transition.injector().getAsync(parentContainerResolvable.token)];
                                case 1:
                                    parentContainer = _b.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    parentContainer = globals.container;
                                    _b.label = 3;
                                case 3:
                                    currentContainer = new Container();
                                    currentContainer.parent = parentContainer;
                                    currentContainer.bind(store).toSelf().inSingletonScope();
                                    return [2 /*return*/, currentContainer];
                            }
                        });
                    }); },
                    deps: [Transition]
                },
                {
                    token: name + ":store-enter",
                    resolveFn: function (container) {
                        var storeInstance = container.get(store);
                        return storeInstance.enter();
                    },
                    deps: [name + ":container"]
                }
            ];
        }
        globals.router.stateRegistry.register(declaration);
        return target;
        var _a;
    };
}
export default state;
//# sourceMappingURL=state.js.map