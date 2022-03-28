import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubpageState } from "./state-types";

const initialState = {
  subpage: 0,
} as SubpageState;

export const subpageSlice = createSlice({
  name: "subpage",
  initialState,
  reducers: {
    switchSubpage(state, action: PayloadAction<number>) {
      state.subpage = action.payload;
    },
  },
});

export const { switchSubpage } = subpageSlice.actions;

export default subpageSlice.reducer;
