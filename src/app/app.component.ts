import { Component } from '@angular/core';
import { SharedService } from './components/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appel';

  compteurJoursPresence: number = 0;
  totalJoursPresence: number = 0;
  personne: number = 0;

  listeEleves: string[] = [];
  calendrier: string[] = [];
  jours1a30: number[] = [];
  jourSemaine: string[] = [];
  jourOuvreDuMois: number = 0;

  constructor(private sharedService: SharedService) {
    this.listeEleves = sharedService.getListeEleves();
    this.calendrier = sharedService.getCalendrier();
    this.jours1a30 = sharedService.getJours1a30();
    this.jourSemaine = sharedService.getJourSemaine();
  }

  maMethode(j: number, testEmission: boolean) {
    this.compteurJoursPresence++;
    this.totalJoursPresence =
      (this.compteurJoursPresence * 100) /
      (this.listeEleves.length * this.jourOuvreDuMois);
    console.log('personneIndex:', j);
    console.log('valeur du compteur:', this.jourOuvreDuMois);
  }

  maMethode2(j: number, testEmission: boolean) {
    this.compteurJoursPresence--;
    this.totalJoursPresence =
      (this.compteurJoursPresence * 100) /
      (this.listeEleves.length * this.jourOuvreDuMois);
  }

  onCompteurJourOuvre(jourOuvreDuMois: number) {
    console.log('Nouvelle valeur du compteurJourOuvre:', jourOuvreDuMois);
  }
}
