import { Component, OnInit } from '@angular/core';
import {PAST_EMPLOYERS} from '../_data/past-employers.data';

@Component({
  selector: 'app-employment-history-page',
  templateUrl: './employment-history-page.component.html',
  styleUrls: ['./employment-history-page.component.scss']
})
export class EmploymentHistoryPageComponent implements OnInit {

  readonly EMPLOYERS = PAST_EMPLOYERS;

  constructor() { }

  ngOnInit() {
  }

}
