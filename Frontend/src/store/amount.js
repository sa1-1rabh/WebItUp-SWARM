import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipping: 0,
  subTotal: 0,
  taxes: 0,
};

const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    setSubTotal: (state, action) => {
      state.subTotal = action.payload;
    },
    incrementSubTotal: (state, action) => {
      state.subTotal += action.payload;
    },
    decrementSubTotal: (state, action) => {
      state.subTotal -= action.payload;
    },
  },
});

export const { setSubTotal, incrementSubTotal, decrementSubTotal } =
  amountSlice.actions;

export default amountSlice.reducer;
