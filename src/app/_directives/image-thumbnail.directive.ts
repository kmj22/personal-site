import {AfterContentInit, Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MediaModalComponent} from '../media-modal/media-modal.component';

@Directive({
  selector: '[appImageThumbnail]'
})
export class ImageThumbnailDirective implements AfterContentInit {

  @Input() image: string;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private dialog: MatDialog) {
  }

  ngAfterContentInit() {


    this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click')
  onClick() {
    // Default the image to display in popup to the src of the host element
    // unless another image is specified
    if (!this.image) {
      this.image = this.elRef.nativeElement.src;
    }

    console.log(this.image);

    const dialogRef = this.dialog.open(MediaModalComponent, {
      // width: '250px',
      data: {image: this.image}
    });
  }
}
