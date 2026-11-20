# Niya Baguisa’s Front End Portfolio 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Link](#link)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot
<img width="1920" height="983" alt="portfolio-sr" src="https://github.com/user-attachments/assets/d949eebe-475e-42a6-9b77-899f1487a219" />

### Link
- Live Site URL: [www.niyabaguisa.com](https://niyabaguisa.com)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- CSS Grid
- [Html Canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas)
- [React](https://reactjs.org/) 
- Procreate

### What I learned

One thing that I am proud of is the edge scrolling part of my site. I wanted to implement some playful aspects to my portfolio and I thought that having a unique navigation system would help gamify it. The user can also navigate with the hamburger menu if the corner if they would like.
```js

//dictionary of neighbors each screen has and where
const neighbors={
  home:{left : "play", right: "about", down: "proj"},
  play: {right: "home"},
  about: {left: "home"},
  proj: {up:"home"}
}
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
```

### Continued development

In future projects I want to spend more time in the design phase of the project. In this project I had a lot of fun choosing color palettes, typefaces, hover states and the overall minimal but playful vibe of the site. I want to try to make a UI style guide or component library next time so that I can make it even easier to keep the design consistent across pages.

### Useful resources

- [ULTIMATE Camera System in Unity! (Move, Rotate, Zoom, Edge Scrolling, 3D and 2D)](https://www.youtube.com/watch?v=pJQndtJ2rk0) This helped me understand the edge scrolling principles. This video was for creating different scrolling effects in Unity using C++, but the overall concept is easy to apply to web development.
- [How to Build an Accordion Menu in React from Scratch – No External Libraries Required](https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/) This resource helped me with creating the accordion menu from scratch. It was a nice and simple reference.
- [(Creating a Hamburger Menu in React](https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb) A walkthrough that I used to create my hamburger menu.
- [Drawing Lines](https://p5js.org/examples/Animation-And-Variables-Drawing-Lines/) An example on the p5.js website showing a line drawing tool. This was really useful in helping me think through how to apply the same logic to the html canvas element.

### AI Collaboration

- Tool used: Claude
- How I used it:
- Generate edge scrolling icon
- Addition of elastic animation between screens
- Generate functionality for dog component
- Debugging
## Author

- Website - [Niya Baguisa](https://www.niyabaguisa.com)
- Github - [@NiyaBaguisa](https://github.com/NiyaBaguisa)
- LinkedIn - [Niya Baguisa](https://www.linkedin.com/in/niyayates/)

## Acknowledgments

[Underline animation](https://codepen.io/nefejames/pen/qEWBOBz?editors=1100)



