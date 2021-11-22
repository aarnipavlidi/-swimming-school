import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App = () => {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hinnasto" component={Pricing} />
        <Route path="/otayhteyttä" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
