import {Project} from '../_interfaces/project.interface';
import {LOCAL_IMAGES} from './local-images.data';

export const PAPER_MARIO: Project = {
  name: 'Paper Mario - Fan Game',
  description: [
    'This is the project that got me into Computer Science.  Built in Game Maker 8.0 (now known as Game Maker Studio), this game has been a side project of mine since middle school. I was a big gamer as a child (still am!), but eventually it wasn\'t enough to just play games.  I wanted to MAKE one.  And my desire to learn to design my own game led me to Game Maker, where I wrote my first lines of code.  Little did I know, I was becoming a programmer.',
    'Over the years, I continued to add to it, refactor it, and apply what I learned in my studies to improve upon it. I also learned many things about graphic design, animation, level design, and user experience along the way. I\'ve spent so much time changing and improving upon it over the years, it seems like I may never finish it.  Sadly, I\'ve mostly moved my focus onto other projects.  In particular, I\'ve shifted most of my game development focus to Even Heroes Die, the beginnings of which are outlined above.  If this project was about recreating the games of my childhood, Even Heroes Die is about building upon them and the lessons they\'ve taught me to create something unique.',
  ],
  image: 'https://kmj22.github.io/portfolio-site/img/gameplay6.gif',
};

export const CURRENT_SITE: Project = {
  name: 'Personal Site - Version 2',
  description: [
    'This is inception!  I needed to start somewhere.  I made my last personal site about two years ago, before I had even really worked with JavaScript or CSS.  It was a good first try, but after taking the lead on Giftapart\'s front end Angular development for over a year, it was starting to look a little dated.  This project served as a great way to keep my skills sharp, and I think I\'ve achieved something a lot more modern-looking.  The site was built fully in Angular 7, with a little help from Angular Material for the mobile side-nav and fxLayout for its very useful responsive API and flexbox directives.  The site is fully responsive- no Bootstrap required!',
    'With a strong Computer Science / Programming background, I\'ve always wanted to improve on my design skills.  Given a design and enough time, I could recreate it.  But to create a design from nothing- and THEN replicate it- was a unique challenge that I struggled with.  The need for a design and utter lack of direction were my biggest hurdles, but I was able to surmount them and I\'m pleased with the result.',
    'My design isn\'t truly unique or groundbreaking, but it stands as a proud personal accomplishment.  My skills used to be limited to server side development: data structures, databases, and algorithms.  And while those are all still my favorite to work with, I can confidently say I\'ve grown.  I\'ve broadened my horizons and become a programmer that can develop with confidence on any part of the development stack.',
    'Also, I own kevynjaremko.com now.  That\'s pretty cool too.',
  ],
  image: LOCAL_IMAGES.personal_site_v2,
};

export const EVEN_HEROES_DIE: Project = {
  name: 'Even Heroes Die - Video Game Design',
  description: [
    'For my senior capstone project at NJIT, I designed a demo for a video game alongside four other students. Having had some past experience with game development, I encouraged my group to work on this project with me.  With two other programmers and two artists, we aimed to create a playable tech demo by the end of the semester.  When the time came to present our project at the capstone showcase, we had people lingering at our booth for so long that our evaluators could barely find a quiet time to grade it!',
    'At the time, we had hoped to build the demo into a fully fledged game, but unfortunately, the team parted ways after graduation.  That was the end of Even Heroes Die- until recently.  Now, with a stable career and some more experience under my belt, I\'ve started to rebuild the core engine for Even Heroes Die from the ground up.  Though it inherits many concepts from the original demo, this version is my own independent take on the project.',
    'Even Heroes Die is a 2D platforming video game in which the player starts off with a wide range of abilities, but slowly loses them over time due to illness.  The player can find ways to cope with this- maybe a jetpack will help with their waning jump ability, etc. This turns the typical rate of progression in video games on its head, and creates a unique kind of difficulty curve that stems from the player\'s ability to cope with their approaching demise.  Before they succumb to illness, the player must trek across a vast kingdom and venture into procedurally generated dungeons, budgeting their time between preparation and adventure in order to survive.',
  ],
  image: 'https://kmj22.github.io/portfolio-site/img/gameplay2-1.gif',
};

export const OLD_PORTFOLIO: Project = {
  name: 'Personal Site - Version 1',
  description: [
    'This was my first shot a creating a personal website.  Looking at it now, it seems a little dated, but I still feel it has some redeeming qualities.  The site is clean and well-organized.  As an employer. you can find out exactly what you need to know about me pretty quickly.  The site was made almost exclusively using plain old HTML and CSS.',
    'At the time, I was proud of my first forays into JavaScript by creating a reusable script to generate the navbar on each page.  It\'s not a very interactive site, so it was the most "actual coding" I was able to do.  As a programmer entering the world of HTML/CSS, I remember being baffled by the lack of an easy way to reuse certain pieces of HTML.  This would only make me appreciate the Angular Framework that much more once I finally learned it.',
    'I also utilized Bootstrap to make the site responsive and fully-functional on mobile devices.  I\'m most proud of the "Game Design" page, which showcases a lot of colorful screenshots from the games I\'ve been working on.  Even now, I\'d like to find a way to work some of those vibrant images into the design of this site.',
    'Although it\'s not the most impressive site to look at, this project holds significance as my first true solo web development project.  I became accustomed to the fundamentals of HTML, CSS, and a little JavaScript, and it was the first time I learned the importance of having a site that functions on a smaller screen.  If nothing else, this site stands as a benchmark against which I can measure my professional growth.  And comparing it to this website, I can confidently say that I\'ve grown a lot.'
  ],
  image: LOCAL_IMAGES.personal_site_v1,
};

export const PERSONAL_PROJECTS: Project[] = [
  CURRENT_SITE,
  EVEN_HEROES_DIE,
  OLD_PORTFOLIO,
  PAPER_MARIO,
];

export const PROJECT_SUMMARY: Project[] = [
  EVEN_HEROES_DIE,
  PAPER_MARIO,
];
