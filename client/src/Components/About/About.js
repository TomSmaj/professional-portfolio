import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Parallax from "react-springy-parallax";

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
        <Parallax ref="parallax" scrolling={false} pages={3}>

          <Parallax.Layer
            offset={0}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(1)}
          >
          <p>About Me 1</p>
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(2)}
          >
          <p>About Me 2</p>
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(0)}
          >
          <p>About Me 3</p>
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

export default About;
