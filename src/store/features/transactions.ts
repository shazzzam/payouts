import { createSlice } from "@reduxjs/toolkit";

import { fetchTransactions } from "../../mock_data/transactions";
import { RootState } from "../store";
import { TransactionType } from "../../types/types";

interface TransactionsState {
  transactions: TransactionType[];
  sortDirection: boolean;
};

const initialState: TransactionsState = {
  transactions: [],
  sortDirection: false,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getTransactions: (state) => {
      state.transactions = [
        ...state.transactions,
        ...fetchTransactions(3)
      ];
    },
    sortTransactions: (state) => {
      state.sortDirection = !state.sortDirection;
      const newTransactions = [...state.transactions];
      newTransactions.sort((a, b) => {
        const compaired = a.transactionNumber - b.transactionNumber
        return state.sortDirection ? compaired : -compaired;
      })

      state.transactions = newTransactions;
    }
  }
});

export const { getTransactions, sortTransactions } = transactionsSlice.actions;

export const selectTransactions = (state: RootState) => state.transactions;

export default transactionsSlice.reducer;
