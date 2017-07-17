export declare class JsonRpcError extends Error {
    static readonly PARSE_ERROR: number;
    static readonly INVALID_REQUEST: number;
    static readonly METHOD_NOT_FOUND: number;
    static readonly INVALID_PARAMS: number;
    static readonly INTERNAL_ERROR: number;
    static readonly NOTIFICATION_EXPECTED: number;
    static readonly UNAUTHORIZED: number;
    static readonly FORBIDDEN: number;
    constructor(code: number, message: string, data: any);
    code: number;
    message: string;
    data: any;
}
export default JsonRpcError;
