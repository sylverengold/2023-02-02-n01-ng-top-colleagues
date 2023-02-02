import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {C1Component} from "./c1/c1.component";
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';

@NgModule({
  // la liste des composants graphiques
  declarations: [
    C1Component,
    AppComponent,
    C2Component,
    C3Component,
    C4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
