import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PaymentMethodType } from "../../types/types";
import { paymentMethodsMockData } from "../../mock_data/payment_methods";
import { RootState } from "../store";

interface PaymentMethodsState {
  paymentMethods: PaymentMethodType[];
  activeMethod: PaymentMethodType | null;
}

const initialState: PaymentMethodsState = {
  paymentMethods: [],
  activeMethod: null,
}

export const paymentMethodsSlice = createSlice({
  name: 'paymentMethods',
  initialState,
  reducers: {
    getPaymentMethods: (state) => {
      state.paymentMethods = paymentMethodsMockData
      if (state.activeMethod === null) {
        state.activeMethod = state.paymentMethods[0];
      }
    },
    choosePaymentMethod: (state, action: PayloadAction<number>) => {
      const methodId = state.paymentMethods.findIndex(item => item.id === action.payload);
      state.activeMethod = methodId === -1
        ? state.paymentMethods[0]
        : state.paymentMethods[methodId];
    }
  }
});

export const { getPaymentMethods, choosePaymentMethod } = paymentMethodsSlice.actions;

export const selectPaymentMethods = (state: RootState) => state.paymentMethods;


export default paymentMethodsSlice.reducer;
