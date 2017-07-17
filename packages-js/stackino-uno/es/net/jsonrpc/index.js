import * as tslib_1 from "tslib";
import { getUid } from '../../tools';
import * as moment from 'moment';
import { JsonRpcError } from './json-rpc-error';
function attachFiles(formData, key, data) {
    var type = typeof data;
    if (type === 'undefined' || data === null) {
        return null;
    }
    switch (type) {
        case 'boolean':
        case 'string':
        case 'number':
            if (!key) {
                throw new Error('Key must be defined for primitive values');
            }
            return data;
        case 'object':
            if (Array.isArray(data) || (FileList && data instanceof FileList)) {
                if (!key) {
                    throw new Error('Key must be defined for array values');
                }
                var result = [];
                for (var i = 0; i < data.length; i++) {
                    var nextKey = key + "[" + i + "]";
                    var item = attachFiles(formData, nextKey, data[i]);
                    result.push(item);
                }
                return result;
            }
            else if (moment.isMoment(data)) {
                return data.format();
            }
            else if (File && data instanceof File) {
                if (!key) {
                    throw new Error('Key must be defined for file values');
                }
                formData.append(key, data);
                return key;
            }
            else {
                var result = {};
                for (var k in data) {
                    if (!data.hasOwnProperty(k)) {
                        continue;
                    }
                    var nextKey = key ? key + "." + k : k;
                    var item = attachFiles(formData, nextKey, data[k]);
                    result[k] = item;
                }
                return result;
            }
        default:
            throw new Error("Undefined behavior for data type '" + type + "' and key '" + key + "'");
    }
}
function buildHttpRequestBody(request) {
    var formData = new FormData();
    var result = attachFiles(formData, null, request);
    formData.append('', JSON.stringify(result));
    return formData;
}
var JsonRpcClient = (function () {
    function JsonRpcClient(endpoint) {
        this.useJsonRpcConstant = false;
        this.requestFilters = [];
        this.responseFilters = [];
        this.endpoint = endpoint;
    }
    JsonRpcClient.prototype.processRequestAsync = function (rpcRequest) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var headers, httpRequestBody, httpResponse, rpcResponse;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {};
                        if (this.authorization) {
                            headers.Authorization = this.authorization;
                        }
                        httpRequestBody = buildHttpRequestBody(rpcRequest);
                        return [4 /*yield*/, fetch(this.endpoint, { method: 'POST', headers: headers, body: httpRequestBody })];
                    case 1:
                        httpResponse = _a.sent();
                        if (!httpResponse.ok) {
                            throw new Error("RPC call failed - " + httpResponse.status + ": " + httpResponse.statusText);
                        }
                        return [4 /*yield*/, httpResponse.json()];
                    case 2:
                        rpcResponse = _a.sent();
                        if (typeof rpcResponse !== 'object' || rpcResponse === null) {
                            throw new Error('Malformed RPC response');
                        }
                        return [2 /*return*/, rpcResponse];
                }
            });
        });
    };
    JsonRpcClient.prototype.callAsync = function (method, params) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var rpcRequest, _i, _a, filter, rpcResponse, _b, _c, filter;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        rpcRequest = {
                            id: getUid(),
                            method: method,
                            params: params,
                        };
                        _i = 0, _a = this.requestFilters;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        filter = _a[_i];
                        return [4 /*yield*/, filter(this, rpcRequest)];
                    case 2:
                        rpcRequest = _d.sent();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        if (this.useJsonRpcConstant) {
                            rpcRequest.jsonrpc = '2.0';
                        }
                        return [4 /*yield*/, this.processRequestAsync(rpcRequest)];
                    case 5:
                        rpcResponse = _d.sent();
                        _b = 0, _c = this.responseFilters;
                        _d.label = 6;
                    case 6:
                        if (!(_b < _c.length)) return [3 /*break*/, 9];
                        filter = _c[_b];
                        return [4 /*yield*/, filter(this, rpcRequest, rpcResponse)];
                    case 7:
                        rpcResponse = _d.sent();
                        _d.label = 8;
                    case 8:
                        _b++;
                        return [3 /*break*/, 6];
                    case 9:
                        if (rpcResponse.error) {
                            throw new JsonRpcError(rpcResponse.error.code, rpcResponse.error.message, rpcResponse.error.data);
                        }
                        return [2 /*return*/, rpcResponse.result];
                }
            });
        });
    };
    return JsonRpcClient;
}());
export { JsonRpcClient };
export { JsonRpcError };
export default JsonRpcClient;
//# sourceMappingURL=index.js.map