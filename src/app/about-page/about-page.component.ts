import { Component, OnInit } from '@angular/core';
import {PICTURES_OF_ME} from '../_data/self.data';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  readonly SELF_PICS = PICTURES_OF_ME;

  constructor() { }

  ngOnInit() {
  }

}
