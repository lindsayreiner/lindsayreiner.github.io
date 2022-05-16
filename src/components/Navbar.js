import React from 'react';
import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

import LiIcon from "../images/LI-In-Bug.png";
import GitIcon from "../images/GitHub-Mark-64px.png";
import 'normalize.css';
import '../styles/App.css'

// const navBtn = document.getElementsByClassName('navBtnLink')

// const handleClick = () => {

//     this.addClass('active')
// }


export default function Navbar() {
    return (
        <div>

            <nav className="navbar">
                <p className="initials animation" to="/">LCR</p>
                <ul className="navBtnCont">

                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/">About</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/contact">Contact</NavLink>
                    </li>
                    <li className="navBtn">
                        <NavLink className="navBtnLink" to="/resume" >Resume</NavLink>
                    </li>
                </ul>
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/lindsay-c-reiner-97098a2a/" target="_blank"><img className="linkedIcon" src={LiIcon} alt="linkedin-icon" /></a>
                    <a href="https://github.com/lindsayreiner" target="_blank"><img className="gitIcon" src={GitIcon} alt="github-icon" /></a>
                </div>
            </nav >
        </div >
    )
}
