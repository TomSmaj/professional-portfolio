import React, { Component } from "react";
import "./Employment.css";
import GoogleMap from "./GoogleMap";
import JobLink from "./JobLink";

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
                    <JobLink className="jobLink"
                        jobTitle={Telus.jobTitle}
                        company={Telus.company}
                        dates={Telus.dates}
                        jobDescription={Telus.jobDescription}
                    />
                    <JobLink className="jobLink"
                        jobTitle={TTNI.jobTitle}
                        company={TTNI.company}
                        dates={TTNI.dates}
                        jobDescription={TTNI.jobDescription}
                    />
                    <JobLink className="jobLink"
                        jobTitle={Apogee.jobTitle}
                        company={Apogee.company}
                        dates={Apogee.dates}
                        jobDescription={Apogee.jobDescription}
                    />
                </div>
            </div>
        );
    }
}

export default Employment;