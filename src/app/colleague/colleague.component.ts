import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ColleagueService} from "../providers/colleague.service";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() public score_c:number = 0;
  @Input()  public name_c:string = '';
  @Input()  public img_c:string = '';
  @Input()  public id_coll:number = 0;
  @Input()  public old_sc:number[] = [];
  @Input()  public ci:boolean = true;

  public reput:string = this.reputation(this.score_c,this.ci);

  reputation(sc:number, ci:boolean) {
    let rp:string;
    if (sc >= 130) {
      rp = "une Idole";
    } else if (sc >= 110) {
      rp = "une Star";
    } else if (sc >= 90) {
      if (ci == false){ rp = "un Ami";}else { rp = "une Amie";}

    } else if (sc >= 70) {
      if (ci == false){ rp = "un Bouffon";}else { rp = "une Pouffe";}
    } else {
      rp = "un Monstre";
    } ;
    return rp;
  }

  vote2(v:boolean){
    if (v == true) {

      this.score_c = this.score_c + 1;

    } else {

      this.score_c = this.score_c - 1;
    };
    this.reput = this.reputation(this.score_c,this.ci);

  }






}
