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
    this.titleService.setTitle(`Portfolio | Kevyn Jaremko`);
    this.metaService.addTags([
      {
        name: `description`,
        content: `Here are some tangible projects I\'ve worked on.`
      },
    ]);
  }

}
