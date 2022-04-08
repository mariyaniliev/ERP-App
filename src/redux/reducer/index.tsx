import { combineReducers } from "redux";
import {
  SubpageState,
  DrawerHeaderState,
  userState,
  UsersState,
} from "./state-types";
import dreawerHeaderReducer from "./drawerHeader";
import subpageReducer from "./subpage";
import userReducer from "./user";
import usersReducer from "./users";

interface RootReducerType {
  drawerHeader: DrawerHeaderState;
  subpage: SubpageState;
  user: userState;
  users: UsersState;
}

const rootReducer = combineReducers<RootReducerType>({
  drawerHeader: dreawerHeaderReducer,
  subpage: subpageReducer,
  user: userReducer,
  users: usersReducer,
});

export default rootReducer;
