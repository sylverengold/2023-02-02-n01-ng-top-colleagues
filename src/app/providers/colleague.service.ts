import { Injectable } from '@angular/core';
import {Colleague} from "../colleague";
import arrayShuffle from "array-shuffle";
import {ColleagueComponent} from "../colleague/colleague.component";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {

  constructor() { }

  list_colleagues: Colleague[] = arrayShuffle([
    {id: 200,name: 'Attila', score: 65, imgg: "Attila.jpg",scLike:216,scHate:251,ci:false,dateNaissance:"vers 395",dateDeces:"vers 453",pays:"Turquie-Mongolie"},
    {id: 201,name: 'Raspoutine', score: 88, imgg: "Raspoutine.jpg",scLike:113,scHate:125,ci: false,dateNaissance:"9 janvier 1869",dateDeces:"17 décembre 1916",pays:"Russie"},
    {id: 202,name: 'Ghandi', score: 110, imgg: "Gandhi.jpg",scLike:210,scHate:200,ci: false,dateNaissance:"2 octobre 1869",dateDeces:"30 janvier 1948",pays:"Inde"},
    {id: 203,name: 'Elvis', score: 140, imgg: "Elvis.jpg",scLike:440,scHate:400,ci: false,dateNaissance:"8 janvier 1935",dateDeces:"16 aout 1977",pays:"USA"},
    {id: 204,name: 'Néfertiti', score: 120, imgg: "Nefertiti.jpg",scLike:235,scHate:215,ci:true,dateNaissance:"vers -1370",dateDeces:"vers -1334",pays:"Egypte"},
    {id: 205,name: 'Einstein', score: 111, imgg: "Einstein.jpg",scLike:121,scHate:110,ci: false,dateNaissance:"14 mars 1879",dateDeces:"18 avril 1955",pays:"Allemagne"},
    {id: 206,name: 'Lincoln', score: 107, imgg: "Lincoln.jpg",scLike:308,scHate:301,ci: false,dateNaissance:"12 février 1809",dateDeces:"15 avril 1865",pays:"USA"},
    {id: 207,name: 'Marie-Antoinette', score: 98, imgg: "Marie-Antoinette.jpg",scLike:98,scHate:100,ci: true,dateNaissance:"2 novembre 1755",dateDeces:"16 octobre 1793",pays:"France"},
    {id: 208,name: 'Thatcher', score: 0, imgg: "Thatcher.jpg",scLike:100,scHate:200,ci: true,dateNaissance:"13 octobre 1925",dateDeces:"8 avril 2013",pays:"Royaune-Uni"},
    {id: 209,name: 'Marilyn', score: 150, imgg: "Marilyn.jpg",scLike:550,scHate:500,ci: true,dateNaissance:"1 juin 1926",dateDeces:"4 aout 1962",pays:"USA"},
    {id: 210,name: 'Lao-Tseu', score: 98, imgg: "LaoTseu.jpg",scLike:111,scHate:99,ci: false,dateNaissance:"vers -400",dateDeces:"vers -500",pays:"Chine"},
    {id: 211,name: 'Mata-Hari', score: 111, imgg: "MataHari.jpg",scLike:211,scHate:200,ci:true,dateNaissance:"7 aout 1876",dateDeces:"15 octobre 1917",pays:"pays-Bas"},
  ]);

  getListColleagues(): Colleague[] {
    return this.list_colleagues;
  }

  getOneColleagues(idd:number):Colleague | undefined {
   const cc =this.list_colleagues.find(c=> c.id = idd);
   return cc;
  }


}
