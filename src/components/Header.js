import React from 'react';
import logo from '../logo.png'
import './Header.css';
const Header = () => (
  <header className="nav">
    <nav className="nav-header navbar justify-content-between navbar-light">
      <a className="navbar-brand" href="#"><img src={logo} alt="Rextie"/>
      </a>
      <ul className="navbar-nav">
          <li className="nav-item active">
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">LogOut</button>
          </li>
               
      </ul>
    </nav>
  </header>
    )

    export default Header;