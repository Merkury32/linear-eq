import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './pages/entry/entry.component';
import { FormsModule } from '@angular/forms';
import { ReadMatrixComponent } from './pages/read-matrix/read-matrix.component';

@NgModule({
  declarations: [AppComponent, EntryComponent, ReadMatrixComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
