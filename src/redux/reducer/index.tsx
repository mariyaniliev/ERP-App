import { combineReducers } from "redux";
import subpageReducer from "./subpage";
import { SubpageState } from "./state-types";

interface RootReducerType {
  subpage: SubpageState;
}

const rootReducer = combineReducers<RootReducerType>({
  subpage: subpageReducer,
});

export default rootReducer;
