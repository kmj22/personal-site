import {Employer} from '../_interfaces/employer.interface';

export const NJIT_LOGO = 'https://parcoffice.com/wp-content/uploads/2017/10/njit-logo-red-fullres.png';

export const GIFTAPART: Employer = {
  name: 'Giftapart',
  start_date: new Date(2017, 8),
  description: [


    'Giftapart is an ecommerce startup that hopes to change the way we gift.  I\'ve been on the Giftapart team from the very first line of code, and my experiences there have helped me grow immensely as a developer.  Originally hired as a backend Java/Spring developer, my responsibilities have evolved into so much more.  In addition to overseeing server-side development, I learned the Angular Framework on the job and took the lead in developing our web frontend.',
    'It\'s a dynamic and fast-paced work environment, where every day brings a new development challenge to overcome.  But the job wouldn\'t be any fun if it were too easy.',
  ],
  job_title: 'Director of Software Development / Software Engineer',
  image: 'https://cdn.newswire.com/files/x/f2/dd/7f2033d2f512149579942f3b5441.png',
  url_slug: 'giftapart'
};

export const RESEARCH_ASSISTANT: Employer = {
  name: 'Professor Chris Ochs, New Jersey Institute of Technology',
  start_date: new Date(2016, 8),
  end_date: new Date(2017, 0),
  description: [
    'During my senior year at NJIT, my Data Structures & Algorithms professor offered me an opportunity to assist him in building a Java application to create an abstraction network from complex ontologies of medical data.  These ontologies consisted of enormous graphs of hierarchical medical data, and the application\'s goal was to abstract these graphs into something more condensed and readily understandable.  I was tasked with modifying this application to work with the newest version of the OWL API, as well as building a feature to compare current versions of the ontology with previous versions- pointing out any significant changes.',
    'This project gave me an opportunity to learn how to build off of someone else\'s code in a large codebase that I had no prior knowledge of.  Furthermore, I was able to overcome the challenge of building something about a topic I knew little about- medical ontologies.',
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
    'Astrodyne TDI is a power-supply company- I worked for their IT Team to build software to support other Astrodyne employees.  For example, I built an inventory management system that acted as an interface between other employees and the company database.  I also rebuilt a lot of the company\'s legacy software from the ground up, bringing the applications into the "modern age" by recreating them in C#.  This internship gave me the important responsibility of developing software to be used by others to perform real business tasks- one of my first times doing so in my career.  It tought me to interface with my clients, gather information about their needs for the project, and work with them when something doesn\'t go as expected.',
  ],
  job_title: 'Software Developer Intern',
  image: 'https://www.astrodynetdi.com/images/default-source/default-album/astrodyne-tdi---large-logoff40bdb052456b66b263ff0000e044c6.png?sfvrsn=5505d610_0',
  url_slug: 'astrodyne'
};

export const TEACHING_ASSISTANT: Employer = {
  name: 'Professor Marvin Nakayama, New Jeresey Institute of Technology',
  start_date: new Date(2016, 0),
  end_date: new Date(2016, 4),
  description: [
    'During my junior year at NJIT, my "Foundations of Computer Science II" professor offered me a position as a teaching assistant for the very same class.  My primary responsibilities were to evaluate students\' "models of computation" projects, in which they designed and implemented DFAs (Deterministic Finite Automata) and PDAs (Pushdown Automata).  This offered the very unique challenge of evaluating others\' work and giving feedback that is both fair and constructive, something that has especially come in handy with my recent responsibilities.  I also had to analyze others\' code for correctness in various other languages (C, Java, and Python), which gave me great exposure to reading/understanding code that does not belong to me.'
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
    'They need no introduction- Colgate brings smiles to people across the globe with their healthcare products.  At Colgate Palmolive, I worked on an assembly line screwing caps onto toothpaste tubes.',  'Just kidding.',
    'I was a part of their Global Information Technology team, specifically in the finance division.  I primarily worked with SAP, using their quirky, high-level programming language called ABAP.  The language was learned entirely on the job, and it was mostly used to query Colgate\'s databases to generate business reports.  Looking back at it now, it was very similar to using SQL queries, but at the time of this internship, I still hadn\'t taken any database courses at NJIT yet.  Needless to say, this gave me a great opportunity to learn how to query for data in a unique way.',
    'I also helped to create a program that greatly increased productivity.  Large spreadsheets of data needed to be formatted properly in order to be uploaded to Colgate\'s system, and the transformation had been previously done by hand.  After being subjected to this task myself, my mentor gave me an opportunity to create a solution to this problem.  As I worked part-time throughout the semester, this became my side project.  By the end of my internship, in addition to my other responsibilities, I was able to create an ABAP application to automate this process, saving my coworkers many hours of tedious work.',
  ],
  job_title: 'Global IT Intern',
  image: 'https://logo.stocklight.com/NYSE/CL.png',
  url_slug: 'colgate'
};

export const LSEA: Employer = {
  name: 'LS Engineering Associates Corporation',
  start_date: new Date(2014, 5),
  end_date: new Date(2014, 8),
  description: [
    'LS Engineering Associates Corporation is a civil engineering consulting firm.  It was my first internship, and it was during a time when I had very little programming experience (and no engineering experience). Still, I did my best to learn everything I could in order to lend a hand.  I learned to use AutoCAD to trace drawings/blueprints, helped with a few site inspections, and made modifications to the company website.  At the time, the website was done in PHP, which I was entirely unfamiliar with.',
    'Despite this, I was able to grasp enough from the existing code to build off of it- things like additional menu options or extra pages were easy enough to figure out.  In the end, I learned that being a good problem-solver isn\'t about having all the necessary skills right from the getgo, but rather having the willingness and persistence to learn on the job and master the skills needed to succeed.\n',
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
