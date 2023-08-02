import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../styles/NavbarTheme';

function NavBar() {
  return (
    <NavContainer>
      <Link className="nav-link" to="/">
        <h1 className="nav-title">Crypto Statistics</h1>
      </Link>
      <div className="notification">
        <h2>🎙️</h2>
        <p>⚙️</p>
      </div>
    </NavContainer>
  );
}

export default NavBar;
