import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

// Components for Dashboard folder.
import Dashboard from './components/Dashboard/Home/Dashboard';
import DashboardSideBar from './components/Dashboard/DashboardSideBar';
import EditContent from './components/Dashboard/Content/EditContent';
import Settings from './components/Dashboard/Settings/Settings';
// Components for Header folder.
import NavBar from './components/Header/NavBar';
// Components for Login folder.
import Login from './components/Login/Login';
// Rest of the components.
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Notification from './components/Notification';
import Pricing from './components/Pricing';

import useContent from './hooks/useContent';

const App = () => {

  const { user, error, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const { currentContent, loadingContent } = useContent();

  const [collapseStatus, setCollapseStatus] = useState(false);
  const [containerPosition, setContainerPosition] = useState(false);

  const getNotification = async (message) => {
    const response = await message;
    setStatus(response.status);
    setStatusMessage(response.message);
    setTimeout(() => {
      setStatus(null);
      setStatusMessage(null);
    }, 7500)
  };

  const currentAdminData = user;
  const currentToken = isAuthenticated;

  return (
    <Router>
      <div className="d-flex flex-column" style={{ height: '100vh' }}>
        <Switch>
          <Route exact path="/">
            <NavBar currentToken={currentToken} currentAdminData={currentAdminData} />
            <Notification message={statusMessage} checkStatus={status} />
            <Home currentContent={currentContent} loadingContent={loadingContent} />
            <Footer loadingContent={loadingContent} />
          </Route>
          <Route path="/hinnasto">
            <NavBar currentToken={currentToken} currentAdminData={currentAdminData} />
            <Notification message={statusMessage} checkStatus={status} />
            <Pricing currentContent={currentContent} loadingContent={loadingContent} />
            <Footer loadingContent={loadingContent} />
          </Route>
          <Route path="/otayhteytta">
            <NavBar currentToken={currentToken} currentAdminData={currentAdminData} />
            <Notification message={statusMessage} checkStatus={status} />
            <Contact loadingContent={loadingContent} getNotification={getNotification}  />
            <Footer loadingContent={loadingContent} />
          </Route>
          <Route exact path="/pavmin/dashboard/editcontent">
            {currentToken && currentAdminData ?
              <>
                <DashboardSideBar
                  collapseStatus={collapseStatus}
                  setCollapseStatus={setCollapseStatus}
                  setContainerPosition={setContainerPosition}
                  getNotification={getNotification}
                  loading={isLoading}
                />
                <EditContent
                  currentContent={currentContent}
                  notificationMessage={statusMessage}
                  notificationStatus={status}
                  getNotification={getNotification}
                  collapseStatus={collapseStatus}
                  containerPosition={containerPosition}
                />
              </> :
              <Redirect to="/pavmin" />
            }
          </Route>
          <Route exact path="/pavmin/dashboard/settings">
            {currentToken && currentAdminData ?
              <>
                <DashboardSideBar
                  collapseStatus={collapseStatus}
                  setCollapseStatus={setCollapseStatus}
                  setContainerPosition={setContainerPosition}
                  getNotification={getNotification}
                  loading={isLoading}
                />
                <Settings
                  currentAdminData={currentAdminData}
                  notificationMessage={statusMessage}
                  notificationStatus={status}
                  getNotification={getNotification}
                  collapseStatus={collapseStatus}
                  containerPosition={containerPosition}
                />
              </> :
              <Redirect to="/pavmin" />
            }
          </Route>
          <Route exact path="/pavmin/dashboard">
            {currentToken && currentAdminData ?
              <>
                <DashboardSideBar
                  collapseStatus={collapseStatus}
                  setCollapseStatus={setCollapseStatus}
                  setContainerPosition={setContainerPosition}
                  getNotification={getNotification}
                  loading={isLoading}
                />
                <Dashboard
                  currentAdminData={currentAdminData}
                  notificationMessage={statusMessage}
                  notificationStatus={status}
                  collapseStatus={collapseStatus}
                  containerPosition={containerPosition}
                />
              </> :
              <Redirect to="/pavmin" />
            }
          </Route>
          <Route exact path="/pavmin">
            {currentToken && currentAdminData ? <Redirect to="/pavmin/dashboard" /> : <Login loginWithRedirect={loginWithRedirect} errorAuth0={error} loading={isLoading} />}
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
