import { combineReducers } from "redux";
import {
  SubpageState,
  DrawerHeaderState,
  userState,
  SearchUsers,
  SearchState,
} from "./state-types";
import dreawerHeaderReducer from "./drawerHeader";
import subpageReducer from "./subpage";
import userReducer from "./user";
import usersReducer from "./searchUsers";
import searchSlice from "./search";

interface RootReducerType {
  drawerHeader: DrawerHeaderState;
  subpage: SubpageState;
  user: userState;
  users: SearchUsers;
  search: SearchState;
}

const rootReducer = combineReducers<RootReducerType>({
  drawerHeader: dreawerHeaderReducer,
  subpage: subpageReducer,
  user: userReducer,
  users: usersReducer,
  search: searchSlice,
});

export default rootReducer;
