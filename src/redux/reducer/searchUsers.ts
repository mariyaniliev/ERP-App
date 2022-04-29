import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../redux/store";
import { SearchUsers } from "./state-types";

const initialState = {
  searchQuery: "",
  lead: "",
  timeOffs: "",
  birthday: "",
  startingDate: "",
  rows: 10,
  pagination: "",
} as SearchUsers;

export const searchUsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    searchUsersByQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    searchUsersByLead: (state, action) => {
      state.lead = action.payload;
    },
    searchUsersByTimeOffs: (state, action) => {
      state.timeOffs = action.payload;
    },
    searchUsersByBirthday: (state, action) => {
      state.birthday = action.payload;
    },
    searchUsersByStartingDate: (state, action) => {
      state.startingDate = action.payload;
    },
    displayUsersRows: (state, action) => {
      state.rows = action.payload;
    },
    displayUsersPagination: (state, action) => {
      state.pagination = action.payload;
    },
  },
});

export const searchUsersActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(searchUsersSlice.actions, dispatch);
};

export default searchUsersSlice.reducer;
