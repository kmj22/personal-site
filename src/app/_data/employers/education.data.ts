import {Employer} from '../../_interfaces/employer.interface';
import {IMAGES} from '../images.data';

export const EDUCATION: Employer = {
  name: 'New Jersey Institute of Technology',
  job_title: 'Albert Dorman Honors College (Summa Cum Laude)',
  description: ['I received my Bachelor of Science in Computer Science with a minor in Web & Information Systems.'],
  start_date: new Date(2013, 8),
  end_date: new Date(2017, 4),
  image: IMAGES.njit_logo,
  url_slug: 'njit'
};
