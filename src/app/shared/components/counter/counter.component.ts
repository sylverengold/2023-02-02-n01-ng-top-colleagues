import { Component } from '@angular/core';
import{Observable,fromEvent}from'rxjs';
@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

//const obs$ = fromEvent(document.querySelector("input"),'click');
export class CounterComponent {

  sumVote:number=0;



}


