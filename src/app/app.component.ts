import { Component, OnInit, ViewChild } from '@angular/core';
import { ReadMatrixComponent } from './pages/read-matrix/read-matrix.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  @ViewChild('readComponent') readComponent: ReadMatrixComponent;

  ngOnInit() {}

  readMatrixCall(event) {
    this.readComponent.writeInputs(event);
  }

}
