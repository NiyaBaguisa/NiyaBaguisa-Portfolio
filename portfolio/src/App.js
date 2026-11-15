import { useEffect, useRef } from 'react';

import './App.css';
import Home from './Home';
import Projects from './projects';
import About from './aboutMe';
import Playground from './playground';
import Hamburger from './components/hamburgerMenu';
import Tyson from './components/tyson';

//TO DO: RESTRICT MOUSE SCROLL SO IT DOESNT GO TO EMPY GRID SPACES
function App() {
  const edgeScrollSize = 20;
const mousePos = useRef({x: null, y:null})

//update the state for the mouse position
function handleMouseMove(e){
  mousePos.current = ({x: e.clientX, y:e.clientY})
  //console.log(`X: ${e.clientX}, Y: ${e.clientY}`)
}  



function edgeScroll(){
  const {x, y} = mousePos.current;
  // if mouse is within 10 pixels to the left 
  if( x=== null || y === null){
    //stop listening
  }
  else if(x < edgeScrollSize){
    // move left (towards playground)
    window.scrollBy({
  top: 0,
  left: -10,
  behavior: "instant"
});
  }
  // if mouse is within 10 pixels down
  else if(y > window.innerHeight -edgeScrollSize){
    // move down (towards projects)
    window.scrollBy({
  top: 10,
  left: 0,
  behavior: "instant"
});
  }
  // if mouse is within 10 pixels to the right 
  else if(x > window.innerWidth -edgeScrollSize){
    // move right (towards about)
    window.scrollBy({
  top: 0,
  left: 10,
  behavior: "instant"
});
  }
  // if mouse is within 10 pixels of the top 
  else if(y <edgeScrollSize){
    // move right (towards about)
    window.scrollBy({
  top: -10,
  left: 0,
  behavior: "instant"
});
  }
 
}
useEffect(()=>{
//on mount naviagte to home
window.scrollTo(100, 0);

  //on mount, listen for mouse movement
window.addEventListener('mousemove', handleMouseMove)
//ck animation frame and update position and scroll
let frame;
  function tick() {
    edgeScroll();                         
    frame = requestAnimationFrame(tick);  
  }
  frame = requestAnimationFrame(tick);
 return () => window.removeEventListener('mousemove', handleMouseMove);
  },[])


 

  return (
    <>
    <Hamburger/>
    
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
    <Tyson/>
     <div className="app">
      <Home/>
      <Projects/>
      <About/>
      <Playground/>
    </div>
    </>
   
  );
}

export default App;

//edge scrolling logic

// get width of screen
//get height of screen
// locate x, y of mouse

//if mouse is within 10 pixels to the right move to the right screen(About me)

//if mouse is within 10 pixels towards the bottom, moveto the down screen (projects)