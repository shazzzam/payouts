import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import { ChevronDown, PlusIcon } from "../../ui/icons";
import { useAppSelector } from "../../store/hooks";
import { selectBalance } from "../../store/features/balance";

type BalanceProps =
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const currencyMap = {
  'usd': '$',
  'eur': '€'
}

export const Balance: FC<BalanceProps> = ({ className, ...restProps }) => {
  const { balance, currency, percent } = useAppSelector(selectBalance);

  return (
    <div className={`balance${className ? ` ${className}` : ''}`} {...restProps}>
      <div className="balance__left">
        <span className="balance__balance">{balance}</span>
        <span className="balance__currency">{currencyMap[currency]}</span>
        <span className="balance__percent">{percent}%</span>
        <ChevronDown />
      </div>
      <div className="balance__right">
        <PlusIcon />
      </div>
    </div>
  )
}
