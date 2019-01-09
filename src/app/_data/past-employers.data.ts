import {Employer} from '../_interfaces/employer.interface';

export const GIFTAPART: Employer = {
  name: 'Giftapart',
  start_date: new Date(2017, 9),
  description: 'My team works on building amazing user experiences for Google Cloud users. I helped carry out the top-to-bottom redesign and implementation of Cloud Datastore\'s UI, and currently lead the front-end team of Google\'s Cloud SQL product. March 2017, we launched our PostgreSQL offering – which increased Cloud SQL\'s total addressable market by ~40%.',
  job_title: 'Director of Front End Development / Software Engineer',
  image: 'https://cdn.newswire.com/files/x/f2/dd/7f2033d2f512149579942f3b5441.png',
};

export const ASTRODYNE: Employer = {
  name: 'Astrodyne TDI',
  start_date: new Date(2016, 6),
  end_date: new Date(2016, 8),
  description: 'Now you have power!!!',
  job_title: 'Software Developer Intern',
  image: 'https://www.astrodynetdi.com/images/default-source/default-album/astrodyne-tdi---large-logoff40bdb052456b66b263ff0000e044c6.png?sfvrsn=5505d610_0'
};

export const COLGATE: Employer = {
  name: 'Colgate Palmolive',
  start_date: new Date(2015, 6),
  end_date: new Date(2016, 1),
  description: 'toothpaste dudes',
  job_title: 'Global IT Intern',
  image: 'https://pbs.twimg.com/profile_images/530057213667069952/sBF8Pv2r_400x400.jpeg',
};

export const PAST_EMPLOYERS: Employer[] = [
  GIFTAPART,
  ASTRODYNE,
  COLGATE,
];

