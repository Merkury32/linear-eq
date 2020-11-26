import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit {
  @ViewChild('entryForm') entryForm: EntryComponent;

  constructor() {}

  ngOnInit(): void {}

  readMatrix() {
    let matrixObj = this.entryForm.value;
    return matrixObj;
  }
}
