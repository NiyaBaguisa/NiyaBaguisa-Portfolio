import { useEffect, useRef } from "react";
import RainbowLetters from "./rainbowLetters";
export default function MiniGame(){
    const mousePos = useRef({x:null, y:null})
   const prevPos =useRef({x:0, y:0});
   const canvas = useRef(null);
    const strokeWeight =5;
    const idleTimer =useRef(null);
    const fadeTimer =useRef(null);
const timer = 1000; //3 sec

 //clear canvas

    useEffect(()=>{
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;

   
          //line color
        const gradient = ctx.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);

// 2. Add color stops (position between 0 and 1)
gradient.addColorStop(0, "#FFD670");
gradient.addColorStop(0.25, "#FF9770");
gradient.addColorStop(0.5, "#FF70A6");
gradient.addColorStop(0.75, "#9747FF");
gradient.addColorStop(1, "#70D6FF");

    function mouseMove(e){
        //set prev position
        prevPos.current ={...mousePos.current}
        //update current position
        mousePos.current = {x:e.clientX, y:e.clientY}
        //at the start there is nothing to connect to
        if(!prevPos){return;}
        
      //draw a line from the previous position to the current position
        ctx.lineWidth = strokeWeight;
         ctx.strokeStyle =gradient;
        ctx.lineCap="round";
        ctx.moveTo(prevPos.current.x, prevPos.current.y);
        ctx.lineTo(mousePos.current.x, mousePos.current.y);
        ctx.stroke();     
    }
    function clearCanvas(){
           document.getElementById("game-canvas").classList.add('faded');
    //fading timer
    fadeTimer.current =setTimeout(()=>{
        ctx.reset();
    mousePos.current= null},500);

        }
    function reset(){
 clearTimeout(idleTimer.current);
 clearTimeout(fadeTimer.current);
  document.getElementById("game-canvas").classList.remove('faded');
            idleTimer.current= setTimeout(clearCanvas, timer)
    }
           
    
   
//listent for mouse movement
    window.addEventListener('mousemove', mouseMove);
  window.addEventListener('mousemove', reset)
    return () =>{
        window.removeEventListener('mousemove', mouseMove);
         window.removeEventListener('mousemove', reset)
        clearTimeout(idleTimer);
        clearTimeout(idleTimer);
    } 
},[])
    return(<>
    <canvas ref={canvas} id="game-canvas" width={window.innerWidth} height={window.innerHeight}></canvas>
   <div id="drawing-inst">
<RainbowLetters word="Draw A Pretty Picture!"/>
   </div>
    
    </>)
        
}
