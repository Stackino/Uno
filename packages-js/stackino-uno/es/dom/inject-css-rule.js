var styleElement = null;
var styleSheet = null;
function createStyleElement() {
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    return style;
}
function injectCssRule(rule) {
    if (styleElement === null || styleSheet === null) {
        styleElement = createStyleElement();
        styleSheet = styleElement.sheet;
    }
    styleSheet.insertRule(rule, styleSheet.cssRules.length);
}
export default injectCssRule;
export { injectCssRule };
//# sourceMappingURL=inject-css-rule.js.map