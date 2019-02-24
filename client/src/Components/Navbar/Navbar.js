import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <Link className="navbar-about" to="/about">
                    <p>About Me</p>
                </Link>
                <Link className="navbar-resume" to="/resume">
                    <p>Resume</p>
                </Link>
                <Link className="navbar-portfolio" to="/portfolio">
                    <p>Portfolio</p>
                </Link>
            </nav>
        );
    }
}

export default withRouter(Navbar);
