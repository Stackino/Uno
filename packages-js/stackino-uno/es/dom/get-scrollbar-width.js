var scrollbarWidth = null;
function detectScrollbarWidth() {
    var testElement = document.createElement('div');
    testElement.style.cssText = "\n\t\twidth: 50px !important;\n\t\theight: 50px !important;\n\t\toverflow: scroll !important;\n\t\tposition: absolute !important;\n\t\ttop: 9999px !important;\n\t\tleft: 9999px !important;\n\t";
    document.body.appendChild(testElement);
    var vertical = testElement.offsetWidth - testElement.clientWidth;
    var horizontal = testElement.offsetHeight - testElement.clientHeight;
    document.body.removeChild(testElement);
    return {
        vertical: vertical,
        horizontal: horizontal,
    };
}
function getScrollbarWidth() {
    if (scrollbarWidth === null) {
        scrollbarWidth = detectScrollbarWidth();
    }
    return scrollbarWidth;
}
export default getScrollbarWidth;
export { getScrollbarWidth };
//# sourceMappingURL=get-scrollbar-width.js.map