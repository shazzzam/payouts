import { CurrencyEnum, TransactionStatusEnum, TransactionType } from "../types/types"
import { paymentMethodsMockData } from "./payment_methods";

const generateTransaction = (): TransactionType => {
  const date = new Date();
  const paymentMethodId = Math.floor(Math.random() * paymentMethodsMockData.length)
  const transactionNumber = Math.floor(Math.random() * 999999);
  const statusId = Math.floor(Math.random() * Object.keys(TransactionStatusEnum).length);
  const status = [
    TransactionStatusEnum.PERFORMED,
    TransactionStatusEnum.ACTIVE,
    TransactionStatusEnum.PROCESSING
  ][statusId];

  const dateString = `${date.getDay()}.${date.getMonth()} at ${date.getHours() % 12}:${date.getMinutes()}${date.getHours() > 11 ? 'PM' : 'AM'}`

  return {
    id: transactionNumber.toString(),
    paymentMethod: paymentMethodsMockData[paymentMethodId],
    transactionNumber,
    date: dateString,
    amount: (Math.random() * 999999).toFixed(2),
    currency: [3, 4, 5].includes(paymentMethodId) ? CurrencyEnum.EUR : CurrencyEnum.USD,
    status,
  }
}

export const fetchTransactions = (count: number = 5): TransactionType[] => {
  const result: TransactionType[] = [];
  for (let i = 0; i < count; i++) {
    result.push(generateTransaction());
  }

  return result;
}
