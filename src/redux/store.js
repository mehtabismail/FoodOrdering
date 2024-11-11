import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from ".";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
