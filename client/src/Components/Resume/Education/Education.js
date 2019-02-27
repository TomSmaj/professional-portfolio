import React, { Component } from "react";
import "./Education.css";

class Education extends Component {

    render() {
        return (
            <div>
                <div className="personalInfo">
                    <div className="line"><h2>Thomas Smajstrla</h2></div>
                    <div className="line">Thomas.Smajstrla@gmail.com</div>
                </div>

                <div className="schools">
                    <div className="line"><h3>Education</h3></div>
                    <div className="line">University of Texas at Austin - Bachelor of Science - Mechanical Engineering</div>
                    <div className="line">GPA: 2.94 - December 2015</div>
                    <div className="line">Elements of Computing Computer Science Certificate - UT Austin: Issued 12/2015</div>
                    <div className="line">Web Development Coding Bootcamp - UT Austin: 07/2018 - 01/2019</div>
                </div>
            </div>
        );
    }
}

export default Education;