import { Component, OnInit } from '@angular/core';
import {PICTURES_OF_ME} from '../_data/self.data';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  readonly SELF_PICS = PICTURES_OF_ME;

  constructor(private titleService: Title,
              private metaService: Meta,) {
  }

  ngOnInit() {
    this.titleService.setTitle(`About Me | Kevyn Jaremko`);
    this.metaService.addTags([
      {
        name: `description`,
        content: `A little more about my life.`
      },
    ]);
  }

}
