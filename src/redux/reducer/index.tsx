import { combineReducers } from "redux";
import { SubpageState, DrawerHeaderState, userState } from "./state-types";
import dreawerHeaderReducer from "./drawerHeader";
import subpageReducer from "./subpage";
import userReducer from "./user";

interface RootReducerType {
  drawerHeader: DrawerHeaderState;
  subpage: SubpageState;
  user: userState;
}

const rootReducer = combineReducers<RootReducerType>({
  drawerHeader: dreawerHeaderReducer,
  subpage: subpageReducer,
  user: userReducer,
});

export default rootReducer;
