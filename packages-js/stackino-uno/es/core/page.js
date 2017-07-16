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
var Page = (function (_super) {
    __extends(Page, _super);
    function Page(data, number, count) {
        var _this = _super.call(this) || this;
        _this.number = number;
        _this.count = count;
        _this.push.apply(_this, data);
        return _this;
    }
    return Page;
}(Array));
export default Page;
export { Page };
//# sourceMappingURL=page.js.map