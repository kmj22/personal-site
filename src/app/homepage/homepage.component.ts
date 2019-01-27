import { Component, OnInit } from '@angular/core';
import {PAST_EMPLOYERS} from '../_data/past-employers.data';
import {PERSONAL_PROJECTS} from '../_data/personal-projects.data';
import {PICTURES_OF_ME} from '../_data/self.data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  readonly SELF_PICS = PICTURES_OF_ME;

  readonly SUBTITLES = ['Software Engineer', 'Full Stack Developer', 'Game Designer', 'Problem Solver'];

  readonly EMPLOYERS = PAST_EMPLOYERS;
  readonly PROJECTS = PERSONAL_PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
