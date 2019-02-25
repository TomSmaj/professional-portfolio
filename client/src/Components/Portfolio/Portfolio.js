import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Parallax from "react-springy-parallax";

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
        <Parallax ref="parallax" pages={3}>

          <Parallax.Layer
            offset={0}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(1)}
          >
          <p>Portfolio 1</p>
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(2)}
          >
          <p>Portfolio 2</p>
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(0)}
          >
          <p>Portfolio 3</p>
          </Parallax.Layer>
        </Parallax>
       </div>
    );
  }
}

export default Portfolio;
