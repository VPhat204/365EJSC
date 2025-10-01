import { useState, useCallback } from "react";

function Child({ onClick }) {
  return <button onClick={onClick}>Click Child</button>;
}

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const memoizedClick = useCallback(() => {
    console.log("Child clicked!");
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child onClick={memoizedClick} />
    </div>
  );
}
