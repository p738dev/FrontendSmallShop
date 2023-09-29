import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface CartState {
  cartProducts: Product[];
  totalQuantity: number;
}

const initialState: CartState = {
  cartProducts: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const productExist = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (productExist) {
        productExist.quantity = productExist.quantity + 1;
        state.totalQuantity++;
      } else {
        state.cartProducts.push(action.payload);
        state.totalQuantity++;
      }
    },
    plusProductQuantity: (state, action: PayloadAction<Product>) => {
      const productPlus = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (productPlus) {
        productPlus.quantity += 1;
        state.totalQuantity++;
      }
    },
    minusProductQuantity: (state, action: PayloadAction<Product>) => {
      const productMinus = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (productMinus) {
        productMinus.quantity -= 1;
        state.totalQuantity--;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<Product>) => {
      //
    },
    clearOrder: (state) => {
      state.cartProducts = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  addProductToCart,
  plusProductQuantity,
  minusProductQuantity,
  removeProductFromCart,
  clearOrder,
} = cartSlice.actions;

export default cartSlice.reducer;

//dopracować ilość produktów
