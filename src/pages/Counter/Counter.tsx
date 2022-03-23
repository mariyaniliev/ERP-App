import React from "react";
import { RootState, useAppSelector, useAppDispatch } from "../../redux/store";

import { decrement, increment } from "../../redux/reducer/counter";
import { Link } from "react-router-dom";

const Counter = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
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
        <Link to="/TestPage1">TestPage1</Link>
      </div>
    </div>
  );
};
export default Counter;
