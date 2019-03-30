import React, { Component } from "react";
import "./Skills.css";

const skillsObj = require('./skillsText');
var webDev1 = skillsObj.skills.languages.webDev1;
var webDev2 = skillsObj.skills.languages.webDev2;
var nonWeb = skillsObj.skills.languages.nonWeb;
var ide = skillsObj.skills.software.ide;
var os = skillsObj.skills.software.os;
var engineering = skillsObj.skills.software.engineering;
var networking = skillsObj.skills.networking;

class Skills extends Component {

    render() {
        return (
            <div className="skillsBlock">
                <div className="languages">
                    <div className="eline"><h3>Languages</h3></div>
                    <div className="eline">{webDev1.join(", ")}</div>
                    <div className="eline">{webDev2.join(", ")}</div>
                    <div className="eline">{nonWeb.join(", ")}</div>
                    <div className="eline"><h5>Software & Operating Systems</h5></div>
                    <div className="eline">{ide.join(", ")}</div>
                    <div className="eline">{os.join(", ")}</div>
                    <div className="eline"><h5>Networking</h5></div>
                    <div className="eline">{networking}</div>
                </div>

            </div>
        );
    }
}

export default Skills;