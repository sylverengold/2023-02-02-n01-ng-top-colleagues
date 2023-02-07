import { Injectable } from '@angular/core';
import {Colleague} from "../colleague";
import arrayShuffle from "array-shuffle";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

  list_colleagues: Colleague[] = arrayShuffle([
    {id: 200,name: 'Attila', score: 65, imgg: "Attila.jpg",scLike:216,scHate:251,ci:false},
    {id: 201,name: 'Raspoutine', score: 88, imgg: "Raspoutine.jpg",scLike:113,scHate:125,ci: false},
    {id: 202,name: 'Ghandi', score: 110, imgg: "Gandhi.jpg",scLike:210,scHate:200,ci: false},
    {id: 203,name: 'Elvis', score: 140, imgg: "Elvis.jpg",scLike:440,scHate:400,ci: false},
    {id: 204,name: 'Néfertiti', score: 120, imgg: "Nefertiti.jpg",scLike:235,scHate:215,ci:true},
    {id: 205,name: 'Einstein', score: 111, imgg: "Einstein.jpg",scLike:121,scHate:110,ci: false},
    {id: 206,name: 'Lincoln', score: 107, imgg: "Lincoln.jpg",scLike:308,scHate:301,ci: false},
    {id: 207,name: 'Marie-Antoinette', score: 98, imgg: "Marie-Antoinette.jpg",scLike:98,scHate:100,ci: true},
    {id: 208,name: 'Thatcher', score: 0, imgg: "Thatcher.jpg",scLike:100,scHate:200,ci: true},
    {id: 209,name: 'Marilyn', score: 150, imgg: "Marilyn.jpg",scLike:550,scHate:500,ci: true},
    {id: 210,name: 'Lao-Tseu', score: 98, imgg: "LaoTseu.jpg",scLike:111,scHate:99,ci: false},
    {id: 211,name: 'Mata-Hari', score: 111, imgg: "MataHari.jpg",scLike:211,scHate:200,ci:true},
  ]);

  getListColleagues(): Colleague[] {
    return this.list_colleagues;
  }


}
