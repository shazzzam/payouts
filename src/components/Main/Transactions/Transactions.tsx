import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from "react"
import { Button, Title } from "../../../ui";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getTransactions, selectTransactions, sortTransactions } from "../../../store/features/transactions";
import { FilterIcon } from "../../../ui/icons";
import { TransactionItem } from "./TransactionItem";

type TransactionsProps =
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Transactions: FC<TransactionsProps> = ({ className, ...props }) => {
  const dispatch = useAppDispatch();
  const { transactions } = useAppSelector(selectTransactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  const handleMoreClick = () => {
    dispatch(getTransactions());
  }

  const handleSortClick = () => {
    dispatch(sortTransactions());
  }

  return (
    <section
      className={`transactions${className ? ` ${className}` : ''}`}
      {...props}
    >
      <div className="transactions__headline">
        <Title variant="h2" text="Transactions" />
        <button
          className="transactions__filter-btn"
          onClick={handleSortClick}
        >
          <FilterIcon className="transactions__filter-icon" />
        </button>
      </div>
      <table className="transactions__list">
        {transactions.map(transaction => (
          <TransactionItem
            key={transaction.id}
            className="transactions__item"
            {...transaction}
          />
        ))}
      </table>
      <Button
        className="transactions__more"
        text="Show More"
        onClick={handleMoreClick}
      />
    </section>
  )
}
