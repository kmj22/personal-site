import {AfterContentInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]'
})
export class FadeInOnScrollDirective implements AfterContentInit {

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,) {
    this.renderer.addClass(elRef.nativeElement, 'fade-in');
  }

  ngAfterContentInit() {
    this.checkIfVisible();
  }

  @HostListener('window:scroll', ['$event'])
  showNavbar(event): void {
    this.checkIfVisible();
  }

  private checkIfVisible() {
    const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop; // Distance scrolled down on the page

    let elementY = 0; // Distance of the element from the top of the page
    let el = this.elRef.nativeElement;

    // Traverse upward through element's parents, combining their height
    // to calculate the full from top of page
    while (el) {
      elementY += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }

    const windowHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

    // If window is scrolled enough that element has entered view
    if (scrollHeight + windowHeight >= elementY) {
      // add class to show the element, animate its transition
      this.renderer.addClass(this.elRef.nativeElement, 'fade-in-show');
    }
  }
}
