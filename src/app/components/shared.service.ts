import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SharedService {
  private liste: string[] = ['John Do', 'John Toit', 'John Quat'];
  private calendrier: string[] = ['Lu', 'Ma', 'Je', 'Ve'];
  private jours1a30 = Array.from({ length: 30 }, (_, index) => index + 1);
  private joursSemaine = ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'];

  addNom(nom: string) {
    this.liste.push(nom);
  }

  removeNom(nom: string) {
    const index = this.liste.indexOf(nom);
    if (index !== -1) {
      this.liste.splice(index, 1);
    }
  }

  getListeEleves(): string[] {
    return this.liste;
  }

  getCalendrier(): string[] {
    return this.calendrier;
  }

  getJourSemaine(): string[] {
    return this.joursSemaine;
  }

  getJours1a30(): number[] {
    return this.jours1a30;
  }
}