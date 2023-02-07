import {Injectable} from '@angular/core';
import {delay, filter, from, map, Observable, of, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {albumExterne} from "../models/album-externe";



@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private subjectRafraichir = new Subject<void>();

  private data: albumExterne[] =   [
    {
      "userId": 1000,
      "id": 10,
      "title": "doudoudouroudoudou"
    }];


  //constructor() {}

 constructor(private http: HttpClient) {}



rechercherAlbumExterne(): Observable<albumExterne[]> {
return this.http.get<albumExterne[]>('https://jsonplaceholder.typicode.com/users/1/albums');
 }

rechercherAlbum() {
return from(this.data);
}
rafraichir() {
    // publier un événement
this.subjectRafraichir.next();
}

abonnementRafraichir() {
return this.subjectRafraichir.asObservable();
}
}
