import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
    liste: string[] = [];

  constructor(private sharedService: SharedService) {
    this.liste = sharedService.getListe();
  }
}
