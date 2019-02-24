import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <p>App goes here</p>
      </div>
    );
  }
}

export default withRouter(App);
