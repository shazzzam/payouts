import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

interface TextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  variant: 'text' | 'caption';
  text: string;
};

export const Text: FC<TextProps> = ({ variant, className, text, ...props }) => {
  return (
    <p
      className={`text text-${variant}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {text}
    </p>
  )
}
