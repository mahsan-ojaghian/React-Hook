import React, { useEffect, useState } from "react";
function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("called");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect((e) => {
    console.log("log mouse position");
    window.addEventListener("mousemove", logMousePosition);
  }, []);
  return (
    <div>
      Hooks x{x} - y{y}
    </div>
  );
}
export default HookMouse;
