import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../redux/action";

const Counter = () => {
  const count = useSelector((store) => store.count);
  console.log(count);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(incrementCounter(1));
  };

  const handleSub = () => {
    dispatch(decrementCounter(1));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleSub}>SUB</button>
    </div>
  );
};

export default Counter;
