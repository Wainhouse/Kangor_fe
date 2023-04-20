import { useState } from "react";
import { ReactComponent as NavIcon } from "../img/nav-logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="header">
      <Link to="/" style={{ textDecoration: "none" }} className="header__link">
        <img className="header__logo" src={require("../img/kangaroo.png")} />
      </Link>
      <nav className="header__nav-bar">
        <ol className="header__nav-list">
          <li className="nav-item" onClick={handleNav}>
            <NavIcon className="nav-icon" />
            {isMenuOpen && (
              <ul className="nav-dropdown">
                <li className="dropdown-item">link1</li>
                <li className="dropdown-item">link2</li>
              </ul>
            )}
          </li>
        </ol>
      </nav>
    </section>
  );
};

export default Header;
