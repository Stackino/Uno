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
        return __awaiter(this, void 0, void 0, function () {
            var headers, httpRequestBody, httpResponse, rpcResponse;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, _i, _a, filter, rpcResponse, _b, _c, filter;
            return __generator(this, function (_d) {
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