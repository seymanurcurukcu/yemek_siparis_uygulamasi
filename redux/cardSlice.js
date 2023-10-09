import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += action.payload.quantity;
      state.total += action.payload.price;
    },
    reset: (state, action) => {
        state.products = [];
        state.quantity = 0;
        state.total = 0;
      },
  },
});

export const { addProduct, reset } = cardSlice.actions;
export default cardSlice.reducer;