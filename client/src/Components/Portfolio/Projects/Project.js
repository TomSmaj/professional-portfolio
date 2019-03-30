import React, { Component } from "react";
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
                <a href={this.state.link}><img className="proj" src={this.state.pic}></img></a>
            </div>
        );
    }
}

export default Project;