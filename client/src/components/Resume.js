import React from 'react';
import DownloadLink from "react-download-link";
// import ResumePreview from './ResumePreview';
import resume from '../images/Lindsay C. Reiner Web Dev Resume 12.1.2021.pdf';

export default function Resume() {
    return (
        <>

            <section id="resume">
                <div className="border1">
                    <div className="border2">
                        <div className="border3">
                            <h1 className="resTitle">Resume</h1>
                            <p>Download my <DownloadLink
                                label="resume"
                                filename={resume}
                                exportFile={() => "My cached data"} /> </p>

                            <h2 className="profTitle">Front-End Proficiencies</h2>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>responsive design</li>
                                <li>React</li>
                                <li>Material UI</li>
                                <li>Bootstrap</li>
                                <li>Handlebars</li>
                            </ul>

                            <h2 className="profTitle">Back-End Proficiencies</h2>
                            <ul>
                                <li>APIs</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>mySQL, Sequelize</li>
                                <li>noSQL, MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="resumePrev">
                    <ResumePreview />
                </div> */}
            </section>
        </>
    )
}
