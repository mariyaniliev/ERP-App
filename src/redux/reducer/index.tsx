import { combineReducers } from "redux";
import counterReducer from "./counter";
import subpageReducer from "./subpage";
import { CounterState, SubpageState } from "./state-types";

interface RootReducerType {
  counter: CounterState;
  subpage: SubpageState;
}

const rootReducer = combineReducers<RootReducerType>({
  counter: counterReducer,
  subpage: subpageReducer,
});

export default rootReducer;
