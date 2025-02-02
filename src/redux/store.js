import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import bagCheckReducer from "./BagCheckSlice";

const store = configureStore({
  reducer: {
    search: searchReducer, // Make sure it's added to the reducer
    bagCheck: bagCheckReducer,
  },
});

export default store;
