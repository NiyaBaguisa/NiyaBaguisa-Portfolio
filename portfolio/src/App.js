import { useEffect, useState, useRef } from 'react';

import './App.css';
import Home from './Home';
import Projects from './projects';
import About from './aboutMe';
import Playground from './playground';
import Hamburger from './components/hamburgerMenu';
import Tyson from './components/tyson';


function App() {
const edgeScrollSize = 20;
const mousePos = useRef({x: null, y:null});
//length of time to hold before scroll
const holdTime = 540;
//what edge was touched 
const [edge, setEdge] =useState(null);
//what screen are we currently on
const [screen, setScreen] = useState("home");
//dictionary of neighbors each screen has and where
const neighbors={
  home:{left : "play", right: "about", down: "proj"},
  play: {right: "home"},
  about: {left: "home"},
  proj: {up:"home"}
}

//update the state for the mouse position
function handleMouseMove(e){
  mousePos.current = ({x: e.clientX, y:e.clientY})
  //console.log(`X: ${e.clientX}, Y: ${e.clientY}`)
  edgeScroll();
}  

/*OLD
function edgeScroll(){
  const {x, y} = mousePos.current;
  // if mouse is within 10 pixels to the left 
  if( x=== null || y === null){
    //stop listening
  }
      // if mouse is within 10 pixels down
  else if(y > window.innerHeight -edgeScrollSize && window.scrollX > window.innerWidth - 40 && window.scrollX <window.innerWidth +40)
  {
    // move down (towards projects)
    window.scrollBy({
  top: 4,
  left: 0,
  behavior: "instant"
});
  }

  else if(x < edgeScrollSize && window.scrollY < window.innerHeight){
    // move left (towards playground)
    window.scrollBy({
  top: 0,
  left: -4,
  behavior: "instant"
});
  }

  // if mouse is within 10 pixels to the right 
  else if(x > window.innerWidth -edgeScrollSize&& window.scrollY < window.innerHeight){
    // move right (towards about)
    window.scrollBy({
  top: 0,
  left: 4,
  behavior: "instant"
});
  }

  // if mouse is within 10 pixels of the top 
  else if(y <edgeScrollSize){
    // move up (towards home)
    window.scrollBy({
  top: -4,
  left: 0,
  behavior: "instant"
});
  }
 
}
*/
 function edgeScroll(){
   const {x, y} = mousePos.current;

   //at first the mouse isn't within an edge;
  let currentEdge = null;

  //determine what edge the cursor is at
  // move left (towards playground)
  if(x < edgeScrollSize){
    currentEdge = "left";
  }else if(x > window.innerWidth -edgeScrollSize){
     // move right (towards about)
    currentEdge = "right"
  }else if(y <edgeScrollSize){
    // if mouse is within 10 pixels of the top , move up towards home
    currentEdge ="up"
  }else if(y > window.innerHeight -edgeScrollSize){
    //move down towards projects
  
    currentEdge ="down"
  }

  //only move screens when the edge changes
 if(currentEdge == edge){
return;
 }else{
  setEdge(currentEdge);
  // is the mouse on an edge? & does this screen have a neighbor on this edge
  const myNeighbor= neighbors[screen][currentEdge];
  if(currentEdge && myNeighbor){
setScreen(myNeighbor)

  }
 }

 }
 
useEffect(()=>{
//on mount naviagte to home
if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
window.scrollTo(window.innerWidth, 0);

  //on mount, listen for mouse movement
window.addEventListener('mousemove', handleMouseMove)
//window.addEventListener('mousemove', edgeScroll)
/*OLD
//ck animation frame and update position and scroll
let frame;
  function tick() {
    edgeScroll();                         
    frame = requestAnimationFrame(tick);  
  }
  frame = requestAnimationFrame(tick); */
 return () => window.removeEventListener('mousemove', handleMouseMove);
  },[screen])

//translate the viewport camera based on what screen we are on
let translateX =0;
let translateY =0;
if(screen === "proj"){
  translateX = 0;
  translateY = -100;
}else if(screen === "play")
{
  translateX= 100;
  translateY= 0;}
else if(screen === "about"){
translateX = -100;
translateY = 0;
}else{
  //its home
  //home - right
  if (edge==="right"){
translateX= -100;
translateY = 0;
  }else if(edge === "left"){
translateX= 100;
translateY = 0;
  }else if(edge === "up"){
translateX= 0;
translateY = 100;
  }
}

 return (
    <>
    <Hamburger/>
    
 
    <Tyson/>
    <div id="camera" style={{transform: `translate(${translateX}vw, ${translateY}vh)`}}>
      <div className="arrow right a" >
       <p className="about-label chevron-label">About Me</p>
      <span></span>
    </div>
      
<div className="arrow right ho" >
   
      <span></span>
    </div>
   
      <div className="arrow down">
         <p className="proj-label chevron-label">Projects</p>
      <span></span>
    </div>

      <div className="arrow up" >
         
      <span></span>
    </div>
    

      <div className="arrow left p" >
        <p className="play-label chevron-label">Playground</p>
      <span></span>
    </div>
    
    <div className="arrow left h">
      
      <span></span>
    </div>
   <div className="app">
      <Home/>
      <Projects/>
      <About/>
      <Playground/>
    </div>
    </div>
  
    </>
   
  );
}

export default App;
