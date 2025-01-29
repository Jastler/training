import React from "react";

import { useAppDispatch, useAppSelector } from "../../store";
import { decrement, increment, setCounter } from "../../store/counterSlice";

const Counter: React.FC = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleSetCounter = () => {
    const value = parseInt(prompt("Number") || "0", 10);
    dispatch(setCounter(value));
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={handleSetCounter}>Set value</button>
    </div>
  );
};

export default Counter;
