import * as tslib_1 from "tslib";
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { UISref, UISrefActive, UIRouterConsumer } from '@uirouter/react';
var DefaultLinkComponent = function (_a) {
    var href = _a.href, id = _a.id, className = _a.className, style = _a.style, onClick = _a.onClick, children = _a.children;
    return React.createElement("a", { id: id, className: className, style: style, href: href, onClick: onClick }, children);
};
var Link = /** @class */ (function (_super) {
    tslib_1.__extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Link.prototype.render = function () {
        var _a = this.props, component = _a.component, to = _a.to, params = _a.params, options = _a.options, activeClassName = _a.activeClassName, exact = _a.exact, id = _a.id, className = _a.className, style = _a.style, children = _a.children, isListItem = _a.isListItem, listItemClassName = _a.listItemClassName;
        var Component = component || DefaultLinkComponent;
        return (React.createElement(UIRouterConsumer, null, function (router) {
            var href = router.stateService.href(to, params || {}, options);
            var link = (React.createElement(UISref, { to: to, params: params, options: options }, isListItem ?
                React.createElement("li", { className: listItemClassName },
                    React.createElement(DefaultLinkComponent, { href: href, id: id, className: className, style: style }, children))
                :
                    React.createElement(Component, { href: href, id: id, className: className, style: style }, children)));
            if (activeClassName) {
                return (React.createElement(UISrefActive, { class: activeClassName, exact: exact }, link));
            }
            return link;
        }));
    };
    Link.propTypes = {
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
    return Link;
}(React.Component));
export { Link };
//# sourceMappingURL=link.js.map