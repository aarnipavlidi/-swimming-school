import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import '../../css/SideBarStyling.css';

const DashboardSideBar = ({ collapseStatus, setCollapseStatus, setCurrentToken, currentAdminData, loading }) => {

  const client = useApolloClient();
  const [showLinksBottom, setShowLinksBottom] = useState(false);

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

  // I had some problems with styling the "bottom navlinks" element.
  // Everytime user presses the "toggle" button, the bottom links css
  // element gets changed instantly, because of the ternary operator
  // function, which causes that element use the same rules, as if
  // the current "view" would be visible for "pc" users. So I made
  // for now "dirty fix" and made it so that everytime user decides
  // to either press the toggle button or one the other links, the
  // bottom element css rules gets changed with delay, which is
  // equal to the transition itself. Will look into this later! :)
  const showToggleContent = (option) => {
    if (option === 'toggle' && collapseStatus === false) {
      setShowLinksBottom(true)
      setCollapseStatus(true)
    };

    if (option === 'toggle' && collapseStatus === true) {
      setCollapseStatus(false)
      setTimeout(() => {
        setShowLinksBottom(false)
      }, 500)
    };

    if (option === 'navlink' && collapseStatus === true) {
      setCollapseStatus(false)
      setTimeout(() => {
        setShowLinksBottom(false)
      }, 500)
    } else {
      return null
    };
  };

  const logoutUserToken = async () => {
    try {
      await localStorage.clear();
      setCurrentToken(null);
      client.clearStore();
    } catch (error) {
      console.log(error.message);
    };
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
              <a onClick={() => showToggleContent('navlink')}><NavLink className="header-a" exact activeClassName="active" to="/pavmin/dashboard">Etusivu</NavLink></a>
            </li>
            <li className="header-li">
              <a onClick={() => showToggleContent('navlink')}><NavLink className="header-a" exact activeClassName="active" to="/pavmin/dashboard/settings">Omat tiedot</NavLink></a>
            </li>
            <li className="header-li">
              <a onClick={() => showToggleContent('navlink')}><NavLink className="header-a" exact activeClassName="active" to="/pavmin/dashboard/editcontent">Muokkaa sisältöä</NavLink></a>
            </li>
            <div className={collapseStatus || showLinksBottom ? 'header-nav-bottom' : 'header-nav-end'}>
              <li className="header-li">
                <a onClick={() => showToggleContent('navlink')}><NavLink className="header-a" exact activeClassName="active" to="/">Takaisin uimakouluun</NavLink></a>
              </li>
              <li className="header-li">
                <a onClick={logoutUserToken}><NavLink className="header-a" to>Kirjaudu ulos</NavLink></a>
              </li>
            </div>
          </ul>
        </div>
      <div className={collapseStatus ? 'header-toggle + header-toggle-active' : 'header-toggle'}>
        <i className="fas fa-bars" aria-hidden="true" onClick={() => showToggleContent('toggle')}></i>
      </div>
    </div>
  );
};

export default DashboardSideBar;
