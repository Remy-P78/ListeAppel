import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SharedService {
  private liste: string[] = ['John Do', 'John Toit', 'John Quat'];
  private calendrier: string [] = ["Lundi", "Mardi", "Jeudi", "Vendredi"]

  addNom(nom: string) {
    this.liste.push(nom);
  }

  removeNom(nom: string) {
    const index = this.liste.indexOf(nom);
    if (index !== -1) {
      this.liste.splice(index, 1);
    }
  }

  getListe(): string[] {
    return this.liste;
  }

  getCalendrier(): string[] {
    return this.calendrier;
  }
}