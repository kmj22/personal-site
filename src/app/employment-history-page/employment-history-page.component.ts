import { Component, OnInit } from '@angular/core';
import {PAST_EMPLOYERS} from '../_data/past-employers.data';
import {BACK_SKILLS, DATABASE_SKILLS, FRONT_SKILLS, OTHER_SKILLS} from '../_data/skills.data';
import {Employer} from '../_interfaces/employer.interface';

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
  readonly SCHOOL: Employer = {
    name: 'New Jersey Institute of Technology',
    job_title: '',
    image: '',
    description: 'A school',
    start_date: new Date(2013, 9),
    end_date: new Date(2017, 5)
  };


  constructor() { }

  ngOnInit() {
  }

}
