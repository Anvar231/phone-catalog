import type { ReactNode } from 'react';
import '../model/TextBox.scss';

interface ITextBox {
    children: ReactNode;
}

const TextBox = ({ children }: ITextBox) => (
    <div className="text-box">{children}</div>
);

export default TextBox;
