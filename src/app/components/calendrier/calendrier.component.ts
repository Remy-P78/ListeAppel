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
  @Output() compteurJourOuvreChange = new EventEmitter<number>();
  
  compteur: number = 0;
  coche: boolean = false;
  liste: string[] = [];
  calendrier: string[] = [];
  jours1a30: number[] = [];
  jourSemaine: string[] = [];
  conditionJourOuvre = false;
  compteurJoursOuvre = 0;

  constructor(private sharedService: SharedService) {
    this.liste = sharedService.getListe();
    this.calendrier = sharedService.getCalendrier();
    this.jours1a30 = sharedService.getJours1a30();
    this.jourSemaine = sharedService.getJourSemaine();
  }

  // onCheck(testEmission: Event) {
  //   const checkbox = testEmission.target as HTMLInputElement;
  //   if (checkbox.checked) {
  //     this.checkboxCochee.emit(testEmission);
  //   } else {
  //     this.checkboxDecochee.emit(testEmission);
  //   }
  // }
  ngOnInit() {
    for (let i = 0; i < this.jours1a30.length; i++) {
      if (
        (this.conditionJourOuvre = this.calendrier.includes(
          this.jourSemaine[i % 7]
        ))
      ) {
        this.compteurJoursOuvre++;
      }
      console.log('CJO', this.compteurJoursOuvre);
      
    }
    this.compteurJourOuvreChange.emit(this.compteurJoursOuvre);
  }

  onCheck(j: number, jour: string, testEmission: Event) {
    const checkbox = testEmission.target as HTMLInputElement;
    if (checkbox) {
      if (checkbox.checked) {
        this.checkboxCochee.emit({ j, jour });
      } else {
        this.checkboxDecochee.emit({ j, jour });
      }
    }
    console.log('text', j);
    console.log(this.liste[j]);
  }
}

  