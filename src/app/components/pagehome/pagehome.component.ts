import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pagehome',
  templateUrl: './pagehome.component.html',
  styleUrls: ['./pagehome.component.css'],
})
export class PagehomeComponent {
  title = 'appel';

  compteurJoursPresence: number = 0;
  totalJoursPresence: number = 0;
  personne: number = 0;
  compteurJoursOuvre!: number;

  listeEleves: string[] = [];
  calendrier: string[] = [];
  jours1a30: number[] = [];
  jourSemaine: string[] = [];

  constructor(private sharedService: SharedService) {
    this.listeEleves = sharedService.getListeEleves();
    this.calendrier = sharedService.getjoursOuvre();
    this.jours1a30 = sharedService.getJours1a30();
    this.jourSemaine = sharedService.getJourSemaine();
  }

  presencePlus1Jour(j: number, testEmission: boolean) {
    this.compteurJoursPresence++;
    console.log('personneIndex:', j);
    this.sharedService.setPresence(this.compteurJoursPresence);
  }

  presenceMoins1Jour(j: number, testEmission: boolean) {
    this.compteurJoursPresence--;
  }
}
