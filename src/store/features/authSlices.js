import { createSlice } from "@reduxjs/toolkit";
import authService from "../../appwrite/auth";

const initialState = {
  authStatus: localStorage.getItem("auth_status"),
  userData: JSON.parse(localStorage.getItem("auth_user")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.authStatus = true;
      state.userData = action.payload.userData;
      localStorage.setItem("auth_status", true);
      localStorage.setItem(
        "auth_user",
        JSON.stringify(action.payload.userData)
      );
    },
    logout: (state) => {
      state.authStatus = false;
      state.userData = null;
      localStorage.setItem("auth_status", false);
      localStorage.removeItem("auth_user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
