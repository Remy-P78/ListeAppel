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

  liste: string[] = [];
  calendrier: string[] = [];

  constructor(private sharedService: SharedService) {
    this.liste = sharedService.getListe();
    this.calendrier = sharedService.getCalendrier();
  }

  maMethode(testEmission: boolean) {    
    this.present++;
    this.presence = (this.present * 100) / (this.liste.length*this.calendrier.length);    
  }

  maMethode2(testEmission: boolean) {    
    this.present--;
    this.presence =
      (this.present * 100) / (this.liste.length * this.calendrier.length);    
  }
}
