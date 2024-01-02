import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import { User } from "../types/user";

interface UserState {
  usersList: User[];
  isLoading: boolean;
}

const initialState: UserState = {
  usersList: [],
  isLoading: false,
};

const token = Cookies.get("token");

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(`http://www.api.piotrgruca.pl/api/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.usersList = action.payload;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;
