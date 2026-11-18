# Niya Baguisa’s Front End Portfolio 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
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
-Procreate

### What I learned

One thing that I am proud of is the edge scrolling part of my site. I wanted to implement some playful aspects to my portfolio and I thought that having a unique navigation system would help gamify it. The user is still able to scroll regularly though if they wanted. 

```js

//define boundary start point i.e. when to start scrolling
const edgeScrollSize = 20;
//track mouse position
const mousePos = useRef({x: null, y:null})

//update the state for the mouse position
function handleMouseMove(e){
  mousePos.current = ({x: e.clientX, y:e.clientY})
}  

function edgeScroll(){
  const {x, y} = mousePos.current;
  // if mouse is out of the window
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
  }}
 

```

### Continued development

In future projects I want to spend more time in the design phase of the project. In this project I had a lot of fun choosing color palettes, typefaces, hover states and the overall minimal but playful vibe of the site. I want to try to make a UI style guide or component library next time so that I can make it even easier to keep the design consistent across pages.

### Useful resources

- [ULTIMATE Camera System in Unity! (Move, Rotate, Zoom, Edge Scrolling, 3D and 2D)](https://www.youtube.com/watch?v=pJQndtJ2rk0) - This helped me understand the edge scrolling principles. This video was for creating different scrolling effects in Unity using C++, but the overall concept is easy to apply to web development.
- [How to Build an Accordion Menu in React from Scratch – No External Libraries Required](https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/) - This resource helped me with creating the accordion menu from scratch. It was a nice and simple reference.
- [(Creating a Hamburger Menu in React](https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb) - A walkthrough that I used to create my hamburger menu.
- [Drawing Lines](https://p5js.org/examples/Animation-And-Variables-Drawing-Lines/) - An example on the p5.js website showing a line drawing tool. This was really useful in helping me think through how to apply the same logic to the html canvas element.

### AI Collaboration

- Tool used: Claude
- How I used it:
- Generate edge scrolling icon
- Generate functionality for dog component

## Author

- Website - [Niya Baguisa](https://www.niyabaguisa.com)
- Github - [@NiyaBaguisa](https://github.com/NiyaBaguisa)
- LinkedIn - [Niya Baguisa](https://www.linkedin.com/in/niyayates/)

## Acknowledgments

[Underline animation](https://codepen.io/nefejames/pen/qEWBOBz?editors=1100)



