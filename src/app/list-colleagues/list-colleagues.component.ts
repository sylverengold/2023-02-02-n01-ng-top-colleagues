import {Component, Input} from '@angular/core';
import {Colleague} from "../colleague";
import arrayShuffle from 'array-shuffle';
@Component({
  selector: 'tc-list-colleagues',
  templateUrl: './list-colleagues.component.html',
  styleUrls: ['./list-colleagues.component.scss']
})
export class ListColleaguesComponent {

  list_colleagues: Colleague[] = arrayShuffle([
    {id: 200,name: 'Attila', score: 65, imgg: "Attila.jpg",old_score:[]},
    {id: 201,name: 'Raspoutine', score: 88, imgg: "Raspoutine.jpg",old_score:[]},
    {id: 202,name: 'Ghandi', score: 110, imgg: "Gandhi.jpg",old_score:[]},
    {id: 203,name: 'Elvis', score: 140, imgg: "Elvis.jpg",old_score:[]},
    {id: 204,name: 'Néfertiti', score: 120, imgg: "Nefertiti.jpg",old_score:[]},
    {id: 205,name: 'Einstein', score: 111, imgg: "Einstein.jpg",old_score:[]},
    {id: 206,name: 'Lincoln', score: 107, imgg: "Lincoln.jpg",old_score:[]},
    {id: 207,name: 'Marie-Antoinette', score: 98, imgg: "Marie-Antoinette.jpg",old_score:[]},
    {id: 208,name: 'Thatcher', score: 0, imgg: "Thatcher.jpg",old_score:[0,-1,0]},
    {id: 209,name: 'Marilyn', score: 150, imgg: "Marilyn.jpg",old_score:[]},
    {id: 210,name: 'Lao-Tseu', score: 98, imgg: "LaoTseu.jpg",old_score:[]},
    {id: 211,name: 'Mata-Hari', score: 111, imgg: "MataHari.jpg",old_score:[]},
  ]);

  modif_score:number =0;
  modif_id =0;

vote3([]){
  this.modif_id = 0;
    this.modif_score = 0;

}


}
