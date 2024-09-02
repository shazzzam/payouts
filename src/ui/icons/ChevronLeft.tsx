import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import ChevronSVG from '../../static/icons/left-chevron.svg';

type ChevronLeftProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ChevronLeft: FC<ChevronLeftProps> = ({ className, ...props }) => {
  return (
    <div className={`chevron${className ? ` ${className}` : ''}`} {...props}>
      <ChevronSVG />
    </div>
  )
}
