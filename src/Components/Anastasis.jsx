import React from "react";
import "../../styles/Anastasis.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Anastasis() {
    return (
        
        <div id="home" className="container">
            <h1><span>I'm Anastasis Maltsios,</span> fullstack Developer based in Greece</h1>
            <p>I'm a deveolper from Serres, with projects based both on backend and frontend. </p>
            <div> <AnchorLink offset={() => -20} href="#contact" className="anas-button">Contact</AnchorLink></div>
        </div>
    )
}

export default Anastasis;