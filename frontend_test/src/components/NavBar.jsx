import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#6b4226" }}>
      <Link to="/" style={{ 
        color: "white", 
        margin: "0 10px", 
        textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ 
        color: "white", 
        margin: "0 10px", 
        textDecoration: "none" }}>About</Link>
      <Link to="/notebook" style={{ 
        color: "white", 
        margin: "0 10px", 
        textDecoration: "none" }}>NoteBook</Link>
    </nav>
  );
}

export default Navbar;
