import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

interface LogoutState {}

const initialState: LogoutState = {};

const token = Cookies.get("token");

export const logOut = createAsyncThunk("logout/logOut", async () => {
  try {
    await axios.get(`http://localhost:8000/api/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    Cookies.remove("token");
    Cookies.remove("role");
  } catch (error) {
    //console.log(error);
  }
});

export const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default logoutSlice.reducer;
