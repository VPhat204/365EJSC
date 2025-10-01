import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseStateExample from "./components/useState";
import UseEffectExample from "./components/useEffect";
import UseLayoutEffectExample from "./components/useLayoutEffect";
import UseMemoExample from "./components/useMemo";
import UseCallbackExample from "./components/useCallback";
import UseRefExample from "./components/useRef";
import UseContextExample from "./components/useContext";
import UseReducerExample from "./components/useReducer";
import UseImperativeHandleExample from "./components/useImperativeHandle";
import UseTransitionExample from "./components/useTransition";
import UseDeferredValueExample from "./components/useDefferedValue";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Link to="/usestate">useState</Link>
        <Link to="/useeffect">useEffect</Link>
        <Link to="/uselayouteffect">useLayoutEffect</Link>
        <Link to="/usememo">useMemo</Link>
        <Link to="/usecallback">useCallback</Link>
        <Link to="/useref">useRef</Link>
        <Link to="/usecontext">useContext</Link>
        <Link to="/usereducer">useReducer</Link>
        <Link to="/useimperativehandle">useImperativeHandle</Link>
        <Link to="/usetransition">useTransition</Link>
        <Link to="/usedeferredvalue">useDeferredValue</Link>
      </nav>

      <Routes>
        <Route path="/usestate" element={<UseStateExample />} />
        <Route path="/useeffect" element={<UseEffectExample />} />
        <Route path="/uselayouteffect" element={<UseLayoutEffectExample />} />
        <Route path="/usememo" element={<UseMemoExample />} />
        <Route path="/usecallback" element={<UseCallbackExample />} />
        <Route path="/useref" element={<UseRefExample />} />
        <Route path="/usecontext" element={<UseContextExample />} />
        <Route path="/usereducer" element={<UseReducerExample />} />
        <Route path="/useimperativehandle" element={<UseImperativeHandleExample />} />
        <Route path="/usetransition" element={<UseTransitionExample />} />
        <Route path="/usedeferredvalue" element={<UseDeferredValueExample />} />
      </Routes>
    </BrowserRouter>
  );
}
