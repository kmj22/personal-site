import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  readonly SELF_PICS: string[] = [
    'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21752039_1515866115161538_508390056059331551_n.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=55a78a4de9f4c139fd7c0e0414621ab3&oe=5C66AF81',
    'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/32966762_10216624447987921_8057186414812463104_n.jpg?_nc_cat=104&_nc_ht=scontent-lga3-1.xx&oh=ef2443a3af3582b5dc06e220065cc621&oe=5C819A0A',
    'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21462584_1515865128494970_9214223752114390568_n.jpg?_nc_cat=109&_nc_ht=scontent-lga3-1.xx&oh=5ad5c88bf245794a367010d0da7fbc20&oe=5C7BA404',
    'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21762131_1515865038494979_3529062915351326329_n.jpg?_nc_cat=105&_nc_ht=scontent-lga3-1.xx&oh=a0c361b25560ccc01cfbc05254f2b1ae&oe=5C6D9DE1',
    'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21731237_1515864788495004_7773731238212515607_n.jpg?_nc_cat=109&_nc_ht=scontent-lga3-1.xx&oh=643874557c1a8c40105dcb2262e344a0&oe=5C803350',
  ];

  constructor() { }

  ngOnInit() {
  }

}
