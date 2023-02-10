import {Component, Output} from '@angular/core';
import {AlbumService} from "./providers/album.service";
import {albumExterne} from "./models/album-externe";
import { AppModule } from './app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {ColleagueService} from "./providers/colleague.service";
import {Colleague} from "./colleague";
import arrayShuffle from "array-shuffle";
@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';

albums: albumExterne[] = [];
constructor(private AlbumSrv: AlbumService,private srv:ColleagueService) {}
//rafraichir() {
//this.AlbumSrv.rechercherAlbum()
//.subscribe(albumExterne => this.albums.push(albumExterne));
//this.AlbumSrv.rafraichir();
 //}


list_colleagues_m =([
    {id: 200,name: 'Attila'},
    {id: 201,name: 'Raspoutine'},
    {id: 202,name: 'Ghandi'},
    {id: 203,name: 'Elvis'},
    {id: 204,name: 'Néfertiti'},
    {id: 205,name: 'Einstein'},
    {id: 206,name: 'Lincoln'},
    {id: 207,name: 'Marie-Antoinette'},
    {id: 208,name: 'Thatcher'},
    {id: 209,name: 'Marilyn'},
    {id: 210,name: 'Lao-Tseu'},
    {id: 211,name: 'Mata-Hari'}
  ]);

}


