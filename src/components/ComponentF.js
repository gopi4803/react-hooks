import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
        Component F -{countContext.countState}
      <button onClick={() => countContext.countDispatch("decrement")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("increment")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
