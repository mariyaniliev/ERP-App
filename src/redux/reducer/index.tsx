import { combineReducers } from "redux";
import dreawerHeaderReducer from "./drawerHeader";
import { DrawerHeaderState } from "./state-types";

interface RootReducerType {
  drawerHeader: DrawerHeaderState;
}

const rootReducer = combineReducers<RootReducerType>({
  drawerHeader: dreawerHeaderReducer,
});

export default rootReducer;
