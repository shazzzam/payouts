import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import PlusSVG from '../../static/icons/plus.svg';

type PlusIconProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const PlusIcon: FC<PlusIconProps> = ({ className, ...props }) => {
  return (
    <div className={`plus-icon ${className}`} {...props}>
      <PlusSVG />
    </div>
  )
}
