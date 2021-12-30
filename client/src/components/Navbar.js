import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"


export default function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className="initials" to="/">LR</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <HashLink to="#contact">Contact</HashLink>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
