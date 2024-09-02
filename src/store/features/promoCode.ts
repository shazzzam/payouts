import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { validatePromoCode } from "../../mock_data/promo_code";
import { RootState } from "../store";

interface PromoCodeState {
  promoCode: string;
  isValid?: boolean;
}

const initialState: PromoCodeState = {
  promoCode: '',
}

export const promoCodeSlice = createSlice({
  name: 'promoCode',
  initialState,
  reducers: {
    setPromoCode: (state, action: PayloadAction<string>) => {
      state.promoCode = action.payload;
      console.log('validate')
      console.log(action.payload)
      console.log(validatePromoCode(action.payload))
      state.isValid = validatePromoCode(action.payload);
    }
  }
});

export const { setPromoCode } = promoCodeSlice.actions;

export const selectPromoCode = (state: RootState) => state.promoCode;

export default promoCodeSlice.reducer;
