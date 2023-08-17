import { Component } from '@angular/core';
import { SharedService } from './components/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appel';

  present: number = 0;
  presence: number = 0;
  presentX: number = 0;
  presenceX: number = 0;
  personne: number = 0;

  liste: string[] = [];
  calendrier: string[] = [];
  jours1a30: number[] = [];
  jourSemaine: string[] = [];

  constructor(private sharedService: SharedService) {
    this.liste = sharedService.getListe();
    this.calendrier = sharedService.getCalendrier();
    this.jours1a30 = sharedService.getJours1a30();
    this.jourSemaine = sharedService.getJourSemaine();
  }

  maMethode(j: number, testEmission: boolean) {
    this.present++;
    this.presence =
      (this.present * 100) / (this.liste.length * this.calendrier.length);
    this.presenceX;
    console.log('personneIndex:', j);
  }

  maMethode2(j: number, testEmission: boolean) {
    this.present--;
    this.presence =
      (this.present * 100) / (this.liste.length * this.calendrier.length);
  }

  onCompteurJourOuvreChange(nouvelleValeur: number) {
    // Traitez la nouvelle valeur ici
    console.log('Nouvelle valeur du compteurJourOuvre:', nouvelleValeur);
  }
}
