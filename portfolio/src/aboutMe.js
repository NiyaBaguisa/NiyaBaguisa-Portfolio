
export default function About(){
    return(
        <div id="about-page">
            <h1>About Me</h1>
            <div className="about-content">
                <div className="col-1">
                    <div id="me">
                        <img src="./assets/me.gif" alt="A gif of Niya Baguisa"/>
                    </div>
                    <h2 class="colorful-name">
                        <span>N</span><span>i</span><span>y</span><span>a </span> 
                        <span>B</span><span>a</span><span>g</span><span>u</span><span>i</span><span>s</span><span>a</span></h2>
                    <p>Developer & Designer</p>
                  
                    <h2 id="contact-text">Contact Me!</h2>
                    <div className="icon-container">
                        <a href="https://github.com/NiyaBaguisa" target="_blank">
<img src="https://skillicons.dev/icons?i=github&perline=2"/>
                        </a>
<a href="https://www.linkedin.com/in/niyayates/" target="_blank">
<img src="https://skillicons.dev/icons?i=linkedin&perline=2"/>
</a>
<a href="https://niyayates1.artstation.com/" target="_blank">
<img  id="artstation-icon"src="https://www.artstation.com/assets/about/logo/logo-artstation-plain-f084302dffa448a1582a8f7afb171673d1a420f9eddd5baeacbdb88e65089599.png"/>
</a>

                    </div>
                    
                    

                </div>
                <div className="col-2">
                    <div className="text-block">
                        <p>Nice to meet you! I’m a front end and app developer who enjoys engaging in spaces where technology and art intersect. I mostly build with React and React Native to create fun memorable experiences for the user. </p>

<p>I graduated from Purdue University with a degree in Game Development and Design with a minor in Anthropology. My games background taught me how to build enjoyable, interactive experiences, and anthropology trained me to be empathetic to the people on the other side of the screen.</p>

<p>I enjoy pushing myself to learn and try new things. In my spare time I build apps and games, 3D model, draw, crochet or learn a new hobby. Currently I am honing my video editing skills!</p>
                    </div>
                    <h2 id="skills-text">Skills</h2>
                    <div className="skill-container">
<img src="https://skillicons.dev/icons?i=js,html,css,react,sqlite,ts,bootstrap,figma,p5js,ai,vscode,ps,blender,unity,unreal,cpp,py&perline=10"/>
                    </div>
                    <div className="resume-link">
<a href="https://drive.google.com/file/d/1fZsiZ9ndEguSP2BP4VNf_2NI_YTwCwl_/view?usp=sharing" target="_blank"><h2>View My Resume<span>&#8599;</span></h2>
    </a>
                    </div>
                    

                </div>
            </div>
           
            
        </div>

    )
}