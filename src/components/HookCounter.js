import React, { useState } from "react";
function HookCounter() {
  const [count, setCount] = useState(0);
  function incrementBtn() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3> counter : {count}</h3>
      <button onClick={incrementBtn}>click increment</button>
    </div>
  );
}
export default HookCounter;
