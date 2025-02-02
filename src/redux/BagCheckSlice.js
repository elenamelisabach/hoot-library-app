import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const bagCheckSlice = createSlice({
  name: "bagCheck",
  initialState,
  reducers: {
    addToBagCheck: (state, action) => {
      console.log("Adăugare în coș:", action.payload); // Adau
      state.list = [...state.list, action.payload];
    },
    removeFromBagCheck: (state, action) => {
      state.list = state.list.filter(
        (book) => book.title !== action.payload.title
      );
    },
    clearBagCheck: (state) => {
      state.list = [];
    },
  },
});

export const { addToBagCheck, removeFromBagCheck, clearBagCheck } =
  bagCheckSlice.actions;

export default bagCheckSlice.reducer;
