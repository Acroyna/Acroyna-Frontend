import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      <h1 className="text-xl font-bold">Acroyna Software Solutions</h1>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      <ul className={`md:flex gap-6 transition-all duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <li className="py-2 md:py-0">
          <Link to="/" className="hover:text-blue-300" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link to="/about" className="hover:text-blue-300" onClick={handleLinkClick}>
            About
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link to="/services" className="hover:text-blue-300" onClick={handleLinkClick}>
            Services
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link to="/contact" className="hover:text-blue-300" onClick={handleLinkClick}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
