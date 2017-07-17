import { UIRouter, UIRouterPluginBase } from '@uirouter/core';
export interface DisplayProgressHandler {
    show(): void;
    hide(): void;
}
export interface DisplayProgressPluginOptions {
    handler: DisplayProgressHandler;
}
export declare class DisplayProgressPlugin implements UIRouterPluginBase {
    constructor(router: UIRouter, options: DisplayProgressPluginOptions);
    readonly name: string;
    private disposers;
    dispose(router: UIRouter): void;
}
export default DisplayProgressPlugin;
