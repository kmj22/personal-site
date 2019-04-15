import { Component, OnInit } from '@angular/core';
import {EDUCATION, PAST_EMPLOYERS} from '../_data/past-employers.data';
import {BACK_SKILLS, DATABASE_SKILLS, FRONT_SKILLS, OTHER_SKILLS} from '../_data/skills.data';
import {Employer} from '../_interfaces/employer.interface';
import {RESUME_URL} from '../_data/links.data';

@Component({
  selector: 'app-employment-history-page',
  templateUrl: './employment-history-page.component.html',
  styleUrls: ['./employment-history-page.component.scss']
})
export class EmploymentHistoryPageComponent implements OnInit {

  readonly FRONT_SKILLS = FRONT_SKILLS;
  readonly BACK_SKILLS = BACK_SKILLS;
  readonly DATABASE_SKILLS = DATABASE_SKILLS;
  readonly OTHER_SKILLS = OTHER_SKILLS;

  readonly EMPLOYERS = PAST_EMPLOYERS;
  readonly SCHOOL = EDUCATION;

  readonly RESUME = RESUME_URL;

  constructor() { }

  ngOnInit() {
  }

}
