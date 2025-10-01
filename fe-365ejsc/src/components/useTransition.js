import { useState, useTransition } from "react";

export default function UseTransitionExample() {
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    startTransition(() => {
      setList(Array(20000).fill(value));
    });
  };

  return (
    <div>
      <h2>useTransition Example</h2>
      <input onChange={handleChange} />
      {isPending && <p>Loading...</p>}
      <p>List length: {list.length}</p>
    </div>
  );
}
