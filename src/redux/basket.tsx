import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product, initialState } from "../interfaces";

export const basketslice = createSlice({
  name: "basket",
  initialState: initialState,

  reducers: {
    addtobasket: (state, action: PayloadAction<product>) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export default basketslice.reducer;
export const { addtobasket } = basketslice.actions;
