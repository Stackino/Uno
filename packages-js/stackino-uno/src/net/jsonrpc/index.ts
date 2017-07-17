import { getUid } from '../../tools';
import { isMoment } from 'moment';
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
	params?: { [key: string]: any } | any[];
}

export interface JsonRpcResponse {
	id: number | string;
	result: any;
	error: JsonRpcErrorData;
}

function attachFiles(formData: FormData, key: string | null, data: any): any {
	const type = typeof data;

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

				const result: any[] = [];
				for (let i = 0; i < data.length; i++) {
					const nextKey = `${key}[${i}]`;
					const item = attachFiles(formData, nextKey, data[i]);

					result.push(item);
				}
				return result;
			} else if (isMoment(data)) {
				return data.format();
			} else if (File && data instanceof File) {
				if (!key) {
					throw new Error('Key must be defined for file values');
				}

				formData.append(key, data);
				return key;
			} else {
				const result: any = {};
				for (const k in data) {
					if (!data.hasOwnProperty(k)) {
						continue;
					}

					const nextKey = key ? `${key}.${k}` : k;
					const item = attachFiles(formData, nextKey, data[k]);

					result[k] = item;
				}
				return result;
			}

		default:
			throw new Error(`Undefined behavior for data type '${type}' and key '${key}'`);
	}
}

function buildHttpRequestBody(request: JsonRpcRequest) {
	const formData = new FormData();

	const result = attachFiles(formData, null, request);

	formData.append('', JSON.stringify(result));

	return formData;
}

export type RequestFilter = (client: JsonRpcClient, request: JsonRpcRequest) => Promise<JsonRpcRequest>;
export type ResponseFilter = (client: JsonRpcClient, request: JsonRpcRequest, response: JsonRpcResponse) => Promise<JsonRpcResponse>;

export class JsonRpcClient {
	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	public readonly endpoint: string;
	public useJsonRpcConstant: boolean = false;

	public authorization: string;

	public readonly requestFilters: RequestFilter[] = [];
	public readonly responseFilters: ResponseFilter[] = [];

	async processRequestAsync(rpcRequest: JsonRpcRequest) {
		const headers: { [name: string]: string } = {};
		if (this.authorization) {
			headers.Authorization = this.authorization;
		}

		const httpRequestBody = buildHttpRequestBody(rpcRequest);

		const httpResponse = await fetch(this.endpoint, { method: 'POST', headers, body: httpRequestBody });
		if (!httpResponse.ok) {
			throw new Error(`RPC call failed - ${httpResponse.status}: ${httpResponse.statusText}`);
		}

		const rpcResponse = await httpResponse.json() as JsonRpcResponse;
		if (typeof rpcResponse !== 'object' || rpcResponse === null) {
			throw new Error('Malformed RPC response');
		}

		return rpcResponse;
	}

	async callAsync(method: string, params: { [key: string]: any } | any[]): Promise<any> {
		let rpcRequest: JsonRpcRequest = {
			id: getUid(),
			method,
			params,
		};

		for (const filter of this.requestFilters) {
			rpcRequest = await filter(this, rpcRequest);
		}

		if (this.useJsonRpcConstant) {
			rpcRequest.jsonrpc = '2.0';
		}

		let rpcResponse = await this.processRequestAsync(rpcRequest);

		for (const filter of this.responseFilters) {
			rpcResponse = await filter(this, rpcRequest, rpcResponse);
		}

		if (rpcResponse.error) {
			throw new JsonRpcError(rpcResponse.error.code, rpcResponse.error.message, rpcResponse.error.data);
		}

		return rpcResponse.result;
	}
}

export { JsonRpcError };
export default JsonRpcClient;
