import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Pricing from './components/Pricing';

const App = () => {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hinnasto" component={Pricing} />
        <Route path="/otayhteyttä" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
