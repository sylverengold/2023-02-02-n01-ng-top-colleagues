import {Component, Input} from '@angular/core';
import {Colleague} from "../colleague";
import arrayShuffle from 'array-shuffle';
import {ColleagueService} from "../providers/colleague.service";
@Component({
  selector: 'tc-list-colleagues',
  templateUrl: './list-colleagues.component.html',
  styleUrls: ['./list-colleagues.component.scss']
})
export class ListColleaguesComponent {

  constructor(private srv:ColleagueService){
  }
list_colleagues = this.srv.getListColleagues();



}
