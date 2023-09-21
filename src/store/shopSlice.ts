import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types/product";

interface ShopState {
  products: Product[];
  isLoading: boolean;
  page: number;
  last_page: number;
}

const initialState: ShopState = {
  products: [],
  isLoading: false,
  page: 1,
  last_page: 0,
};

export const getShopProducts = createAsyncThunk(
  "shop/getShopProducts",
  async (params: any) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products?page=${params.page}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {}
  }
);

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getShopProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getShopProducts.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.products = action.payload.data;
      state.last_page = action.payload.last_page;
      state.page = action.payload.current_page;
    });
    builder.addCase(getShopProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default shopSlice.reducer;