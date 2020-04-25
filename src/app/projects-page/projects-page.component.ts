import { Component, OnInit } from '@angular/core';
import {PERSONAL_PROJECTS} from '../_data/personal-projects.data';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  readonly PROJECTS = PERSONAL_PROJECTS;


  constructor(private titleService: Title,
              private metaService: Meta,) {
  }

  ngOnInit() {
    this.titleService.setTitle(`Projects`);
    this.metaService.addTags([
      {
        name: `description`,
        content: `Side projects are good.  Here are some things I've been working on outside of the office.`
      },
    ]);
  }

}
