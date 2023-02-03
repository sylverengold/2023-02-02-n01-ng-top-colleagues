import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonHLComponent } from './button-hl/button-hl.component';
import { ColleagueComponent } from './colleague/colleague.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonHLComponent,
    ColleagueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
