import { useState } from "react";

function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: "0 8px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
