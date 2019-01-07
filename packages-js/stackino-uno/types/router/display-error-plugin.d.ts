import { UIRouterReact, UIRouterPluginBase } from '@uirouter/react';
export interface DisplayErrorHandler {
    show(title: string, error: Error | string): void;
    hide(): void;
}
export interface DisplayErrorPluginOptions {
    handler: DisplayErrorHandler;
}
export declare class DisplayErrorPlugin implements UIRouterPluginBase {
    constructor(router: UIRouterReact, options: DisplayErrorPluginOptions);
    readonly name = "DisplayErrorPlugin";
    private disposers;
    dispose(router: UIRouterReact): void;
}
export default DisplayErrorPlugin;
