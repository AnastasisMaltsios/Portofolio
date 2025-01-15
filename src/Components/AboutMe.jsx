import React from "react";
import "../../styles/AboutMe.css";
import profile from "../../src/assets/profile.png"

function AboutMe() {
    return (
        
        <div id="about" className="about-me">
            <h1>About Me</h1>
            <div className="about-container">
                <div className="ab-left">
                <img src={profile} alt=""/>
                </div>
                <div className="ab-right">
                    <p className="para">I'm a dynamic and dedicated fullstack Developer with a strong foundation in both front-end and back-end technologies. 
                    Proficient in a range of programming languages, frameworks, and tools.</p>
                    <p className="para">Also skilled in building end-to-end applications
and websites, from responsive UI design to database management. Collaborative and detail-oriented, with a passion for 
learning new technologies and solving complex problems.</p>

                <div className="top-skills">
                    <h3>My top skills include:</h3>
                    <p>HTML & CSS</p><hr style={{width: "85%"}}/>
                    <p>Javascript</p><hr style={{width: "75%"}}/>
                    <p>NodeJS & Express</p><hr style={{width: "70%"}}/>
                    <p>PostgreSQL & SQL</p><hr style={{width: "65%"}}/>
                    <p>ReactJS</p><hr style={{width: "70%"}}/>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default AboutMe;