import { useState } from "react";

export default function Hamburger() {
    const [open, setOpen] = useState(false);

    function toggleHamburger() {
        setOpen(!open);
    }

    return (
        <div className="hamburger-container">
            <div arial-label="Open Menu" aria-expanded={open} aria-controls="nav" className="hamburger-icon" onClick={toggleHamburger}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div aria-label="main navigation" className="nav" style={{ display: open ? 'block' : 'none' }}>
                <ul>
                    <li><a href="#home-page">Home</a></li>
                    <li><a href="#project-page">Projects</a></li>
                    <li><a href="#about-page">About Me</a></li>
                    <li><a href="https://drive.google.com/file/d/1fZsiZ9ndEguSP2BP4VNf_2NI_YTwCwl_/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            </div>
        </div>
    )
}