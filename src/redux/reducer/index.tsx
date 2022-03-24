import { combineReducers } from "redux";
import counterReducer from "./counter";
import dreawerHeaderReducer from "./dreawerHeader";
import { CounterState, DrawerHeaderState } from "./state-types";

interface RootReducerType {
  counter: CounterState;
  drawerHeader: DrawerHeaderState;
}

const rootReducer = combineReducers<RootReducerType>({
  counter: counterReducer,
  drawerHeader: dreawerHeaderReducer,
});

export default rootReducer;
