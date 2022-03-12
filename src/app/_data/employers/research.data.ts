import {Employer} from '../../_interfaces/employer.interface';
import {IMAGES} from '../images.data';

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
  image: IMAGES.njit_logo,
  url_slug: 'research-assistant'
};
