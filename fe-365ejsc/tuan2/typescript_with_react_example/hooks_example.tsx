import { useRef, useState, useReducer } from "react";

function HookExamples() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);

  const [value, dispatch] = useReducer(
    (state: number, action: "inc" | "dec") => {
      return action === "inc" ? state + 1 : state - 1;
    },
    0
  );

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <p>Count: {count}</p>
      <p>Reducer value: {value}</p>
    </div>
  );
}
