import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showScrollButton = false;

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll', ['$event'])
  showNavbar(event): void {
    const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;

    this.showScrollButton = scrollHeight > 80;
  }
}
