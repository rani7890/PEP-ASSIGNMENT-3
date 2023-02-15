import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // handle increment button click
  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  // handle decrement button click
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // determine the color based on the value of count
  let color = "";
  if (count >= 0 && count <= 4) {
    color = "green";
  } else if (count >= 5 && count <= 9) {
    color = "blue";
  } else if (count === 10) {
    color = "red";
  }

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;