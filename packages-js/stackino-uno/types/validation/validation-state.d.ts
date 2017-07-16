import { ValidationMessage } from './validation-message';
export interface StateStore {
    [name: string]: ValidationMessage[];
}
export declare class ValidationState {
    constructor(state?: StateStore);
    state: StateStore;
    getMessage(name: string): ValidationMessage | null;
    getWarning(name: string): string | null;
    getError(name: string): string | null;
    static create(source: any): ValidationState | null;
}
export default ValidationState;
