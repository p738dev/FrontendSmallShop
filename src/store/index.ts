import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    confirmModal: modalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
