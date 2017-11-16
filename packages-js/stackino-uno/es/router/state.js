import * as tslib_1 from "tslib";
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
            component: (_a = /** @class */ (function (_super) {
                    tslib_1.__extends(Page, _super);
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
        };
        declaration.resolve = [];
        if (abstract) {
            declaration.abstract = abstract;
        }
        if (data) {
            declaration.data = data;
        }
        declaration.resolve.push({
            token: name + ":container",
            // tslint:disable-next-line space-before-function-paren
            resolveFn: function (transition) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var selfStateGetter, path, self, i, parentContainerResolvable, parent_1, _i, _a, resolvable, parentContainer, currentContainer;
                return tslib_1.__generator(this, function (_b) {
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
                            currentContainer.bind(Transition).toConstantValue(transition);
                            if (store) {
                                currentContainer.bind(store).toSelf().inSingletonScope();
                            }
                            return [2 /*return*/, currentContainer];
                    }
                });
            }); },
            deps: [Transition]
        });
        if (store) {
            declaration.resolve.push({
                token: name + ":store-enter",
                resolveFn: function (container) {
                    var storeInstance = container.get(store);
                    return storeInstance.enter();
                },
                deps: [name + ":container"]
            });
        }
        globals.router.stateRegistry.register(declaration);
        return target;
        var _a;
    };
}
export default state;
//# sourceMappingURL=state.js.map