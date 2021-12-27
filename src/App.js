import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Components for Dashboard folder.
import Dashboard from './components/Dashboard/Dashboard';
import DashboardSideBar from './components/Dashboard/DashboardSideBar';
import EditContent from './components/Dashboard/Content/EditContent';
import Settings from './components/Dashboard/Settings';
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

import useAdmin from './hooks/useAdmin';
import useContent from './hooks/useContent';

const App = () => {

  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const [currentToken, setCurrentToken] = useState(null);
  const { currentAdminData, loading } = useAdmin();
  const { currentContent, loadingContent } = useContent();

  const [collapseStatus, setCollapseStatus] = useState(false);

  const getNotification = async (message) => {
    const response = await message;
    setStatus(response.status);
    setStatusMessage(response.message);
    setTimeout(() => {
      setStatus(null);
      setStatusMessage(null);
    }, 5000)
  };

  useEffect(() => {
    const getToken = localStorage.getItem('current-admin-token');

    if (getToken) {
      setCurrentToken(getToken)
    } else {
      return null
    }
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column" style={{ height: '100vh' }}>
        <Switch>
          <Route exact path="/">
            <NavBar currentToken={currentToken} currentAdminData={currentAdminData} />
            <Notification message={statusMessage} checkStatus={status} />
            <Home loadingContent={loadingContent} />
            <Footer loadingContent={loadingContent} />
          </Route>
          <Route path="/hinnasto">
            <NavBar currentToken={currentToken} currentAdminData={currentAdminData} />
            <Notification message={statusMessage} checkStatus={status} />
            <Pricing currentContent={currentContent} loadingContent={loadingContent} />
            <Footer loadingContent={loadingContent} />
          </Route>
          <Route path="/otayhteyttä">
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
                  setCurrentToken={setCurrentToken}
                  getNotification={getNotification}
                  currentAdminData={currentAdminData}
                  loading={loading}
                />
                <EditContent
                  currentContent={currentContent}
                  notificationMessage={statusMessage}
                  notificationStatus={status}
                  getNotification={getNotification}
                  collapseStatus={collapseStatus}
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
                  setCurrentToken={setCurrentToken}
                  getNotification={getNotification}
                  currentAdminData={currentAdminData}
                  loading={loading}
                />
                <Settings
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
                  setCurrentToken={setCurrentToken}
                  getNotification={getNotification}
                  currentAdminData={currentAdminData}
                  loading={loading}
                />
                <Dashboard
                  currentAdminData={currentAdminData}
                />
              </> :
              <Redirect to="/pavmin" />
            }
          </Route>
          <Route exact path="/pavmin">
            {currentToken && currentAdminData ? <Redirect to="/pavmin/dashboard" /> : <Login setCurrentToken={setCurrentToken} loading={loading} />}
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
