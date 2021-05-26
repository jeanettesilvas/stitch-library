/// <reference types="react" />
import './Button.scss';
interface ButtonProps {
    children: any;
    onClick: () => void;
    type?: 'primary' | 'secondary';
}
export declare const Button: (props: ButtonProps) => JSX.Element;
export {};
