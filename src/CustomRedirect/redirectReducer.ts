import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomRedirectState } from "../redux/reducer/state-types";

export const initialState = {
  redirect: "",
} as CustomRedirectState;

export const redirectSlice = createSlice({
  name: "redirect",
  initialState,
  reducers: {
    redirect(state, action: PayloadAction<string>) {
      state.redirect = action.payload;
    },
  },
});

export const { redirect } = redirectSlice.actions;
export default redirectSlice.reducer;
