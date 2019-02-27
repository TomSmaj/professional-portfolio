import React, { Component } from "react";
import "./Employment.css";
import GoogleMap from "./GoogleMap";
import JobLink from "./JobLink";
import BootstrapJobLink from "./BootstrapJobLink";

//importing job infor
const jobsObj = require('./jobText');
var Apogee = jobsObj.jobs.Apogee;
var TTNI = jobsObj.jobs.TTNI;
var Telus = jobsObj.jobs.Telus;


class Employment extends Component {

    render() {
        return (
            <div className="employment">
                <div className="googleMap">
                    <GoogleMap />
                </div>
                <div className="jobLinks">
                    <BootstrapJobLink className="jobLink"
                        jobTitle={Telus.jobTitle}
                        company={Telus.company}
                        dates={Telus.dates}
                        jobDescription={Telus.jobDescription}
                        targ="job1"
                    />
                    <BootstrapJobLink className="jobLink"
                        jobTitle={TTNI.jobTitle}
                        company={TTNI.company}
                        dates={TTNI.dates}
                        jobDescription={TTNI.jobDescription}
                        targ="job2"
                    />
                    <BootstrapJobLink className="jobLink"
                        jobTitle={Apogee.jobTitle}
                        company={Apogee.company}
                        dates={Apogee.dates}
                        jobDescription={Apogee.jobDescription}
                        targ="job3"
                    />
                </div>
            </div>
        );
    }
}

export default Employment;