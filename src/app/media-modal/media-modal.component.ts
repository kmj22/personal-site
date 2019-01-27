import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-media-modal',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss']
})
export class MediaModalComponent implements OnInit {

  @Input() image: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: { image: string }) {
    this.image = data.image;
  }

  ngOnInit() {
  }

}
