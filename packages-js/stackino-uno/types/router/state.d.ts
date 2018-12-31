import * as React from 'react';
import { Newable } from "../core/newable";
export interface Store {
    enter(): Promise<any>;
}
export interface StateOptions<TStore> {
    store?: Newable<TStore>;
    data?: any;
    views?: {
        [name: string]: React.ComponentClass;
    };
    abstract?: boolean;
}
export declare function state<TStore extends Store, TComponentProps>(name: string, url: string, options?: StateOptions<TStore>): (<TComponent extends React.ComponentClass<TComponentProps>>(target: TComponent) => TComponent);
export default state;
