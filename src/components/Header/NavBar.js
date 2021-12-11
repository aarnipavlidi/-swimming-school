import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/NavBarStyling.css';

const NavBar = ({ currentToken, currentAdminData }) => {

  const styling = {
    textDecoration: 'none',
    color: '#000000',
    fontSize: 17,
  };

  if (currentToken && currentAdminData) {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-light custom-navbar-styling">
          <a style={{ marginLeft: 10 }} className="navbar-brand navbar-title">Santun Uimakoulu</a>
          <button style={{ marginRight: 10 }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul style={{ alignItems: 'center' }} className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link navbar-content"><NavLink exact activeClassName="active" style={styling} to="/">Etusivu</NavLink></a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-content"><NavLink activeClassName="active" style={styling} to="/hinnasto">Hinnasto</NavLink></a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-content"><NavLink activeClassName="active" style={styling} to="/otayhteyttä">Ota yhteyttä</NavLink></a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-content"><NavLink activeClassName="active" style={styling} to="/pavmin/dashboard">Hallintapaneeli</NavLink></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  } else {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-light custom-navbar-styling">
          <a style={{ marginLeft: 10 }} className="navbar-brand navbar-title">Santun Uimakoulu</a>
          <button style={{ marginRight: 10 }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul style={{ alignItems: 'center' }} className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link navbar-content"><NavLink exact activeClassName="active" style={styling} to="/">Etusivu</NavLink></a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-content"><NavLink activeClassName="active" style={styling} to="/hinnasto">Hinnasto</NavLink></a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-content"><NavLink activeClassName="active" style={styling} to="/otayhteyttä">Ota yhteyttä</NavLink></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  };
};

export default NavBar;
