import { UIRouter, UIRouterPluginBase } from '@uirouter/core';
interface DisplayErrorHandler {
    show(title: string, error: Error | string): void;
    hide(): void;
}
interface DisplayErrorPluginOptions {
    handler: DisplayErrorHandler;
}
declare class DisplayErrorPlugin implements UIRouterPluginBase {
    constructor(router: UIRouter, options: DisplayErrorPluginOptions);
    readonly name: string;
    private disposers;
    dispose(router: UIRouter): void;
}
export { DisplayErrorHandler, DisplayErrorPluginOptions, DisplayErrorPlugin };
export default DisplayErrorPlugin;
