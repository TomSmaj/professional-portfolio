import React, { Component } from "react";
import NavBar from "../Navbar/Navbar";
import Parallax from "react-springy-parallax";
import OverlayMenu from "../overlayMenu/OverlayMenu";
import Project from "./Projects/Project"
class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
        currentLayer: 0,
        projects: {
          giftd: {
            name: "giftd",
            pic: "/Projects/project-pics/giftd.gif",
            link: "https://giftd-app.herokuapp.com/",
            github: "https://github.com/gold-reel-media/giftd"
          },
          reeltalk: {
            name: "Reel Talk",
            pic: "/Projects/project-pics/ReelTalk.gif",
            link: "https://reel-talk-app.herokuapp.com/",
            github: "https://github.com/TomSmaj/movie-project"
          },
          spacejam: {
            name: "Space Jam",
            pic: "/Projects/project-pics/space-jam.png",
            link: "https://tomsmaj.github.io/Space-Jam/",
            github: "https://github.com/TomSmaj/Space-Jam"
          },
          youtubefilter: {
            name: "YouTube Filter",
            pic: "/Projects/project-pics/youtube-filter.png",
            link: "https://tomsmaj.github.io/youtube-filter/",
            github: "https://github.com/TomSmaj/youtube-filter"
          },
          wordguess: {
            name: "90s Music Guessing Game",
            pic: "/Projects/project-pics/word-guess-game.png",
            link: "https://tomsmaj.github.io/Word-Guess-Game/",
            github: "https://github.com/TomSmaj/Word-Guess-Game"
          },
          rockpaperscissors: {
            name: "Rock Paper Scissors",
            pic: "/Projects/project-pics/rock-paper-scissors.png",
            link: "https://tomsmaj.github.io/RPS-Multiplayer/",
            github: "https://github.com/TomSmaj/RPS-Multiplayer"
          },
          triviagame: {
            name: "Simpson's Trivia Game",
            pic: "/Projects/project-pics/simpsons-trivia-game.png",
            link: "https://tomsmaj.github.io/TriviaGame/",
            github: "https://github.com/TomSmaj/TriviaGame"
          },
          geography: {
            name: "European Geography Game",
            pic: "/Projects/project-pics/european-geo-game.png",
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
      <div>
        <NavBar />
        {/* <OverlayMenu layers={3} currentLayer={1}/> */}
        <Parallax ref="parallax" pages={3}>

          <Parallax.Layer
            offset={0}
            speed={0.5}
            onClick={() => this.scrollFunction(1)} 
          >
          <Project />
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.5}
            onClick={() => this.scrollFunction(2)}
          >
          <p>Portfolio 2</p>
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.5}
            onClick={() => this.scrollFunction(0)}
          >
          <p>Portfolio 3</p>
          </Parallax.Layer>
        </Parallax>
       </div>
    );
  }
}

export default Portfolio;
