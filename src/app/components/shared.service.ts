import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SharedService {
  private liste: string[] = ['John Do', 'John Toit', 'John Quat'];
  private joursOuvre: string[] = ['Lu', 'Ma', 'Je', 'Ve'];
  private jours1a30 = Array.from({ length: 30 }, (_, index) => index + 1);
  private joursSemaine = ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'];
  private compteurJoursOuvre!: number;
  private joursPresence!: number;

  renvoiIndexEleve = new EventEmitter<number>();

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

  getjoursOuvre(): string[] {
    return this.joursOuvre;
  }

  getJourSemaine(): string[] {
    return this.joursSemaine;
  }

  getJours1a30(): number[] {
    return this.jours1a30;
  }

  setJourOuvreParMois(jourOuvre: number) {
    this.compteurJoursOuvre = jourOuvre;
  }

  getJourOuvreParMois() {
    return this.compteurJoursOuvre;
  }

  setPresence(joursPresenceRecus: number) {
    this.joursPresence = joursPresenceRecus; 
    return this.joursPresence;   
  }

  getPresence() {
    console.log('presence2', this.joursPresence);
    return this.joursPresence;
  }

  envoiIndexEleve(indexEleve: number) {
    this.renvoiIndexEleve.emit(indexEleve);
  }
}