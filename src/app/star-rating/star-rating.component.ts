import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() maxRating = 5;

  wholeStars = 0;
  hasHalfStar = false;

  @Input() set rating(val: number) {
    // Ensure rating does not exceed max value
    val = Math.min(val, this.maxRating);

    this.wholeStars = Math.floor(val);

    const remainder = val - this.wholeStars;

    // Look at decimal remainder, we should either round up to another star, add a half star, or round down
    if (remainder > .75) {
      this.wholeStars++;
    }
    else if (remainder > .25) {
      this.hasHalfStar = true;
    }
    else {
      this.hasHalfStar = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
