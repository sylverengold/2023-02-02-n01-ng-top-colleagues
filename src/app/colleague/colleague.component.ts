import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() public score_c:number = 100;
  @Input()  public name_c:string = '';
  @Input()  public num_img:number = 200;

  public reput:string = 'un Ami';
  vote(v:boolean){
    if (v == true) {
      this.score_c = this.score_c + 1;
    } else {
      this.score_c = this.score_c - 1;
    };


    if(this.score_c >= 130){
      this.reput = "une Idole";
    }
    else if ( this.score_c >= 110){
      this.reput = "une Star";
    }
    else if (this.score_c >= 90){
  this.reput = "un Ami";
    }
    else if (this.score_c >= 70){
      this.reput = "un Bouffon";
    }
  else{
  this.reput = "un Monstre";
    };


  }



}
