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

  test() {
    let entryObj = this.entryComponent.readMatrix();

    let nMatrix = entryObj.nMatrix;
    let mMatrix = entryObj.mMatrix;

    console.log(nMatrix, mMatrix);
  }
}
