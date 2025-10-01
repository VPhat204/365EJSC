import { useState, useDeferredValue } from "react";

export default function UseDeferredValueExample() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <h2>useDeferredValue Example</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Immediate: {text}</p>
      <p>Deferred: {deferredText}</p>
    </div>
  );
}
