/// <reference types="react" />
export interface BsodOptions {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare class Bsod {
    static show(title: string, error: Error | string, options?: BsodOptions): void;
    static hide(): void;
}
export default Bsod;
