import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import { CurrencyEnum, PaymentMethodType, TransactionStatusEnum } from "../../../types/types";
import { Text, Title } from "../../../ui";

interface TransactionItemProps extends
  DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  paymentMethod: PaymentMethodType;
  transactionNumber: number;
  date: string;
  amount: string;
  currency: CurrencyEnum;
  status: TransactionStatusEnum;
};

export const TransactionItem: FC<TransactionItemProps> = ({
  paymentMethod,
  transactionNumber,
  date,
  amount,
  currency,
  status,
  className,
  ...props
}) => {
  return (
    <tr
      className={`transaction-item${className ? ` ${className}` : ''}`}
      {...props}
    >
      <td className="transaction-item__img-container">
        <img className="transaction-item__img" src={paymentMethod.logoUrl} />
      </td>

      <td className="transaction-item__group transaction-item__group--method">
        <Title
          className="transaction-item__group-title"
          variant="h4"
          text={`by ${paymentMethod.title}${currency === CurrencyEnum.USD ? ', USD' : ''}`}
        />
        <Text
          className="transaction-item__group-text"
          variant="caption"
          text="Withdraw"
        />
      </td>

      <td className="transaction-item__group transaction-item__group--number">
        <Title
          className="transaction-item__group-title"
          variant="h4"
          text={transactionNumber.toString()}
        />
        <Text
          className="transaction-item__group-text"
          variant="caption"
          text="Transaction Number"
        />
      </td>

      <td className="transaction-item__group transaction-item__group--date">
        <Title
          className="transaction-item__group-title"
          variant="h4"
          text={date}
        />
        <Text
          className="transaction-item__group-text"
          variant="caption"
          text="Payment Date"
        />
      </td>

      <td className="transaction-item__group transaction-item__group--amount">
        <Title
          className="transaction-item__group-title"
          variant="h4"
          text={amount}
        />
        <Text
          className="transaction-item__group-text"
          variant="caption"
          text="Amount Payed"
        />
      </td>

      <td className="transaction-item__status">
        <Title
          className={`transaction-item__status-title transaction-item__status-title--${status}`}
          variant="h4"
          text={status}
        />
        <Text
          className="transaction-item__status-text"
          variant="caption"
          text="Operation Status"
        />
      </td>
    </tr>
  )
};
