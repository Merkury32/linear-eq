import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit {
  @ViewChild('entryForm') entryForm: EntryComponent;
  @Output() readMatrixCall = new EventEmitter<number[][]>();

  value: any;

  constructor() {}

  ngOnInit(): void {}

  readMatrix() {
    let nRows = parseInt(this.entryForm.value.nMatrix);
    let mCol = parseInt(this.entryForm.value.mMatrix);

    let nRowsTab: number[] = [];
    let mColTab: number[] = [];

    for (let i = 0; i < nRows; i++) {
      nRowsTab.push(0);
    }

    for (let j = 0; j < mCol; j++) {
      mColTab.push(0);
    }

    let matrixArr = [nRowsTab, mColTab];
    console.log(matrixArr);

    this.readMatrixCall.emit(matrixArr);
  }
}
