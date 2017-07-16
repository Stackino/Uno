import { UIRouter, UIRouterPluginBase } from '@uirouter/core';
interface DisplayProgressHandler {
    show(): void;
    hide(): void;
}
interface DisplayProgressPluginOptions {
    handler: DisplayProgressHandler;
}
declare class DisplayProgressPlugin implements UIRouterPluginBase {
    constructor(router: UIRouter, options: DisplayProgressPluginOptions);
    readonly name: string;
    private disposers;
    dispose(router: UIRouter): void;
}
export { DisplayProgressHandler, DisplayProgressPluginOptions, DisplayProgressPlugin };
export default DisplayProgressPlugin;
