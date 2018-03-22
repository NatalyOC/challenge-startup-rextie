import React from 'react';
import logo from '../logo.png'

const Header = () => (
  <header className="nav">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#"><img src={logo} alt="Rextie"/>
      </a>
      <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">LogIn</button>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">LogOut</a>
          </li>      
      </ul>
    </nav>
  </header>
    )

    export default Header;