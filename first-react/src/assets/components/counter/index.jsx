import React from "react";
import { useState } from "react";
import Decrement from "../decrement";
import Increment from "../increment";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="all">
        <h1>Counter Example</h1>
        <Increment count={count} setCount={setCount} />
        <h1>{count}</h1>
        <Decrement count={count} setCount={setCount} />
      </div>
    </>
  );
};

export default Counter;
