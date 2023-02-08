import { Component } from '@angular/core';
import {ContactService} from "../providers/contact.service";
import {Router} from "@angular/router";
import {Colleague} from "../colleague";
import {ColleagueService} from "../providers/colleague.service";
@Component({
  selector: 'tc-form-colleague',
  templateUrl: './form-colleague.component.html',
  styleUrls: ['./form-colleague.component.scss']
})
export class FormColleagueComponent {

  c:Colleague = {id: 0,name: '', score: 0, imgg: '',scLike:0,scHate:0,ci:false};

  constructor(private srv:ColleagueService){
  }

  list_colleagues:Colleague[]=[];
  newColleague(){
    if(this.c.name !=''){
      this.c = {id: 0,name: '', score: 0, imgg: '',scLike:0,scHate:0,ci:false};
      this.list_colleagues = this.srv.getListColleagues();
      this.list_colleagues.push(this.c);
    }

  };

}
