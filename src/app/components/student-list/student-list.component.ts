import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  @Output() envoiIndexEleve = new EventEmitter;

  listeEleves: string[] = [];

  constructor(private sharedService: SharedService) {
    this.listeEleves = sharedService.getListeEleves();
  }

  detailEleve(i: number){
    this.sharedService.envoiIndexEleve(i)
  }
}

