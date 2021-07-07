import React, { useState, useEffect } from "react";
function HookCounterOne() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = { count };
  });
  return (
    <div>
      <h2>count is : {count}</h2>
      <button onClick={incrementHandler}>increment</button>
    </div>
  );
}
export default HookCounterOne;
