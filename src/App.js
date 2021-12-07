import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/Header/NavBar';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Notification from './components/Notification';
import Footer from './components/Footer';

import useAdmin from './hooks/useAdmin';

const App = () => {

  const [status, setStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const { currentAdminData, loading } = useAdmin();
  const [currentToken, setCurrentToken] = useState(null);

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
            <Home />
            <Footer />
          </Route>
          <Route path="/hinnasto">
            <NavBar currentToken={currentToken} currentAdminData={currentAdminData} />
            <Notification message={statusMessage} checkStatus={status} />
            <Pricing />
            <Footer />
          </Route>
          <Route path="/otayhteyttä">
            <NavBar currentToken={currentToken} currentAdminData={currentAdminData} />
            <Notification message={statusMessage} checkStatus={status} />
            <Contact getNotification={getNotification}  />
            <Footer />
          </Route>
          <Route path="/pavmin/dashboard">
            {currentToken && currentAdminData ? <Dashboard loading={loading} /> : <Redirect to="/pavmin" />}
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
