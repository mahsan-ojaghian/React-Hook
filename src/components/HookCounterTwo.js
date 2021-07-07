import React, { useState } from "react";
function HookCounterTwo() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Counter : {count}</h3>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - prevCount);
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        decrement
      </button>
    </div>
  );
}
export default HookCounterTwo;
