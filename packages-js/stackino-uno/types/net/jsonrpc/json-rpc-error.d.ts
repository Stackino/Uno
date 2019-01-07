export declare class JsonRpcError extends Error {
    static readonly PARSE_ERROR = -32700;
    static readonly INVALID_REQUEST = -32600;
    static readonly METHOD_NOT_FOUND = -32601;
    static readonly INVALID_PARAMS = -32602;
    static readonly INTERNAL_ERROR = -32603;
    static readonly NOTIFICATION_EXPECTED = -32000;
    static readonly UNAUTHORIZED = -32001;
    static readonly FORBIDDEN = -32002;
    constructor(code: number, message: string, data: any);
    code: number;
    message: string;
    data: any;
}
export default JsonRpcError;
