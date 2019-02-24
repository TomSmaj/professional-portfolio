import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";

class About extends Component {
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
        <p>This is the About Page</p>
       </div>
    );
  }
}

export default About;
