import { combineReducers } from "redux";
import redirectReducer from "../../CustomRedirect/redirectReducer";
import counterReducer from "./counter";
import { CounterState, CustomRedirectState } from "./state-types";

interface RootReducerType {
  counter: CounterState;
  redirect: CustomRedirectState;
}

const rootReducer = combineReducers<RootReducerType>({
  counter: counterReducer,
  redirect: redirectReducer,
});

export default rootReducer;
