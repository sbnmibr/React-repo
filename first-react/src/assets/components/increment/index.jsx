import React from "react";

function Increment({ setCount }) {
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </>
  );
}

export default Increment;
