export enum CurrencyEnum {
  USD = 'usd',
  EUR = 'eur',
}

export enum PaymentMethodTypeEnum {
  CARD = 'card',
  CRYPTO = 'crypto',
}

export enum PaymentMethodStatusEnum {
  POPULAR = 'popular',
  TRUSTED = 'trusted',
}

export interface PaymentMethodType {
  id: number;
  logoUrl: string;
  title: string;
  comission: number;
  status?: PaymentMethodStatusEnum;
  type: PaymentMethodTypeEnum;
}

export enum TransactionStatusEnum {
  PROCESSING = 'processing',
  ACTIVE = 'active',
  PERFORMED = 'performed',
}

export interface TransactionType {
  id: string;
  paymentMethod: PaymentMethodType;
  transactionNumber: number;
  date: string;
  amount: string;
  currency: CurrencyEnum;
  status: TransactionStatusEnum;
}
