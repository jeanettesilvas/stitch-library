/// <reference types="react" />
import './Text.scss';
interface TextProps {
    children: any;
    className?: string;
    element?: 'p' | 'div';
    html?: string;
    type?: 'callout';
}
export declare const Text: (props: TextProps) => JSX.Element;
export {};
