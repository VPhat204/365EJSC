import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333" }}>
      <Link to="/" style={{ color: "white", margin: "0 10px" }}>Home</Link>
      <Link to="/about" style={{ color: "white", margin: "0 10px" }}>About</Link>
      <Link to="/products" style={{ color: "white", margin: "0 10px" }}>Products</Link>
    </nav>
  );
}

export default Navbar;
