import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Parallax from "react-springy-parallax";
import OverlayMenu from "../overlayMenu/OverlayMenu";
class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
        currentLayer: 0
      }
    };

    //the current layer will be kept in the portfolio state and passed to the overlay menu component
    //in the overlay menu the current state will be highlighted
    //the number of pages and the title of each portfolio item is also passed to the overlayMenu
    //it uses the titles passed to it to create what's actually displayed

  componentDidMount = () => {

  };

  render() {
    return (
      <div>
        <NavBar />
        <OverlayMenu />
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
