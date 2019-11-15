/// <reference types="react" />
declare module "Button/styles" {
    const _default: any;
    export default _default;
}
declare module "Button/index" {
    import React from 'react';
    interface IProps {
        onClick?: () => void;
    }
    const Button: React.FC<IProps>;
    export default Button;
}
declare module "Input/index" {
    interface IProps {
        onChange?: (value: string) => void;
    }
    const _default_1: (props: IProps) => JSX.Element;
    export default _default_1;
}
