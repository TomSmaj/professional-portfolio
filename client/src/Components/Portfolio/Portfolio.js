import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {

      }
    };

  componentDidMount = () => {

  };

  render() {
    return (
      <div>
        <NavBar />
        <p>This is the Portfolio Page</p>
       </div>
    );
  }
}

export default Portfolio;
