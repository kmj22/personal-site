(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_data/links.data.ts":
/*!*************************************!*\
  !*** ./src/app/_data/links.data.ts ***!
  \*************************************/
/*! exports provided: GIFTAPART_URL, LINKEDIN_URL, GITHUB_URL, EMAIL_URL, RESUME_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIFTAPART_URL", function() { return GIFTAPART_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINKEDIN_URL", function() { return LINKEDIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GITHUB_URL", function() { return GITHUB_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_URL", function() { return EMAIL_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESUME_URL", function() { return RESUME_URL; });
var GIFTAPART_URL = 'https://www.giftapart.com';
var LINKEDIN_URL = 'https://www.linkedin.com/in/kevyn-jaremko/';
var GITHUB_URL = 'https://github.com/kmj22';
var EMAIL_URL = 'mailto:kevynjaremko@gmail.com';
var RESUME_URL = 'https://pdfhost.io/v/Q5GJCEJRW_resume2019pdf.pdf';


/***/ }),

/***/ "./src/app/_data/local-images.data.ts":
/*!********************************************!*\
  !*** ./src/app/_data/local-images.data.ts ***!
  \********************************************/
/*! exports provided: LOCAL_IMAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_IMAGES", function() { return LOCAL_IMAGES; });
// const BASE_ROUTE = 'assets/images/';
//
// // This is pure laziness- add the base route to each url
// Object.keys(LOCAL).forEach(key => {
//   LOCAL[key] = BASE_ROUTE + LOCAL[key];
// });
var LOCAL_IMAGES = {
    personal_site_v1: 'https://i.imgur.com/iFRM4p5.png',
    personal_site_v2: 'https://i.imgur.com/48GDl9V.png',
    me: 'https://i.imgur.com/tMrpa1J.jpg',
    food: 'https://i.imgur.com/ENuxKzm.jpg',
    broadway: 'https://i.imgur.com/BiJ2mjF.jpg',
    boat: 'https://i.imgur.com/g1CJJ0Z.jpg',
    prague: 'https://i.imgur.com/37zgwty.jpg',
    munich: 'https://i.imgur.com/HraPKDG.jpg',
    appalachian: 'https://i.imgur.com/5B9RWw4.jpg',
    etail: 'https://i.imgur.com/MHrbxH9.jpg',
    gap_banner: 'https://i.imgur.com/Q73KTIK.jpg',
    hike: 'https://i.imgur.com/xCSgMYs.jpg',
    crepe: 'https://i.imgur.com/A5nMXIH.jpg',
    junk_art: 'https://i.imgur.com/UFkaBRG.jpg',
    paint: 'https://i.imgur.com/PJrGcuR.jpg',
    plane: 'https://i.imgur.com/TBdk0V9.jpg',
    triumph: 'https://i.imgur.com/qSc9zVR.jpg',
    gameplay: 'assets/images/ehd-gameplay.gif'
};


/***/ }),

/***/ "./src/app/_data/past-employers.data.ts":
/*!**********************************************!*\
  !*** ./src/app/_data/past-employers.data.ts ***!
  \**********************************************/
/*! exports provided: NJIT_LOGO, GIFTAPART, RESEARCH_ASSISTANT, ASTRODYNE, TEACHING_ASSISTANT, COLGATE, LSEA, EDUCATION, PAST_EMPLOYERS, PAST_EMPLOYERS_SUMMARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NJIT_LOGO", function() { return NJIT_LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GIFTAPART", function() { return GIFTAPART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESEARCH_ASSISTANT", function() { return RESEARCH_ASSISTANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASTRODYNE", function() { return ASTRODYNE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEACHING_ASSISTANT", function() { return TEACHING_ASSISTANT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLGATE", function() { return COLGATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LSEA", function() { return LSEA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDUCATION", function() { return EDUCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAST_EMPLOYERS", function() { return PAST_EMPLOYERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAST_EMPLOYERS_SUMMARY", function() { return PAST_EMPLOYERS_SUMMARY; });
var NJIT_LOGO = 'https://parcoffice.com/wp-content/uploads/2017/10/njit-logo-red-fullres.png';
var GIFTAPART = {
    name: 'Giftapart',
    start_date: new Date(2017, 8),
    description: [
        'If there’s one constant in software development (or, more profoundly, life), it’s change.  Nothing has proven this sentiment to me more than my time at Giftapart.',
        'Giftapart is an ecommerce startup that hopes to transform the way we gift.  I’ve been part of the team from the first line of code, originally hired as a backend Java/Spring developer.  Since then, I’ve taken on many different roles and challenges.',
        'Once the core of our application was coming along, I took the lead in developing our web frontend.  Most of what I know about CSS and JavaScript was learned on the job, not to mention the Angular Framework. ',
        'Each time I’ve gotten comfortable with the UI we’ve built, there has been a redesign.  Each time I look back, I know we’ve improved.  The revisions never stop, but they’re always for the better.',
        'I’m currently leading development of the frontend website and our backend APIs.  I’m also in charge of ensuring our users can search for products from over 100 different retailers, as well as keeping our servers up and running.',
        'There’s no shortage of things that can go wrong, which means every day has a new challenge to overcome.  I’d be lying if I said it was easy, but I’m learning a ton.'
    ],
    job_title: 'Director of Software Development / Software Engineer',
    image: 'https://cdn.newswire.com/files/x/f2/dd/7f2033d2f512149579942f3b5441.png',
    url_slug: 'giftapart'
};
var RESEARCH_ASSISTANT = {
    name: 'Professor Chris Ochs, NJIT',
    start_date: new Date(2016, 8),
    end_date: new Date(2017, 0),
    description: [
        'During my senior year at NJIT, my Data Structures & Algorithms professor gave me the opportunity to work on a Java application that creates abstraction networks from complex ontologies of medical data. ',
        'Following so far?  Me neither.',
        'I worked on a program that takes in big, scary graphs of medical data and outputs smaller, more readable graphs.',
        'I was tasked with updating this application to work with the newest version of the OWL API.  OWL is just a language for representing ontologies, or big hierarchies of data.',
        'I also helped build a feature to compare current versions of the ontology with previous versions- indicating any significant changes.',
        'This project gave me the opportunity to learn how to build off of someone else\'s code on a large, foreign project.  I also had to overcome the challenge of building something about a topic I knew very little about- medical ontologies.',
    ],
    job_title: 'Research Assistant for Independent Study',
    image: NJIT_LOGO,
    url_slug: 'research-assistant'
};
var ASTRODYNE = {
    name: 'Astrodyne TDI',
    start_date: new Date(2016, 5),
    end_date: new Date(2016, 8),
    description: [
        'Astrodyne TDI is a power-supply company- I worked for their IT Team to build software to support other Astrodyne employees.',
        'For example, I built an inventory management system that acted as an interface between other employees and the company database. I also rebuilt a lot of the company\'s legacy software from the ground up, bringing the applications into the "modern age" by recreating them in C#. ',
        'This internship gave me the important responsibility of developing software to be used by others to perform real business tasks- one of my first times doing so in my career. It taught me to interface with clients, gather information about their needs for the project, and work with them when something doesn\'t go as expected.',
    ],
    job_title: 'Software Developer Intern',
    image: 'https://www.astrodynetdi.com/images/default-source/default-album/astrodyne-tdi---large-logoff40bdb052456b66b263ff0000e044c6.png?sfvrsn=5505d610_0',
    url_slug: 'astrodyne'
};
var TEACHING_ASSISTANT = {
    name: 'Professor Marvin Nakayama, NJIT',
    start_date: new Date(2016, 0),
    end_date: new Date(2016, 4),
    description: [
        'In my junior year at NJIT, after finishing Foundations of Computer Science II, my professor asked me to be the class’ teaching assistant in the following semester.',
        'Aside from answering questions and offering assistance, my main responsibility was to grade students\' "models of computation" projects.  These included designing and implementing DFAs (Deterministic Finite Automata) and PDAs (Pushdown Automata).',
        'My greatest challenge was evaluating these projects and providing feedback that was fair, constructive, and consistent - an experience that has been particularly helpful with my recent leadership responsibilities. I also had to parse students’ code for correctness in C, Java, and Python, which gave me experience in reading and understanding foreign code.'
    ],
    job_title: 'Teaching Assistant for Foundations of Computer Science II',
    image: NJIT_LOGO,
    url_slug: 'teaching-assistant'
};
var COLGATE = {
    name: 'Colgate Palmolive',
    start_date: new Date(2015, 5),
    end_date: new Date(2016, 0),
    description: [
        'I was a part of the finance division of Colgate’s Global Information Technology team.  I primarily worked with SAP, using a quirky, high-level programming language called ABAP.',
        'I learned the language entirely on the job, mostly using it to query Colgate\'s databases to generate business reports. Looking back at it now, it was very similar to using SQL queries, but at the time of this internship, I still hadn\'t taken any database courses at NJIT.  This gave me a great opportunity to learn how to express data queries.',
        'I also helped write a program that greatly increased productivity. Large spreadsheets of data needed to be formatted properly in order to be uploaded to SAP, and this translation was being done by hand. ',
        'Once I went through this process firsthand, I knew there had to be a better way.',
        'My mentor gave me the chance to make this process better as a side project.  By the end of my internship, in addition to my other responsibilities, I created an ABAP application to automate this process, saving my coworkers many hours of tedious work.',
    ],
    job_title: 'Global IT Intern',
    image: 'https://edgeconsultinginc.net/wp-content/uploads/2018/08/COLGATE-PALMOLIVE-CL-logo.png',
    url_slug: 'colgate'
};
var LSEA = {
    name: 'LS Engineering Associates Corporation',
    start_date: new Date(2014, 5),
    end_date: new Date(2014, 8),
    description: [
        'LS Engineering Associates Corporation is a civil engineering consulting firm. It was my first internship, during a time when I had very little programming experience- and no engineering experience.  So that was fun.',
        'Even so, I did my best to learn everything I could to lend a hand. I learned to use AutoCAD to trace drawings/blueprints, helped with a few site inspections, and made changes to the company website. At the time, the website was done in PHP, which- you guessed it- I knew nothing about.',
        'Luckily, I was able to grasp enough from the existing code to build off of it; things like additional menu options or extra pages were easy enough to figure out. ',
        'My takeaway lesson here was one of my most valuable ones.  I learned that being a good problem-solver isn’t about knowing how to do everything, but rather having the persistence and flexibility to master the skills needed for success.',
    ],
    job_title: 'Intern',
    image: 'http://www.lseacorp.com/assets/logo/logo-white.png',
    url_slug: 'lsea'
};
var EDUCATION = {
    name: 'New Jersey Institute of Technology',
    job_title: 'Albert Dorman Honors College (Summa Cum Laude)',
    description: ['I received my Bachelor of Science in Computer Science with a minor in Web & Information Systems.'],
    start_date: new Date(2013, 8),
    end_date: new Date(2017, 4),
    image: NJIT_LOGO,
    url_slug: 'njit'
};
var PAST_EMPLOYERS = [
    GIFTAPART,
    RESEARCH_ASSISTANT,
    ASTRODYNE,
    TEACHING_ASSISTANT,
    COLGATE,
    LSEA,
];
var PAST_EMPLOYERS_SUMMARY = [
    GIFTAPART,
    ASTRODYNE,
    RESEARCH_ASSISTANT,
    COLGATE,
    LSEA
];


/***/ }),

/***/ "./src/app/_data/personal-projects.data.ts":
/*!*************************************************!*\
  !*** ./src/app/_data/personal-projects.data.ts ***!
  \*************************************************/
/*! exports provided: PAPER_MARIO, CURRENT_SITE, EVEN_HEROES_DIE, OLD_PORTFOLIO, PERSONAL_PROJECTS, PROJECT_SUMMARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAPER_MARIO", function() { return PAPER_MARIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_SITE", function() { return CURRENT_SITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVEN_HEROES_DIE", function() { return EVEN_HEROES_DIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OLD_PORTFOLIO", function() { return OLD_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSONAL_PROJECTS", function() { return PERSONAL_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECT_SUMMARY", function() { return PROJECT_SUMMARY; });
/* harmony import */ var _local_images_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-images.data */ "./src/app/_data/local-images.data.ts");

var PAPER_MARIO = {
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
var CURRENT_SITE = {
    name: 'Personal Site - Version 2',
    description: [
        'I made my first attempt at a portfolio site in 2017, before I\'d spent much time working with JavaScript or CSS.', 'It was a good first try.',
        'But after taking the lead on Giftapart\'s frontend Angular development for over a year, it was starting to look a little dated.  This project was a great way to keep my skills sharp, and I think I\'ve achieved something a lot more modern-looking.',
        'The site was built fully in Angular 7, with a little help from Angular Material for the mobile side-nav and fxLayout for its very useful responsive API and flexbox directives.  It\'s fully responsive- no Bootstrap required!',
        'Coming from a strong Computer Science / programming background, I\'ve always wanted to improve on my design skills.  Given a design and enough time, I could recreate it.  But to create a design from nothing- and THEN replicate it- was a challenge.  The need for a design and utter lack of direction were my biggest hurdles, but I\'m pleased with what I came up with.',
        'The design isn\'t groundbreaking, but it stands as a proud personal achievement.  Looking back at my first personal site and then this one, I can confidently say I\'ve grown.',
        'Also, I own kevynjaremko.com now.  That\'s pretty cool too.',
    ],
    image: _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].personal_site_v2,
};
var EVEN_HEROES_DIE = {
    name: 'Even Heroes Die - Video Game Design',
    description: [
        'For my senior project at NJIT, I created a demo for a video game with a group of four friends.  When we showcased our project, people were lingering at our booth for so long that the evaluators could barely find a moment to grade it!',
        'Sadly, after graduation, the demo never evolved into anything more.  Not until recently, that is.',
        'In my spare time, I\'ve been working on a revised take of the project.  Though it inherits a lot of the "soul" of the original demo, this version has evolved into something brand new.',
        'Even Heroes Die is a 2D platforming game about a hero who is slowly dying.  Unlike most other games, the difficulty will increase because of the player weakening, as opposed to the levels becoming harder or the enemies stronger.',
        'The hero will come across various cures to extend his life, but each cure comes with its own adverse side effects. Players must balance these stacking side effects and budget their time between preparation and exploration in order to survive.',
    ],
    // image: 'https://kmj22.github.io/portfolio-site/img/gameplay2-1.gif',
    image: _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].gameplay,
};
var OLD_PORTFOLIO = {
    name: 'Personal Site - Version 1',
    description: [
        'This was my first stab a creating a personal website.  Looking at it now it seems a little dated, but it was an important first step.',
        'The site was made almost exclusively using plain old HTML and CSS.  I also used Bootstrap to make the site responsive and fully-functional on mobile devices.',
        'I remember being horrified at the thought of copying and pasting navbar HTML between every major page.  What if something on the navbar needed to change?',
        'Dumb question.  Everything changes.',
        'The solution was my first practical use of JavaScript.  I was able to create a reusable script that each page would call to generate the navbar.  This would later make me appreciate Angular components that much more, but I\'m glad I was able to find my own solution without using a framework.',
        'Although it\'s not the most impressive site to look at, this project was an important first step in my web development career.  Aside from smaller assignments in school, it was the first time I could get my hands dirty with HTML, CSS, and even a little JavaScript.  It was also my first time designing a mobile-friendly site.',
        'If nothing else, my old portfolio site stands as a benchmark that I can use to measure my professional growth.  And comparing it to this website, I can confidently say that I\'ve grown a lot.'
    ],
    image: _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].personal_site_v1,
};
var PERSONAL_PROJECTS = [
    CURRENT_SITE,
    EVEN_HEROES_DIE,
    OLD_PORTFOLIO,
    PAPER_MARIO,
];
var PROJECT_SUMMARY = [
    EVEN_HEROES_DIE,
    PAPER_MARIO,
];


/***/ }),

/***/ "./src/app/_data/self.data.ts":
/*!************************************!*\
  !*** ./src/app/_data/self.data.ts ***!
  \************************************/
/*! exports provided: PICTURES_OF_ME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURES_OF_ME", function() { return PICTURES_OF_ME; });
/* harmony import */ var _local_images_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-images.data */ "./src/app/_data/local-images.data.ts");

var PICTURES_OF_ME = [
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].food,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].broadway,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].boat,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].prague,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].munich,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].appalachian,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].etail,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].gap_banner,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].hike,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].crepe,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].junk_art,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].paint,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].plane,
    _local_images_data__WEBPACK_IMPORTED_MODULE_0__["LOCAL_IMAGES"].triumph
];


/***/ }),

/***/ "./src/app/_data/skills.data.ts":
/*!**************************************!*\
  !*** ./src/app/_data/skills.data.ts ***!
  \**************************************/
/*! exports provided: BACK_SKILLS, DATABASE_SKILLS, FRONT_SKILLS, OTHER_SKILLS, SKILL_SUMMARY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK_SKILLS", function() { return BACK_SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATABASE_SKILLS", function() { return DATABASE_SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FRONT_SKILLS", function() { return FRONT_SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTHER_SKILLS", function() { return OTHER_SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILL_SUMMARY", function() { return SKILL_SUMMARY; });
var BACK_SKILLS = [
    { name: 'Java', rating: 5 },
    { name: 'Spring Framework (Spring Boot)', rating: 4 },
    { name: 'JPA/Hibernate', rating: 4 },
    { name: 'Python', rating: 3 },
    { name: 'C#', rating: 4 },
    { name: 'C++', rating: 3 },
    { name: 'PHP', rating: 2.5 },
    { name: 'C', rating: 2 },
];
var DATABASE_SKILLS = [
    { name: 'SQL (Postgres, MySQL)', rating: 4 },
    { name: 'Relational Database Design', rating: 4 },
    { name: 'MongoDB', rating: 2.5 },
    { name: 'ElasticSearch', rating: 3 },
];
var FRONT_SKILLS = [
    { name: 'Angular(2+)', rating: 4.5 },
    { name: 'JavaScript / TypeScript', rating: 4 },
    { name: 'RxJS (Observables)', rating: 4 },
    { name: 'CSS', rating: 4 },
    { name: 'SASS/SCSS', rating: 3.5 },
    { name: 'HTML(5)', rating: 4.5 },
    { name: 'Bootstrap', rating: 3 },
    { name: 'jQuery', rating: 2 },
];
var OTHER_SKILLS = [
    { name: 'Game Maker Studio', rating: 5 },
    { name: 'AJAX/API Calls & JSON', rating: 5 },
    // {name: 'JSON', rating: 5},
    { name: 'Git (Version Control)', rating: 4 },
    { name: 'IntelliJ/Webstorm/Pycharm', rating: 4 },
    // {name: 'Webstorm', rating: 4},
    { name: 'Adobe Creative Suite', rating: 3.5 },
];
var SKILL_SUMMARY = [
    BACK_SKILLS[0],
    BACK_SKILLS[1],
    BACK_SKILLS[2],
    BACK_SKILLS[3],
    DATABASE_SKILLS[0],
    // DATABASE_SKILLS[1],
    // DATABASE_SKILLS[2],
    DATABASE_SKILLS[3],
    FRONT_SKILLS[0],
    FRONT_SKILLS[1],
    // FRONT_SKILLS[2],
    FRONT_SKILLS[3],
    FRONT_SKILLS[4],
    FRONT_SKILLS[5],
    // FRONT_SKILLS[6],
    OTHER_SKILLS[0],
];
var SKILL_COMPARATOR = function (s1, s2) { return s2.rating - s1.rating; };
BACK_SKILLS.sort(SKILL_COMPARATOR);
DATABASE_SKILLS.sort(SKILL_COMPARATOR);
FRONT_SKILLS.sort(SKILL_COMPARATOR);
OTHER_SKILLS.sort(SKILL_COMPARATOR);


/***/ }),

/***/ "./src/app/_directives/fade-in-on-scroll.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/_directives/fade-in-on-scroll.directive.ts ***!
  \************************************************************/
/*! exports provided: FadeInOnScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeInOnScrollDirective", function() { return FadeInOnScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FadeInOnScrollDirective = /** @class */ (function () {
    function FadeInOnScrollDirective(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.renderer.addClass(elRef.nativeElement, 'fade-in');
    }
    FadeInOnScrollDirective.prototype.ngAfterContentInit = function () {
        this.checkIfVisible();
    };
    FadeInOnScrollDirective.prototype.showNavbar = function (event) {
        this.checkIfVisible();
    };
    FadeInOnScrollDirective.prototype.checkIfVisible = function () {
        var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop; // Distance scrolled down on the page
        var elementY = 0; // Distance of the element from the top of the page
        var el = this.elRef.nativeElement;
        // Traverse upward through element's parents, combining their height
        // to calculate the full from top of page
        while (el) {
            elementY += (el.offsetTop - el.scrollTop + el.clientTop);
            el = el.offsetParent;
        }
        var windowHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        // If window is scrolled enough that element has entered view
        if (scrollHeight + windowHeight >= elementY) {
            // add class to show the element, animate its transition
            this.renderer.addClass(this.elRef.nativeElement, 'fade-in-show');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FadeInOnScrollDirective.prototype, "showNavbar", null);
    FadeInOnScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appFadeInOnScroll]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], FadeInOnScrollDirective);
    return FadeInOnScrollDirective;
}());



/***/ }),

/***/ "./src/app/_directives/image-thumbnail.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/_directives/image-thumbnail.directive.ts ***!
  \**********************************************************/
/*! exports provided: ImageThumbnailDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageThumbnailDirective", function() { return ImageThumbnailDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _media_modal_media_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media-modal/media-modal.component */ "./src/app/media-modal/media-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageThumbnailDirective = /** @class */ (function () {
    function ImageThumbnailDirective(elRef, renderer, dialog) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.dialog = dialog;
    }
    ImageThumbnailDirective.prototype.ngAfterContentInit = function () {
        this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
    };
    ImageThumbnailDirective.prototype.onClick = function () {
        var dialogRef = this.dialog.open(_media_modal_media_modal_component__WEBPACK_IMPORTED_MODULE_2__["MediaModalComponent"], {
            // width: '250px',
            data: {
                album: this.album,
                index: this.index,
            },
            panelClass: 'media-modal',
            backdropClass: 'media-modal-backdrop',
            maxWidth: '100vw',
            maxHeight: '100vh',
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ImageThumbnailDirective.prototype, "album", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ImageThumbnailDirective.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImageThumbnailDirective.prototype, "onClick", null);
    ImageThumbnailDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appImageThumbnail]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ImageThumbnailDirective);
    return ImageThumbnailDirective;
}());



/***/ }),

/***/ "./src/app/_pipes/loop-range.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/_pipes/loop-range.pipe.ts ***!
  \*******************************************/
/*! exports provided: LoopRangePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoopRangePipe", function() { return LoopRangePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoopRangePipe = /** @class */ (function () {
    function LoopRangePipe() {
    }
    LoopRangePipe.prototype.transform = function (value, startAt) {
        if (startAt === void 0) { startAt = 0; }
        if (!value) {
            value = 0;
        }
        var arr = [];
        for (var i = 0; i < value; i++) {
            arr.push(i + startAt);
        }
        return arr;
    };
    LoopRangePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'loopRange'
        })
    ], LoopRangePipe);
    return LoopRangePipe;
}());



/***/ }),

/***/ "./src/app/about-page/about-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-page\">\r\n\r\n  <app-page-banner title=\"About Me\" subtitle=\"A little more about my life.\"></app-page-banner>\r\n\r\n  <div class=\"panel\" appFadeInOnScroll>\r\n    <div class=\"panel-header\">My Story</div>\r\n    <div class=\"panel-content\">\r\n      <div class=\"summary body-text\">\r\n        <p>\r\n          I've been a programmer since I was in middle school- but I didn't realize that until much later.\r\n        </p>\r\n\r\n        <p>\r\n          In 8th grade, I became fascinated with the idea of creating my own video game. I had no\r\n          programming experience, but I found a tool online called Game Maker. The program had a drag-and-drop interface\r\n          to help non-programmers get started, but every command had a \"Game Maker Language\" equivalent. As I transitioned between the two, I began to inadvertently learn some of\r\n          the fundamentals of programming.\r\n        </p>\r\n\r\n        <p>\r\n          In high school, I took a Computer Science elective and found that I recognized a lot of the core concepts. I\r\n          enjoyed applying the knowledge I had gained on my own, and I soon fell in love with the problem-solving,\r\n          puzzle-like nature of programming. This realization during my senior year is what made me decide to major in\r\n          Computer Science.\r\n        </p>\r\n\r\n        <p>\r\n          I've created this site as a portfolio to showcase my experiences,\r\n          with the hopes that I can continue to grow my list of projects and skills. Coming full circle, I've once\r\n          again taken up game design on the side with the hopes of eventually releasing my own game.\r\n        </p>\r\n\r\n        <p>\r\n          So if I'm not eating good food, coding at Giftapart, reading something programming-related, working out, or winning at Mario Kart, that's probably what I'm working on.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel\" appFadeInOnScroll>\r\n    <div class=\"panel-header\">Assorted Pictures</div>\r\n    <div class=\"panel-content\">\r\n      <div class=\"my-life\" [ngClass.gt-xs]=\"'lg'\">\r\n        <div class=\"life-photo\"\r\n             *ngFor=\"let img of SELF_PICS; let idx = index\"\r\n             [style.background-image]=\"'url(' + img + ')'\"\r\n             appImageThumbnail [album]=\"SELF_PICS\" [index]=\"idx\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-contact-me-panel></app-contact-me-panel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about-page/about-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/about-page/about-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Single property */\n.my-life {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n  align-items: stretch;\n  margin-bottom: 10px; }\n.my-life.lg {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 20px; }\n.life-photo {\n  padding-top: 100%;\n  border-radius: 15%;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcGFnZS9FOlxcVXNlcnNcXEtldnluXFxEb2N1bWVudHNcXHBlcnNvbmFsLXNpdGUvc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Fib3V0LXBhZ2UvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcYXBwXFxhYm91dC1wYWdlXFxhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGQSxvQkFBQTtBQ2hGQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTtBQUxyQjtJQVFJLDREQUE0RDtJQUM1RCxjQUFjLEVBQUE7QUFJbEI7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtcGFnZS9hYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJ1dHRvbigkY29sb3IpIHtcclxuICAkaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XHJcblxyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRyYW5zaXRpb246IC4ycyBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBqdW1ib3Ryb24oJGltZykge1xyXG4gIC8vIE1ha2VzIGltZyBibGFjayBhbmQgd2hpdGVcclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuXHJcbiAgYmFja2dyb3VuZDogLyogdG9wLCB0cmFuc3BhcmVudCByZWQsIGZha2VkIHdpdGggZ3JhZGllbnQgKi9cclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICByZ2JhKCMwMDAwMDAsIDAuNzUpLFxyXG4gICAgICAgIHJnYmEoIzAwMDAwMCwgMC43NSlcclxuICAgICksXHJcbiAgICAgIC8qIGJvdHRvbSBpbWFnZSAqL1xyXG4gICAgdXJsKCRpbWcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyAgUFJFQ0lTRSBDT05UUk9MIE9WRVIgUkVTUE9OU0lWRSBUWVBPR1JBUEhZIEZPUiBTQVNTXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEluZHJlayBQYWFzIEBpbmRyZWtwYWFzXHJcbi8vXHJcbi8vICBJbnNwaXJlZCBieSBNaWtlIFJpZXRobXVsbGVyJ3MgUHJlY2lzZSBjb250cm9sIG92ZXIgcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5XHJcbi8vICBodHRwOi8vbWFkZWJ5bWlrZS5jb20uYXUvd3JpdGluZy9wcmVjaXNlLWNvbnRyb2wtcmVzcG9uc2l2ZS10eXBvZ3JhcGh5L1xyXG4vL1xyXG4vLyAgQm9ycm93ZWQgYHN0cmlwLXVuaXRgIGZ1bmN0aW9uIGZyb20gSHVnbyBHaXJhdWRlbFxyXG4vLyAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9zYXNzL3N0cmlwLXVuaXQtZnVuY3Rpb24vXHJcbi8vXHJcbi8vICAwMi4wNC4yMDE4IFJlbW92ZSBgc2NyZWVuYCBrZXl3b3JkIGZyb20gbWVkaWEgcXVlcmllc1xyXG4vLyAgMTEuMDguMjAxNiBSZW1vdmUgcmVkdW5kYW50IGAmYCBzZWxmLXJlZmVyZW5jZVxyXG4vLyAgMzEuMDMuMjAxNiBSZW1vdmUgcmVkdW5kYW50IHBhcmVudGhlc2lzIGZyb20gb3V0cHV0XHJcbi8vICAwMi4xMC4yMDE1IEFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBwcm9wZXJ0aWVzXHJcbi8vICAyNC4wNC4yMDE1IEluaXRpYWwgcmVsZWFzZVxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKCN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqICgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCRudW1iZXIpIHtcclxuICBAaWYgdHlwZS1vZigkbnVtYmVyKSA9PSBcIm51bWJlclwiIGFuZCBub3QgdW5pdGxlc3MoJG51bWJlcikge1xyXG4gICAgQHJldHVybiAkbnVtYmVyIC8gKCRudW1iZXIgKiAwICsgMSk7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRudW1iZXI7XHJcbn1cclxuXHJcbi8qIFNpbmdsZSBwcm9wZXJ0eSAqL1xyXG4vL2h0bWwge1xyXG4vLyAgQGluY2x1ZGUgZmx1aWQtdHlwZShmb250LXNpemUsIDMyMHB4LCAxMzY2cHgsIDE0cHgsIDE4cHgpO1xyXG4vL31cclxuLy9cclxuLy8vKiBNdWx0aXBsZSBwcm9wZXJ0aWVzIHdpdGggc2FtZSB2YWx1ZXMgKi9cclxuLy9oMSB7XHJcbi8vICBAaW5jbHVkZSBmbHVpZC10eXBlKHBhZGRpbmctYm90dG9tIHBhZGRpbmctdG9wLCAyMGVtLCA3MGVtLCAyZW0sIDRlbSk7XHJcbi8vfVxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbi5zdW1tYXJ5IHtcclxuICAvL0BpbmNsdWRlIGZsdWlkLXR5cGUoZm9udC1zaXplLCAkeHMsICRsZywgMjBweCwgMjhweCk7XHJcbn1cclxuXHJcbi5teS1saWZlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAmLmxnIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxpZmUtcGhvdG8ge1xyXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/about-page/about-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_self_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/self.data */ "./src/app/_data/self.data.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.SELF_PICS = _data_self_data__WEBPACK_IMPORTED_MODULE_1__["PICTURES_OF_ME"];
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("About Me");
        this.metaService.addTags([
            {
                name: "description",
                content: "A little more about my life."
            },
        ]);
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.scss */ "./src/app/about-page/about-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _employment_history_page_employment_history_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employment-history-page/employment-history-page.component */ "./src/app/employment-history-page/employment-history-page.component.ts");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "./src/app/projects-page/projects-page.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"], pathMatch: 'full' },
    { path: 'resume', component: _employment_history_page_employment_history_page_component__WEBPACK_IMPORTED_MODULE_3__["EmploymentHistoryPageComponent"] },
    { path: 'projects', component: _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsPageComponent"] },
    { path: 'about', component: _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__["AboutPageComponent"] },
    { path: 'contact', component: _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_6__["ContactPageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenav>\r\n      <div class=\"mobile-header\">\r\n        <fa-icon [icon]=\"['fas', 'times']\" class=\"app-icon\"\r\n                 (click)=\"sidenav.toggle()\"></fa-icon>\r\n      </div>\r\n\r\n      <div class=\"sidenav-options\" (click)=\"sidenav.close()\">\r\n       <a routerLink=\"/\"><button mat-button class=\"sidenav-option\">Home</button></a>\r\n       <a routerLink=\"/resume\"><button mat-button class=\"sidenav-option\">Resume</button></a>\r\n       <a routerLink=\"/projects\"><button mat-button class=\"sidenav-option\">Projects</button></a>\r\n       <a routerLink=\"/about\"><button mat-button class=\"sidenav-option\">About Me</button></a>\r\n       <a routerLink=\"/contact\"><button mat-button class=\"sidenav-option\">Contact</button></a>\r\n      </div>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <div fxHide.gt-xs class=\"mobile-header\" (click)=\"sidenav.toggle()\">\r\n      <fa-icon [icon]=\"['fas', 'bars']\" class=\"app-icon\"></fa-icon>\r\n    </div>\r\n\r\n    <div [ngClass]=\"{'hidden': !showScrollButton}\" class=\"app-icon scroll-to-top\" (click)=\"scrollToTop()\">\r\n      <fa-icon [icon]=\"['fas', 'angle-double-up']\"></fa-icon>\r\n    </div>\r\n\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav {\n  width: 100vw;\n  height: 100vh; }\n\n.mobile-header {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 55px;\n  padding: 0 10px; }\n\n.mobile-header .app-icon {\n    font-size: 25px; }\n\n.sidenav-options {\n  padding: 0 10px; }\n\n.sidenav-options a {\n    color: inherit;\n    text-decoration: none; }\n\n.sidenav-option {\n  width: 100%;\n  font-size: 26px;\n  margin-bottom: 15px; }\n\n.scroll-to-top {\n  background: rgba(234, 234, 234, 0.75);\n  width: 1.45em;\n  height: 1.45em;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  z-index: 10;\n  transition: .1s opacity ease-in-out; }\n\n.scroll-to-top.hidden {\n    opacity: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFMakI7SUFRSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsZUFBZSxFQUFBOztBQURqQjtJQUlJLGNBQWM7SUFDZCxxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHFDQUF3QjtFQUN4QixhQUFhO0VBQ2IsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBRWYsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUVYLG1DQUFtQyxFQUFBOztBQWZyQztJQWlCSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tb2JpbGUtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAuYXBwLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGVuYXYtb3B0aW9ucyB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNpZGVuYXYtb3B0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnNjcm9sbC10by10b3Age1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoI0VBRUFFQSwgLjc1KTtcclxuICB3aWR0aDogMS40NWVtO1xyXG4gIGhlaWdodDogMS40NWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICB6LWluZGV4OiAxMDsgLy8ga2VlcCB0aGUgaWNvbiBvbiB0b3Agb2Ygb3RoZXIgZWxlbWVudHMgYXMgdGhleSBmYWRlIGludG8gdGhlIHBhZ2VcclxuXHJcbiAgdHJhbnNpdGlvbjogLjFzIG9wYWNpdHkgZWFzZS1pbi1vdXQ7XHJcbiAgJi5oaWRkZW4ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showScrollButton = false;
    }
    AppComponent.prototype.scrollToTop = function () {
        window.scrollTo(0, 0);
    };
    AppComponent.prototype.showNavbar = function (event) {
        var scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;
        this.showScrollButton = scrollHeight > 80;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "showNavbar", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module/material.module */ "./src/app/material-module/material.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faGithub */ "./node_modules/@fortawesome/free-brands-svg-icons/faGithub.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLinkedinIn */ "./node_modules/@fortawesome/free-brands-svg-icons/faLinkedinIn.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./star-rating/star-rating.component */ "./src/app/star-rating/star-rating.component.ts");
/* harmony import */ var _pipes_loop_range_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_pipes/loop-range.pipe */ "./src/app/_pipes/loop-range.pipe.ts");
/* harmony import */ var _employment_history_page_employment_history_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employment-history-page/employment-history-page.component */ "./src/app/employment-history-page/employment-history-page.component.ts");
/* harmony import */ var _contact_me_panel_contact_me_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact-me-panel/contact-me-panel.component */ "./src/app/contact-me-panel/contact-me-panel.component.ts");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "./src/app/projects-page/projects-page.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page-banner/page-banner.component */ "./src/app/page-banner/page-banner.component.ts");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./about-page/about-page.component */ "./src/app/about-page/about-page.component.ts");
/* harmony import */ var _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contact-page/contact-page.component */ "./src/app/contact-page/contact-page.component.ts");
/* harmony import */ var _directives_image_thumbnail_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_directives/image-thumbnail.directive */ "./src/app/_directives/image-thumbnail.directive.ts");
/* harmony import */ var _media_modal_media_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./media-modal/media-modal.component */ "./src/app/media-modal/media-modal.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faAngleDoubleUp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faAngleDoubleUp */ "./node_modules/@fortawesome/free-solid-svg-icons/faAngleDoubleUp.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faAngleDoubleUp__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faAngleDoubleUp__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _directives_fade_in_on_scroll_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_directives/fade-in-on-scroll.directive */ "./src/app/_directives/fade-in-on-scroll.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_9__["library"].add(_fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_10__["faGithub"], _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_11__["faLinkedinIn"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faAt"], // email
        _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faStar"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faStarHalf"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faBars"], // hamburger menu
        _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faTimes"], // x button, times is a weird name
        _fortawesome_free_solid_svg_icons_faAngleDoubleUp__WEBPACK_IMPORTED_MODULE_24__["faAngleDoubleUp"]);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_13__["StarRatingComponent"],
                _pipes_loop_range_pipe__WEBPACK_IMPORTED_MODULE_14__["LoopRangePipe"],
                _employment_history_page_employment_history_page_component__WEBPACK_IMPORTED_MODULE_15__["EmploymentHistoryPageComponent"],
                _contact_me_panel_contact_me_panel_component__WEBPACK_IMPORTED_MODULE_16__["ContactMePanelComponent"],
                _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsPageComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_18__["NavBarComponent"],
                _page_banner_page_banner_component__WEBPACK_IMPORTED_MODULE_19__["PageBannerComponent"],
                _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_20__["AboutPageComponent"],
                _contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_21__["ContactPageComponent"],
                _directives_image_thumbnail_directive__WEBPACK_IMPORTED_MODULE_22__["ImageThumbnailDirective"],
                _media_modal_media_modal_component__WEBPACK_IMPORTED_MODULE_23__["MediaModalComponent"],
                _directives_fade_in_on_scroll_directive__WEBPACK_IMPORTED_MODULE_25__["FadeInOnScrollDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _material_module_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
            ],
            entryComponents: [
                _media_modal_media_modal_component__WEBPACK_IMPORTED_MODULE_23__["MediaModalComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-me-panel/contact-me-panel.component.html":
/*!******************************************************************!*\
  !*** ./src/app/contact-me-panel/contact-me-panel.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-contact\">\n  <div class=\"contact-header\">Contact</div>\n\n  <div class=\"panel-content\">\n    <div class=\"contact-options\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\"\n         fxLayoutGap.gt-xs=\"40px\">\n      <a class=\"contact-item\" [href]=\"LINKEDIN\">\n        <fa-icon [icon]=\"['fab', 'linkedin-in']\" class=\"contact-icon\"></fa-icon>\n        <span class=\"contact-info\">Linkedin</span>\n      </a>\n      <a class=\"contact-item\" [href]=\"GITHUB\">\n        <fa-icon [icon]=\"['fab', 'github']\" class=\"contact-icon\"></fa-icon>\n        <span class=\"contact-info\">Github</span>\n      </a>\n      <a class=\"contact-item\" [href]=\"EMAIL\">\n        <fa-icon [icon]=\"['fas', 'at']\" class=\"contact-icon\"></fa-icon>\n        <span class=\"contact-info\">Email</span>\n      </a>\n    </div>\n\n    <div class=\"copyright ta-center\">© {{START_DATE.getFullYear()}}-{{END_DATE.getFullYear()}} Kevyn Jaremko. All rights reserved.</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact-me-panel/contact-me-panel.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/contact-me-panel/contact-me-panel.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Single property */\n.panel-contact {\n  background: #41404C; }\n.contact-header {\n  font-size: 40px;\n  text-align: center;\n  color: #FAFAFA; }\n.contact-options {\n  margin-bottom: 30px; }\na.contact-item {\n  display: flex;\n  align-items: center;\n  color: #FAFAFA;\n  text-decoration: none;\n  transition: .2s color ease-in-out;\n  cursor: pointer; }\na.contact-item:hover {\n    color: #3581B8; }\na.contact-item .contact-icon {\n    font-size: 28px;\n    margin-right: 10px; }\n.copyright {\n  color: #7C7C8B;\n  font-size: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1tZS1wYW5lbC9FOlxcVXNlcnNcXEtldnluXFxEb2N1bWVudHNcXHBlcnNvbmFsLXNpdGUvc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtbWUtcGFuZWwvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcYXBwXFxjb250YWN0LW1lLXBhbmVsXFxjb250YWN0LW1lLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0LW1lLXBhbmVsL0U6XFxVc2Vyc1xcS2V2eW5cXERvY3VtZW50c1xccGVyc29uYWwtc2l0ZS9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RkEsb0JBQUE7QUNwRkE7RUFDRSxtQkNNbUIsRUFBQTtBREhyQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0NIZSxFQUFBO0FETWpCO0VBQ0UsbUJBQ0YsRUFBQTtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUVuQixjQ2RlO0VEZWYscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUVqQyxlQUFlLEVBQUE7QUFSakI7SUFXSSxjQ2pCaUIsRUFBQTtBRE1yQjtJQWtCSSxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7QUFJdEI7RUFDRSxjQ2hDcUI7RURpQ3JCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtbWUtcGFuZWwvY29udGFjdC1tZS1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBidXR0b24oJGNvbG9yKSB7XHJcbiAgJGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG5cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xyXG5cclxuICBjb2xvcjogJGNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcjtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB0cmFuc2l0aW9uOiAuMnMgYmFja2dyb3VuZCBlYXNlLWluLW91dDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4ganVtYm90cm9uKCRpbWcpIHtcclxuICAvLyBNYWtlcyBpbWcgYmxhY2sgYW5kIHdoaXRlXHJcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcblxyXG4gIGJhY2tncm91bmQ6IC8qIHRvcCwgdHJhbnNwYXJlbnQgcmVkLCBmYWtlZCB3aXRoIGdyYWRpZW50ICovXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgcmdiYSgjMDAwMDAwLCAwLjc1KSxcclxuICAgICAgICByZ2JhKCMwMDAwMDAsIDAuNzUpXHJcbiAgICApLFxyXG4gICAgICAvKiBib3R0b20gaW1hZ2UgKi9cclxuICAgIHVybCgkaW1nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy9cclxuLy8gIFBSRUNJU0UgQ09OVFJPTCBPVkVSIFJFU1BPTlNJVkUgVFlQT0dSQVBIWSBGT1IgU0FTU1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBJbmRyZWsgUGFhcyBAaW5kcmVrcGFhc1xyXG4vL1xyXG4vLyAgSW5zcGlyZWQgYnkgTWlrZSBSaWV0aG11bGxlcidzIFByZWNpc2UgY29udHJvbCBvdmVyIHJlc3BvbnNpdmUgdHlwb2dyYXBoeVxyXG4vLyAgaHR0cDovL21hZGVieW1pa2UuY29tLmF1L3dyaXRpbmcvcHJlY2lzZS1jb250cm9sLXJlc3BvbnNpdmUtdHlwb2dyYXBoeS9cclxuLy9cclxuLy8gIEJvcnJvd2VkIGBzdHJpcC11bml0YCBmdW5jdGlvbiBmcm9tIEh1Z28gR2lyYXVkZWxcclxuLy8gIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvc2Fzcy9zdHJpcC11bml0LWZ1bmN0aW9uL1xyXG4vL1xyXG4vLyAgMDIuMDQuMjAxOCBSZW1vdmUgYHNjcmVlbmAga2V5d29yZCBmcm9tIG1lZGlhIHF1ZXJpZXNcclxuLy8gIDExLjA4LjIwMTYgUmVtb3ZlIHJlZHVuZGFudCBgJmAgc2VsZi1yZWZlcmVuY2VcclxuLy8gIDMxLjAzLjIwMTYgUmVtb3ZlIHJlZHVuZGFudCBwYXJlbnRoZXNpcyBmcm9tIG91dHB1dFxyXG4vLyAgMDIuMTAuMjAxNSBBZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgcHJvcGVydGllc1xyXG4vLyAgMjQuMDQuMjAxNSBJbml0aWFsIHJlbGVhc2VcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUoJHByb3BlcnRpZXMsICRtaW4tdncsICRtYXgtdncsICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcclxuICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgI3skcHJvcGVydHl9OiAkbWluLXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYygjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKiAoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06ICRtYXgtdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkbnVtYmVyKSB7XHJcbiAgQGlmIHR5cGUtb2YoJG51bWJlcikgPT0gXCJudW1iZXJcIiBhbmQgbm90IHVuaXRsZXNzKCRudW1iZXIpIHtcclxuICAgIEByZXR1cm4gJG51bWJlciAvICgkbnVtYmVyICogMCArIDEpO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkbnVtYmVyO1xyXG59XHJcblxyXG4vKiBTaW5nbGUgcHJvcGVydHkgKi9cclxuLy9odG1sIHtcclxuLy8gIEBpbmNsdWRlIGZsdWlkLXR5cGUoZm9udC1zaXplLCAzMjBweCwgMTM2NnB4LCAxNHB4LCAxOHB4KTtcclxuLy99XHJcbi8vXHJcbi8vLyogTXVsdGlwbGUgcHJvcGVydGllcyB3aXRoIHNhbWUgdmFsdWVzICovXHJcbi8vaDEge1xyXG4vLyAgQGluY2x1ZGUgZmx1aWQtdHlwZShwYWRkaW5nLWJvdHRvbSBwYWRkaW5nLXRvcCwgMjBlbSwgNzBlbSwgMmVtLCA0ZW0pO1xyXG4vL31cclxuIiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwibWl4aW5zXCI7XHJcblxyXG4ucGFuZWwtY29udGFjdCB7XHJcbiAgYmFja2dyb3VuZDogJGMtZGFyay1ncmF5O1xyXG59XHJcblxyXG4uY29udGFjdC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRjLXdoaXRlO1xyXG59XHJcblxyXG4uY29udGFjdC1vcHRpb25zIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4XHJcbn1cclxuXHJcbmEuY29udGFjdC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGNvbG9yOiAkYy13aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogLjJzIGNvbG9yIGVhc2UtaW4tb3V0O1xyXG5cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRjLW1haW4tYmx1ZTtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWluZm8ge1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29weXJpZ2h0IHtcclxuICBjb2xvcjogJGMtbWVkaXVtLWdyYXk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbiIsIi8vIE1lZGlhIFF1ZXJ5IEJyZWFrcG9pbnQgU2l6ZXNcclxuJHhzOiA0ODBweDtcclxuJHNtOiA3NjhweDtcclxuJG1kOiA5OTJweDtcclxuJGxnOiAxMjAwcHg7XHJcblxyXG4vLyBDb2xvcnNcclxuJGMtd2hpdGU6ICNGQUZBRkE7XHJcbiRjLWxpZ2h0LWdyYXk6ICNGNUY1RjU7XHJcbiRjLW1lZGl1bS1ncmF5OiAjN0M3QzhCO1xyXG4kYy1kYXJrLWdyYXk6ICM0MTQwNEM7XHJcbiRjLW1haW4tYmx1ZTogIzM1ODFCODtcclxuJGMtbWFpbi1waW5rOiAjRUU0MjY2O1xyXG4vLyRjLW1haW4tcGluazogI0ZGNTk2NDtcclxuLy8kYy1za3ktYmx1ZTogI0ZDQjA3RTtcclxuLy8kYy13aWxkLWJsdWU6ICMxQjQwNzk7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact-me-panel/contact-me-panel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/contact-me-panel/contact-me-panel.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactMePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMePanelComponent", function() { return ContactMePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_links_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/links.data */ "./src/app/_data/links.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactMePanelComponent = /** @class */ (function () {
    function ContactMePanelComponent() {
        this.START_DATE = new Date(2018, 11);
        this.END_DATE = new Date();
        this.LINKEDIN = _data_links_data__WEBPACK_IMPORTED_MODULE_1__["LINKEDIN_URL"];
        this.GITHUB = _data_links_data__WEBPACK_IMPORTED_MODULE_1__["GITHUB_URL"];
        this.EMAIL = _data_links_data__WEBPACK_IMPORTED_MODULE_1__["EMAIL_URL"];
    }
    ContactMePanelComponent.prototype.ngOnInit = function () {
    };
    ContactMePanelComponent.prototype.navigateTo = function (url) {
        var win = window.open(url, '_blank');
        if (win) {
            win.focus();
        }
    };
    ContactMePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-me-panel',
            template: __webpack_require__(/*! ./contact-me-panel.component.html */ "./src/app/contact-me-panel/contact-me-panel.component.html"),
            styles: [__webpack_require__(/*! ./contact-me-panel.component.scss */ "./src/app/contact-me-panel/contact-me-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactMePanelComponent);
    return ContactMePanelComponent;
}());



/***/ }),

/***/ "./src/app/contact-page/contact-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-page\">\r\n\r\n  <app-page-banner title=\"Contact Me\" subtitle=\"Reach out anytime. Let's see how I can help.\"></app-page-banner>\r\n\r\n  <div class=\"panel\" appFadeInOnScroll>\r\n    <div class=\"panel-header\">I can help.</div>\r\n    <div class=\"panel-content body-text\">\r\n      <p>I love new challenges.  Feel free to get in touch, and we can discuss your needs and work toward bringing your dream project to life.</p>\r\n\r\n      <p>For server-side development, I am most proficient with Java (specifically Spring/Hibernate) and Postgres.\r\n        For front-end development, I specialize in working with the Angular Framework. Of course, I am always open to working with\r\n        new technologies. You can learn more about my skills and experience <a routerLink=\"/resume\">here</a>.</p>\r\n\r\n      <p>Whether it's a new website, a server-side API, or something in between, I'm confident that I can help.</p>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-xs=\"row wrap\" fxLayoutAlign=\"center\" fxLayoutGap=\"20px\">\r\n      <a class=\"app-btn\" [href]=\"EMAIL\" target=\"_blank\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <span><fa-icon [icon]=\"['fas', 'at']\" class=\"contact-icon\"></fa-icon></span>\r\n          <span>EMAIL ME</span>\r\n        </div>\r\n      </a>\r\n\r\n      <a class=\"linkedin-btn\" [href]=\"LINKEDIN\" target=\"_blank\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <span><fa-icon [icon]=\"['fab', 'linkedin-in']\" class=\"contact-icon\"></fa-icon></span>\r\n          <span>CONNECT ON LINKEDIN</span>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <app-contact-me-panel></app-contact-me-panel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Single property */\n.contact-icon {\n  font-size: 22px;\n  margin-right: 10px; }\n.linkedin-btn {\n  border-radius: 45px;\n  display: inline-block;\n  height: 40px;\n  line-height: 40px;\n  color: #0077B5;\n  font-weight: bold;\n  border: 2px solid #0077B5;\n  padding: 5px 20px;\n  text-decoration: none;\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: .2s background ease-in-out; }\n.linkedin-btn:hover {\n    background: #0077B5;\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1wYWdlL0U6XFxVc2Vyc1xcS2V2eW5cXERvY3VtZW50c1xccGVyc29uYWwtc2l0ZS9zcmNcXHNjc3NcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvY29udGFjdC1wYWdlL0U6XFxVc2Vyc1xcS2V2eW5cXERvY3VtZW50c1xccGVyc29uYWwtc2l0ZS9zcmNcXGFwcFxcY29udGFjdC1wYWdlXFxjb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUZBLG9CQUFBO0FDcEZBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0FBR3BCO0VETkUsbUJBQW1CO0VBRW5CLHFCQUFxQjtFQUNyQixZQUphO0VBS2IsaUJBTGE7RUFPYixjQ0N1QjtFREF2QixpQkFBaUI7RUFDakIseUJDRHVCO0VERXZCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZixzQ0FBc0MsRUFBQTtBQ1R4QztJRFlJLG1CQ1hxQjtJRFlyQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXBhZ2UvY29udGFjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJ1dHRvbigkY29sb3IpIHtcclxuICAkaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XHJcblxyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRyYW5zaXRpb246IC4ycyBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBqdW1ib3Ryb24oJGltZykge1xyXG4gIC8vIE1ha2VzIGltZyBibGFjayBhbmQgd2hpdGVcclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuXHJcbiAgYmFja2dyb3VuZDogLyogdG9wLCB0cmFuc3BhcmVudCByZWQsIGZha2VkIHdpdGggZ3JhZGllbnQgKi9cclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICByZ2JhKCMwMDAwMDAsIDAuNzUpLFxyXG4gICAgICAgIHJnYmEoIzAwMDAwMCwgMC43NSlcclxuICAgICksXHJcbiAgICAgIC8qIGJvdHRvbSBpbWFnZSAqL1xyXG4gICAgdXJsKCRpbWcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyAgUFJFQ0lTRSBDT05UUk9MIE9WRVIgUkVTUE9OU0lWRSBUWVBPR1JBUEhZIEZPUiBTQVNTXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEluZHJlayBQYWFzIEBpbmRyZWtwYWFzXHJcbi8vXHJcbi8vICBJbnNwaXJlZCBieSBNaWtlIFJpZXRobXVsbGVyJ3MgUHJlY2lzZSBjb250cm9sIG92ZXIgcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5XHJcbi8vICBodHRwOi8vbWFkZWJ5bWlrZS5jb20uYXUvd3JpdGluZy9wcmVjaXNlLWNvbnRyb2wtcmVzcG9uc2l2ZS10eXBvZ3JhcGh5L1xyXG4vL1xyXG4vLyAgQm9ycm93ZWQgYHN0cmlwLXVuaXRgIGZ1bmN0aW9uIGZyb20gSHVnbyBHaXJhdWRlbFxyXG4vLyAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9zYXNzL3N0cmlwLXVuaXQtZnVuY3Rpb24vXHJcbi8vXHJcbi8vICAwMi4wNC4yMDE4IFJlbW92ZSBgc2NyZWVuYCBrZXl3b3JkIGZyb20gbWVkaWEgcXVlcmllc1xyXG4vLyAgMTEuMDguMjAxNiBSZW1vdmUgcmVkdW5kYW50IGAmYCBzZWxmLXJlZmVyZW5jZVxyXG4vLyAgMzEuMDMuMjAxNiBSZW1vdmUgcmVkdW5kYW50IHBhcmVudGhlc2lzIGZyb20gb3V0cHV0XHJcbi8vICAwMi4xMC4yMDE1IEFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBwcm9wZXJ0aWVzXHJcbi8vICAyNC4wNC4yMDE1IEluaXRpYWwgcmVsZWFzZVxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKCN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqICgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCRudW1iZXIpIHtcclxuICBAaWYgdHlwZS1vZigkbnVtYmVyKSA9PSBcIm51bWJlclwiIGFuZCBub3QgdW5pdGxlc3MoJG51bWJlcikge1xyXG4gICAgQHJldHVybiAkbnVtYmVyIC8gKCRudW1iZXIgKiAwICsgMSk7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRudW1iZXI7XHJcbn1cclxuXHJcbi8qIFNpbmdsZSBwcm9wZXJ0eSAqL1xyXG4vL2h0bWwge1xyXG4vLyAgQGluY2x1ZGUgZmx1aWQtdHlwZShmb250LXNpemUsIDMyMHB4LCAxMzY2cHgsIDE0cHgsIDE4cHgpO1xyXG4vL31cclxuLy9cclxuLy8vKiBNdWx0aXBsZSBwcm9wZXJ0aWVzIHdpdGggc2FtZSB2YWx1ZXMgKi9cclxuLy9oMSB7XHJcbi8vICBAaW5jbHVkZSBmbHVpZC10eXBlKHBhZGRpbmctYm90dG9tIHBhZGRpbmctdG9wLCAyMGVtLCA3MGVtLCAyZW0sIDRlbSk7XHJcbi8vfVxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbi5jb250YWN0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5saW5rZWRpbi1idG4ge1xyXG4gIEBpbmNsdWRlIGJ1dHRvbigjMDA3N0I1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contact-page/contact-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-page/contact-page.component.ts ***!
  \********************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_past_employers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/past-employers.data */ "./src/app/_data/past-employers.data.ts");
/* harmony import */ var _data_links_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_data/links.data */ "./src/app/_data/links.data.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.CURRENT_JOB = _data_past_employers_data__WEBPACK_IMPORTED_MODULE_1__["PAST_EMPLOYERS"].find(function (employer) { return !employer.end_date; });
        this.EMAIL = _data_links_data__WEBPACK_IMPORTED_MODULE_2__["EMAIL_URL"];
        this.LINKEDIN = _data_links_data__WEBPACK_IMPORTED_MODULE_2__["LINKEDIN_URL"];
    }
    ContactPageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Contact Me");
        this.metaService.addTags([
            {
                name: "description",
                content: "I love new challenges. Feel free to get in touch, and we can discuss your needs and work toward making your dream project come to life. Whether it's a new website, a server-side API, or something in between, I'm confident that I can help."
            },
        ]);
    };
    ContactPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/contact-page/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/contact-page/contact-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/employment-history-page/employment-history-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/employment-history-page/employment-history-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-page\">\n  <app-page-banner title=\"Employment History\" subtitle=\"Learn more about where I've been.\"></app-page-banner>\n\n  <div class=\"panel\" appFadeInOnScroll>\n    <div class=\"panel-header\">What I've Done So Far</div>\n\n    <div class=\"panel-content\">\n      <p class=\"body-text fnt-georgia page-description\">\n        I've listed my previous work experience below, as well as any noteworthy challenges, accomplishments, or takeaways that came with them.\n        For a more formal resume, <a [href]=\"RESUME\" target=\"_blank\">click here</a>.\n      </p>\n    </div>\n  </div>\n\n  <div class=\"panel\" appFadeInOnScroll>\n    <div class=\"panel-header\">My Skills</div>\n    <div class=\"panel-content\">\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\n        <div class=\"skill-section\" fxFlex.xs=\"1 1 100%\" fxFlex.gt-xs=\"1 1 45%\">\n          <div class=\"skill-header\">Backend Skills:</div>\n\n          <div class=\"skill-item\" *ngFor=\"let skill of BACK_SKILLS\">\n            <span class=\"skill-name\">{{skill.name}}</span>\n            <app-star-rating [rating]=\"skill.rating\"></app-star-rating>\n          </div>\n        </div>\n\n        <div class=\"skill-section\" fxFlex.xs=\"1 1 100%\" fxFlex.gt-xs=\"1 1 45%\">\n          <div class=\"skill-header\">Frontend Skills:</div>\n\n          <div class=\"skill-item\" *ngFor=\"let skill of FRONT_SKILLS\">\n            <span class=\"skill-name\">{{skill.name}}</span>\n            <app-star-rating [rating]=\"skill.rating\"></app-star-rating>\n          </div>\n        </div>\n\n        <div fxFlex.xs=\"1 1 100%\" fxFlex.gt-xs=\"1 1 45%\">\n          <div class=\"skill-header\">Database Skills:</div>\n\n          <div class=\"skill-item\" *ngFor=\"let skill of DATABASE_SKILLS\">\n            <span class=\"skill-name\">{{skill.name}}</span>\n            <app-star-rating [rating]=\"skill.rating\"></app-star-rating>\n          </div>\n        </div>\n\n        <div fxFlex.xs=\"1 1 100%\" fxFlex.gt-xs=\"1 1 45%\">\n          <div class=\"skill-header\">Other Skills</div>\n\n          <div class=\"skill-item\" *ngFor=\"let skill of OTHER_SKILLS\">\n            <span class=\"skill-name\">{{skill.name}}</span>\n            <app-star-rating [rating]=\"skill.rating\"></app-star-rating>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"panel\" appFadeInOnScroll>\n    <div class=\"panel-header\">Employers</div>\n    <div class=\"panel-content\">\n      <div class=\"job-history\" fxLayout=\"column\" fxLayoutGap=\"9vh\">\n\n        <div class=\"job\"\n             *ngFor=\"let employer of EMPLOYERS\" [id]=\"employer.url_slug\"\n             gdAreas=\"img title | img subtitle | img desc\"\n             gdAreas.xs=\"img | title | subtitle | desc\"\n             gdColumns=\"1fr 2fr\" gdColumns.xs=\"1fr\"\n             gdGap=\"18px 40px\"\n        >\n          <img gdArea=\"img\" class=\"job-img\" ngClass.gt-xs=\"lg\" [src]=\"employer.image\">\n\n          <div gdArea=\"title\" class=\"job-title\">{{employer.name}}</div>\n          <div gdArea=\"subtitle\" class=\"job-position\">{{employer.job_title}}, <i>{{employer.start_date | date:'MMM y'}} -\n            {{(employer.end_date | date:'MMM y') || 'Present'}}</i>\n          </div>\n          <div gdArea=\"desc\" class=\"job-description\">\n            <p *ngFor=\"let paragraph of employer.description\">{{paragraph}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"panel\" appFadeInOnScroll>\n    <div class=\"panel-header\">Education</div>\n    <div class=\"panel-content\">\n      <div class=\"job\"\n           gdAreas=\"img title | img subtitle | img desc\" gdAreas.xs=\"img | title | subtitle | desc\"\n           gdColumns=\"1fr 2fr\" gdColumns.xs=\"1fr\"\n           gdGap=\"18px 40px\"\n      >\n        <img gdArea=\"img\" class=\"job-img\" [src]=\"SCHOOL.image\">\n\n        <div gdArea=\"title\" class=\"job-title\">{{SCHOOL.name}}</div>\n        <div gdArea=\"subtitle\" class=\"job-position\">{{SCHOOL.job_title}}, <i>{{SCHOOL.start_date | date:'MMM y'}} -\n          {{(SCHOOL.end_date | date:'MMM y') || 'Present'}}</i>\n        </div>\n        <div gdArea=\"desc\" class=\"job-description\">\n          <p *ngFor=\"let paragraph of SCHOOL.description\">{{paragraph}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <app-contact-me-panel></app-contact-me-panel>\n</div>\n"

/***/ }),

/***/ "./src/app/employment-history-page/employment-history-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/employment-history-page/employment-history-page.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Single property */\n.page-description {\n  font-size: 20px; }\n@media (min-width: 480px) {\n    .page-description {\n      font-size: calc(20px + 8 * (100vw - 480px) / 720); } }\n@media (min-width: 1200px) {\n    .page-description {\n      font-size: 28px; } }\n.skill-header {\n  font-size: 20px;\n  color: #EE4266;\n  font-weight: bold;\n  margin-bottom: 10px; }\n.skill-section {\n  margin-bottom: 2vh; }\n.job {\n  max-width: 100vw; }\n.job .job-img {\n    max-height: 250px;\n    width: 100%;\n    box-sizing: border-box;\n    -o-object-fit: contain;\n       object-fit: contain;\n    box-shadow: 0 0 9px 1px rgba(234, 234, 234, 0.5);\n    border-radius: 30px;\n    padding: 20px 20px 15px;\n    mix-blend-mode: multiply; }\n.job .job-img.lg {\n      height: 250px; }\n.job .job-info {\n    text-align: left; }\n.job .job-title {\n    font-size: 20px;\n    line-height: 1;\n    font-weight: bold;\n    color: #3581B8; }\n@media (min-width: 480px) {\n      .job .job-title {\n        font-size: calc(20px + 5 * (100vw - 480px) / 512); } }\n@media (min-width: 992px) {\n      .job .job-title {\n        font-size: 25px; } }\n.job .job-position {\n    font-size: 18px;\n    line-height: 1;\n    color: #EE4266; }\n@media (min-width: 480px) {\n      .job .job-position {\n        font-size: calc(18px + 2 * (100vw - 480px) / 512); } }\n@media (min-width: 992px) {\n      .job .job-position {\n        font-size: 20px; } }\n.job .job-description {\n    font-size: 16px;\n    line-height: 1.5; }\n@media (min-width: 480px) {\n      .job .job-description {\n        font-size: calc(16px + 2 * (100vw - 480px) / 512); } }\n@media (min-width: 992px) {\n      .job .job-description {\n        font-size: 18px; } }\n.job .job-description p:first-child {\n      margin-top: 0; }\n.job .job-description p:last-child {\n      margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95bWVudC1oaXN0b3J5LXBhZ2UvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9lbXBsb3ltZW50LWhpc3RvcnktcGFnZS9FOlxcVXNlcnNcXEtldnluXFxEb2N1bWVudHNcXHBlcnNvbmFsLXNpdGUvc3JjXFxhcHBcXGVtcGxveW1lbnQtaGlzdG9yeS1wYWdlXFxlbXBsb3ltZW50LWhpc3RvcnktcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZW1wbG95bWVudC1oaXN0b3J5LXBhZ2UvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGQSxvQkFBQTtBQ3BGQTtFRDRESSxlQzNEMkMsRUFBQTtBRDhEN0M7SUMvREY7TURpRU0saURBQW9JLEVBQUEsRUMvRHpJO0FEbUVDO0lDckVGO01EdUVNLGVDdEUrQyxFQUFBLEVBQ3BEO0FBRUQ7RUFDRSxlQUFlO0VBQ2YsY0NHbUI7RURGbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxnQkFBZ0IsRUFBQTtBQURsQjtJQUlJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFtQjtPQUFuQixtQkFBbUI7SUFFbkIsZ0RBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFFdkIsd0JBQXdCLEVBQUE7QUFiNUI7TUFnQk0sYUFBYSxFQUFBO0FBaEJuQjtJQXFCSSxnQkFBZ0IsRUFBQTtBQXJCcEI7SUQ2Q0ksZUNwQjZDO0lBQzdDLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0NuQ2lCLEVBQUE7QUZ1RG5CO01DaERGO1FEa0RNLGlEQUFvSSxFQUFBLEVDckJ2STtBRHlCRDtNQ3RERjtRRHdETSxlQy9CaUQsRUFBQSxFQUlwRDtBQTdCSDtJRDZDSSxlQ2Q2QztJQUM3QyxjQUFjO0lBQ2QsY0N2Q2lCLEVBQUE7QUZzRG5CO01DaERGO1FEa0RNLGlEQUFvSSxFQUFBLEVDaEJ2STtBRG9CRDtNQ3RERjtRRHdETSxlQ3pCaUQsRUFBQSxFQUdwRDtBQWxDSDtJRDZDSSxlQ1Q2QztJQUM3QyxnQkFBZ0IsRUFBQTtBRFdsQjtNQ2hERjtRRGtETSxpREFBb0ksRUFBQSxFQ0p2STtBRFFEO01DdERGO1FEd0RNLGVDcEJpRCxFQUFBLEVBVXBEO0FBOUNIO01Bd0NNLGFBQWEsRUFBQTtBQXhDbkI7TUE0Q00sZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3ltZW50LWhpc3RvcnktcGFnZS9lbXBsb3ltZW50LWhpc3RvcnktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBidXR0b24oJGNvbG9yKSB7XHJcbiAgJGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG5cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xyXG5cclxuICBjb2xvcjogJGNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcjtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICB0cmFuc2l0aW9uOiAuMnMgYmFja2dyb3VuZCBlYXNlLWluLW91dDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4ganVtYm90cm9uKCRpbWcpIHtcclxuICAvLyBNYWtlcyBpbWcgYmxhY2sgYW5kIHdoaXRlXHJcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcblxyXG4gIGJhY2tncm91bmQ6IC8qIHRvcCwgdHJhbnNwYXJlbnQgcmVkLCBmYWtlZCB3aXRoIGdyYWRpZW50ICovXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgcmdiYSgjMDAwMDAwLCAwLjc1KSxcclxuICAgICAgICByZ2JhKCMwMDAwMDAsIDAuNzUpXHJcbiAgICApLFxyXG4gICAgICAvKiBib3R0b20gaW1hZ2UgKi9cclxuICAgIHVybCgkaW1nKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy9cclxuLy8gIFBSRUNJU0UgQ09OVFJPTCBPVkVSIFJFU1BPTlNJVkUgVFlQT0dSQVBIWSBGT1IgU0FTU1xyXG4vLyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBJbmRyZWsgUGFhcyBAaW5kcmVrcGFhc1xyXG4vL1xyXG4vLyAgSW5zcGlyZWQgYnkgTWlrZSBSaWV0aG11bGxlcidzIFByZWNpc2UgY29udHJvbCBvdmVyIHJlc3BvbnNpdmUgdHlwb2dyYXBoeVxyXG4vLyAgaHR0cDovL21hZGVieW1pa2UuY29tLmF1L3dyaXRpbmcvcHJlY2lzZS1jb250cm9sLXJlc3BvbnNpdmUtdHlwb2dyYXBoeS9cclxuLy9cclxuLy8gIEJvcnJvd2VkIGBzdHJpcC11bml0YCBmdW5jdGlvbiBmcm9tIEh1Z28gR2lyYXVkZWxcclxuLy8gIGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vc25pcHBldHMvc2Fzcy9zdHJpcC11bml0LWZ1bmN0aW9uL1xyXG4vL1xyXG4vLyAgMDIuMDQuMjAxOCBSZW1vdmUgYHNjcmVlbmAga2V5d29yZCBmcm9tIG1lZGlhIHF1ZXJpZXNcclxuLy8gIDExLjA4LjIwMTYgUmVtb3ZlIHJlZHVuZGFudCBgJmAgc2VsZi1yZWZlcmVuY2VcclxuLy8gIDMxLjAzLjIwMTYgUmVtb3ZlIHJlZHVuZGFudCBwYXJlbnRoZXNpcyBmcm9tIG91dHB1dFxyXG4vLyAgMDIuMTAuMjAxNSBBZGQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgcHJvcGVydGllc1xyXG4vLyAgMjQuMDQuMjAxNSBJbml0aWFsIHJlbGVhc2VcclxuLy9cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQG1peGluIGZsdWlkLXR5cGUoJHByb3BlcnRpZXMsICRtaW4tdncsICRtYXgtdncsICRtaW4tdmFsdWUsICRtYXgtdmFsdWUpIHtcclxuICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgI3skcHJvcGVydHl9OiAkbWluLXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4tdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogY2FsYygjeyRtaW4tdmFsdWV9ICsgI3tzdHJpcC11bml0KCRtYXgtdmFsdWUgLSAkbWluLXZhbHVlKX0gKiAoMTAwdncgLSAjeyRtaW4tdnd9KSAvICN7c3RyaXAtdW5pdCgkbWF4LXZ3IC0gJG1pbi12dyl9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbWF4LXZ3KSB7XHJcbiAgICBAZWFjaCAkcHJvcGVydHkgaW4gJHByb3BlcnRpZXMge1xyXG4gICAgICAjeyRwcm9wZXJ0eX06ICRtYXgtdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AZnVuY3Rpb24gc3RyaXAtdW5pdCgkbnVtYmVyKSB7XHJcbiAgQGlmIHR5cGUtb2YoJG51bWJlcikgPT0gXCJudW1iZXJcIiBhbmQgbm90IHVuaXRsZXNzKCRudW1iZXIpIHtcclxuICAgIEByZXR1cm4gJG51bWJlciAvICgkbnVtYmVyICogMCArIDEpO1xyXG4gIH1cclxuXHJcbiAgQHJldHVybiAkbnVtYmVyO1xyXG59XHJcblxyXG4vKiBTaW5nbGUgcHJvcGVydHkgKi9cclxuLy9odG1sIHtcclxuLy8gIEBpbmNsdWRlIGZsdWlkLXR5cGUoZm9udC1zaXplLCAzMjBweCwgMTM2NnB4LCAxNHB4LCAxOHB4KTtcclxuLy99XHJcbi8vXHJcbi8vLyogTXVsdGlwbGUgcHJvcGVydGllcyB3aXRoIHNhbWUgdmFsdWVzICovXHJcbi8vaDEge1xyXG4vLyAgQGluY2x1ZGUgZmx1aWQtdHlwZShwYWRkaW5nLWJvdHRvbSBwYWRkaW5nLXRvcCwgMjBlbSwgNzBlbSwgMmVtLCA0ZW0pO1xyXG4vL31cclxuIiwiQGltcG9ydCBcIm1peGluc1wiO1xyXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG4ucGFnZS1kZXNjcmlwdGlvbiB7XHJcbiAgQGluY2x1ZGUgZmx1aWQtdHlwZShmb250LXNpemUsICR4cywgJGxnLCAyMHB4LCAyOHB4KTtcclxufVxyXG5cclxuLnNraWxsLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAkYy1tYWluLXBpbms7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNraWxsLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcclxufVxyXG5cclxuLmpvYiB7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuXHJcbiAgLmpvYi1pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG5cclxuICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMXB4IHJnYmEoI2VhZWFlYSwgLjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAxNXB4O1xyXG5cclxuICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTsgLy8gcmVtb3ZlcyB3aGl0ZSBiYWNrZ3JvdW5kIGZvciBub24tdHJhbnNwYXJlbnQgaW1hZ2VzIChpbiBtb3N0IGJyb3dzZXJzKVxyXG5cclxuICAgICYubGcge1xyXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmpvYi1pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuam9iLXRpdGxlIHtcclxuICAgIEBpbmNsdWRlIGZsdWlkLXR5cGUoZm9udC1zaXplLCAkeHMsICRtZCwgMjBweCwgMjVweCk7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICRjLW1haW4tYmx1ZTtcclxuICB9XHJcbiAgLmpvYi1wb3NpdGlvbiB7XHJcbiAgICBAaW5jbHVkZSBmbHVpZC10eXBlKGZvbnQtc2l6ZSwgJHhzLCAkbWQsIDE4cHgsIDIwcHgpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjb2xvcjogJGMtbWFpbi1waW5rO1xyXG4gIH1cclxuICAuam9iLWRlc2NyaXB0aW9uIHtcclxuICAgIEBpbmNsdWRlIGZsdWlkLXR5cGUoZm9udC1zaXplLCAkeHMsICRtZCwgMTZweCwgMThweCk7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG5cclxuICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHA6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIE1lZGlhIFF1ZXJ5IEJyZWFrcG9pbnQgU2l6ZXNcclxuJHhzOiA0ODBweDtcclxuJHNtOiA3NjhweDtcclxuJG1kOiA5OTJweDtcclxuJGxnOiAxMjAwcHg7XHJcblxyXG4vLyBDb2xvcnNcclxuJGMtd2hpdGU6ICNGQUZBRkE7XHJcbiRjLWxpZ2h0LWdyYXk6ICNGNUY1RjU7XHJcbiRjLW1lZGl1bS1ncmF5OiAjN0M3QzhCO1xyXG4kYy1kYXJrLWdyYXk6ICM0MTQwNEM7XHJcbiRjLW1haW4tYmx1ZTogIzM1ODFCODtcclxuJGMtbWFpbi1waW5rOiAjRUU0MjY2O1xyXG4vLyRjLW1haW4tcGluazogI0ZGNTk2NDtcclxuLy8kYy1za3ktYmx1ZTogI0ZDQjA3RTtcclxuLy8kYy13aWxkLWJsdWU6ICMxQjQwNzk7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/employment-history-page/employment-history-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/employment-history-page/employment-history-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: EmploymentHistoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentHistoryPageComponent", function() { return EmploymentHistoryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_past_employers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/past-employers.data */ "./src/app/_data/past-employers.data.ts");
/* harmony import */ var _data_skills_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_data/skills.data */ "./src/app/_data/skills.data.ts");
/* harmony import */ var _data_links_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_data/links.data */ "./src/app/_data/links.data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmploymentHistoryPageComponent = /** @class */ (function () {
    function EmploymentHistoryPageComponent(titleService, metaService, route) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.route = route;
        this.FRONT_SKILLS = _data_skills_data__WEBPACK_IMPORTED_MODULE_2__["FRONT_SKILLS"];
        this.BACK_SKILLS = _data_skills_data__WEBPACK_IMPORTED_MODULE_2__["BACK_SKILLS"];
        this.DATABASE_SKILLS = _data_skills_data__WEBPACK_IMPORTED_MODULE_2__["DATABASE_SKILLS"];
        this.OTHER_SKILLS = _data_skills_data__WEBPACK_IMPORTED_MODULE_2__["OTHER_SKILLS"];
        this.EMPLOYERS = _data_past_employers_data__WEBPACK_IMPORTED_MODULE_1__["PAST_EMPLOYERS"];
        this.SCHOOL = _data_past_employers_data__WEBPACK_IMPORTED_MODULE_1__["EDUCATION"];
        this.RESUME = _data_links_data__WEBPACK_IMPORTED_MODULE_3__["RESUME_URL"];
    }
    EmploymentHistoryPageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Resume");
        this.metaService.addTags([
            {
                name: "description",
                content: "This page outlines my education and work experience, as well as any noteworthy challenges, accomplishments, and takeaways that came with them."
            },
        ]);
    };
    EmploymentHistoryPageComponent.prototype.ngAfterViewInit = function () {
        this.route.fragment.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (fragment) { return !!fragment; }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (fragment) { return document.querySelector('#' + fragment); }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (anchorEl) { return !!anchorEl; }))
            .subscribe(function (anchorEl) { return anchorEl.scrollIntoView(); });
    };
    EmploymentHistoryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employment-history-page',
            template: __webpack_require__(/*! ./employment-history-page.component.html */ "./src/app/employment-history-page/employment-history-page.component.html"),
            styles: [__webpack_require__(/*! ./employment-history-page.component.scss */ "./src/app/employment-history-page/employment-history-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EmploymentHistoryPageComponent);
    return EmploymentHistoryPageComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homepage\">\r\n  <app-page-banner title=\"Kevyn Jaremko\" [subtitleList]=\"SUBTITLES\"></app-page-banner>\r\n\r\n  <div class=\"panel\" appFadeInOnScroll>\r\n    <div class=\"panel-header\">Who Am I?</div>\r\n\r\n    <div class=\"panel-content\">\r\n      <div fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between\" fxLayoutGap=\"30px\"\r\n           fxLayout=\"column\" fxLayoutAlign=\"flex-start center\"\r\n      >\r\n        <img class=\"personal-pic\" [src]=\"SELF_PORTRAIT\" fxFlex=\"0 0 auto\">\r\n\r\n        <div class=\"about-me body-text\">\r\n          <p>Hi- I'm Kevyn. I do full stack software development.</p>\r\n\r\n          <p>I'm currently the lead software engineer of an upcoming social e-commerce platform,\r\n            <a [href]=\"GIFTAPART_URL\" target=\"_blank\">Giftapart</a>!\r\n          </p>\r\n\r\n          <p>\r\n            My greatest strength is server side development (particularly with Java/Spring/Hibernate), but more recently\r\n            I've become proficient with front-end development through extensive use of the Angular Framework. Now I'm\r\n            comfortable working just about anywhere on the development stack.\r\n          </p>\r\n\r\n          <p>I'm also an avid gamer and an enthusiast game developer. I go outside sometimes too- I especially enjoy\r\n            hiking in the warmer months.</p>\r\n\r\n          <p>\r\n            I love new challenges. Feel free to <a href=\"mailto:kevynjaremko@gmail.com\" target=\"_blank\">get in touch</a>,\r\n            and we can discuss your project needs. Whether it's a new website, a server-side API, or something in\r\n            between, I'm confident that I can help.\r\n          </p>\r\n\r\n          <p class=\"skills-header\">Here are some of the skills I've been using recently:</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"skill-items\" ngClass.gt-xs=\"lg\">\r\n        <div class=\"skill-item\" *ngFor=\"let skill of SKILLS\">\r\n          <span class=\"skill-name\">{{skill.name}}</span>\r\n          <app-star-rating [rating]=\"skill.rating\"></app-star-rating>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"see-more-wrapper\">\r\n        <a class=\"app-btn\" routerLink=\"/resume\">More about my skills</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel\" appFadeInOnScroll>\r\n    <div class=\"panel-header\">Giftapart, Lead Software Engineer</div>\r\n\r\n    <div class=\"panel-content\">\r\n      <img class=\"current-employer-img\" src=\"http://localhost:4200/assets/images/gapbanner.jpg\">\r\n\r\n      <div class=\"body-text\">\r\n        <p>\r\n          <a [href]=\"GIFTAPART_URL\" target=\"_blank\">Giftapart</a> is an ecommerce startup that hopes to transform\r\n          the way we gift. I’ve been part of the team from the first line of code, originally hired as a backend\r\n          Java/Spring developer. Since then, I’ve taken on many different roles and challenges.\r\n        </p>\r\n\r\n        <p>\r\n          I’m currently leading development of the frontend website and our backend APIs. I’m also in charge of ensuring\r\n          our users can search for products from over 100 different retailers, as well as keeping our servers up and\r\n          running.\r\n        </p>\r\n\r\n        <p>\r\n          There’s no shortage of things that can go wrong, which means every day has a new challenge to overcome. I’d be\r\n          lying if I said it was easy, but I’m learning a ton.\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"subtitle\">I've also worked with...</div>\r\n\r\n      <div class=\"employers-preview\">\r\n        <a *ngFor=\"let employer of EMPLOYERS | slice:1\" routerLink=\"/resume\" [fragment]=\"employer.url_slug\">\r\n          <div class=\"employer-preview\"><img [src]=\"employer.image\"></div>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"see-more-wrapper\">\r\n        <a class=\"app-btn\" routerLink=\"/resume\">See my full resume</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel\" appFadeInOnScroll>\r\n    <div class=\"panel-header\">Side Project- Video Game Design</div>\r\n\r\n    <div class=\"panel-content\">\r\n      <div class=\"project\">\r\n        <img class=\"project-img\" [src]=\"GAMEPLAY_IMG\">\r\n\r\n        <div class=\"body-text\">\r\n          <p>\r\n            Even Heroes Die is a 2D platforming game about a hero who is slowly dying. The hero will come across various\r\n            cures to extend his life, but each comes with its own adverse side effects. Players must balance these\r\n            stacking side effects and budget their time between preparation and exploration in order to survive.\r\n          </p>\r\n\r\n          <p>This is my own independent project I've been working on in my spare time. I'm developing it with Game Maker\r\n            Studio.</p>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <!--<div fxLayout fxLayoutGap=\"10px\">-->\r\n      <!--<div>more</div>-->\r\n      <!--<div>pics</div>-->\r\n      <!--<div>here</div>-->\r\n      <!--</div>-->\r\n\r\n      <div class=\"see-more-wrapper\">\r\n        <a class=\"app-btn\" routerLink=\"/projects\">More of my projects</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel\" appFadeInOnScroll>\r\n    <div class=\"panel-header\">Outside of the Office</div>\r\n\r\n    <div class=\"panel-content\">\r\n      <div class=\"my-life\" [ngClass.gt-xs]=\"'lg'\">\r\n        <div class=\"life-photo\"\r\n             *ngFor=\"let img of SELF_PICS; let idx = index\"\r\n             [style.background-image]=\"'url(' + img + ')'\"\r\n             appImageThumbnail [album]=\"SELF_PICS\" [index]=\"idx\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"see-more-wrapper\">\r\n        <a class=\"app-btn\" routerLink=\"/about\">Learn about me</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <app-contact-me-panel></app-contact-me-panel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Single property */\n.personal-pic {\n  border-radius: 50%;\n  height: 200px;\n  width: 200px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n.about-me p:first-child {\n  margin-top: 0; }\n.skills-header {\n  font-size: larger;\n  font-weight: bold;\n  color: #3581B8;\n  margin-top: 1.5em; }\n.subtitle {\n  font-size: 28px;\n  font-weight: bold;\n  color: #3581B8;\n  margin: 5vh 0 10px; }\n.employers-preview {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 15px;\n  margin-bottom: -5px; }\n.employers-preview a {\n    flex: 1; }\n.employers-preview .employer-preview {\n    margin-right: 15px;\n    margin-bottom: 15px; }\n.employer-preview {\n  box-shadow: 0 0 9px 1px rgba(234, 234, 234, 0.5);\n  border-radius: 30px;\n  padding: 20px 20px 15px;\n  flex: 1;\n  text-align: center;\n  cursor: pointer;\n  transition: box-shadow .3s; }\n.employer-preview:hover {\n    box-shadow: 0 0 9px 2px #eaeaea; }\n.employer-preview img {\n    mix-blend-mode: darken;\n    height: 50px; }\n@media (min-width: 480px) {\n      .employer-preview img {\n        height: calc(50px + 25 * (100vw - 480px) / 512); } }\n@media (min-width: 992px) {\n      .employer-preview img {\n        height: 75px; } }\n.current-employer-img {\n  display: block;\n  margin: 0 auto;\n  border-radius: 40px;\n  max-width: 100%;\n  width: 450px; }\n.see-more-wrapper {\n  margin-top: 5vh;\n  text-align: right; }\n.project-img {\n  display: block;\n  margin: 0 auto;\n  border-radius: 40px;\n  width: 100%; }\n.my-life {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 10px;\n  align-items: stretch;\n  margin-bottom: 10px; }\n.my-life.lg {\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 20px; }\n.life-photo {\n  padding-top: 100%;\n  border-radius: 15%;\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9ob21lcGFnZS9FOlxcVXNlcnNcXEtldnluXFxEb2N1bWVudHNcXHBlcnNvbmFsLXNpdGUvc3JjXFxhcHBcXGhvbWVwYWdlXFxob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZXBhZ2UvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGQSxvQkFBQTtBQ3BGQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTtBQUduQjtFQUVJLGFBQWEsRUFBQTtBQUlqQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0NSbUI7RURTbkIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNDZm1CO0VEZ0JuQixrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBRXZCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtBQU5yQjtJQVNJLE9BQU8sRUFBQTtBQVRYO0lBYUksa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0FBSXZCO0VBQ0UsZ0RBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFFdkIsT0FBTztFQUNQLGtCQUFrQjtFQUVsQixlQUFlO0VBQ2YsMEJBQTBCLEVBQUE7QUFUNUI7SUFXSSwrQkFBb0MsRUFBQTtBQVh4QztJQWVJLHNCQUFzQjtJREF0QixZQ0MwQyxFQUFBO0FERTVDO01DbEJGO1FEb0JNLCtDQUFvSSxFQUFBLEVDSHZJO0FET0Q7TUN4QkY7UUQwQk0sWUNWOEMsRUFBQSxFQUNqRDtBQUdIO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVksRUFBQTtBQUdkO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0FBR2I7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7QUFMckI7SUFRSSw0REFBNEQ7SUFDNUQsY0FBYyxFQUFBO0FBSWxCO0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJ1dHRvbigkY29sb3IpIHtcclxuICAkaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XHJcblxyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRyYW5zaXRpb246IC4ycyBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBqdW1ib3Ryb24oJGltZykge1xyXG4gIC8vIE1ha2VzIGltZyBibGFjayBhbmQgd2hpdGVcclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuXHJcbiAgYmFja2dyb3VuZDogLyogdG9wLCB0cmFuc3BhcmVudCByZWQsIGZha2VkIHdpdGggZ3JhZGllbnQgKi9cclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICByZ2JhKCMwMDAwMDAsIDAuNzUpLFxyXG4gICAgICAgIHJnYmEoIzAwMDAwMCwgMC43NSlcclxuICAgICksXHJcbiAgICAgIC8qIGJvdHRvbSBpbWFnZSAqL1xyXG4gICAgdXJsKCRpbWcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyAgUFJFQ0lTRSBDT05UUk9MIE9WRVIgUkVTUE9OU0lWRSBUWVBPR1JBUEhZIEZPUiBTQVNTXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEluZHJlayBQYWFzIEBpbmRyZWtwYWFzXHJcbi8vXHJcbi8vICBJbnNwaXJlZCBieSBNaWtlIFJpZXRobXVsbGVyJ3MgUHJlY2lzZSBjb250cm9sIG92ZXIgcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5XHJcbi8vICBodHRwOi8vbWFkZWJ5bWlrZS5jb20uYXUvd3JpdGluZy9wcmVjaXNlLWNvbnRyb2wtcmVzcG9uc2l2ZS10eXBvZ3JhcGh5L1xyXG4vL1xyXG4vLyAgQm9ycm93ZWQgYHN0cmlwLXVuaXRgIGZ1bmN0aW9uIGZyb20gSHVnbyBHaXJhdWRlbFxyXG4vLyAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9zYXNzL3N0cmlwLXVuaXQtZnVuY3Rpb24vXHJcbi8vXHJcbi8vICAwMi4wNC4yMDE4IFJlbW92ZSBgc2NyZWVuYCBrZXl3b3JkIGZyb20gbWVkaWEgcXVlcmllc1xyXG4vLyAgMTEuMDguMjAxNiBSZW1vdmUgcmVkdW5kYW50IGAmYCBzZWxmLXJlZmVyZW5jZVxyXG4vLyAgMzEuMDMuMjAxNiBSZW1vdmUgcmVkdW5kYW50IHBhcmVudGhlc2lzIGZyb20gb3V0cHV0XHJcbi8vICAwMi4xMC4yMDE1IEFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBwcm9wZXJ0aWVzXHJcbi8vICAyNC4wNC4yMDE1IEluaXRpYWwgcmVsZWFzZVxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKCN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqICgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCRudW1iZXIpIHtcclxuICBAaWYgdHlwZS1vZigkbnVtYmVyKSA9PSBcIm51bWJlclwiIGFuZCBub3QgdW5pdGxlc3MoJG51bWJlcikge1xyXG4gICAgQHJldHVybiAkbnVtYmVyIC8gKCRudW1iZXIgKiAwICsgMSk7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRudW1iZXI7XHJcbn1cclxuXHJcbi8qIFNpbmdsZSBwcm9wZXJ0eSAqL1xyXG4vL2h0bWwge1xyXG4vLyAgQGluY2x1ZGUgZmx1aWQtdHlwZShmb250LXNpemUsIDMyMHB4LCAxMzY2cHgsIDE0cHgsIDE4cHgpO1xyXG4vL31cclxuLy9cclxuLy8vKiBNdWx0aXBsZSBwcm9wZXJ0aWVzIHdpdGggc2FtZSB2YWx1ZXMgKi9cclxuLy9oMSB7XHJcbi8vICBAaW5jbHVkZSBmbHVpZC10eXBlKHBhZGRpbmctYm90dG9tIHBhZGRpbmctdG9wLCAyMGVtLCA3MGVtLCAyZW0sIDRlbSk7XHJcbi8vfVxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbi5wZXJzb25hbC1waWMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmFib3V0LW1lIHtcclxuICBwOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc2tpbGxzLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICRjLW1haW4tYmx1ZTtcclxuICBtYXJnaW4tdG9wOiAxLjVlbTtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICRjLW1haW4tYmx1ZTtcclxuICBtYXJnaW46IDV2aCAwIDEwcHg7XHJcbn1cclxuXHJcbi5lbXBsb3llcnMtcHJldmlldyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuXHJcbiAgYSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmVtcGxveWVyLXByZXZpZXcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5lbXBsb3llci1wcmV2aWV3IHtcclxuICBib3gtc2hhZG93OiAwIDAgOXB4IDFweCByZ2JhKCNlYWVhZWEsIC41KTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAxNXB4O1xyXG5cclxuICBmbGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDlweCAycHggcmdiYSgjZWFlYWVhLCAxKTtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogZGFya2VuO1xyXG4gICAgQGluY2x1ZGUgZmx1aWQtdHlwZShoZWlnaHQsICR4cywgJG1kLCA1MHB4LCA3NXB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5jdXJyZW50LWVtcGxveWVyLWltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG59XHJcblxyXG4uc2VlLW1vcmUtd3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5teS1saWZlIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAmLmxnIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxpZmUtcGhvdG8ge1xyXG4gIC8vIE1haW50YWluIGhlaWdodCBlcXVhbCB0byBjb250YWluZXIncyB3aWR0aFxyXG4gIHBhZGRpbmctdG9wOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4iLCIvLyBNZWRpYSBRdWVyeSBCcmVha3BvaW50IFNpemVzXHJcbiR4czogNDgwcHg7XHJcbiRzbTogNzY4cHg7XHJcbiRtZDogOTkycHg7XHJcbiRsZzogMTIwMHB4O1xyXG5cclxuLy8gQ29sb3JzXHJcbiRjLXdoaXRlOiAjRkFGQUZBO1xyXG4kYy1saWdodC1ncmF5OiAjRjVGNUY1O1xyXG4kYy1tZWRpdW0tZ3JheTogIzdDN0M4QjtcclxuJGMtZGFyay1ncmF5OiAjNDE0MDRDO1xyXG4kYy1tYWluLWJsdWU6ICMzNTgxQjg7XHJcbiRjLW1haW4tcGluazogI0VFNDI2NjtcclxuLy8kYy1tYWluLXBpbms6ICNGRjU5NjQ7XHJcbi8vJGMtc2t5LWJsdWU6ICNGQ0IwN0U7XHJcbi8vJGMtd2lsZC1ibHVlOiAjMUI0MDc5O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_past_employers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/past-employers.data */ "./src/app/_data/past-employers.data.ts");
/* harmony import */ var _data_skills_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_data/skills.data */ "./src/app/_data/skills.data.ts");
/* harmony import */ var _data_local_images_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_data/local-images.data */ "./src/app/_data/local-images.data.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _data_links_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_data/links.data */ "./src/app/_data/links.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.SUBTITLES = ['Software Engineer', 'Full Stack Developer', 'Game Designer', 'Problem Solver'];
        this.SELF_PORTRAIT = _data_local_images_data__WEBPACK_IMPORTED_MODULE_3__["LOCAL_IMAGES"].me;
        this.SKILLS = _data_skills_data__WEBPACK_IMPORTED_MODULE_2__["SKILL_SUMMARY"];
        this.GAMEPLAY_IMG = _data_local_images_data__WEBPACK_IMPORTED_MODULE_3__["LOCAL_IMAGES"].gameplay;
        this.EMPLOYERS = _data_past_employers_data__WEBPACK_IMPORTED_MODULE_1__["PAST_EMPLOYERS_SUMMARY"];
        this.GIFTAPART_URL = _data_links_data__WEBPACK_IMPORTED_MODULE_5__["GIFTAPART_URL"];
        this.SELF_PICS = [
            _data_local_images_data__WEBPACK_IMPORTED_MODULE_3__["LOCAL_IMAGES"].food,
            _data_local_images_data__WEBPACK_IMPORTED_MODULE_3__["LOCAL_IMAGES"].broadway,
            _data_local_images_data__WEBPACK_IMPORTED_MODULE_3__["LOCAL_IMAGES"].boat,
            _data_local_images_data__WEBPACK_IMPORTED_MODULE_3__["LOCAL_IMAGES"].munich
        ];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Kevyn Jaremko's Personal Site");
        this.metaService.addTags([
            {
                name: "description",
                content: 'This is a portfolio to showcase my work experience as a software developer, as well as some of my own person projects.'
            },
        ]);
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/material-module/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/material-module/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: MATERIAL_MODULES,
            exports: MATERIAL_MODULES,
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/media-modal/media-modal.component.html":
/*!********************************************************!*\
  !*** ./src/app/media-modal/media-modal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\" fxLayoutAlign=\"flex-end\">\r\n  <fa-icon [icon]=\"['fas', 'times']\" class=\"app-icon close-btn\" (click)=\"close()\"></fa-icon>\r\n</div>\r\n\r\n<div class=\"modal\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\r\n  <img class=\"image-wrapper\" [src]=\"album[index]\" (click)=\"cycleAlbumRight()\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/media-modal/media-modal.component.scss":
/*!********************************************************!*\
  !*** ./src/app/media-modal/media-modal.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 90vh; }\n\n.modal-header {\n  height: 35px; }\n\n.modal {\n  height: calc(100% - 35px);\n  width: 100%; }\n\n.image-wrapper {\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: 100%;\n  height: 100%;\n  cursor: pointer; }\n\n.close-btn {\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWEtbW9kYWwvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcYXBwXFxtZWRpYS1tb2RhbFxcbWVkaWEtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHNCQUFtQjtLQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVkaWEtbW9kYWwvbWVkaWEtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNXB4KTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIge1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbG9zZS1idG4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/media-modal/media-modal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/media-modal/media-modal.component.ts ***!
  \******************************************************/
/*! exports provided: MediaModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaModalComponent", function() { return MediaModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MediaModalComponent = /** @class */ (function () {
    function MediaModalComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.album = [];
        this.album = data.album;
        this.index = data.index;
    }
    Object.defineProperty(MediaModalComponent.prototype, "index", {
        get: function () {
            return this._index;
        },
        set: function (val) {
            if (!this.album) {
                throw new Error('Cannot set index without specifiying "album" property.');
            }
            if (val > this.album.length - 1) {
                val = 0;
            }
            else if (val < 0) {
                val = this.album.length - 1;
            }
            this._index = val;
        },
        enumerable: true,
        configurable: true
    });
    MediaModalComponent.prototype.ngOnInit = function () {
    };
    MediaModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    MediaModalComponent.prototype.cycleAlbumLeft = function () {
        this.index--;
    };
    MediaModalComponent.prototype.cycleAlbumRight = function () {
        this.index++;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MediaModalComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MediaModalComponent.prototype, "album", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], MediaModalComponent.prototype, "index", null);
    MediaModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media-modal',
            template: __webpack_require__(/*! ./media-modal.component.html */ "./src/app/media-modal/media-modal.component.html"),
            styles: [__webpack_require__(/*! ./media-modal.component.scss */ "./src/app/media-modal/media-modal.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], MediaModalComponent);
    return MediaModalComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bold nav-bar\"\r\n     fxHide.xs fxLayout=\"row nowrap\" fxLayoutAlign=\"flex-end\" fxLayoutGap=\"30px\">\r\n  <a class=\"nav-option clickable\" routerLink=\"/\" routerLinkActive=\"nav-active\" [routerLinkActiveOptions]=\"{exact: true}\">HOME</a>\r\n  <a class=\"nav-option clickable\" routerLink=\"/resume\" routerLinkActive=\"nav-active\">RESUME</a>\r\n  <a class=\"nav-option clickable\" routerLink=\"/projects\" routerLinkActive=\"nav-active\">PROJECTS</a>\r\n  <a class=\"nav-option clickable\" routerLink=\"/about\" routerLinkActive=\"nav-active\">ABOUT ME</a>\r\n  <a class=\"nav-option clickable\" routerLink=\"/contact\" routerLinkActive=\"nav-active\">CONTACT</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.scss":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  margin-top: 30px;\n  margin-right: 30px; }\n\n.nav-bar {\n  font-size: 14px;\n  transition: .2s color ease-in-out; }\n\n.nav-bar:hover a.nav-option {\n    color: #7C7C8B; }\n\n.nav-bar a.nav-option {\n    color: #FAFAFA;\n    text-decoration: none;\n    transition: .2s color ease-in-out; }\n\n.nav-bar a.nav-option:hover {\n      color: #FAFAFA; }\n\n.nav-active {\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9FOlxcVXNlcnNcXEtldnluXFxEb2N1bWVudHNcXHBlcnNvbmFsLXNpdGUvc3JjXFxhcHBcXG5hdi1iYXJcXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi1iYXIvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDLEVBQUE7O0FBRm5DO0lBS0ksY0NKbUIsRUFBQTs7QUREdkI7SUFTSSxjQ1ZhO0lEV2IscUJBQXFCO0lBQ3JCLGlDQUFpQyxFQUFBOztBQVhyQztNQWNNLGNDZlcsRUFBQTs7QURvQmpCO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5uYXYtYmFyIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdHJhbnNpdGlvbjogLjJzIGNvbG9yIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIGEubmF2LW9wdGlvbiB7XHJcbiAgICBjb2xvcjogJGMtbWVkaXVtLWdyYXk7XHJcbiAgfVxyXG5cclxuICBhLm5hdi1vcHRpb24ge1xyXG4gICAgY29sb3I6ICRjLXdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzIGNvbG9yIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogJGMtd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWFjdGl2ZSB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiIsIi8vIE1lZGlhIFF1ZXJ5IEJyZWFrcG9pbnQgU2l6ZXNcclxuJHhzOiA0ODBweDtcclxuJHNtOiA3NjhweDtcclxuJG1kOiA5OTJweDtcclxuJGxnOiAxMjAwcHg7XHJcblxyXG4vLyBDb2xvcnNcclxuJGMtd2hpdGU6ICNGQUZBRkE7XHJcbiRjLWxpZ2h0LWdyYXk6ICNGNUY1RjU7XHJcbiRjLW1lZGl1bS1ncmF5OiAjN0M3QzhCO1xyXG4kYy1kYXJrLWdyYXk6ICM0MTQwNEM7XHJcbiRjLW1haW4tYmx1ZTogIzM1ODFCODtcclxuJGMtbWFpbi1waW5rOiAjRUU0MjY2O1xyXG4vLyRjLW1haW4tcGluazogI0ZGNTk2NDtcclxuLy8kYy1za3ktYmx1ZTogI0ZDQjA3RTtcclxuLy8kYy13aWxkLWJsdWU6ICMxQjQwNzk7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/page-banner/page-banner.component.html":
/*!********************************************************!*\
  !*** ./src/app/page-banner/page-banner.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"banner\" fxLayout=\"column nowrap\" fxLayoutAlign=\"center center\">\n\n  <app-nav-bar></app-nav-bar>\n\n  <div fxLayout=\"column nowrap\" fxLayoutAlign.gt-xs=\"center center\" fxLayoutAlign.xs=\"center center\"\n       fxLayoutGap.xs=\"20px\"\n       fxFlex>\n    <div class=\"fnt-roboto bold banner-title\">{{title | uppercase}}</div>\n\n    <div class=\"banner-subtitle\">\n      <div *ngIf=\"subtitle\">{{subtitle}}</div>\n\n      <div *ngIf=\"subtitleList\" class=\"banner-subtitle\" fxLayout=\"row nowrap\" fxLayout.xs=\"column\" fxLayoutGap=\"10px\">\n        <div class=\"subtitle-item\" *ngFor=\"let item of subtitleList\">{{item}}.</div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-banner/page-banner.component.scss":
/*!********************************************************!*\
  !*** ./src/app/page-banner/page-banner.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Single property */\n.banner {\n  height: 600px;\n  padding: 0 10px; }\n.banner-title {\n  color: #FAFAFA;\n  text-align: center;\n  font-size: 50px; }\n@media (min-width: 480px) {\n    .banner-title {\n      font-size: calc(50px + 50 * (100vw - 480px) / 720); } }\n@media (min-width: 1200px) {\n    .banner-title {\n      font-size: 100px; } }\n.banner-subtitle {\n  color: #FAFAFA;\n  font-style: italic;\n  font-family: 'Georgia', serif;\n  font-size: 18px; }\n@media (min-width: 480px) {\n    .banner-subtitle {\n      font-size: calc(18px + 6 * (100vw - 480px) / 720); } }\n@media (min-width: 1200px) {\n    .banner-subtitle {\n      font-size: 24px; } }\n:host-context(.homepage) .banner {\n  -webkit-filter: grayscale(100%);\n  /* Chrome, Safari, Opera */\n  filter: grayscale(100%);\n  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(\"https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n  background-size: cover;\n  background-position: center bottom; }\n:host-context(.resume-page) .banner {\n  -webkit-filter: grayscale(100%);\n  /* Chrome, Safari, Opera */\n  filter: grayscale(100%);\n  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(\"https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\n  background-size: cover;\n  background-position: center bottom; }\n:host-context(.projects-page) .banner {\n  -webkit-filter: grayscale(100%);\n  /* Chrome, Safari, Opera */\n  filter: grayscale(100%);\n  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(\"https://images.pexels.com/photos/159657/paint-notebook-brush-pencil-159657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n  background-size: cover;\n  background-position: center bottom; }\n:host-context(.about-page) .banner {\n  -webkit-filter: grayscale(100%);\n  /* Chrome, Safari, Opera */\n  filter: grayscale(100%);\n  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(\"https://images.pexels.com/photos/196660/pexels-photo-196660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n  background-size: cover;\n  background-position: center bottom; }\n:host-context(.contact-page) .banner {\n  -webkit-filter: grayscale(100%);\n  /* Chrome, Safari, Opera */\n  filter: grayscale(100%);\n  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(\"https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940\");\n  background-size: cover;\n  background-position: center bottom; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1iYW5uZXIvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcc2Nzc1xcX21peGlucy5zY3NzIiwic3JjL2FwcC9wYWdlLWJhbm5lci9FOlxcVXNlcnNcXEtldnluXFxEb2N1bWVudHNcXHBlcnNvbmFsLXNpdGUvc3JjXFxhcHBcXHBhZ2UtYmFubmVyXFxwYWdlLWJhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZS1iYW5uZXIvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcc2Nzc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGQSxvQkFBQTtBQzlFQTtFQUNFLGFBQWE7RUFDYixlQUFlLEVBQUE7QUFHakI7RUFDRSxjQ1JlO0VEU2Ysa0JBQWtCO0VEK0NoQixlQzdDMkMsRUFBQTtBRGdEN0M7SUNwREY7TURzRE0sa0RBQW9JLEVBQUEsRUNqRHpJO0FEcURDO0lDMURGO01ENERNLGdCQ3hEZ0QsRUFBQSxFQUNyRDtBQUVEO0VBQ0UsY0NmZTtFRGdCZixrQkFBa0I7RUFDbEIsNkJBQTZCO0VEdUMzQixlQ3JDMkMsRUFBQTtBRHdDN0M7SUM3Q0Y7TUQrQ00saURBQW9JLEVBQUEsRUN6Q3pJO0FENkNDO0lDbkRGO01EcURNLGVDaEQrQyxFQUFBLEVBQ3BEO0FBR0Q7RURIRSwrQkFBK0I7RUFBRSwwQkFBQTtFQUNqQyx1QkFBdUI7RUFFdkIsb0xBTVc7RUFDWCxzQkFBc0I7RUFDdEIsa0NBQWtDLEVBQUE7QUNIcEM7RURSRSwrQkFBK0I7RUFBRSwwQkFBQTtFQUNqQyx1QkFBdUI7RUFFdkIsMkxBTVc7RUFDWCxzQkFBc0I7RUFDdEIsa0NBQWtDLEVBQUE7QUNFcEM7RURiRSwrQkFBK0I7RUFBRSwwQkFBQTtFQUNqQyx1QkFBdUI7RUFFdkIsbU1BTVc7RUFDWCxzQkFBc0I7RUFDdEIsa0NBQWtDLEVBQUE7QUNPcEM7RURsQkUsK0JBQStCO0VBQUUsMEJBQUE7RUFDakMsdUJBQXVCO0VBRXZCLG9MQU1XO0VBQ1gsc0JBQXNCO0VBQ3RCLGtDQUFrQyxFQUFBO0FDWXBDO0VEdkJFLCtCQUErQjtFQUFFLDBCQUFBO0VBQ2pDLHVCQUF1QjtFQUV2QixvTEFNVztFQUNYLHNCQUFzQjtFQUN0QixrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtYmFubmVyL3BhZ2UtYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJ1dHRvbigkY29sb3IpIHtcclxuICAkaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XHJcblxyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRyYW5zaXRpb246IC4ycyBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBqdW1ib3Ryb24oJGltZykge1xyXG4gIC8vIE1ha2VzIGltZyBibGFjayBhbmQgd2hpdGVcclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuXHJcbiAgYmFja2dyb3VuZDogLyogdG9wLCB0cmFuc3BhcmVudCByZWQsIGZha2VkIHdpdGggZ3JhZGllbnQgKi9cclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICByZ2JhKCMwMDAwMDAsIDAuNzUpLFxyXG4gICAgICAgIHJnYmEoIzAwMDAwMCwgMC43NSlcclxuICAgICksXHJcbiAgICAgIC8qIGJvdHRvbSBpbWFnZSAqL1xyXG4gICAgdXJsKCRpbWcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyAgUFJFQ0lTRSBDT05UUk9MIE9WRVIgUkVTUE9OU0lWRSBUWVBPR1JBUEhZIEZPUiBTQVNTXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEluZHJlayBQYWFzIEBpbmRyZWtwYWFzXHJcbi8vXHJcbi8vICBJbnNwaXJlZCBieSBNaWtlIFJpZXRobXVsbGVyJ3MgUHJlY2lzZSBjb250cm9sIG92ZXIgcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5XHJcbi8vICBodHRwOi8vbWFkZWJ5bWlrZS5jb20uYXUvd3JpdGluZy9wcmVjaXNlLWNvbnRyb2wtcmVzcG9uc2l2ZS10eXBvZ3JhcGh5L1xyXG4vL1xyXG4vLyAgQm9ycm93ZWQgYHN0cmlwLXVuaXRgIGZ1bmN0aW9uIGZyb20gSHVnbyBHaXJhdWRlbFxyXG4vLyAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9zYXNzL3N0cmlwLXVuaXQtZnVuY3Rpb24vXHJcbi8vXHJcbi8vICAwMi4wNC4yMDE4IFJlbW92ZSBgc2NyZWVuYCBrZXl3b3JkIGZyb20gbWVkaWEgcXVlcmllc1xyXG4vLyAgMTEuMDguMjAxNiBSZW1vdmUgcmVkdW5kYW50IGAmYCBzZWxmLXJlZmVyZW5jZVxyXG4vLyAgMzEuMDMuMjAxNiBSZW1vdmUgcmVkdW5kYW50IHBhcmVudGhlc2lzIGZyb20gb3V0cHV0XHJcbi8vICAwMi4xMC4yMDE1IEFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBwcm9wZXJ0aWVzXHJcbi8vICAyNC4wNC4yMDE1IEluaXRpYWwgcmVsZWFzZVxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKCN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqICgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCRudW1iZXIpIHtcclxuICBAaWYgdHlwZS1vZigkbnVtYmVyKSA9PSBcIm51bWJlclwiIGFuZCBub3QgdW5pdGxlc3MoJG51bWJlcikge1xyXG4gICAgQHJldHVybiAkbnVtYmVyIC8gKCRudW1iZXIgKiAwICsgMSk7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRudW1iZXI7XHJcbn1cclxuXHJcbi8qIFNpbmdsZSBwcm9wZXJ0eSAqL1xyXG4vL2h0bWwge1xyXG4vLyAgQGluY2x1ZGUgZmx1aWQtdHlwZShmb250LXNpemUsIDMyMHB4LCAxMzY2cHgsIDE0cHgsIDE4cHgpO1xyXG4vL31cclxuLy9cclxuLy8vKiBNdWx0aXBsZSBwcm9wZXJ0aWVzIHdpdGggc2FtZSB2YWx1ZXMgKi9cclxuLy9oMSB7XHJcbi8vICBAaW5jbHVkZSBmbHVpZC10eXBlKHBhZGRpbmctYm90dG9tIHBhZGRpbmctdG9wLCAyMGVtLCA3MGVtLCAyZW0sIDRlbSk7XHJcbi8vfVxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbiRiYW5uZXItaG9tZTogJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzkwODI4NC9wZXhlbHMtcGhvdG8tOTA4Mjg0LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZoPTY1MCZ3PTk0MCc7XHJcbiRiYW5uZXItcmVzdW1lOiAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTkwMDE2L3BleGVscy1waG90by01OTAwMTYuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCc7XHJcbiRiYW5uZXItcHJvamVjdHM6ICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNTk2NTcvcGFpbnQtbm90ZWJvb2stYnJ1c2gtcGVuY2lsLTE1OTY1Ny5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImaD02NTAmdz05NDAnO1xyXG4kYmFubmVyLWFib3V0OiAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTk2NjYwL3BleGVscy1waG90by0xOTY2NjAuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmg9NjUwJnc9OTQwJztcclxuJGJhbm5lci1jb250YWN0OiAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDU5NjUzL3BleGVscy1waG90by00NTk2NTMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmg9NjUwJnc9OTQwJztcclxuXHJcbi5iYW5uZXIge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4uYmFubmVyLXRpdGxlIHtcclxuICBjb2xvcjogJGMtd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBAaW5jbHVkZSBmbHVpZC10eXBlKGZvbnQtc2l6ZSwgJHhzLCAkbGcsIDUwcHgsIDEwMHB4KTtcclxufVxyXG5cclxuLmJhbm5lci1zdWJ0aXRsZSB7XHJcbiAgY29sb3I6ICRjLXdoaXRlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LWZhbWlseTogJ0dlb3JnaWEnLCBzZXJpZjtcclxuXHJcbiAgQGluY2x1ZGUgZmx1aWQtdHlwZShmb250LXNpemUsICR4cywgJGxnLCAxOHB4LCAyNHB4KTtcclxufVxyXG5cclxuLy8gU2hvdyBkaWZmZXJlbnQgYmFubmVyIGJhc2VkIG9uIHBhZ2VcclxuOmhvc3QtY29udGV4dCguaG9tZXBhZ2UpIHtcclxuICAuYmFubmVye1xyXG4gICAgQGluY2x1ZGUganVtYm90cm9uKCRiYW5uZXItaG9tZSk7XHJcbiAgfVxyXG59XHJcbjpob3N0LWNvbnRleHQoLnJlc3VtZS1wYWdlKSB7XHJcbiAgLmJhbm5lciB7XHJcbiAgICBAaW5jbHVkZSBqdW1ib3Ryb24oJGJhbm5lci1yZXN1bWUpO1xyXG4gIH1cclxufVxyXG46aG9zdC1jb250ZXh0KC5wcm9qZWN0cy1wYWdlKSB7XHJcbiAgLmJhbm5lciB7XHJcbiAgICBAaW5jbHVkZSBqdW1ib3Ryb24oJGJhbm5lci1wcm9qZWN0cyk7XHJcbiAgfVxyXG59XHJcbjpob3N0LWNvbnRleHQoLmFib3V0LXBhZ2UpIHtcclxuICAuYmFubmVyIHtcclxuICAgIEBpbmNsdWRlIGp1bWJvdHJvbigkYmFubmVyLWFib3V0KTtcclxuICB9XHJcbn1cclxuOmhvc3QtY29udGV4dCguY29udGFjdC1wYWdlKSB7XHJcbiAgLmJhbm5lciB7XHJcbiAgICBAaW5jbHVkZSBqdW1ib3Ryb24oJGJhbm5lci1jb250YWN0KTtcclxuICB9XHJcbn1cclxuIiwiLy8gTWVkaWEgUXVlcnkgQnJlYWtwb2ludCBTaXplc1xyXG4keHM6IDQ4MHB4O1xyXG4kc206IDc2OHB4O1xyXG4kbWQ6IDk5MnB4O1xyXG4kbGc6IDEyMDBweDtcclxuXHJcbi8vIENvbG9yc1xyXG4kYy13aGl0ZTogI0ZBRkFGQTtcclxuJGMtbGlnaHQtZ3JheTogI0Y1RjVGNTtcclxuJGMtbWVkaXVtLWdyYXk6ICM3QzdDOEI7XHJcbiRjLWRhcmstZ3JheTogIzQxNDA0QztcclxuJGMtbWFpbi1ibHVlOiAjMzU4MUI4O1xyXG4kYy1tYWluLXBpbms6ICNFRTQyNjY7XHJcbi8vJGMtbWFpbi1waW5rOiAjRkY1OTY0O1xyXG4vLyRjLXNreS1ibHVlOiAjRkNCMDdFO1xyXG4vLyRjLXdpbGQtYmx1ZTogIzFCNDA3OTtcclxuIl19 */"

/***/ }),

/***/ "./src/app/page-banner/page-banner.component.ts":
/*!******************************************************!*\
  !*** ./src/app/page-banner/page-banner.component.ts ***!
  \******************************************************/
/*! exports provided: PageBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBannerComponent", function() { return PageBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageBannerComponent = /** @class */ (function () {
    function PageBannerComponent() {
    }
    PageBannerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageBannerComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageBannerComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PageBannerComponent.prototype, "subtitleList", void 0);
    PageBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-banner',
            template: __webpack_require__(/*! ./page-banner.component.html */ "./src/app/page-banner/page-banner.component.html"),
            styles: [__webpack_require__(/*! ./page-banner.component.scss */ "./src/app/page-banner/page-banner.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageBannerComponent);
    return PageBannerComponent;
}());



/***/ }),

/***/ "./src/app/projects-page/projects-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/projects-page/projects-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-page\">\n  <app-page-banner title=\"Projects\" subtitle=\"Other things I've worked on.\"></app-page-banner>\n\n  <div class=\"panel\" *ngFor=\"let project of PROJECTS; let i = index\" appFadeInOnScroll>\n    <div class=\"panel-header\">{{project.name}}</div>\n    <div class=\"panel-content\">\n      <div class=\"project\">\n        <div class=\"project-image\">\n          <img [src]=\"project.image\" appImageThumbnail [album]=\"[project.image]\" [index]=\"0\">\n        </div>\n        <p class=\"project-description\" *ngFor=\"let paragraph of project.description\">{{paragraph}}</p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"panel\" appFadeInOnScroll>\n    <div class=\"panel-header\">(MORE COMING SOON)</div>\n  </div>\n\n  <app-contact-me-panel></app-contact-me-panel>\n</div>\n"

/***/ }),

/***/ "./src/app/projects-page/projects-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/projects-page/projects-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Single property */\n.project-image {\n  text-align: center; }\n.project-image img {\n    max-width: 100%;\n    max-height: 400px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    border-radius: 30px; }\n.project-description {\n  font-size: 16px;\n  line-height: 1.4; }\n@media (min-width: 480px) {\n    .project-description {\n      font-size: calc(16px + 4 * (100vw - 480px) / 720); } }\n@media (min-width: 1200px) {\n    .project-description {\n      font-size: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMtcGFnZS9FOlxcVXNlcnNcXEtldnluXFxEb2N1bWVudHNcXHBlcnNvbmFsLXNpdGUvc3JjXFxzY3NzXFxfbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzLXBhZ2UvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcYXBwXFxwcm9qZWN0cy1wYWdlXFxwcm9qZWN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGQSxvQkFBQTtBQ3BGQTtFQUNFLGtCQUFrQixFQUFBO0FBRHBCO0lBSUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBbUI7T0FBbkIsbUJBQW1CO0lBQ25CLG1CQUFtQixFQUFBO0FBSXZCO0VEaURJLGVDaEQyQztFQUM3QyxnQkFBZ0IsRUFBQTtBRGtEaEI7SUNwREY7TURzRE0saURBQW9JLEVBQUEsRUNuRHpJO0FEdURDO0lDMURGO01ENERNLGVDM0QrQyxFQUFBLEVBRXBEIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMtcGFnZS9wcm9qZWN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGJ1dHRvbigkY29sb3IpIHtcclxuICAkaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcblxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XHJcblxyXG4gIGNvbG9yOiAkY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yO1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIHRyYW5zaXRpb246IC4ycyBiYWNrZ3JvdW5kIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBqdW1ib3Ryb24oJGltZykge1xyXG4gIC8vIE1ha2VzIGltZyBibGFjayBhbmQgd2hpdGVcclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cclxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuXHJcbiAgYmFja2dyb3VuZDogLyogdG9wLCB0cmFuc3BhcmVudCByZWQsIGZha2VkIHdpdGggZ3JhZGllbnQgKi9cclxuICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICByZ2JhKCMwMDAwMDAsIDAuNzUpLFxyXG4gICAgICAgIHJnYmEoIzAwMDAwMCwgMC43NSlcclxuICAgICksXHJcbiAgICAgIC8qIGJvdHRvbSBpbWFnZSAqL1xyXG4gICAgdXJsKCRpbWcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL1xyXG4vLyAgUFJFQ0lTRSBDT05UUk9MIE9WRVIgUkVTUE9OU0lWRSBUWVBPR1JBUEhZIEZPUiBTQVNTXHJcbi8vICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gIEluZHJlayBQYWFzIEBpbmRyZWtwYWFzXHJcbi8vXHJcbi8vICBJbnNwaXJlZCBieSBNaWtlIFJpZXRobXVsbGVyJ3MgUHJlY2lzZSBjb250cm9sIG92ZXIgcmVzcG9uc2l2ZSB0eXBvZ3JhcGh5XHJcbi8vICBodHRwOi8vbWFkZWJ5bWlrZS5jb20uYXUvd3JpdGluZy9wcmVjaXNlLWNvbnRyb2wtcmVzcG9uc2l2ZS10eXBvZ3JhcGh5L1xyXG4vL1xyXG4vLyAgQm9ycm93ZWQgYHN0cmlwLXVuaXRgIGZ1bmN0aW9uIGZyb20gSHVnbyBHaXJhdWRlbFxyXG4vLyAgaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9zYXNzL3N0cmlwLXVuaXQtZnVuY3Rpb24vXHJcbi8vXHJcbi8vICAwMi4wNC4yMDE4IFJlbW92ZSBgc2NyZWVuYCBrZXl3b3JkIGZyb20gbWVkaWEgcXVlcmllc1xyXG4vLyAgMTEuMDguMjAxNiBSZW1vdmUgcmVkdW5kYW50IGAmYCBzZWxmLXJlZmVyZW5jZVxyXG4vLyAgMzEuMDMuMjAxNiBSZW1vdmUgcmVkdW5kYW50IHBhcmVudGhlc2lzIGZyb20gb3V0cHV0XHJcbi8vICAwMi4xMC4yMDE1IEFkZCBzdXBwb3J0IGZvciBtdWx0aXBsZSBwcm9wZXJ0aWVzXHJcbi8vICAyNC4wNC4yMDE1IEluaXRpYWwgcmVsZWFzZVxyXG4vL1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AbWl4aW4gZmx1aWQtdHlwZSgkcHJvcGVydGllcywgJG1pbi12dywgJG1heC12dywgJG1pbi12YWx1ZSwgJG1heC12YWx1ZSkge1xyXG4gIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAjeyRwcm9wZXJ0eX06ICRtaW4tdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbi12dykge1xyXG4gICAgQGVhY2ggJHByb3BlcnR5IGluICRwcm9wZXJ0aWVzIHtcclxuICAgICAgI3skcHJvcGVydHl9OiBjYWxjKCN7JG1pbi12YWx1ZX0gKyAje3N0cmlwLXVuaXQoJG1heC12YWx1ZSAtICRtaW4tdmFsdWUpfSAqICgxMDB2dyAtICN7JG1pbi12d30pIC8gI3tzdHJpcC11bml0KCRtYXgtdncgLSAkbWluLXZ3KX0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtYXgtdncpIHtcclxuICAgIEBlYWNoICRwcm9wZXJ0eSBpbiAkcHJvcGVydGllcyB7XHJcbiAgICAgICN7JHByb3BlcnR5fTogJG1heC12YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBmdW5jdGlvbiBzdHJpcC11bml0KCRudW1iZXIpIHtcclxuICBAaWYgdHlwZS1vZigkbnVtYmVyKSA9PSBcIm51bWJlclwiIGFuZCBub3QgdW5pdGxlc3MoJG51bWJlcikge1xyXG4gICAgQHJldHVybiAkbnVtYmVyIC8gKCRudW1iZXIgKiAwICsgMSk7XHJcbiAgfVxyXG5cclxuICBAcmV0dXJuICRudW1iZXI7XHJcbn1cclxuXHJcbi8qIFNpbmdsZSBwcm9wZXJ0eSAqL1xyXG4vL2h0bWwge1xyXG4vLyAgQGluY2x1ZGUgZmx1aWQtdHlwZShmb250LXNpemUsIDMyMHB4LCAxMzY2cHgsIDE0cHgsIDE4cHgpO1xyXG4vL31cclxuLy9cclxuLy8vKiBNdWx0aXBsZSBwcm9wZXJ0aWVzIHdpdGggc2FtZSB2YWx1ZXMgKi9cclxuLy9oMSB7XHJcbi8vICBAaW5jbHVkZSBmbHVpZC10eXBlKHBhZGRpbmctYm90dG9tIHBhZGRpbmctdG9wLCAyMGVtLCA3MGVtLCAyZW0sIDRlbSk7XHJcbi8vfVxyXG4iLCJAaW1wb3J0IFwidmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJtaXhpbnNcIjtcclxuXHJcbi5wcm9qZWN0LWltYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gIEBpbmNsdWRlIGZsdWlkLXR5cGUoZm9udC1zaXplLCAkeHMsICRsZywgMTZweCwgMjBweCk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/projects-page/projects-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/projects-page/projects-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_personal_projects_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_data/personal-projects.data */ "./src/app/_data/personal-projects.data.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsPageComponent = /** @class */ (function () {
    function ProjectsPageComponent(titleService, metaService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.PROJECTS = _data_personal_projects_data__WEBPACK_IMPORTED_MODULE_1__["PERSONAL_PROJECTS"];
    }
    ProjectsPageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle("Projects");
        this.metaService.addTags([
            {
                name: "description",
                content: "Side projects are good.  Here are some things I've been working on outside of the office."
            },
        ]);
    };
    ProjectsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-page',
            template: __webpack_require__(/*! ./projects-page.component.html */ "./src/app/projects-page/projects-page.component.html"),
            styles: [__webpack_require__(/*! ./projects-page.component.scss */ "./src/app/projects-page/projects-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], ProjectsPageComponent);
    return ProjectsPageComponent;
}());



/***/ }),

/***/ "./src/app/star-rating/star-rating.component.html":
/*!********************************************************!*\
  !*** ./src/app/star-rating/star-rating.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span style=\"position: relative;\">\r\n    <fa-icon [icon]=\"['fas', 'star']\" *ngFor=\"let i of maxRating | loopRange\" class=\"star-bg\"></fa-icon>\r\n    <span style=\"width: 100%; position: absolute; left: 0;\">\r\n      <fa-icon [icon]=\"['fas', 'star']\" *ngFor=\"let i of wholeStars | loopRange\" class=\"star-fg\"></fa-icon>\r\n      <fa-icon [icon]=\"['fas', 'star-half']\" *ngIf=\"hasHalfStar\" class=\"star-fg\"></fa-icon>\r\n    </span>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/star-rating/star-rating.component.scss":
/*!********************************************************!*\
  !*** ./src/app/star-rating/star-rating.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline; }\n\n.star-bg {\n  color: #41404C; }\n\n.star-fg {\n  color: #3581B8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Rhci1yYXRpbmcvRTpcXFVzZXJzXFxLZXZ5blxcRG9jdW1lbnRzXFxwZXJzb25hbC1zaXRlL3NyY1xcYXBwXFxzdGFyLXJhdGluZ1xcc3Rhci1yYXRpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0YXItcmF0aW5nL0U6XFxVc2Vyc1xcS2V2eW5cXERvY3VtZW50c1xccGVyc29uYWwtc2l0ZS9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQ0dtQixFQUFBOztBREFyQjtFQUNFLGNDQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdGFyLXJhdGluZy9zdGFyLXJhdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5zdGFyLWJnIHtcclxuICBjb2xvcjogJGMtZGFyay1ncmF5O1xyXG59XHJcblxyXG4uc3Rhci1mZyB7XHJcbiAgY29sb3I6ICRjLW1haW4tYmx1ZTtcclxufVxyXG4iLCIvLyBNZWRpYSBRdWVyeSBCcmVha3BvaW50IFNpemVzXHJcbiR4czogNDgwcHg7XHJcbiRzbTogNzY4cHg7XHJcbiRtZDogOTkycHg7XHJcbiRsZzogMTIwMHB4O1xyXG5cclxuLy8gQ29sb3JzXHJcbiRjLXdoaXRlOiAjRkFGQUZBO1xyXG4kYy1saWdodC1ncmF5OiAjRjVGNUY1O1xyXG4kYy1tZWRpdW0tZ3JheTogIzdDN0M4QjtcclxuJGMtZGFyay1ncmF5OiAjNDE0MDRDO1xyXG4kYy1tYWluLWJsdWU6ICMzNTgxQjg7XHJcbiRjLW1haW4tcGluazogI0VFNDI2NjtcclxuLy8kYy1tYWluLXBpbms6ICNGRjU5NjQ7XHJcbi8vJGMtc2t5LWJsdWU6ICNGQ0IwN0U7XHJcbi8vJGMtd2lsZC1ibHVlOiAjMUI0MDc5O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/star-rating/star-rating.component.ts":
/*!******************************************************!*\
  !*** ./src/app/star-rating/star-rating.component.ts ***!
  \******************************************************/
/*! exports provided: StarRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarRatingComponent = /** @class */ (function () {
    function StarRatingComponent() {
        this.maxRating = 5;
        this.wholeStars = 0;
        this.hasHalfStar = false;
    }
    Object.defineProperty(StarRatingComponent.prototype, "rating", {
        set: function (val) {
            // Ensure rating does not exceed max value
            val = Math.min(val, this.maxRating);
            this.wholeStars = Math.floor(val);
            var remainder = val - this.wholeStars;
            // Look at decimal remainder, we should either round up to another star, add a half star, or round down
            if (remainder > .75) {
                this.wholeStars++;
            }
            else if (remainder > .25) {
                this.hasHalfStar = true;
            }
            else {
                this.hasHalfStar = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    StarRatingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], StarRatingComponent.prototype, "maxRating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], StarRatingComponent.prototype, "rating", null);
    StarRatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-star-rating',
            template: __webpack_require__(/*! ./star-rating.component.html */ "./src/app/star-rating/star-rating.component.html"),
            styles: [__webpack_require__(/*! ./star-rating.component.scss */ "./src/app/star-rating/star-rating.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StarRatingComponent);
    return StarRatingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Users\Kevyn\Documents\personal-site\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map