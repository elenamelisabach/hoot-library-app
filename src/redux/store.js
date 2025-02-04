import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import bagCheckReducer from "./BagCheckSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    bagCheck: bagCheckReducer,
  },
});

export default store;
