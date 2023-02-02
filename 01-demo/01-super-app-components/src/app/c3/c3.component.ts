import { Component } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {
  enfantParle: string[] = [];
  titreAffiche = true;

  ecouterEnfant(enfantAdit: string) {

    if(enfantAdit === 'masquer') {
      this.titreAffiche = false;
    } else {
      this.titreAffiche = true;
    }

    this.enfantParle.push(enfantAdit);

  }
}
