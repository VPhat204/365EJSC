import { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Time: {time.toLocaleTimeString()}</p>
    </div>
  );
}
