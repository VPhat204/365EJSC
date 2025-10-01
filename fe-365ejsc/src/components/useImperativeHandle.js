import { forwardRef, useImperativeHandle, useRef } from "react";

const Child = forwardRef((_, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} placeholder="Controlled by parent" />;
});

export default function UseImperativeHandleExample() {
  const childRef = useRef();

  return (
    <div>
      <h2>useImperativeHandle Example</h2>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.focus()}>Focus Input</button>
    </div>
  );
}
