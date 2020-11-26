import { Component, ViewChild } from '@angular/core';
import { EntryComponent } from './pages/entry/entry.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(EntryComponent) entryComponent: EntryComponent;
  ngOnInit() {}

  nRowsArr: number[];
  mColArr: number[];

  test() {
    let entryArr = this.entryComponent.readMatrix();
    this.nRowsArr = entryArr[0];
    this.mColArr = entryArr[1];
  }
}
