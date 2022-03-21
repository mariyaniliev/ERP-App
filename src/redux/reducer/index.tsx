import { combineReducers } from "redux";
import counterReducer from "./counter";
import { CounterState } from "./state-types";

interface RootReducerType {
  counter: CounterState;
}

const rootReducer = combineReducers<RootReducerType>({
  counter: counterReducer,
});

export default rootReducer;
