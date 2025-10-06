import { useState } from "react";

function useToggle(initial: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initial);
  const toggle = () => setValue(!value);
  return [value, toggle];
}

// Example usage:
function ToggleComponent() {
  const [isOn, toggle] = useToggle(false);
  return <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>;
}
