import { createSlice } from "@reduxjs/toolkit";
import { bindActionCreators } from "redux";
import { SearchState } from "./state-types";
import { useAppDispatch } from "../store";

const initialState = {
  searchedQueries: {
    period: "Period",
    type: "Type",
    searchedName: "",
    limit: 7,
    page: 1,
    totalPages: 0,
  },
} as SearchState;

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQueries: (state, action) => {
      state.searchedQueries = action.payload;
    },
  },
});

const toggle = searchSlice.actions;

export const searchActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(toggle, dispatch);
};

export default searchSlice.reducer;
