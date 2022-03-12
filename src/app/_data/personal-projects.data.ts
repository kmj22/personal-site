import {Project} from '../_interfaces/project.interface';
import {IMAGES} from './images.data';

export const SIMPLISAFE: Project = {
  name: 'SimpliSafe Social Distancing Sweater Donation Page',
  description: [
    'I worked with Promosis to build a donation page for SimpliSafe.  The donations were in support of the NeighborWorks America Rental Resilience Fund, which helps keep individuals and families economically impacted by COVID-19 housed through the pandemic.',
    'In exchange for donations, SimpliSafe offered a social distancing sweater with motion detectors that would allow the sweater to light up when others got just a bit too close.  I can\'t guarantee this page will stay up forever, but the page is (or was) located <a href="https://www.promosis.com/simplisafe/" target="_blank">here</a>.'
  ],
  image: IMAGES.simplisafe
};

export const POLOS: Project = {
  name: 'Polo\'s Bar & Grill - Site redesign',
  description: [
    'To keep my skills sharp, I redesigned the website for a local restaurant. My goal was to give the site a more modern feel while retaining the same info provided by the original.',
    'To accomplish this, I made a simple web crawler in python to help me pull menu images and information. You can view my updated take on the website <a href="https://kmj22.github.io/polos-v2/" target="_blank">here</a>, and the original site is located <a href="http://www.polosbarandgrill.com/" target="_blank">here</a>.'
  ],
  image: IMAGES.polos
};

export const BLOG: Project = {
  name: 'Game Dev & Web Design Blog',
  description: [
    'I built a blog in order to grow professionally, as well as document progress on the development of my indie game.',
    'The site is made with and managed through Wordpress, and it\'s being hosted on a DigitalOcean server.  The entire process was a great way to become familiar with Wordpress and reinforce some of the server ops skills I had picked up at Giftapart.',
    'I continue to post weekly status updates about the development of my game.  Check it out <a href="https://blog.kevynjaremko.com/" target="_blank">here</a>!'
  ],
  image: IMAGES.blog
};

export const GIFTAPART_PROJECT: Project = {
  name: 'Giftapart',
  description: [
    'I can\'t take the full credit for this one, but about 90% of the web frontend of Giftapart was developed by me (not to mention a majority of the backend as well).',
    'It\'s a fully fledged social media & ecommerce hybrid.  You can setup & share gift registries, plan events, and now, you can even shop internationally- I sound like my boss.  You can check out Giftapart <a href="https://giftapart.com/home" target="_blank">here</a>.',
    'While working on this project, I\'ve dabbled in just about everything.  Restful APIs, microservices, server ops & maintenance, database design, web development, SEO...  All the buzz words.'
  ],
  image: IMAGES.giftapart
};


export const PAPER_MARIO: Project = {
  name: 'Paper Mario - Fan Game',
  description: [
    'This is the project that made me a programmer.',
    'Built in Game Maker 8.0 (now known as Game Maker Studio), this game was a side project of mine throughout middle and high school. I was a big gamer as a child (still am!), but eventually it wasn\'t enough to just play games.',
    'I wanted to MAKE one.',
    'My desire to learn how to create my own game led me to Game Maker, where I wrote my first lines of code.  Little did I know, I was becoming a programmer.',
    'Over the years, I continued to add to it, refactor it, and apply what I learned in my studies to improve upon it. I also learned many things about graphic design, animation, level design, and user experience along the way. I\'ve spent so much time changing and improving upon it over the years, it seems like I may never finish it.',
    'Sadly, I\'ve shifted my focus to other projects- particularly Even Heroes Die, as outlined above.  If this project was about recreating the games of my childhood, Even Heroes Die is about building upon them to create something unique.',
  ],
  image: 'https://kmj22.github.io/portfolio-site/img/gameplay6.gif',
};

export const CURRENT_SITE: Project = {
  name: 'Personal Site - Version 2',
  description: [
    'I made my first attempt at a portfolio site in 2017, before I\'d spent much time working with JavaScript or CSS.', 'It was a good first try.',
    'But after taking the lead on Giftapart\'s frontend Angular development for over a year, it was starting to look a little dated.  This project was a great way to keep my skills sharp, and I think I\'ve achieved something a lot more modern-looking.',
    'The site was built fully in Angular 7, with a little help from Angular Material for the mobile side-nav and fxLayout for its very useful responsive API and flexbox directives.  It\'s fully responsive- no Bootstrap required!',
    'Coming from a strong Computer Science / programming background, I\'ve always wanted to improve on my design skills.  Given a design and enough time, I could recreate it.  But to create a design from nothing- and THEN replicate it- was a challenge.  The need for a design and utter lack of direction were my biggest hurdles, but I\'m pleased with what I came up with.',
    'The design isn\'t groundbreaking, but it stands as a proud personal achievement.  Looking back at my first personal site and then this one, I can confidently say I\'ve grown.',
    'Also, I own kevynjaremko.com now.  That\'s pretty cool too.',
  ],
  image: IMAGES.personal_site_v2,
};

export const EVEN_HEROES_DIE: Project = {
  name: 'Even Heroes Die - Video Game Design',
  description: [
    'For my senior project at NJIT, I created a demo for a video game with a group of four friends.  When we showcased our project, people were lingering at our booth for so long that the evaluators could barely find a moment to grade it!',
    'Sadly, after graduation, the demo never evolved into anything more.  Not until recently, that is.',
    'In my spare time, I\'ve been working on a revised take of the project.  Though it inherits a lot of the "soul" of the original demo, this version has evolved into something brand new.',
    'Even Heroes Die is a 2D platforming game about a hero who is slowly dying.  Unlike most other games, the difficulty will increase because of the player weakening, as opposed to the levels becoming harder or the enemies stronger.',
    'The hero will come across various cures to extend his life, but each cure comes with its own adverse side effects. Players must balance these stacking side effects and budget their time between preparation and exploration in order to survive.',
    'You can check out the demo <a href="https://kevynthejar.itch.io/even-heroes-die" target="_blank">here</a>!'
  ],
  // image: 'https://kmj22.github.io/portfolio-site/img/gameplay2-1.gif',
  image: IMAGES.gameplay,
};

export const OLD_PORTFOLIO: Project = {
  name: 'Personal Site - Version 1',
  description: [
    'This was my first stab a creating a personal website.  Looking at it now it seems a little dated, but it was an important first step.',
    'The site was made almost exclusively using plain old HTML and CSS.  I also used Bootstrap to make the site responsive and fully-functional on mobile devices.',
    'I remember being horrified at the thought of copying and pasting navbar HTML between every major page.  What if something on the navbar needed to change?',
    'Dumb question.  Everything changes.',
    'The solution was my first practical use of JavaScript.  I was able to create a reusable script that each page would call to generate the navbar.  This would later make me appreciate Angular components that much more, but I\'m glad I was able to find my own solution without using a framework.',
    'Although it\'s not the most impressive site to look at, this project was an important first step in my web development career.  Aside from smaller assignments in school, it was the first time I could get my hands dirty with HTML, CSS, and even a little JavaScript.  It was also my first time designing a mobile-friendly site.',
    // 'If nothing else, my old portfolio site stands as a benchmark that I can use to measure my professional growth.  And looking at it now, I can confidently say that I\'ve grown a lot.'
  ],
  image: IMAGES.personal_site_v1,
};

export const PERSONAL_PROJECTS: Project[] = [
  SIMPLISAFE,
  POLOS,
  EVEN_HEROES_DIE,
  BLOG,
  GIFTAPART_PROJECT,
  CURRENT_SITE,
  OLD_PORTFOLIO,
  PAPER_MARIO,
];

export const PROJECT_SUMMARY: Project[] = [
  EVEN_HEROES_DIE,
  PAPER_MARIO,
];
