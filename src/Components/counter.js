import React from 'react'
import { useState } from 'react';

const Counter = () => {
  // State Declaration:
  const [count, setCount] = useState(0);

  const oneClick = () => {
    setCount(count + 1);
  };

  const secondClicks = () => {

    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>

      <button onClick={oneClick}>Plus</button>&nbsp;&nbsp;
      <button onClick={secondClicks}>Minus</button>
      <h2>Value&nbsp;{count}</h2>
    </div>
  )
}

export default Counter
