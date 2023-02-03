import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonHLComponent } from './button-hl/button-hl.component';
import { ColleagueComponent } from './colleague/colleague.component';
import { ListColleaguesComponent } from './list-colleagues/list-colleagues.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonHLComponent,
    ColleagueComponent,
    ListColleaguesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
