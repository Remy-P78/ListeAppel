import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';

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
  jours1a30: number[] = []
  jourSemaine: string[] = []

  constructor(private sharedService: SharedService) {
    this.liste = sharedService.getListe();
    this.calendrier = sharedService.getCalendrier();
    this.jours1a30 = sharedService.getJours1a30();
    this.jourSemaine = sharedService.getJourSemaine();
  }

  onCheck(testEmission: Event) {
    const checkbox = testEmission.target as HTMLInputElement;
    if (checkbox.checked) {
      this.checkboxCochee.emit(testEmission);
    } else {
      this.checkboxDecochee.emit(testEmission);
    }
  }

  // onCoche() {
  //   if (this.coche) {
  //     this.compteur++;
  //   } else {
  //     this.compteur--;
  //   }
  //   console.log(this.compteur);
  // }
}