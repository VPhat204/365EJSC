import { useMemo, useState } from "react";

export default function UseMemoExample() {
  const [num, setNum] = useState(0);
  const expensiveCalc = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Result: {expensiveCalc}</p>
      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  );
}
