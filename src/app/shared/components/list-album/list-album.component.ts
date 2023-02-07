import { Component } from '@angular/core';
import {albumExterne} from "../../../models/album-externe";
import {AlbumService} from "../../../providers/album.service";

@Component({
  selector: 'tc-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.scss']
})
export class ListAlbumComponent {


 albums: albumExterne[] = [];

  constructor(private albumSrv: AlbumService) {
   this.albumSrv.rechercherAlbumExterne()
   .subscribe(tabAlbums => this.albums = tabAlbums);
 }

}
