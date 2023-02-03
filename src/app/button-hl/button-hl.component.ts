import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'tc-button-hl',
  templateUrl: './button-hl.component.html',
  styleUrls: ['./button-hl.component.scss']
})
export class ButtonHLComponent {

  @Output()change:EventEmitter<boolean>=new EventEmitter<boolean>();
    vote(v:boolean){
      this.change.emit(v);
    }

  }



