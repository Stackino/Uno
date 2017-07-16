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
var JsonRpcError = (function (_super) {
    __extends(JsonRpcError, _super);
    function JsonRpcError(code, message, data) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, JsonRpcError.prototype);
        _this.code = code;
        _this.message = message;
        _this.data = data;
        return _this;
    }
    /// <summary>
    /// Invalid JSON was received by the server.
    /// An error occurred on the server while parsing the JSON text.
    /// </summary>
    JsonRpcError.PARSE_ERROR = -32700;
    /// <summary>
    /// The JSON sent is not a valid Request object.
    /// </summary>
    JsonRpcError.INVALID_REQUEST = -32600;
    /// <summary>
    /// The method does not exist / is not available.
    /// </summary>
    JsonRpcError.METHOD_NOT_FOUND = -32601;
    /// <summary>
    /// Invalid method parameter(s).
    /// </summary>
    JsonRpcError.INVALID_PARAMS = -32602;
    /// <summary>
    /// Internal JSON-RPC error.
    /// </summary>
    JsonRpcError.INTERNAL_ERROR = -32603;
    // -32000 to -32099	Server error reserved for implementation-defined server-errors.
    /// <summary>
    /// The server method doesn't return any value and is expected to be only called as notification.
    /// </summary>
    JsonRpcError.NOTIFICATION_EXPECTED = -32000;
    /// <summary>
    /// Client is not authorized to call given method (authenticate and try again).
    /// </summary>
    JsonRpcError.UNAUTHORIZED = -32001;
    /// <summary>
    /// Client is not allowd to call given method (display error).
    /// </summary>
    JsonRpcError.FORBIDDEN = -32002;
    return JsonRpcError;
}(Error));
export default JsonRpcError;
export { JsonRpcError };
//# sourceMappingURL=json-rpc-error.js.map