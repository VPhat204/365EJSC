import useToggle from "../hooks/useToggle";

function ToggleComponent() {
  const [isOn, toggle] = useToggle(false);
  return <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>;
}
export default ToggleComponent