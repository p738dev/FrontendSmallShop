import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";
import shopSlice from "./shopSlice";
import usersSlice from "./usersSlice";
import productsSlice from "./productsSlice";
import logoutSlice from "./logoutSlice";
import confirmDialogSlice from "./confirmDialogSlice";
import questionDialogSlice from "./questionDialogSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    confirmModal: modalSlice,
    shop: shopSlice,
    products: productsSlice,
    users: usersSlice,
    logout: logoutSlice,
    confirmDialog: confirmDialogSlice,
    questionDialog: questionDialogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
