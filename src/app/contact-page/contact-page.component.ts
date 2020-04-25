import {Component, OnInit} from '@angular/core';
import {PAST_EMPLOYERS} from '../_data/past-employers.data';
import {EMAIL_URL, LINKEDIN_URL} from '../_data/links.data';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  readonly CURRENT_JOB = PAST_EMPLOYERS.find(employer => !employer.end_date);
  readonly EMAIL = EMAIL_URL;
  readonly LINKEDIN = LINKEDIN_URL;

  constructor(private titleService: Title,
              private metaService: Meta,) {
  }

  ngOnInit() {
    this.titleService.setTitle(`Contact Me`);
    this.metaService.addTags([
      {
        name: `description`,
        content: `I love new challenges. Feel free to get in touch, and we can discuss your needs and work toward making your dream project come to life. Whether it's a new website, a server-side API, or something in between, I'm confident that I can help.`
      },
    ]);
  }
}
