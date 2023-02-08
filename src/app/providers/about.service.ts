import { Injectable } from '@angular/core';
import {Comment} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  info={ nom: "Mephisto",email:"m.pheles@.enfer.com", tel:"666-666-666"};

  comments=[];
  constructor() { };

  getInfos(){
    return this.info;
  }

  addComment(c: { date: Date;message:string;}){
    c.date = new Date();
    this.comments.push();
  }

  getAllComments(){
    return this.comments;
  }

}
