import { configureStore } from "@reduxjs/toolkit";

import balanceReducer from './features/balance';
import paymentMethodsReducer from './features/paymentMethods';
import promoCodeReducer from './features/promoCode';
import transactionsReducer from './features/transactions';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    paymentMethods: paymentMethodsReducer,
    promoCode: promoCodeReducer,
    transactions: transactionsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

