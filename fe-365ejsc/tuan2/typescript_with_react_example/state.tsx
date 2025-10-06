import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<{ id: number; name: string } | null>(null);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
