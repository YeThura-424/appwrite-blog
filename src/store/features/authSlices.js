import { createSlice } from "@reduxjs/toolkit";
import authService from "../../appwrite/auth";

const initialState = {
  authStatus: authService.getCurrentUser ? true : false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authStatus = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.authStatus = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
