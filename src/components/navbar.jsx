import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">ARTIST NAME</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/tour">Tour</Link>
        <Link to="/music">Music</Link>
        <Link to="/merch">Merch</Link>
        <Link to="/socials">Find Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;