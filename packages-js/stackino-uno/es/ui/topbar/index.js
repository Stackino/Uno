var topbarImpl = require('topbar');
var depth = 0;
// topbar
var TopBar = (function () {
    function TopBar() {
    }
    TopBar.hideInternal = function () {
        if (depth > 0) {
            return;
        }
        topbarImpl.hide();
    };
    TopBar.show = function () {
        depth++;
        if (depth === 1) {
            topbarImpl.show();
        }
        return this.hide;
    };
    TopBar.hide = function () {
        if (depth <= 0) {
            return;
        }
        depth--;
        if (depth === 0) {
            // delay hide for a bit in case we would just immediately show again
            setTimeout(this.hideInternal, 100);
        }
    };
    return TopBar;
}());
export { TopBar };
export default TopBar;
//# sourceMappingURL=index.js.map