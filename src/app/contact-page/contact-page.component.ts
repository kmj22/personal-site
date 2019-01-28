import { Component, OnInit } from '@angular/core';
import {PAST_EMPLOYERS} from '../_data/past-employers.data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  readonly CURRENT_JOB = PAST_EMPLOYERS.find(employer => !employer.end_date);

  constructor() { }

  ngOnInit() {
  }

}
