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
  const mousePos = useRef({ x: null, y: null });
  //what edge was touched 
  const edge = useRef(null);
  //what screen are we currently on
  const [screen, setScreen] = useState("home");
  //dictionary of neighbors each screen has and where
  const neighbors = {
    home: { left: "play", right: "about", down: "proj" },
    play: { right: "home" },
    about: { left: "home" },
    proj: { up: "home" }
  }
  //length of time to hold before scroll
  const holdTime = 540;
  // how far the screen stretches while you hold an edge (in vw / vh)
  const pullOffset = {
    left: [5, 0],
    right: [-5, 0],
    up: [0, 5],
    down: [0, -5],
  };
  const [pull, setPull] = useState(null);
  const timer = useRef(null);



  useEffect(() => {
      //update the state for the mouse position
  function handleMouseMove(e) {
    mousePos.current = ({ x: e.clientX, y: e.clientY })
    //console.log(`X: ${e.clientX}, Y: ${e.clientY}`)
    edgeScroll();
  }


  function edgeScroll() {
    const { x, y } = mousePos.current;

    //at first the mouse isn't within an edge;
    let currentEdge = null;

    //determine what edge the cursor is at
    // move left (towards playground)
    if (x < edgeScrollSize) {
      currentEdge = "left";
    } else if (x > window.innerWidth - edgeScrollSize) {
      // move right (towards about)
      currentEdge = "right"
    } else if (y < edgeScrollSize) {
      // if mouse is within 10 pixels of the top , move up towards home
      currentEdge = "up"
    } else if (y > window.innerHeight - edgeScrollSize) {
      //move down towards projects

      currentEdge = "down"
    }

    //only move screens when the edge changes
    if (currentEdge === edge.current) {
      return;
    } else {
      // if the mouse moved preemptively cancel any pull in progress
      clearTimeout(timer.current);
      setPull(null);

      edge.current = currentEdge;
      // is the mouse on an edge? & does this screen have a neighbor on this edge
      const myNeighbor = neighbors[screen][currentEdge];
      if (currentEdge && myNeighbor) {
        setPull(currentEdge);
        timer.current = setTimeout(() => {
          setPull(null);
          setScreen(myNeighbor);
        }, holdTime);
      }
    }

  }
    //on mount naviagte to home
    //if ('scrollRestoration' in window.history) {
    //    window.history.scrollRestoration = 'manual';
    // }
    //window.scrollTo(window.innerWidth, 0);

    //on mount, listen for mouse movement
    window.addEventListener('mousemove', handleMouseMove)
    //window.addEventListener('mousemove', edgeScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer.current);
    }
  }, [screen])

  //translate the viewport camera based on what screen we are on
  let translateX = 0;
  let translateY = 0;

  const pullValuesX = (pull ? pullOffset[pull][0] : 0);
  const pullValuesY = (pull ? pullOffset[pull][1] : 0);
  if (screen === "proj") {
    translateX = -100 + pullValuesX;
    translateY = -100 + pullValuesY;
  } else if (screen === "play") {
    translateX = 0 + pullValuesX;
    translateY = 0 + pullValuesY;
  }
  else if (screen === "about") {
    translateX = -200 + pullValuesX;
    translateY = 0 + pullValuesY;
  } else if (screen === "home") {
    translateX = -100 + pullValuesX;
    translateY = 0 + pullValuesY;

  }


  const pullingMove = `transform ${holdTime}ms cubic-bezier(0.1, 0.7, 0.3, 1)`;   // slow, tense
  const snapMove = 'transform 900ms cubic-bezier(0.34, 1.56, 0.64, 1)';        // overshoots, then settles
  return (
    <>
      <Hamburger />


      <Tyson />
      <div id="camera-mask">
        <div id="camera" style={{ transform: `translate(${translateX}vw, ${translateY}vh)`, transition: pull ? pullingMove : snapMove }}>
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
            <Home />
            <Projects />
            <About />
            <Playground />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
