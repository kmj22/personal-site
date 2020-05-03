import {Employer} from '../_interfaces/employer.interface';

const NJIT_LOGO = 'https://parcoffice.com/wp-content/uploads/2017/10/njit-logo-red-fullres.png';

export const GIFTAPART: Employer = {
  name: 'Giftapart',
  start_date: new Date(2017, 8),
  description: [
    'If there’s one constant in software development (or life), it’s change.  Nothing has proven this sentiment to me more than my time at Giftapart.',
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

export const RESEARCH_ASSISTANT: Employer = {
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

export const ASTRODYNE: Employer = {
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

export const TEACHING_ASSISTANT: Employer = {
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

export const COLGATE: Employer = {
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

export const LSEA: Employer = {
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

export const EDUCATION: Employer = {
  name: 'New Jersey Institute of Technology',
  job_title: 'Albert Dorman Honors College (Summa Cum Laude)',
  description: ['I received my Bachelor of Science in Computer Science with a minor in Web & Information Systems.'],
  start_date: new Date(2013, 8),
  end_date: new Date(2017, 4),
  image: NJIT_LOGO,
  url_slug: 'njit'
};

export const PAST_EMPLOYERS: Employer[] = [
  GIFTAPART,
  RESEARCH_ASSISTANT,
  ASTRODYNE,
  TEACHING_ASSISTANT,
  COLGATE,
  LSEA,
];

export const PAST_EMPLOYERS_SUMMARY: Employer[] = [
  GIFTAPART,
  ASTRODYNE,
  RESEARCH_ASSISTANT,
  COLGATE,
  LSEA
];
