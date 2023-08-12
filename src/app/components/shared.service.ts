import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SharedService {
  private liste: string[] = ['John Do', 'John Toit', 'John Quat'];
  private calendrier: string[] = ['Lundi', 'Mardi', 'Jeudi', 'Vendredi'];
  private presenceData: { [month: string]: boolean[][] } = {};
  private jour: string[] = []

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

  setPresenceData(month: string[], data: boolean[][]): void {
    this.presenceData[month.join('-')] = data;
  }

  getPresenceData(month: string[]): boolean[][] {
    return this.presenceData[month.join('-')] 
    // || this.initPresenceData(month);
  }

  getCalendrierForMonth(month: string): string[] {
    // Implémentez la logique pour obtenir les jours du mois sélectionné
    // en fonction de votre besoin
    // Renvoyez le tableau de jours du mois
    // Exemple : return ['2023-09-01', '2023-09-02', ...];
    if (month === "Septembre"){
      return this.jour = ["1","2","3","4"]
    }else{
      return this.jour = ["01","02","03","04"]
    }
  }
}