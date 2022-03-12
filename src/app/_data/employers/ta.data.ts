import {Employer} from '../../_interfaces/employer.interface';
import {IMAGES} from '../images.data';

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
  image: IMAGES.njit_logo,
  url_slug: 'teaching-assistant'
};
