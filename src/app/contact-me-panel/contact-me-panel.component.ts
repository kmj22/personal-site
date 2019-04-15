import { Component, OnInit } from '@angular/core';
import {EMAIL_URL, GITHUB_URL, LINKEDIN_URL} from '../_data/links.data';

@Component({
  selector: 'app-contact-me-panel',
  templateUrl: './contact-me-panel.component.html',
  styleUrls: ['./contact-me-panel.component.scss']
})
export class ContactMePanelComponent implements OnInit {

  readonly START_DATE = new Date(2018, 11);
  readonly END_DATE = new Date();

  readonly LINKEDIN = LINKEDIN_URL;
  readonly GITHUB = GITHUB_URL;
  readonly EMAIL = EMAIL_URL;

  constructor() { }

  ngOnInit() {
  }

  navigateTo(url: string) {
    const win = window.open(url, '_blank');
    if (win) {
      win.focus();
    }
  }

}
