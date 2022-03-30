import { createSlice } from "@reduxjs/toolkit";
import { bindActionCreators } from "redux";
import { DrawerHeaderState } from "./state-types";
import { useAppDispatch } from "../store";

const initialState = {
  open: true,
} as DrawerHeaderState;

export const drawerHeaderSlice = createSlice({
  name: "drawerHeader",
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});

const toggle = drawerHeaderSlice.actions;

export const toggleActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(toggle, dispatch);
};

export default drawerHeaderSlice.reducer;
