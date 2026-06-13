import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
   const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">DA TI</div>

       <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

     <div className={`nav-links ${open ? "open" : ""}`}>
         <Link to="/dati" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/tour" onClick={() => setOpen(false)}>Tour</Link>
        <Link to="/music" onClick={() => setOpen(false)}>Music</Link>
        <Link to="/merch" onClick={() => setOpen(false)}>Merch</Link>
        <Link to="/socials" onClick={() => setOpen(false)}>Find Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;