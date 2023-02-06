import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonHLComponent } from './button-hl/button-hl.component';
import { ColleagueComponent } from './colleague/colleague.component';
import { ListColleaguesComponent } from './list-colleagues/list-colleagues.component';
import { CounterComponent } from './shared/components/counter/counter.component';
import { VotesComponent } from './votes/votes.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonHLComponent,
    ColleagueComponent,
    ListColleaguesComponent,
    CounterComponent,
    VotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
