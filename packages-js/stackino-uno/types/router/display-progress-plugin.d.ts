import { UIRouterReact, UIRouterPluginBase } from '@uirouter/react';
export interface DisplayProgressHandler {
    show(): void;
    hide(): void;
}
export interface DisplayProgressPluginOptions {
    handler: DisplayProgressHandler;
}
export declare class DisplayProgressPlugin implements UIRouterPluginBase {
    constructor(router: UIRouterReact, options: DisplayProgressPluginOptions);
    readonly name = "DisplayProgressPlugin";
    private disposers;
    dispose(router: UIRouterReact): void;
}
export default DisplayProgressPlugin;
