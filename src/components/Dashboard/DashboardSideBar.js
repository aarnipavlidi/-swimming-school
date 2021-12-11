import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/SideBarStyling.css';

const DashboardSideBar = ({ currentAdminData, loading }) => {

  const [collapseStatus, setCollapseStatus] = useState(false)

  const loadingStyling = {
    backgroundColor: '#60b4bd',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const loadingSpinner = {
    color: '#FFFFFE',
    width: 50,
    height: 50
  };

  if (loading) {
    return (
      <div style={loadingStyling}>
        <div className="spinner-border" style={loadingSpinner}></div>
      </div>
    );
  };

  return (
    <div className="header-container">
      <div className="header-logo">
        <p>Hallintapaneeli</p>
      </div>
      <div className={collapseStatus ? 'active + header-nav' : 'header-nav'}>
        <ul className="header-ul">
          <li className="header-li">
            <a onClick={() => setCollapseStatus(!collapseStatus)}><NavLink className="header-a" exact activeClassName="active" to="/pavmin/dashboard">Etusivu</NavLink></a>
          </li>
          <li className="header-li">
            <a onClick={() => setCollapseStatus(!collapseStatus)}><NavLink className="header-a" exact activeClassName="active" to="/pavmin/dashboard/settings">Omat tiedot</NavLink></a>
          </li>
          <li className="header-li">
            <a onClick={() => setCollapseStatus(!collapseStatus)}><NavLink className="header-a" exact activeClassName="active" to="/pavmin/dashboard/editcontent">Muokkaa sisältöä</NavLink></a>
          </li>
          <li className="header-li">
            <a onClick={() => setCollapseStatus(!collapseStatus)}><NavLink className="header-a" exact activeClassName="active" to="/">Takaisin uimakouluun</NavLink></a>
          </li>
          <li className="header-li">
            <a onClick={() => setCollapseStatus(!collapseStatus)}><NavLink className="header-a" to>Kirjaudu ulos</NavLink></a>
          </li>
        </ul>
      </div>
      <div className={collapseStatus ? 'header-toggle + header-toggle-active' : 'header-toggle'}>
        <i className="fas fa-bars" aria-hidden="true" onClick={() => setCollapseStatus(!collapseStatus)}></i>
      </div>
    </div>
  );
};

export default DashboardSideBar;
