import React, { useState } from "react";
import "../../styles/Navbar.css";
import BoltIcon from '@mui/icons-material/Bolt';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ClearIcon from '@mui/icons-material/Clear';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <h1>
                <BoltIcon fontSize="large" />
                A . M
            </h1>
            <div className="toggle-icon" onClick={toggleMenu}>
                {isMenuOpen ? <ClearIcon /> : <FormatAlignRightIcon />}
            </div>
            <ul className={`list ${isMenuOpen ? "show" : ""}`}>
                <li><AnchorLink className="anchor" offset={() => -20} href="#home">Home</AnchorLink></li>
                <li><AnchorLink className="anchor" offset={() => -20} href="#about">About Me</AnchorLink></li>
                <li><AnchorLink className="anchor" offset={() => -20} href="#projects">Projects</AnchorLink></li>
                <li><AnchorLink className="anchor" offset={() => -20} href="#contact">Contact</AnchorLink></li>
            </ul>
        </div>
    );
}

export default Navbar;