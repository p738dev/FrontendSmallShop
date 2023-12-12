import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

interface LogoutState {}

const initialState: LogoutState = {};

const token = Cookies.get("token");

export const logOut = createAsyncThunk("logout/logOut", async () => {
  try {
    const response: AxiosResponse<{ is_success: boolean }> = await axios.get<{
      is_success: boolean;
    }>(`http://localhost:8000/api/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    Cookies.remove("token");
    Cookies.remove("role");
    Cookies.remove("name");
    return response;
  } catch (error: any) {
    if (error.response.data.is_success === "false") {
      console.log("blad");
    } else {
      console.log("zle wylogowanie");
    }
  }
});

export const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default logoutSlice.reducer;
