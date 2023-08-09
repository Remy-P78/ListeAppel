import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css'],
})
export class CalendrierComponent {
  
  @Output() checkboxChange = new EventEmitter();

  onCheck(testEmission: Event) {    
   this.checkboxChange.emit(testEmission);
  }
}
