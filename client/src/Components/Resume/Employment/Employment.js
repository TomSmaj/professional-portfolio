import React, { Component } from "react";
import "./Employment.css";
import GoogleMap from "./GoogleMap";
import BootstrapJobLink from "./BootstrapJobLink";

//importing job info
const jobsObj = require('./jobText');
var Apogee = jobsObj.jobs.Apogee;
var TTNI = jobsObj.jobs.TTNI;
var Telus = jobsObj.jobs.Telus;


class Employment extends Component {

    constructor() {
        super();
        this.state = {
            center: {
                lat: 31.5493,
                lng: -97.1467
            }
        }
        this.changeCenter = this.changeCenter.bind(this);
    }

    changeCenter = (lat, lng) => {
        this.setState({
            center: {
                lat: lat,
                lng: lng
            }
        })
    }

    render() {
        return (
            <div className="employment">
                <div className="googleMap">
                    <GoogleMap mapCenter={this.state.center} />
                </div>
                <div className="jobLinks">
                    <BootstrapJobLink className="jobLink"
                        jobTitle={Telus.jobTitle}
                        company={Telus.company}
                        dates={Telus.dates}
                        jobDescription={Telus.jobDescription}
                        targId={"job1"}
                    />
                    <BootstrapJobLink className="jobLink"
                        jobTitle={TTNI.jobTitle}
                        company={TTNI.company}
                        dates={TTNI.dates}
                        jobDescription={TTNI.jobDescription}
                        targId="job2"
                    />
                    <BootstrapJobLink className="jobLink"
                        jobTitle={Apogee.jobTitle}
                        company={Apogee.company}
                        dates={Apogee.dates}
                        jobDescription={Apogee.jobDescription}
                        targId="job3"
                    // onClick={this.changeCenter(30.3867,-97.7098)}
                    />
                </div>
            </div>
        );
    }
}

export default Employment;