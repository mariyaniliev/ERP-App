import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bindActionCreators } from "redux";
import { SubpageState } from "./state-types";
import { useAppDispatch } from "../store";

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

const switchSubpage = subpageSlice.actions;

export const switchSubpageActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(switchSubpage, dispatch);
};

export default subpageSlice.reducer;
