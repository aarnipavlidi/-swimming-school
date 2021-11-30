import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Notification from './components/Notification';
import Footer from './components/Footer';

const App = () => {

  const [status, setStatus] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const getNotification = async (message) => {
    const response = await message;
    setStatus(response.status);
    setStatusMessage(response.message);
    setTimeout(() => {
      setStatus(null);
      setStatusMessage(null);
    }, 5000)
  };

  return (
    <Router>
      <div className="d-flex flex-column" style={{ height: '100vh' }}>
        <NavBar />
        <Notification message={statusMessage} checkStatus={status} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hinnasto">
            <Pricing />
          </Route>
          <Route path="/otayhteyttä">
            <Contact getNotification={getNotification}  />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
