import { Component, OnInit } from '@angular/core';
import {PERSONAL_PROJECTS} from '../_data/personal-projects.data';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  readonly PROJECTS = PERSONAL_PROJECTS;

  constructor() { }

  ngOnInit() {
  }

}
