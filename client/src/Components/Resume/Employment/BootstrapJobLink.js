import React, { Component } from "react";
import "./Employment.css";

class BootstrapJobLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mousedOver: false,
            clicked: false,
            dTarg: "#" + this.props.targId
        }
    }

    render() {
        return (
            <div className="jobLink">
                <div id="accordion">
                        <div id="headingOne">
                                <div data-toggle="collapse" data-target={this.state.dTarg} aria-expanded="true" aria-controls="collapseOne">
                                    <div className="jobLine jobtitle"><h4>{this.props.jobTitle}</h4></div>
                                    <div className="company">{this.props.company} </div>
                                    <div className="jobdates">{this.props.dates} </div>
                                </div>    
                        </div>

                        <div id={this.props.targId} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="jobdesc"><div className="jobLine"><h5>Description</h5></div> <ul>{this.props.jobDescription.map(each => <li>{each}</li>)} </ul></div>
                        </div>
                </div>
            </div>
        );
    }
}

export default BootstrapJobLink;