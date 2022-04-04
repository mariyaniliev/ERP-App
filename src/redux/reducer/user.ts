import { createSlice } from "@reduxjs/toolkit";
import { bindActionCreators } from "redux";
import { userState } from "./state-types";
import { useAppDispatch } from "../store";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
} as unknown as userState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setAccessToken: (state, action) => {
      state.user.accessToken = action.payload;
    },
  },
});

const user = userSlice.actions;

export const userActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(user, dispatch);
};

export default userSlice.reducer;
