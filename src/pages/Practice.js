import React, { useState } from "react";

const Practice = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          count >= 1 && setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          count <= 9 && setCount(count + 1);
        }}
      >
        +
      </button>
      <h2>{count}</h2>
    </div>
  );
};

export default Practice;
