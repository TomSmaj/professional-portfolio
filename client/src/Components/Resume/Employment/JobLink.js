import React, { Component } from "react";
import "./Employment.css";

class JobLink extends Component {
    constructor(){
        super();
        this.state = {
            mousedOver: false,
            clicked: false
        }
        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick = (event) => {
        var tempClick = this.state.clicked;
        this.setState({
            clicked: !tempClick
        })
    }

    render() {
        return (
            <div onClick={this.toggleClick} className="jobLink">
                <div className="jobLine jobtitle"><h5>{this.props.jobTitle}</h5></div>
                <div className="company">{this.props.company} </div>
                <div className="jobdates">{this.props.dates} </div>
                {this.state.clicked && <div className="jobdesc"><div className="jobLine">Description</div> <ul>{this.props.jobDescription.map(each => <li>{each}</li>)} </ul></div> }
            </div>
        );
    }
}

export default JobLink;