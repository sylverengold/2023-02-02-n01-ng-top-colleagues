import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import {Service} from "./Service";
import {Collegue} from "./Models";
export class Presentation {

    private service:Service = new Service;

    demarrer () : void{
        console.log('1. -> Liste les collegues');
        console.log('2. -> Ajout d\'un collegue');
        console.log('99. -> Sortir');
    }

    async question1(){
        const r1 = readline.createInterface({ input, output });
        const answer1 = await r1.question("quel est votre choix ?");
        console.log(`Choix ${answer1}`);
        r1.close();

        if(answer1 == '1') {
            console.log('Liste des clients');
            const answer2 = await this.service.getListCollegue();
            console.log(answer2.data);
            const r1 = readline.createInterface({ input, output });
            const answer3 = await r1.question("choisir un pseudo :");
            const answer4 = await this.service.getCollegue(answer3);
            console.log(answer4.data);
            r1.close();

        }
        else if(answer1 == '2'){
            let collegue = new Collegue("fifi","Jean_Philippe", "PERVIT-MONSLYP", "https://randomuser.me/api/portraits/men/85.jpg", 523);

            const r2=readline.createInterface({input,output})
            collegue.setPseudo(await r2.question("quel est votre pseudo?"));
            collegue.setFirst(await r2.question("quel est votre nom?"));
            collegue.setLast(await r2.question("quel est votre prenom?"));
            let image= "https://iili.io/Hc70A5G.png";
            r2.close();
            await this.service.PostCollegue(collegue);
        }
        else if(answer1 == '99'){
            console.log('Au revoir');
        }
        else{
            console.log('Mauvais choix');
            this.question1();
        }
    }


}