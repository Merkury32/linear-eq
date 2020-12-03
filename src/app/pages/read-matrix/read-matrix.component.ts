import { Component, OnInit, ViewChild } from '@angular/core';
import { EntryComponent } from '../entry/entry.component';

@Component({
  selector: 'app-read-matrix',
  templateUrl: './read-matrix.component.html',
  styleUrls: ['./read-matrix.component.scss'],
})
export class ReadMatrixComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  nRowsArr: number[];
  mColArr: number[];

  writeInputs(entryArr) {
    this.nRowsArr = entryArr[0];
    this.mColArr = entryArr[1];
  }
}
