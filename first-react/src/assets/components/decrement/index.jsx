import React from "react";

function Decrement({ setCount }) {
  return (
    <>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </>
  );
}

export default Decrement;
