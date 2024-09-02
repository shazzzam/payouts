import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import ChevronSVG from '../../static/icons/down-chevron.svg';

type ChevronDownProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ChevronDown: FC<ChevronDownProps> = ({ className, ...props }) => {
  return (
    <div className={`chevron${className ? ` ${className}` : ''}`} {...props}>
      <ChevronSVG />
    </div>
  )
}
