import {AfterContentInit, Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MediaModalComponent} from '../media-modal/media-modal.component';

@Directive({
  selector: '[appImageThumbnail]'
})
export class ImageThumbnailDirective implements AfterContentInit {

  @Input() album: string[];
  @Input() index: number;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private dialog: MatDialog) {
  }

  ngAfterContentInit() {


    this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click')
  onClick() {

    const dialogRef = this.dialog.open(MediaModalComponent, {
      // width: '250px',
      data: {
        album: this.album,
        index: this.index,
      },
      panelClass: 'media-modal',
      backdropClass: 'media-modal-backdrop',
      maxWidth: '100vw',
      maxHeight: '100vh',

    });
  }
}
