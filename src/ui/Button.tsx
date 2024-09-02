import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
}
export const Button: FC<ButtonProps> = ({ className, text, ...props }) => {
  return (
    <button
      className={`btn${className ? ` ${className}` : ''}`}
      {...props}
    >
      {text}
    </button>
  )
}
