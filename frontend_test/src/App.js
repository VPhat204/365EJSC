import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/NoteBooks";
import StudySchedule from "./pages/StudySchedule";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notebook" element={<Products />} />
          <Route path="/study" element={<StudySchedule />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
