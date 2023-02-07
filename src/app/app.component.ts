import { Component } from '@angular/core';
import {AlbumService} from "./providers/album.service";
import {albumExterne} from "./models/album-externe";


@Component({
  selector: 'tc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-colleagues';

albums: albumExterne[] = [];
constructor(private AlbumSrv: AlbumService) {
 }


rafraichir() {
this.AlbumSrv.rechercherAlbum()
.subscribe(albumExterne => this.albums.push(albumExterne));
this.AlbumSrv.rafraichir();
 }



}


