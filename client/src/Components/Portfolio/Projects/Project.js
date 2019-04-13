import React, { Component } from "react";
import githubimg from "./project-pics/github.png";
import "./Project.css";



class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            pic: this.props.pic,
            link: this.props.link,
            github: this.props.github,
        }
        
    }

    render() {
        return (
            <div className="project">
                <a href={this.state.github}>
                    <div className="name-gitimg"><h3 className="name">{this.state.name}</h3> <img className="githubImg" src={githubimg} alt="github"></img></div>
                </a>
                <a href={this.state.link}>
                    <img className="proj" src={this.state.pic} alt={this.state.name}></img>
                </a>
            </div>
        );
    }
}

export default Project;