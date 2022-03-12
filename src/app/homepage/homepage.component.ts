import {Component, OnInit} from '@angular/core';
import {PAST_EMPLOYERS, PAST_EMPLOYERS_SUMMARY} from '../_data/past-employers.data';
import {EVEN_HEROES_DIE, PERSONAL_PROJECTS, PROJECT_SUMMARY} from '../_data/personal-projects.data';
import {PICTURES_OF_ME} from '../_data/self.data';
import {SKILL_SUMMARY} from '../_data/skills.data';
import {IMAGES} from '../_data/images.data';
import {Meta, Title} from '@angular/platform-browser';
import {GIFTAPART_URL} from '../_data/links.data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  readonly SUBTITLES = ['Software Engineer', 'Full Stack Developer', 'Game Designer', 'Problem Solver'];

  readonly SELF_PORTRAIT = IMAGES.me;
  readonly SKILLS = SKILL_SUMMARY;
  readonly EMPLOYERS = PAST_EMPLOYERS_SUMMARY;

  readonly GIFTAPART_IMG = IMAGES.gap_banner;
  readonly GAMEPLAY_IMG = IMAGES.gameplay;

  readonly GIFTAPART_URL = GIFTAPART_URL;

  readonly SELF_PICS = [
    IMAGES.food,
    IMAGES.broadway,
    IMAGES.boat,
    IMAGES.munich
  ];

  constructor(private titleService: Title,
              private metaService: Meta,) {
  }

  ngOnInit() {
    this.titleService.setTitle(`Kevyn Jaremko's Personal Site`);
    this.metaService.addTags([
      {
        name: `description`,
        content: 'This is a portfolio to showcase my work experience as a software developer, as well as some of my own person projects.'
      },
    ]);
  }

}
