import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appel';

  tab = 0

  maMethode(testEmission: boolean) {
    console.log("passageReussi");
    this.tab ++
    console.log(this.tab);
  }  
}
