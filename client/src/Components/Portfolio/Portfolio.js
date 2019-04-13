import "./Portfolio.css";
import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Parallax from "react-springy-parallax";
import OverlayMenu from "../overlayMenu/OverlayMenu";
import Project from "./Projects/Project"

import giftdpic from "./Projects/project-pics/giftd.gif";
import reeltalk from "./Projects/project-pics/ReelTalk.gif";
import spacejam from "./Projects/project-pics/space-jam.png";
import ytfilt from "./Projects/project-pics/youtube-filter.png";
import eugeo from "./Projects/project-pics/european-geo-game-2.png";
import rps from "./Projects/project-pics/rock-paper-scissors.png";
import simpsonstrivia from "./Projects/project-pics/simpsons-trivia-game.png";
import wordguess from "./Projects/project-pics/word-guess-game.png";


class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      currentLayer: 0,
      projects: {
        giftd: {
          name: "giftd",
          pic: giftdpic,
          link: "https://giftd-app.herokuapp.com/",
          github: "https://github.com/gold-reel-media/giftd"
        },
        reeltalk: {
          name: "Reel Talk",
          pic: reeltalk,
          link: "https://reel-talk-app.herokuapp.com/",
          github: "https://github.com/TomSmaj/movie-project"
        },
        spacejam: {
          name: "Space Jam",
          pic: spacejam,
          link: "https://tomsmaj.github.io/Space-Jam/",
          github: "https://github.com/TomSmaj/Space-Jam"
        },
        youtubefilter: {
          name: "YouTube Filter",
          pic: ytfilt,
          link: "https://tomsmaj.github.io/youtube-filter/",
          github: "https://github.com/TomSmaj/youtube-filter"
        },
        wordguess: {
          name: "90s Music Guessing Game",
          pic: wordguess,
          link: "https://tomsmaj.github.io/Word-Guess-Game/",
          github: "https://github.com/TomSmaj/Word-Guess-Game"
        },
        rockpaperscissors: {
          name: "Rock Paper Scissors",
          pic: rps,
          link: "https://tomsmaj.github.io/RPS-Multiplayer/",
          github: "https://github.com/TomSmaj/RPS-Multiplayer"
        },
        triviagame: {
          name: "Simpson's Trivia Game",
          pic: simpsonstrivia,
          link: "https://tomsmaj.github.io/TriviaGame/",
          github: "https://github.com/TomSmaj/TriviaGame"
        },
        geography: {
          name: "European Geography Game",
          pic: eugeo,
          pic2: "/Projects/project-pics/european-geo-game-2.png",
          link: "",
          github: "https://github.com/TomSmaj/Geography-Game-Europe"
        }
      }
    }
    this.scrollFunction = this.scrollFunction.bind(this);
  };

  //the current layer will be kept in the portfolio state and passed to the overlay menu component
  //in the overlay menu the current state will be highlighted
  //the number of pages and the title of each portfolio item is also passed to the overlayMenu
  //it uses the titles passed to it to create what's actually displayed

  componentDidMount = () => {

  };

  scrollFunction = (page) => {
    this.refs.parallax.scrollTo(page);
    this.setState({
      currentLayer: page
    })
  }

  render() {
    return (
      <div className="portfolio">
        <NavBar />
        {/* <OverlayMenu layers={3} currentLayer={1}/> */}
        <Parallax ref="parallax" pages={8} >

          <Parallax.Layer
            offset={0}
            speed={0.5}
          >
            <Project
              name={this.state.projects.giftd.name}
              pic={this.state.projects.giftd.pic}
              link={this.state.projects.giftd.link}
              github={this.state.projects.giftd.github}
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.5}
          >
            <Project
              name={this.state.projects.reeltalk.name}
              pic={this.state.projects.reeltalk.pic}
              link={this.state.projects.reeltalk.link}
              github={this.state.projects.reeltalk.github}
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
          >
            <Project
              name={this.state.projects.spacejam.name}
              pic={this.state.projects.spacejam.pic}
              link={this.state.projects.spacejam.link}
              github={this.state.projects.spacejam.github}
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={3}
            speed={0.5}
          >
            <Project
              name={this.state.projects.youtubefilter.name}
              pic={this.state.projects.youtubefilter.pic}
              link={this.state.projects.youtubefilter.link}
              github={this.state.projects.youtubefilter.github}
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={4}
            speed={0.5}
          >
            <Project
              name={this.state.projects.wordguess.name}
              pic={this.state.projects.wordguess.pic}
              link={this.state.projects.wordguess.link}
              github={this.state.projects.wordguess.github}
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={5}
            speed={0.5}
          >
            <Project
              name={this.state.projects.rockpaperscissors.name}
              pic={this.state.projects.rockpaperscissors.pic}
              link={this.state.projects.rockpaperscissors.link}
              github={this.state.projects.rockpaperscissors.github}
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={6}
            speed={0.5}
          >
            <Project
              name={this.state.projects.triviagame.name}
              pic={this.state.projects.triviagame.pic}
              link={this.state.projects.triviagame.link}
              github={this.state.projects.triviagame.github}
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={7}
            speed={0.5}
          >
            <Project
              name={this.state.projects.geography.name}
              pic={this.state.projects.geography.pic}
              link={this.state.projects.geography.link}
              github={this.state.projects.geography.github}
            />
          </Parallax.Layer>
        </Parallax>
      </div>
    );
  }
}

export default Portfolio;
