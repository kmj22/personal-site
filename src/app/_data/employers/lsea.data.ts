import {Employer} from '../../_interfaces/employer.interface';

export const LSEA: Employer = {
  name: 'LS Engineering Associates Corporation',
  start_date: new Date(2014, 5),
  end_date: new Date(2014, 8),
  description: [
    'LS Engineering Associates Corporation is a civil engineering consulting firm. It was my first internship, during a time when I had very little programming experience.  And no engineering experience.',
    'Even so, I did my best to learn everything I could to lend a hand. I learned to use AutoCAD to trace drawings/blueprints, helped with a few site inspections, and made changes to the company website. At the time, the website was done in PHP, which- you guessed it- I knew nothing about.',
    'Luckily, I was able to grasp enough from the existing code to build off of it; things like additional menu options or extra pages were easy enough to figure out. ',
    'My takeaway lesson here was one of my most valuable ones.  I learned that being a good problem-solver isn’t about knowing how to do everything, but rather having the persistence and flexibility to master the skills needed for success.',
  ],
  job_title: 'Intern',
  image: 'https://i.imgur.com/pQTtxvH.png',
  url_slug: 'lsea'
};
