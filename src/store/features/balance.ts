import { createSlice } from "@reduxjs/toolkit";

import { CurrencyEnum } from "../../types/types";
import { balanceMockData } from "../../mock_data/balance";
import { RootState } from "../store";

interface BalanceState {
  balance: string;
  currency: CurrencyEnum;
  percent: number;
}

const initialState: BalanceState = {
  balance: '',
  currency: CurrencyEnum.EUR,
  percent: 0,
}

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    getBalance: (state) => {
      state.balance = balanceMockData.balance;
      state.currency = balanceMockData.currency;
      state.percent = balanceMockData.percent;
    }
  }
});

export const { getBalance } = balanceSlice.actions;

export const selectBalance = (state: RootState) => state.balance;

export default balanceSlice.reducer;
