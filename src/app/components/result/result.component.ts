import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  @Input() envoiCompteurJoursPresence!: number;
  @Input() envoiTotalJoursPresence!: number;

  tauxPresence!: number;

  constructor(private sharedService: SharedService) {
    // this.recupJourOuvreParMois();
  }

  ngOnInit() {
    this.sharedService.renvoiIndexEleve.subscribe((index: number) => {
      console.log('passage index', index);
    });
    // this.recupPresence();
    this.calculTauxPresence();
  }

  // recupJourOuvreParMois() {
  //   const jourOuvreParMois = this.sharedService.getJourOuvreParMois();
  //   console.log('Dynamic jourOuvreParMois:', jourOuvreParMois);
  // }

  // recupPresence() {
  //   const joursPresence = this.sharedService.getPresence();
  //   console.log('present', joursPresence);
  // }

  // calculTauxPresence2() {
  //   this.tauxPresence =
  //     (this.envoiTotalJoursPresence * 100) / this.envoiCompteurJoursPresence;
  //   console.log('%', this.tauxPresence);
  // }

  calculTauxPresence() {
    this.tauxPresence =
      (this.sharedService.getPresence() * 100) /
      this.sharedService.getJourOuvreParMois();
    console.log('%', this.tauxPresence);
  }
}
