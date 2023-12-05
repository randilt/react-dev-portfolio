// Navbar.js

import "../App.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html">
            Randil<span>T</span>
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Connect</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
