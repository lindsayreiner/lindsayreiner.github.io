import React from 'react';
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

import LiIcon from "../images/LI-In-Bug.png";
import GitIcon from "../images/GitHub-Mark-64px.png";
import 'normalize.css';
import '../styles/App.css'




export default function Navbar() {
    return (
        <div>

            <nav className="navbar">
                <Link className="initials animation" to="/">LCR</Link>
                <ul className="navBtnCont">

                    <li className="navBtn">
                        <Link className="navBtnLink" to="/about">About</Link>
                    </li>
                    <li className="navBtn">
                        <Link className="navBtnLink" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="navBtn">
                        <Link className="navBtnLink" to="/contact">Contact</Link>
                    </li>
                    <li className="navBtn">
                        <Link className="navBtnLink" to="/resume">Resume</Link>
                    </li>
                </ul>
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/lindsay-c-reiner-97098a2a/" ><img className="linkedIcon" src={LiIcon} alt="linkedin-icon" /></a>
                    <a href="https://github.com/lindsayreiner" ><img className="gitIcon" src={GitIcon} alt="github-icon" /></a>
                </div>
            </nav >
        </div >
    )
}
