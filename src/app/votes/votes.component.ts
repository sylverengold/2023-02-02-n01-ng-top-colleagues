import {Component, Input} from '@angular/core';

@Component({
  selector: 'tc-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent {

  @Input() public nbLike:number = 0;
  @Input() public nbHate:number = 0;

}
