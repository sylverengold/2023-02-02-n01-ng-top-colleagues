
// Création d'un composant graphique

import {Component} from "@angular/core";
import {Colleague} from "../models/colleague";

@Component({
  selector: 'app-c1', //<app-c1></app-c1>
  template: `
    <section>
      <h2>C1 Component</h2>
      <p [hidden]="cacheParagraphe">Ceci est C1 {{ titre }}</p>
      <p>Nom = {{ rossi.nom | uppercase}}, Age= {{rossi.age}}</p>
      <p (mouseover)="afficherCacher()">Rossi = {{ rossi | json}}</p>
      <input type="text" #saisie (keydown.enter)="saisir(saisie)">
      <button (mouseover)="afficherCacher()" (click)="afficherCacher()">Afficher/Cacher</button>
    </section>
  `
})
export class C1Component {

  cacheParagraphe = false

  titre = 'ffff'

  rossi: Colleague = {
    nom: 'Oddet',
    prenom: 'Rossi',
    age: 32
  }

  afficherCacher() {
    this.cacheParagraphe = !this.cacheParagraphe;
  }

  saisir(saisie: HTMLInputElement) {
    this.titre = saisie.value;
    saisie.value = '';
  }
}
