/// <reference types="react" />
import './TextInput.scss';
interface TextInputProps {
    className?: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email';
    value?: string;
}
export declare const TextInput: (props: TextInputProps) => JSX.Element;
export {};
