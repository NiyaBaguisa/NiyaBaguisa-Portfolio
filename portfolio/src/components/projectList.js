//project is an object made up of
// title = string
//tags = arr of strings
// desc = string
// links = [repo: string, site: string]
// images = [string]



export const projectList =[
    {title: "Yarn Stash",
        tags: ["Mobile App","React Native", "Expo", "TypeScript", "SQLite","REST APIs"],
        desc: "Your yarn stash, finally organized. Scan barcodes to add skeins, track what you own and how much is left, and browse it all in this app built for fiber artists.",
        repo: "https://github.com/NiyaBaguisa/YarnStash",
        hero: {str:"./assets/yarn-stash/yarnStash-hero.png", type:"img"},
        images: [],
        isActive: false
    },
    {title: "Set!",
        tags: ["Web Game", "JavaScript", "HTML", "CSS Grid", "Chart.js"],
        desc: "A silly web version of the card game 'Set!' I wanted to create a more appealing version of the Card Game 'Set!'. I play this game on my phone a lot however the apps that I used to play were very grey, dull, and boring to look at. It was a game and yet the vibe and aesthetic just weren't giving off 'Hey this game is really fun come try and play!' So, I wanted to create an inviting version of the game.",
        repo: "https://github.com/NiyaBaguisa/Set-Game",
        site:"https://niyabaguisa.github.io/Set-Game/",
        hero: {str:"./assets/set-game/set-sr.mp4", type:"video"},
        images: [{str :"./assets/set-game/set-sr.mp4", type: "video"}],
        isActive: false,
    },{title: "I Am, Affirmations",
        tags: ["Web Game", "JavaScript", "HTML", "CSS", "Matter.js","p5.js"],
        desc: "I wanted to create something that could be a positive break in someone’s day. I also had an interest in experimenting with the Matter.js library as well. So, I combined these two motivations into one project. A Suika game that could make you feel good.",
        repo: "https://github.com/NiyaBaguisa/I-Am-Affirm",
        site: "https://niyabaguisa.github.io/I-Am-Affirm/",
        hero: {str:"./assets/affirm/affirm-sr.mp4", type:"video"},
        images: [{str:"./assets/affirm/noise.gif",  type:"img"}, {str: "./assets/affirm/affirm-ss.png", type: "img"}],
        isActive: false
    },{title: "Portfolio",
        tags: ["React", "JavaScript", "CSS"],
        desc: "",
        site: "this sites home",
        hero: {str:"", type:""},
        images: [],
        isActive: false
    },{title: "Hop to It",
        tags: ["CRUD", "React", "JavaScript", "HTML", "CSS", "localStorage", "Sprite Animation"],
        desc: "A todo list and pomodoro timer. The motivation behind this project was to practice using CRUD principles, as well as working with React state management and components. I also used this project as an introduction to learning about local storage, and sprite animation using CSS. I was also able to build more confidence in working with time based functions.",
        repo: "https://github.com/NiyaBaguisa/hopToIt",
        site: "https://niyabaguisa.github.io/hopToIt/",
        hero: {str:"./assets/hop/hop-sr.mp4", type:"video"},
        images: [],
        isActive: false
    },
]