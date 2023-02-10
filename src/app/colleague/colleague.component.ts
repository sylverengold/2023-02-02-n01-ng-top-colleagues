import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ColleagueService} from "../providers/colleague.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Colleague} from "../colleague";
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
  @Input()  public scLike:number = 0;
  @Input()  public scHate:number = 0;
  @Input()  public ci:boolean = true;

  id_d?: number;
  dateN:string = '';
  dateD:string = '';
  dateL:string = '';
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
      this.scLike = this.scLike + 1;
    } else {

      this.score_c = this.score_c - 1;
      this.scHate = this.scHate + 1;
    };
    this.reput = this.reputation(this.score_c,this.ci);

  }






  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,private srv:ColleagueService) {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        const pre = paramMap.get("id_d") // {path: 'detail/:prenom', component: DetailPage},
        if(pre) {
          //this.id_d =Number(pre);
          this.id_d =Number(pre);
          const cc = srv.getOneColleagues(this.id_d);
          console.log("->"+cc?.name);
          console.log("->>"+this.id_d);

          if(cc!=undefined) {
            this.name_c = cc.name;
            console.log("-->"+this.name_c);
            this.score_c = cc.score;
            this.img_c = cc.imgg;
            this.id_coll = cc.id;
            this.scLike = cc.scLike;
            this.scHate = cc.scHate;
            this.ci = cc.ci;
        }
        }
      })

     // cc:let Colleague = this.srv.getListColleagues();

  }



  retourPage1() {
    this.router.navigateByUrl("/page1")
  }

}
