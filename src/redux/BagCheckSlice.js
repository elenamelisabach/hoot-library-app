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
        // Dacă produsul există deja, doar incrementăm cantitatea
        existingProduct.quantity += 1;
      } else {
        // Dacă produsul nu există, îl adăugăm cu cantitatea 1
        const savedPrice = localStorage.getItem(
          `price-${action.payload.title}`
        );
        state.list.push({
          ...action.payload,
          price: savedPrice ? parseFloat(savedPrice) : 0,
          quantity: 1, // Cantitatea inițială este 1
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
          // Dacă mai există mai mult de o unitate, scădem cantitatea
          existingProduct.quantity -= 1;
        } else {
          // Dacă doar o unitate mai există, o eliminăm din coș
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
