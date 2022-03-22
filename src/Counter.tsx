import React from "react";
import { RootState, useAppSelector, useAppDispatch } from "./redux/store";

import { decrement, increment } from "./redux/reducer/counter";
import { redirect } from "./CustomRedirect/redirectReducer";
import CustomRedirect from "./CustomRedirect/CustomRedirect";

const Counter = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <CustomRedirect />
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(redirect("/test1"))}>link</button>
      </div>
    </div>
  );
};
export default Counter;
