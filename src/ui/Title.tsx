import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4';
  text: string;
}
export const Title: FC<TitleProps> = ({ variant, className, text, ...props }) => {
  const combinedClass = `title${className ? ` ${className} ` : ''} title-${variant}`;
  const variantMap = {
    h1: <h1 className={combinedClass} {...props}>{text}</h1>,
    h2: <h2 className={combinedClass} {...props}>{text}</h2>,
    h3: <h3 className={combinedClass} {...props}>{text}</h3>,
    h4: <h4 className={combinedClass} {...props}>{text}</h4>,
  }
  return variantMap[variant];
}
