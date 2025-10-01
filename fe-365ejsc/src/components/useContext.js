import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

export default function UseContextExample() {
  return (
    <ThemeContext.Provider value="dark">
      <h2>useContext Example</h2>
      <Child />
    </ThemeContext.Provider>
  );
}
