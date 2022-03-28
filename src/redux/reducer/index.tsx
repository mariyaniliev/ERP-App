import { combineReducers } from "redux";
import dreawerHeaderReducer from "./drawerHeader";
import subpageReducer from "./subpage";
import { SubpageState, DrawerHeaderState } from "./state-types";

interface RootReducerType {
  drawerHeader: DrawerHeaderState;
  subpage: SubpageState;
}

const rootReducer = combineReducers<RootReducerType>({
  drawerHeader: dreawerHeaderReducer,
  subpage: subpageReducer,
});

export default rootReducer;
