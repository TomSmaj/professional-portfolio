import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import About from './About/About';
import Resume from './Resume/Resume';
import Portfolio from "./Portfolio/Portfolio";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Switch>
  </BrowserRouter>
);

export default Router;