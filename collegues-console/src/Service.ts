import axios from "axios";
import {Collegue} from "./Models";
export class Service{
private url = "https://dev.cleverapps.io/api/v2/colleagues";
    getListCollegue (){
        return axios.get(this.url);
    }

    getCollegue (pseudo:string){
        return axios.get(this.url+`/${pseudo}`);
    }

PostCollegue (collegue:Collegue){
    axios.post(this.url, {
    "pseudo":collegue.getPseudo(),
        "last":collegue.getLast(),
        "first":collegue.getFirst(),
        "photo":collegue.getPhoto(),
        "score":collegue.getScore()
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });




}



}
