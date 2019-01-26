import {Skill} from '../_interfaces/skill.interface';

export const BACK_SKILLS: Skill[] = [
  {name: 'Java', rating: 5},
  {name: 'Spring Framework (Spring Boot)', rating: 4},
  {name: 'JPA/Hibernate', rating: 4},
  {name: 'Python', rating: 3},
  {name: 'C#', rating: 4},
  {name: 'C++', rating: 3},
  {name: 'PHP', rating: 2.5},
  {name: 'C', rating: 2},
];

export const DATABASE_SKILLS: Skill[] = [
  {name: 'SQL (Postgres, MySQL)', rating: 4},
  {name: 'Relational Database Design', rating: 4},
  {name: 'MongoDB', rating: 2},
  {name: 'ElasticSearch', rating: 3},
];

export const FRONT_SKILLS: Skill[] = [
  {name: 'AJAX/API Calls', rating: 5},
  {name: 'Angular(2+)', rating: 4.5},
  {name: 'JavaScript', rating: 4},
  {name: 'RxJS (Observables)', rating: 4},
  {name: 'CSS', rating: 4},
  {name: 'SASS/SCSS', rating: 3.5},
  {name: 'HTML(5)', rating: 4.5},
  {name: 'Bootstrap', rating: 3},
  {name: 'jQuery', rating: 2},
];

export const OTHER_SKILLS: Skill[] = [
  {name: 'Game Maker Studio', rating: 5},
  {name: 'JSON', rating: 5},
  {name: 'Git (Version Control)', rating: 4},
  {name: 'IntelliJ', rating: 4},
  {name: 'Webstorm', rating: 4},
  {name: 'Adobe Creative Suite', rating: 3.5},
];

const SKILL_COMPARATOR = (s1: Skill, s2: Skill) => s2.rating - s1.rating;

BACK_SKILLS.sort(SKILL_COMPARATOR);
DATABASE_SKILLS.sort(SKILL_COMPARATOR);
FRONT_SKILLS.sort(SKILL_COMPARATOR);
OTHER_SKILLS.sort(SKILL_COMPARATOR);
