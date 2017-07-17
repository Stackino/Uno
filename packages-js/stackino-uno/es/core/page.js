import * as tslib_1 from "tslib";
var Page = (function (_super) {
    tslib_1.__extends(Page, _super);
    function Page(data, number, count) {
        var _this = _super.call(this) || this;
        _this.number = number;
        _this.count = count;
        _this.push.apply(_this, data);
        return _this;
    }
    return Page;
}(Array));
export { Page };
export default Page;
//# sourceMappingURL=page.js.map