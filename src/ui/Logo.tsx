import { DetailedHTMLProps, FC, HtmlHTMLAttributes } from "react";

import LogoSVG from '../static/icons/logo.svg';

type LogoProps = DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={`logo${className ? ` ${className}` : ''}`} {...props}>
      < LogoSVG />
    </div >
  )
}
