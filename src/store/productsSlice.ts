import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types/product";
import Cookies from "js-cookie";

interface ProductState {
  list: Product[];
  currentPage: number;
  searchParam: string;
  sortParam: string;
  totalPages: number;
  recordsPerPage: number;
  isLoading: boolean;
}

const initialState: ProductState = {
  list: [],
  currentPage: 1,
  searchParam: "",
  sortParam: "",
  totalPages: 0,
  recordsPerPage: 0,
  isLoading: false,
};

const token = Cookies.get("token");

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (params: any) => {
    const res = await axios.get(
      `http://www.api.piotrgruca.pl/api/products?page=${params.page}&searchParam=${params.searchParam}&sortParam=${params.sortParam}`
    );
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: string) => {
    const res = await axios.delete(
      `http://www.api.piotrgruca.pl/api/products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.list = action.payload.data;
      state.totalPages = action.payload.total;
      state.recordsPerPage = action.payload.per_page;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default productsSlice.reducer;
