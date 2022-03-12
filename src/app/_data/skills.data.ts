import {Skill} from '../_interfaces/skill.interface';

export const BACK_SKILLS: Skill[] = [
  {name: 'Java', rating: 5},
  {name: 'Spring Framework (Spring Boot)', rating: 4},
  {name: 'JPA/Hibernate', rating: 4},
  {name: 'Python', rating: 4},
  {name: 'C#', rating: 3},
  {name: 'PHP', rating: 2.5},
];

export const DATABASE_SKILLS: Skill[] = [
  {name: 'SQL (Postgres, MySQL)', rating: 4},
  {name: 'Relational Database Design', rating: 4},
  {name: 'MongoDB', rating: 2.5},
  {name: 'ElasticSearch', rating: 3},
];

export const FRONT_SKILLS: Skill[] = [
  {name: 'Angular(2+)', rating: 4.5},
  {name: 'JavaScript', rating: 4},
  {name: 'TypeScript', rating: 4},
  {name: 'RxJS (Observables)', rating: 4},
  {name: 'CSS', rating: 4},
  {name: 'SASS/SCSS', rating: 3.5},
  {name: 'HTML(5)', rating: 4.5},
  {name: 'Bootstrap', rating: 3},
];

export const DEVOPS: Skill[] = [
  {name: 'Kubernetes', rating: 3},
  {name: 'Docker', rating: 4},
  {name: 'Ansible', rating: 3},
  {name: 'Jenkins', rating: 3},
  {name: 'AWS', rating: 3},
  {name: 'Ubuntu Servers', rating: 4},
];

export const OTHER_SKILLS: Skill[] = [
  {name: 'Game Maker Studio', rating: 5},
  {name: 'AJAX/API Calls & JSON', rating: 5},
  {name: 'Git (Version Control)', rating: 4},
  {name: 'IntelliJ/Webstorm/Pycharm', rating: 4},
];

export const SKILL_SUMMARY = [
  BACK_SKILLS[0],
  BACK_SKILLS[1],
  BACK_SKILLS[2],
  BACK_SKILLS[3],
  DATABASE_SKILLS[0],
  DATABASE_SKILLS[3],
  FRONT_SKILLS[0],
  FRONT_SKILLS[1],
  FRONT_SKILLS[3],
  FRONT_SKILLS[4],
  FRONT_SKILLS[5],
  OTHER_SKILLS[0],
];

const SKILL_COMPARATOR = (s1: Skill, s2: Skill) => s2.rating - s1.rating;

BACK_SKILLS.sort(SKILL_COMPARATOR);
DATABASE_SKILLS.sort(SKILL_COMPARATOR);
FRONT_SKILLS.sort(SKILL_COMPARATOR);
OTHER_SKILLS.sort(SKILL_COMPARATOR);
