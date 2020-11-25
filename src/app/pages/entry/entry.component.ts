import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  readMatrix(form: NgForm) {
    console.log(form.value.nMatrix);
  }
}
