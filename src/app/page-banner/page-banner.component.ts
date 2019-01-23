import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.scss']
})
export class PageBannerComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() subtitleList: string[];
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
