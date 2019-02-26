import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Education from "./Education";
import Employment from "./Employment"
import Parallax from "react-springy-parallax";

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
        <Parallax ref="parallax" pages={3}>

          <Parallax.Layer
            offset={0}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(1)}
          >
          <Education />
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.5}
          >
          <Employment />
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(0)}
          >
          <p>Resume 3</p>
          </Parallax.Layer>
        </Parallax>
       </div>
    );
  }
}

export default Resume;
