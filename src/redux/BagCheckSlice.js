import { createSlice } from "@reduxjs/toolkit";

const CHECK = "bagCheck";
const bagCheck = localStorage.getItem(CHECK);

const initialState = {
  list: bagCheck ? JSON.parse(bagCheck) : [],
};

const bagCheckSlice = createSlice({
  name: CHECK,
  initialState,
  reducers: {
    addToBagCheck: (state, action) => {
      const existingProduct = state.list.find(
        (book) => book.title === action.payload.title
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const savedPrice = localStorage.getItem(
          `price-${action.payload.title}`
        );
        state.list.push({
          ...action.payload,
          price: savedPrice ? parseFloat(savedPrice) : 0,
          quantity: 1,
        });
      }
      localStorage.setItem(CHECK, JSON.stringify(state.list));
    },
    removeFromBagCheck: (state, action) => {
      const existingProduct = state.list.find(
        (book) => book.title === action.payload.title
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.list = state.list.filter(
            (book) => book.title !== action.payload.title
          );
        }
      }
      localStorage.setItem(CHECK, JSON.stringify(state.list));
    },
    clearBagCheck: (state) => {
      state.list = [];
      localStorage.setItem(CHECK, JSON.stringify(state.list));
    },
  },
});

export const { addToBagCheck, removeFromBagCheck, clearBagCheck } =
  bagCheckSlice.actions;

export default bagCheckSlice.reducer;
