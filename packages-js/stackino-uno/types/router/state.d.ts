/// <reference types="react" />
import * as React from 'react';
export interface Newable<TStore> {
    new (...args: any[]): TStore;
}
export interface Store {
    enter(): Promise<any>;
}
export interface StateOptions<TStore> {
    store?: Newable<TStore>;
    data?: any;
    abstract?: boolean;
}
export declare function state<TStore extends Store, TComponentProps>(name: string, url: string, options?: StateOptions<TStore>): (<TComponent extends React.ComponentClass<TComponentProps>>(target: TComponent) => TComponent);
export default state;
