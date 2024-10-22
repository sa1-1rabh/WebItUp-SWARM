//NOT USED
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cartItems = action.payload;
    },
    addCartProduct: (state, action) => {
      state.cartItems.push(action.payload);
    },
    // updateCartProductQuantity: (state, action) => {
    //   state.cartItems = { ...state.cartItems, quantity: action.payload };
    // },
  },
});

export const { setCart, addCartProduct, updateCartProductQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
