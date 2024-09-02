import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value?: string;
  placeholder?: string;
}
export const Input: FC<InputProps> = ({ value = '', placeholder = '', className, ...props }) => {
  return (
    <input
      className={`input${className ? ` ${className}` : ''}`}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
};
