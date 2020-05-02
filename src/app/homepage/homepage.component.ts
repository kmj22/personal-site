import {Component, OnInit} from '@angular/core';
import {PAST_EMPLOYERS, PAST_EMPLOYERS_SUMMARY} from '../_data/past-employers.data';
import {EVEN_HEROES_DIE, PERSONAL_PROJECTS, PROJECT_SUMMARY} from '../_data/personal-projects.data';
import {PICTURES_OF_ME} from '../_data/self.data';
import {SKILL_SUMMARY} from '../_data/skills.data';
import {LOCAL_IMAGES} from '../_data/local-images.data';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  readonly SUBTITLES = ['Software Engineer', 'Full Stack Developer', 'Game Designer', 'Problem Solver'];

  readonly SELF_PORTRAIT = LOCAL_IMAGES.me;
  readonly SKILLS = SKILL_SUMMARY;
  readonly GAMEPLAY_IMG = LOCAL_IMAGES.gameplay;
  readonly EMPLOYERS = PAST_EMPLOYERS_SUMMARY;

  readonly SELF_PICS = [
    LOCAL_IMAGES.food,
    LOCAL_IMAGES.broadway,
    LOCAL_IMAGES.boat,
    LOCAL_IMAGES.munich
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
