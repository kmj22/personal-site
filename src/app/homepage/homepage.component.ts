import { Component, OnInit } from '@angular/core';
import {PAST_EMPLOYERS, PAST_EMPLOYERS_SUMMARY} from '../_data/past-employers.data';
import {PERSONAL_PROJECTS, PROJECT_SUMMARY} from '../_data/personal-projects.data';
import {PICTURES_OF_ME} from '../_data/self.data';
import {SKILL_SUMMARY} from '../_data/skills.data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  readonly SUBTITLES = ['Software Engineer', 'Full Stack Developer', 'Game Designer', 'Problem Solver'];

  readonly EMPLOYERS = PAST_EMPLOYERS_SUMMARY;
  readonly PROJECTS = PROJECT_SUMMARY;
  readonly SELF_PICS = PICTURES_OF_ME;
  readonly SKILLS = SKILL_SUMMARY;

  constructor() { }

  ngOnInit() {
  }

}
