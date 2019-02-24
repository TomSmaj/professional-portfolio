import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";

class Resume extends Component {
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
        <p>This is the Resume Page</p>
       </div>
    );
  }
}

export default Resume;
