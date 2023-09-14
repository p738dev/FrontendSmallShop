import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface CartState {
  cartProducts: Product[];
  quantity: number;
}

const initialState: CartState = {
  cartProducts: [],
  quantity: 0,
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
        state.quantity++;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    plusProductQuantity: (state, action: PayloadAction<Product>) => {
      state.cartProducts.find((item) => item.id === action.payload.id);
      state.quantity++;
    },
    minusProductQuantity: (state, action: PayloadAction<Product>) => {
      state.cartProducts.find((item) => item.id === action.payload.id);
      if (state.quantity === 1) {
        state.quantity = 1;
      } else {
        state.quantity--;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<Product>) => {
      const removeProduct = state.cartProducts.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartProducts = removeProduct;
    },
    clearOrder: (state) => {
      state.cartProducts = [];
      state.quantity = 0;
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
