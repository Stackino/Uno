import { UIRouter, UIRouterPluginBase } from '@uirouter/core';
export interface DisplayErrorHandler {
    show(title: string, error: Error | string): void;
    hide(): void;
}
export interface DisplayErrorPluginOptions {
    handler: DisplayErrorHandler;
}
export declare class DisplayErrorPlugin implements UIRouterPluginBase {
    constructor(router: UIRouter, options: DisplayErrorPluginOptions);
    readonly name: string;
    private disposers;
    dispose(router: UIRouter): void;
}
export default DisplayErrorPlugin;
