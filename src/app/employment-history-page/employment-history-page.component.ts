import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PAST_EMPLOYERS} from '../_data/past-employers.data';
import {BACK_SKILLS, DATABASE_SKILLS, FRONT_SKILLS, OTHER_SKILLS} from '../_data/skills.data';
import {Employer} from '../_interfaces/employer.interface';
import {RESUME_URL} from '../_data/links.data';
import {ActivateRoutes} from '@angular/router/src/operators/activate_routes';
import {ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/internal/operators';
import {Meta, Title} from '@angular/platform-browser';
import {EDUCATION} from '../_data/employers/education.data';

@Component({
  selector: 'app-employment-history-page',
  templateUrl: './employment-history-page.component.html',
  styleUrls: ['./employment-history-page.component.scss']
})
export class EmploymentHistoryPageComponent implements OnInit, AfterViewInit {

  readonly FRONT_SKILLS = FRONT_SKILLS;
  readonly BACK_SKILLS = BACK_SKILLS;
  readonly DATABASE_SKILLS = DATABASE_SKILLS;
  readonly OTHER_SKILLS = OTHER_SKILLS;

  readonly EMPLOYERS = PAST_EMPLOYERS;
  readonly SCHOOL = EDUCATION;

  readonly RESUME_URL = RESUME_URL;

  constructor(private titleService: Title,
              private metaService: Meta,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.titleService.setTitle(`Resume | Kevyn Jaremko`);
    this.metaService.addTags([
      {
        name: `description`,
        content: `This page outlines my education and work experience, as well as any noteworthy challenges, accomplishments, and takeaways that came with them.`
      },
    ]);
  }

  ngAfterViewInit() {
    this.route.fragment.pipe(
      filter(fragment => !!fragment),
      map(fragment => document.querySelector('#' + fragment)),
      filter(anchorEl => !!anchorEl),
    )
      .subscribe(anchorEl => anchorEl.scrollIntoView());
  }

}
