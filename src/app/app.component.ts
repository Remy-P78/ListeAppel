import { Component, OnInit } from '@angular/core';
import { SharedService } from './components/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'appel';

  compteurJoursPresence: number = 0;
  totalJoursPresence: number = 0;
  personne: number = 0;
  compteurJoursOuvre!: number;

  listeEleves: string[] = [];
  calendrier: string[] = [];
  jours1a30: number[] = [];
  jourSemaine: string[] = [];
  jourOuvreDuMois2: number = 0;

  constructor(private sharedService: SharedService) {
    this.listeEleves = sharedService.getListeEleves();
    this.calendrier = sharedService.getjoursOuvre();
    this.jours1a30 = sharedService.getJours1a30();
    this.jourSemaine = sharedService.getJourSemaine();    
  }

  ngOnInit() {
    this.onCompteurJourOuvre(this.compteurJoursOuvre);
  }

  maMethode(j: number, testEmission: boolean) {
    this.compteurJoursPresence++;
    this.totalJoursPresence =
      (this.compteurJoursPresence * 100) /
      (this.listeEleves.length * this.jourOuvreDuMois2);
    console.log('personneIndex:', j);
    console.log('valeur du compteur:', this.jourOuvreDuMois2);
  }

  maMethode2(j: number, testEmission: boolean) {
    this.compteurJoursPresence--;
    this.totalJoursPresence =
      (this.compteurJoursPresence * 100) /
      (this.listeEleves.length * this.jourOuvreDuMois2);
  }

  onCompteurJourOuvre(compteurJoursOuvre: number) {
    this.jourOuvreDuMois2 = compteurJoursOuvre;
    console.log('Nouvelle valeur du compteurJourOuvre:', compteurJoursOuvre);
  }
}
