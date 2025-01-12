import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlices";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
