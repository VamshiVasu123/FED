import React, { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  const incre = () => {
    return setCount(count+1);
  };

  const decre = () => {
    return setCount(count-1);
  };
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
    </div>
  );
}

export default App;