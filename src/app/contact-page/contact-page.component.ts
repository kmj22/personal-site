import { Component, OnInit } from '@angular/core';
import {PAST_EMPLOYERS} from '../_data/past-employers.data';
import {EMAIL_URL, LINKEDIN_URL} from '../_data/links.data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  readonly CURRENT_JOB = PAST_EMPLOYERS.find(employer => !employer.end_date);
  readonly EMAIL = EMAIL_URL;
  readonly LINKEDIN = LINKEDIN_URL;

  constructor() { }

  ngOnInit() {
  }
}
