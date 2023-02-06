import {Component, EventEmitter, Input, Output} from '@angular/core';

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

  public reput:string = this.reputation(this.score_c);

  reputation(sc:number) {
    let rp:string;
    if (sc >= 130) {
      rp = "une Idole";
    } else if (sc >= 110) {
      rp = "une Star";
    } else if (sc >= 90) {
      rp = "un Ami";
    } else if (sc >= 70) {
      rp = "un Bouffon";
    } else {
      rp = "un Monstre";
    } ;
    return rp;
  }


  @Output()change2:EventEmitter<[number,number]>=new EventEmitter<[number,number]>();


  vote2(v:boolean){
    this.change2.emit([this.score_c,this.id_coll]);
    if (v == true) {

      this.score_c = this.score_c + 1;

    } else {

      this.score_c = this.score_c - 1;
    };
    this.reput = this.reputation(this.score_c);

  }


}
