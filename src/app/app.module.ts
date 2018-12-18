import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module/material.module';
import {HomepageComponent} from './homepage/homepage.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import {faAt, faBars, faStar, faStarHalf, faTimes} from '@fortawesome/free-solid-svg-icons';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { LoopRangePipe } from './_pipes/loop-range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StarRatingComponent,
    LoopRangePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

    library.add(faGithub, faLinkedinIn, faAt, faStar, faStarHalf, faBars, faTimes);
  }
}
