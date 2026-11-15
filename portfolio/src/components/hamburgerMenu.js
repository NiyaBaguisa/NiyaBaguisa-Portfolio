import { useState } from "react";


export default function Hamburger(){
    const [open, setOpen] = useState(false);

    function toggleHamburger(){
        setOpen(!open);
    }

    return(
        <div className="hamburger-container">
            <div className="hamburger-icon" onClick={toggleHamburger}>
                <div></div>
                <div></div>
                <div></div>
            </div>
<div className="nav" style={{ display: open ? 'block': 'none'}}>
      <ul>
                <li><a href="#home-page">Home</a></li>
                <li><a href="#project-page">Projects</a></li>
                <li><a href="#about-page">About Me</a></li>
                <li><a href="">Resume</a></li>
            </ul>

</div>
          

        </div>
    )
}