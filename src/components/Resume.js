import React from 'react';
// import DownloadLink from "react-download-link";
// import ResumePreview from './ResumePreview';
import resume from '../images/lindsay_reiner_resume_5.13.2022.pdf';

export default function Resume() {
    return (
        <>

            <section id="resume">
                <div className="border1">
                    <div className="border2">
                        <div className="border3">
                            <h1 className="resTitle">Resume</h1>
                            <p>Download my <a href={resume} download>resume</a></p>
                            <div className="profCont">
                                <div className="frontEndProfCont">
                                    <h2 className="profTitle">🎨 Front End</h2>
                                    <h2 className="profHeader">Languages</h2>
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>JavaScript | ES5 & ES6</li>
                                    </ul>
                                    <h2 className="profHeader">Frameworks and Libraries</h2>
                                    <ul>
                                        <li>React</li>
                                        <li>Material UI</li>
                                        <li>Bootstrap</li>
                                    </ul>
                                </div>
                                <div className="backEndProfCont">
                                    <h2 className="profTitle">💻 Back End</h2>
                                    <h2 className="profHeader">Languages </h2>
                                    <ul>
                                        <li>Express</li>
                                        <li>Node</li>
                                        <li>SQL</li>
                                    </ul>

                                    <h2 className="profHeader">Platforms, Tools & Database Programs</h2>
                                    <ul>
                                        <li>APIs</li>
                                        <li>MySQL, Sequelize</li>
                                        <li>NoSQL, MongoDB</li>
                                        <li>Github</li>
                                        <li>VS Code</li>
                                    </ul>
                                </div>
                            </div>
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
