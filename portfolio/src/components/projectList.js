//project is an object made up of
// title = string
//tags = arr of strings
// desc = string
// links = [repo: string, site: string]
// images = [string]



export const projectList =[
    {title: "Yarn Stash",
        tags: ["Mobile App","React Native", "Expo", "TypeScript", "SQLite","REST APIs"],
        tagline: "An inventory tracker for fiber artists. Scan a skein’s barcode and the app fills in the yarn details for you.",
        desc: "I designed the whole app in Figma first, then built it to match, with both a light and a dark mode. The home page shows your yarn at a glance, and the Bins page lets you sort your stash into groups. Tapping a bin opens the list of yarn inside it. Each bin can also generate a printable QR code, so you can scan the label on a real storage bin and see what’s inside.",
        highlights:["Barcode scanning with the phone’s camera. A scan looks up the product in the UPCitemdb API, then uses that name to search Ravelry for more details, and fills in the form automatically","Forms built with React Hook Form, including validation and a chip-style input for fiber content","Conditional rendering on the Bins page, which switches between a grid of bin previews and the yarn list inside a selected bin"],
        bullet:"🧶",
        repo: "https://github.com/NiyaBaguisa/YarnStash",
        hero: {str:"./assets/yarn-stash/yarnStash-hero.png", type:"img"},
        images: [],
        isActive: false
    },
    {title: "Set!",
        tags: ["Web Game", "JavaScript", "HTML", "CSS Grid", "Chart.js"],
        tagline:"A silly web version of the card game 'Set!'",
        desc: "I play “Set!” on my phone a lot, and every version I found looked dull and old. I wanted one that actually looked fun, so I gave it a bright, inviting look with bold colors and bright shapes. I also added googly eyes to the cards that follow your mouse around the screen for an extra touch of goofy.",
        highlights: ["Generated the full 81-card deck, with every card a unique mix of shape, color, number, and shading","Wrote the set-checking logic: for each of the four features, the three cards must be all the same or all different","Drew a vector between each eye’s pupil and the mouse position, so the googly eyes track the cursor"],
        bullet:"🃏",
        repo: "https://github.com/NiyaBaguisa/Set-Game",
        site:"https://niyabaguisa.github.io/Set-Game/",
        hero: {str:"./assets/set-game/set-sr.mp4", type:"video"},
        images: [{str :"./assets/set-game/set-sr.mp4", type: "video"}],
        isActive: false,
    },{title: "I Am, Affirmations",
        tags: ["Web Game", "JavaScript", "HTML", "CSS", "Matter.js","p5.js"],
        tagline:"A Suika-style merging game where every tile is an affirmation, made to be a small positive break in your day.",
        desc: "I wanted this to leave people feeling better than when they started, so there’s no score or pressure. You click to drop a tile, and when two matching tiles touch they merge into the next affirmation, starting from the word “Nice”. The text in the middle of the screen updates to show the highest affirmation you’ve unlocked. The background is a slowly shifting animated gradient, and uplifting sound effects play as you merge. You can replay as many times as you want.",
        highlights:["Tile merge logic that combines two matching tiles into the next one across 10 different affirmation tiles","Used p5.js to generate the animated Perlin noise gradient behind the game","Game-over detection for when tiles stack past the line at the top"],
        bullet:"🩷",
        repo: "https://github.com/NiyaBaguisa/I-Am-Affirm",
        site: "https://niyabaguisa.github.io/I-Am-Affirm/",
        hero: {str:"./assets/affirm/affirm-sr.mp4", type:"video"},
        images: [{str:"./assets/affirm/noise.gif",  type:"img"}, {str: "./assets/affirm/affirm-ss.png", type: "img"}],
        isActive: false
    },{title: "Portfolio",
        tags: ["React", "JavaScript", "CSS"],
        tagline:"A playful personal site that shows my work and has a playground of small interactive activities.",
        desc: "I didn’t want a stiff, corporate portfolio, so I made the site feel like me through incorporating some drawings I made of my dog Tyson, a gif I made of myself, Use of my favorite colors in the palette and a bright minimal aesthetic that can be seen in a lot of my work.",
        highlights:["A responsive layout that works on desktop and mobile","Rainbow drawing activity: tracks mouse movement and draws on a canvas, cycles the color along each stroke, and fades the lines out after a set time","Edge scrolling: the view pans automatically when the cursor nears the edge of the screen"],
        bullet:"🐾",
        site: "this sites home",
        hero: {str:"./assets/portfolio/portfolio-sr.png", type:""},
        images: [],
        isActive: false
    },{title: "Hop to It",
        tags: ["CRUD", "React", "JavaScript", "HTML", "CSS", "localStorage", "Sprite Animation"],
        tagline:"A to-do list and pomodoro timer with a little frog who works and rests along with you.",
        desc: "I frequently use Pomodoro timers and to-do lists but I wanted to create an application that felt cute instead of corporate clean. So I drew a frog sprite in Aseprite that animates alongside the pomodoro timer. The to-do list sorts tasks by priority, and you can make your own categories with custom label colors. This project enabled me to practice CRUD principles in conjunction with React State management and localStorage.",
        highlights:["Tasks sort automatically by priority, with category filtering and custom category names and colors","Start, stop, and end controls for the pomodoro timer, with desktop alerts for each state change through the Notification API","Uncompleted tasks persist across sessions using localStorage"],
        bullet:"🐸",
        repo: "https://github.com/NiyaBaguisa/hopToIt",
        site: "https://niyabaguisa.github.io/hopToIt/",
        hero: {str:"./assets/hop/hop-sr.mp4", type:"video"},
        images: [],
        isActive: false
    },
]