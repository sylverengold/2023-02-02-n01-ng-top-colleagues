import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {

  public score:number = 100;
  public reput:string = 'un Ami';
  vote(v:boolean){
    if (v == true) {
      this.score = this.score + 1;
    } else {
      this.score = this.score - 1;
    };


    if(this.score >= 130){
      this.reput = "une Idole";
    }
    else if ( this.score >= 110){
      this.reput = "une Star";
    }
    else if (this.score >= 90){
  this.reput = "un Ami";
    }
    else if (this.score >= 70){
      this.reput = "un Bouffon";
    }
  else{
  this.reput = "un Monstre";
    };


  }



}
