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
        to: PropTypes.Validator<any>;
        params: PropTypes.Requireable<any>;
        options: PropTypes.Requireable<any>;
        activeClassName: PropTypes.Requireable<any>;
        exact: PropTypes.Requireable<any>;
        id: PropTypes.Requireable<any>;
        className: PropTypes.Requireable<any>;
        style: PropTypes.Requireable<any>;
        isListItem: PropTypes.Requireable<any>;
        listItemClassName: PropTypes.Requireable<any>;
    };
    render(): JSX.Element;
}
