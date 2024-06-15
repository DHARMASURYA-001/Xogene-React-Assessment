import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.xogene.com%2Fwp-content%2Fuploads%2F2018%2F10%2FXogene_logo_color-2.png&f=1&nofb=1&ipt=e7ad418b3717c018ab42903af5111c57283e9d9dacb3566dd4057b9d090d37d3&ipo=images" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/drugs/search">Home</Link>
        </li>
        <li>
          <a href="https://dharmasurya.netlify.app/" target="_blank" rel="noopener noreferrer">
            Dharma Surya R <span className="blinking-text">- Click here to visit</span>
          </a>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
