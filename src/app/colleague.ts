import {ColleagueService} from "./providers/colleague.service";

export interface Colleague {
  id:number;
  score:number;
  name:string;
  imgg:string;
  ci:boolean;
  scLike:number;
  scHate:number;
  dateNaissance : string;
  dateDeces:string;
  pays:string;

}
