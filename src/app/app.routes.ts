import {Routes} from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {ListColleaguesComponent} from "./list-colleagues/list-colleagues.component";
import {ListAlbumComponent} from "./shared/components/list-album/list-album.component";
import { FormColleagueComponent } from './form-colleague/form-colleague.component';
import {ColleagueComponent} from "./colleague/colleague.component";


export const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'list', component: ListColleaguesComponent},
  { path: 'requeteJSon', component: ListAlbumComponent},
  { path: 'AddList', component: FormColleagueComponent},
  { path: 'Detail/:id_d', component: ColleagueComponent},
 // { path: 'detail/:nom', component: ColleagueComponent},
{path: '', pathMatch: 'full', redirectTo: 'list'},
  //{path: '**', component: NotFoundPage}
]
