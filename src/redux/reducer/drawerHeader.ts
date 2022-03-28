import { createSlice } from "@reduxjs/toolkit";
import { DrawerHeaderState } from "./state-types";

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

export const { toggle } = drawerHeaderSlice.actions;

export default drawerHeaderSlice.reducer;
