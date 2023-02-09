import {Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ListColleaguesComponent} from "./list-colleagues/list-colleagues.component";
import {ListAlbumComponent} from "./shared/components/list-album/list-album.component";


export const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'list', component: ListColleaguesComponent},
  { path: 'requeteJSon', component: ListAlbumComponent}
 // { path: 'detail/:nom', component: ColleagueComponent},
  // {path: '', pathMatch: 'full', redirectTo: ''},
  //{path: '**', component: NotFoundPage}
]
