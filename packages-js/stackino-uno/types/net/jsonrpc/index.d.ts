import { JsonRpcError } from './json-rpc-error';
export interface JsonRpcErrorData {
    code: number;
    message: string;
    data?: any;
}
export interface JsonRpcRequest {
    id: number | string | null;
    jsonrpc?: '2.0';
    method: string;
    params?: {
        [key: string]: any;
    } | any[];
}
export interface JsonRpcResponse {
    id: number | string;
    result: any;
    error: JsonRpcErrorData;
}
export declare type RequestFilter = (client: JsonRpcClient, request: JsonRpcRequest) => Promise<JsonRpcRequest>;
export declare type ResponseFilter = (client: JsonRpcClient, request: JsonRpcRequest, response: JsonRpcResponse) => Promise<JsonRpcResponse>;
export declare class JsonRpcClient {
    constructor(endpoint: string);
    readonly endpoint: string;
    useJsonRpcConstant: boolean;
    authorization: string;
    readonly requestFilters: RequestFilter[];
    readonly responseFilters: ResponseFilter[];
    processRequestAsync(rpcRequest: JsonRpcRequest): Promise<JsonRpcResponse>;
    callAsync(method: string, params: {
        [key: string]: any;
    } | any[]): Promise<any>;
}
export { JsonRpcError };
export default JsonRpcClient;
