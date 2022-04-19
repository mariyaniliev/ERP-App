import { combineReducers } from "redux";
import {
  SubpageState,
  DrawerHeaderState,
  userState,
  SearchState,
} from "./state-types";
import dreawerHeaderReducer from "./drawerHeader";
import subpageReducer from "./subpage";
import userReducer from "./user";
import searchSlice from "./search";

interface RootReducerType {
  drawerHeader: DrawerHeaderState;
  subpage: SubpageState;
  user: userState;
  search: SearchState;
}

const rootReducer = combineReducers<RootReducerType>({
  drawerHeader: dreawerHeaderReducer,
  subpage: subpageReducer,
  user: userReducer,
  search: searchSlice,
});

export default rootReducer;
