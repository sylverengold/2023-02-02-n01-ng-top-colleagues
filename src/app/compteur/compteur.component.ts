import { Component } from '@angular/core';
import {ColleagueService} from "../providers/colleague.service";
import {CompteurService} from "../providers/compteur.service";

@Component({
  selector: 'tc-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent {

  constructor(private compteurSrv:CompteurService){
  }


  public somVotes:number = 0;
}
