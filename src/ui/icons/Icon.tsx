import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import BurgerSVG from '../../static/icons/burger.svg';
import CheckSVG from '../../static/icons/check.svg';
import CrossSVG from '../../static/icons/cross.svg';
import FilterSVG from '../../static/icons/filter.svg';
import BellSVG from '../../static/icons/bell.svg';
import SearchSVG from '../../static/icons/search.svg';
import GiftSVG from '../../static/icons/gift.svg';
import CloseSVG from '../../static/icons/close.svg';

const Icons: { [key: string]: ReactNode } = {
  burger: <BurgerSVG />,
  check: <CheckSVG />,
  cross: <CrossSVG />,
  filter: <FilterSVG />,
  bell: <BellSVG />,
  search: <SearchSVG />,
  gift: <GiftSVG />,
  close: <CloseSVG />,
}

interface IconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: 'burger' | 'filter' | 'search' | 'bell' | 'check' | 'cross' | 'close' | 'gift';
  withBadge?: boolean;
}

export const Icon: FC<IconProps> = ({ name, withBadge, className, ...props }) => {
  return (
    <div className={`icon${className ? ` ${className}` : ''}${withBadge ? ' icon-with-badge' : ''}`}
      {...props}
    >
      {Icons[name]}
    </div>
  )
}
