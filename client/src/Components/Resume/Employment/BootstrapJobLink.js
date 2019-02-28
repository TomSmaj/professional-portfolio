import React, { Component } from "react";
import "./Employment.css";

class BootstrapJobLink extends Component {
    constructor() {
        super();
        this.state = {
            mousedOver: false,
            clicked: false
        }
    }

    componentDidMount = () => {
        var dTarg = "#" + this.props.targId;
        this.setState({
            dTarg: dTarg
        })
    }

    render() {
        return (
            <div className="jobLink">
                <div id="accordion">
                        <div id="headingOne">
                                <div data-toggle="collapse" data-target={this.state.dTarg} aria-expanded="true" aria-controls="collapseOne">
                                    <div className="jobLine jobtitle"><h5>{this.props.jobTitle}</h5></div>
                                    <div className="company">{this.props.company} </div>
                                    <div className="jobdates">{this.props.dates} </div>
                                </div>    
                        </div>

                        <div id={this.props.targId} class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="jobdesc"><div className="jobLine">Description</div> <ul>{this.props.jobDescription.map(each => <li>{each}</li>)} </ul></div>
                        </div>
                </div>
            </div>
        );
    }
}

export default BootstrapJobLink;