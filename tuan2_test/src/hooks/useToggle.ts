import { useState } from "react";

function useToggle(initial: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}
export default useToggle