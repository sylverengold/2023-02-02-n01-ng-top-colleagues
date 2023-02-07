import { Component } from '@angular/core';
import{Observable,fromEvent}from'rxjs';
import {AlbumService} from "../../../providers/album.service";
@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})

//const obs$ = fromEvent(document.querySelector("input"),'click');
export class CounterComponent {
  nb = 0;
}






