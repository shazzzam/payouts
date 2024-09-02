import { PaymentMethodStatusEnum, PaymentMethodType, PaymentMethodTypeEnum } from "../types/types";

export const paymentMethodsMockData: PaymentMethodType[] = [
  {
    id: 1,
    logoUrl: '/assets/payment_methods/mastercard-logo.png',
    title: 'Mastercard',
    comission: 3,
    status: PaymentMethodStatusEnum.POPULAR,
    type: PaymentMethodTypeEnum.CARD,
  },
  {
    id: 2,
    logoUrl: '/assets/payment_methods/visa-logo.png',
    title: 'Visa',
    comission: 3,
    status: PaymentMethodStatusEnum.TRUSTED,
    type: PaymentMethodTypeEnum.CARD,
  },
  {
    id: 3,
    logoUrl: '/assets/payment_methods/skrill-logo.png',
    title: 'Skrill',
    comission: 0,
    type: PaymentMethodTypeEnum.CARD,
  },
  {
    id: 4,
    logoUrl: '/assets/payment_methods/perfect_money-logo.png',
    title: 'Perfect Money, EUR',
    comission: 0,
    type: PaymentMethodTypeEnum.CARD,
  },
  {
    id: 5,
    logoUrl: '/assets/payment_methods/piastrix-logo.png',
    title: 'Piastrix, EUR',
    comission: 0,
    type: PaymentMethodTypeEnum.CARD,
  },
  {
    id: 6,
    logoUrl: '/assets/payment_methods/sticpay-logo.png',
    title: 'SticPay, EUR',
    comission: 0,
    type: PaymentMethodTypeEnum.CARD,
  },
  {
    id: 7,
    logoUrl: '/assets/payment_methods/pin-logo.png',
    title: 'PIN',
    comission: 1,
    type: PaymentMethodTypeEnum.CARD,
  },
  {
    id: 8,
    logoUrl: '/assets/payment_methods/bitcoin-logo.png',
    title: 'BTC',
    comission: 0,
    type: PaymentMethodTypeEnum.CRYPTO,
  },
  {
    id: 9,
    logoUrl: '/assets/payment_methods/ethereum-logo.png',
    title: 'ETH',
    comission: 0,
    type: PaymentMethodTypeEnum.CRYPTO,
  },
  {
    id: 10,
    logoUrl: '/assets/payment_methods/tether-logo.png',
    title: 'USDT',
    comission: 0,
    type: PaymentMethodTypeEnum.CRYPTO,
  },
];
