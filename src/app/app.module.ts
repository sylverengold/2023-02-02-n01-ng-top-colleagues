import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonHLComponent } from './button-hl/button-hl.component';
import { ColleagueComponent } from './colleague/colleague.component';
import { ListColleaguesComponent } from './list-colleagues/list-colleagues.component';
import { CounterComponent } from './shared/components/counter/counter.component';
import { VotesComponent } from './votes/votes.component';
import { ListAlbumComponent } from './shared/components/list-album/list-album.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ButtonHLComponent,
    ColleagueComponent,
    ListColleaguesComponent,
    CounterComponent,
    VotesComponent,
    ListAlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
