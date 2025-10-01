import { useState, useLayoutEffect, useRef } from "react";

export default function UseLayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    setWidth(boxRef.current.getBoundingClientRect().width);
  }, []);

  return (
    <div>
      <h2>useLayoutEffect Example</h2>
      <div ref={boxRef} style={{ width: "200px", height: "50px", background: "skyblue" }}>
        Box
      </div>
      <p>Box width: {width}px</p>
    </div>
  );
}
