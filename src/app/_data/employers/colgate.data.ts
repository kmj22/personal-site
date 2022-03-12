import {Employer} from '../../_interfaces/employer.interface';

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
  image: 'https://i.imgur.com/O1Pjg9h.png',
  url_slug: 'colgate'
};
