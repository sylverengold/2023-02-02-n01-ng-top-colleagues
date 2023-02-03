import { Component } from '@angular/core';
import {Colleague} from "../colleague";

@Component({
  selector: 'tc-list-colleagues',
  templateUrl: './list-colleagues.component.html',
  styleUrls: ['./list-colleagues.component.scss']
})
export class ListColleaguesComponent {


  list_colleagues: Colleague[] = [
    {id: 200,name: 'Attila', score: 65, imgg: "Attila.jpg"},
    {id: 201,name: 'Raspoutine', score: 88, imgg: "Raspoutine.jpg"},
    {id: 202,name: 'Ghandi', score: 110, imgg: "Gandhi.jpg"},
    {id: 203,name: 'Elvis', score: 140, imgg: "Elvis.jpg"},
    {id: 204,name: 'Néfertiti', score: 120, imgg: "Nefertiti.jpg"},
    {id: 205,name: 'Einstein', score: 111, imgg: "Einstein.jpg"},
    {id: 206,name: 'Lincoln', score: 107, imgg: "Lincoln.jpg"},
    {id: 207,name: 'Marie-Antoinette', score: 98, imgg: "Marie-Antoinette.jpg"},
    {id: 208,name: 'Thatcher', score: 0, imgg: "Thatcher.jpg"},
    {id: 209,name: 'Marilyn', score: 150, imgg: "Marilyn.jpg"},
    {id: 210,name: 'Lao-Tseu', score: 98, imgg: "LaoTseu.jpg"},
  ]



}
