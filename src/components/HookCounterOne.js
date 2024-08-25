import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating doc title");
    document.title = `clicked ${count} times`;
  },[count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        clicked {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
