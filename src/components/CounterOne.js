import React, { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};
function CounterOne() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      count-{count}
      <div>

      <button onClick={() => dispatch("decrement")}>Increment</button>
      <button onClick={() => dispatch("increment")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default CounterOne;
