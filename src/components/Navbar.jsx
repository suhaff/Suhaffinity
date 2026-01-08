import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/suhaffinity-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* BRAND */}
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Suhaffinity logo"
            className="navbar-logo-img"
          />
          <span className="navbar-logo-text">Suhaffinity</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/product">Product</Link>
          <Link to="/team">Team</Link>
        </div>

        {/* HAMBURGER */}
        <button
          className="navbar-hamburger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <aside className={`mobile-nav ${open ? "open" : ""}`}>
        <button
          className="mobile-nav-close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link to="/product" onClick={() => setOpen(false)}>Product</Link>
        <Link to="/team" onClick={() => setOpen(false)}>Team</Link>
      </aside>
    </>
  );
};

export default Navbar;
