import RainbowLetters from "./components/rainbowLetters"
export default function Home(){

    return(
        <div id="home-page">
            <div id="home-content">
                 <h2 id="greeting">Hi, I'm</h2>
            <div id="first-name">
<RainbowLetters word="Niya"/>
</div>
<div id="last-name">
                <RainbowLetters word="Baguisa"/>
            </div> 
            <div id="small-tag">
                <h2 id="home-title">Developer & Designer</h2>
           
                </div>              
            
            </div>
           <svg className="edge-icon" viewBox="0 0 60 48" width="60" height="48"
     fill="none" stroke="black" strokeWidth="3"
     strokeLinecap="round" strokeLinejoin="round">
  <rect x="3" y="4" width="52" height="38" rx="6" />
  <line className="edge-line" x1="55" y1="12" x2="55" y2="34"
        stroke="#70D6FF" strokeWidth="5" />
  <path className="edge-cursor"
        d="M41 15 V31 L45.5 26.5 L49 34 L52 32.5 L48.5 25 H54 Z"
        fill="black" />
</svg>
<p>Move cursor to the edges to navigate</p>
            <p>Click to drop treats &#129460;</p>
                   
        </div>

    )
}