import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-media-modal',
  templateUrl: './media-modal.component.html',
  styleUrls: ['./media-modal.component.scss']
})
export class MediaModalComponent implements OnInit {

  @Input() album: string[] = [];

  private _index: number;
  @Input() set index(val: number) {
    if (!this.album) {
      throw new Error('Cannot set index without specifiying "album" property.');
    }

    if (val > this.album.length - 1) {
      val = 0;
    }
    else if (val < 0) {
      val = this.album.length - 1;
    }

    this._index = val;
  }
  get index(): number {
    return this._index;
  }

  constructor(@Inject(MAT_DIALOG_DATA) private data: { album: string[], index: number },
              private dialogRef: MatDialogRef<MediaModalComponent>,) {
    this.album = data.album;
    this.index = data.index;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  cycleAlbumLeft() {
    this.index--;
  }

  cycleAlbumRight() {
    this.index++;
  }
}
