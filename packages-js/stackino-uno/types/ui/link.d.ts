import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TransitionOptions } from '@uirouter/react';
export interface LinkComponentProps {
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    href: string;
    onClick?: React.EventHandler<React.MouseEvent<any>>;
}
export interface LinkProps {
    component?: React.ComponentType<LinkComponentProps>;
    to: string;
    params?: {
        [key: string]: any;
    };
    options?: TransitionOptions;
    activeClassName?: string;
    exact?: boolean;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    isListItem?: boolean;
    listItemClassName?: string;
}
export declare class Link extends React.Component<LinkProps, object> {
    static propTypes: {
        component: PropTypes.Requireable<any>;
        to: PropTypes.Validator<string>;
        params: PropTypes.Requireable<object>;
        options: PropTypes.Requireable<object>;
        activeClassName: PropTypes.Requireable<string>;
        exact: PropTypes.Requireable<boolean>;
        id: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        isListItem: PropTypes.Requireable<boolean>;
        listItemClassName: PropTypes.Requireable<string>;
    };
    render(): JSX.Element;
}
