import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css'],
})
export class CalendrierComponent {
  @Output() checkboxCochee = new EventEmitter();
  @Output() checkboxDecochee = new EventEmitter();
  compteur: number = 0;
  coche: boolean = false;
  liste: string[] = [];
  calendrier: string[] = [];
  presenceData: boolean[][] = [];

  constructor(private sharedService: SharedService) {
    this.liste = sharedService.getListe();
    this.calendrier = sharedService.getCalendrier();
    this.initPresenceData();
  }

  initPresenceData(): void {
    for (let i = 0; i < this.liste.length; i++) {
      const row: boolean[] = [];
      for (let j = 0; j < this.calendrier.length; j++) {
        row.push(false);
      }
      this.presenceData.push(row);
      console.log('presenceData =', this.presenceData);
    }
  }

  changeMonth(month: string): void {
    // Sauvegardez les données de présence actuelles pour le mois en cours
    this.sharedService.setPresenceData(this.calendrier, this.presenceData);

    // Changez le mois en cours
    this.calendrier = this.sharedService.getCalendrierForMonth(month);

    // Chargez les données de présence pour le mois sélectionné
    this.presenceData = this.sharedService.getPresenceData(this.calendrier);
  }

  
  // onCheck(testEmission: Event) {
  //   const checkbox = testEmission.target as HTMLInputElement;
  //   if (checkbox.checked) {
  //     this.checkboxCochee.emit(testEmission);
  //   } else {
  //     this.checkboxDecochee.emit(testEmission);
  //   }
  // }

  // onCoche() {
  //   if (this.coche) {
  //     this.compteur++;
  //   } else {
  //     this.compteur--;
  //   }
  //   console.log(this.compteur);
  // }
}