import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersState } from "./state-types";
import { useApiClient } from "../../utils/client";

export const useTestPromise = () => {
  console.log("useTestPromise invoked");
  const getUsers = createAsyncThunk("users/getUsers", async () => {
    console.log("apiClient", useApiClient);
    const apiClient = useApiClient();
    console.log("apiClient");
    const { data } = await apiClient.get("/users");
    console.log("getUsers promise dispatched");
    return data;
  });
  console.log("useTestPromise executed");
  return getUsers;
};

const initialState = {
  users: [],
} as UsersState;

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      useTestPromise().fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log("getUsers.fulfilled", action);
      }
    );
  },
});

export default usersSlice.reducer;
