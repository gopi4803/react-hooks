import React, { useState } from "react";

function Buttons() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <MyButton count={count} onClick={handleClick}/>
      <MyButton count={count} onClick={handleClick}/>
    </div>
  );
}
function MyButton({ count, onClick }) {
  return (
  <button onClick={onClick}>Clicked {count} times</button>
  );
}

export default Buttons;
