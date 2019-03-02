import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Education from "./Education/Education";
import Employment from "./Employment/Employment";
import Skills from "./Skills/Skills";
import Parallax from "react-springy-parallax";
import "./Resume.css";

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
        <Parallax ref="parallax" pages={2}>

          <Parallax.Layer
            offset={0}
            speed={0.5}
            onClick={() => this.refs.parallax.scrollTo(1)}
          >
            <div className="containter-flex">
              <div className="row">
                <div className="col-6">
                  <Education />
                </div>
                <div className="col-6">
                  <Skills />
                </div>
              </div>
            </div>
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.5}
          >
            <Employment />
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

export default Resume;
