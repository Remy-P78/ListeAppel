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

  constructor(private sharedService: SharedService) {
    this.recupJourOuvreParMois();
  }

  recupJourOuvreParMois(){
    const jourOuvreParMois = this.sharedService.getJourOuvreParMois();
    console.log('Dynamic jourOuvreParMois:', jourOuvreParMois);
  }
}
