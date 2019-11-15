/// <reference types="react" />
declare module "Button/index" {
    interface IProps {
        color: string;
        onClick?: (color: string) => void;
    }
    const _default: (props: IProps) => JSX.Element;
    export default _default;
}
declare module "Input/index" {
    interface IProps {
        onChange?: (value: string) => void;
    }
    const _default_1: (props: IProps) => JSX.Element;
    export default _default_1;
}
