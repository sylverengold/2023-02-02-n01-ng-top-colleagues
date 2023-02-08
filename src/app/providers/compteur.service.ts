import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  constructor() { }

  private subjectNbVotes = new Subject<void>();

  sommeVotes() {
    // publier un événement
    this.subjectNbVotes.next();
  }

  abonnementSommeVotes() {
    return this.subjectNbVotes.asObservable();
  }



}
