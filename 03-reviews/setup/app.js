// rewrite of the original app.js functionality
// includes next/back buttons, random profile button

// all profiles data
const profiles = [
  {
    "index": 1,
    "img_src": "https://i.imgur.com/DQwW4fK.png",
    "name": "graves",
    "title": "The Outlaw",
    "info": `Graves is a rugged gunslinger who excels in close-quarters combat. Armed with his trusty shotgun, he deals high burst damage and has the ability to dash and smoke enemies out of their cover.`,
    // "tier": "S"
  },
  {
    "index": 2,
    "img_src": "https://i.imgur.com/jpHzeSJ.png",
    "name": "tryndamere",
    "title": "The Barbarian King",
    "info": `Tryndamere is a relentless melee fighter who becomes more powerful as his health decreases. With his undying rage, he can deal devastating critical strikes and becomes immune to death for a short duration.`,
    // "tier": "A"
  },
  {
    "index": 3,
    "img_src": "https://i.imgur.com/EAK8AHG.png",
    "name": "fiora",
    "title": "The Grand Duelist",
    "info": `Fiora is a master duelist who excels in one-on-one combat. She possesses incredible speed and precision with her rapier, allowing her to parry enemy attacks and strike vital points for massive damage.`,
    // "tier": "A"
  },
  {
    "index": 4,
    "img_src": "https://i.imgur.com/uaOFjze.png",
    "name": "vladimir",
    "title": "The Crimson Reaper",
    "info": `Vladimir is a powerful mage who harnesses the dark magic of blood. He heals himself by damaging enemies, becoming increasingly resilient as the battle goes on. Combined with his crowd control abilities, he can turn the tide of team fights.
`,
    "tier": "B"
  },
]

// id (?), img, name, title, info 
const img = document.querySelector("#person-img");
const currName = document.querySelector(".author");
const title = document.querySelector(".job");
const info = document.querySelector("#info");

// buttons
const next_btn = document.querySelector(".next-btn")
const prev_btn = document.querySelector(".prev-btn")
const rand_btn = document.querySelector(".rand-btn")

next_btn.addEventListener('click', nextImg);
prev_btn.addEventListener('click', prevImg);
rand_btn.addEventListener('click', randImg);

let currIndex = 0;

function nextImg() {
  if (currIndex + 1 >= profiles.length) {
    currIndex = 0;
  } else {
    currIndex += 1;
  }
  loadProfile();
}

function prevImg() {
  if (currIndex - 1 < 0) {
    currIndex = profiles.length - 1
  } else {
    currIndex -= 1;
  }
  loadProfile();
}

function randImg() {
  currIndex = Math.floor(Math.random() * profiles.length);
  loadProfile();
}

function loadProfile() {
  const profile = profiles[currIndex];
  img.src = profile["img_src"];
  currName.textContent = profile["currName"];
  title.textContent = profile["title"];
  info.textContent = profile["info"];
  // img.classList.remove('tier-S');
  // img.classList.remove('tier-A');
  // img.classList.remove('tier-B');
  // img.classList.add(`tier-${profile["tier"]}`);
}

loadProfile();