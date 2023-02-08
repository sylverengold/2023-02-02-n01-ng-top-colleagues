import { Component } from '@angular/core';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'tc-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
info={ nom: "Mephisto",email:"m.pheles@.enfer.com", tel:"666"};


comment ={date:"", message:""};
  comments=[{date:"", message:""}];
newComment = false;
addComment(){
if(this.comment.message!=''){
this.comment.date = (new Date()).toString();
this.comments.push({date:this.comment.date,message:this.comment.message});
this.comment.message ='';
 }
}


}
