import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

import 'normalize.css';
import '../styles/App.css'

import resume from '../images/Lindsay C. Reiner Web Dev Resume 12.1.2021.pdf';


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
                        <Link className="navBtnLink" to="/projects">Projects</Link>
                    </li>
                    <li className="navBtn">
                        <HashLink className="navBtnLink" to="#contact">Contact</HashLink>
                    </li>
                    <li className="navBtn">
                        <a className="navBtnLink" href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
