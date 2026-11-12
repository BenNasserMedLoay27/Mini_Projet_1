import { Injectable } from '@angular/core';
import { Universite } from '../model/universite.model';
import { Systeme } from '../model/systeme.model';

@Injectable({ providedIn: 'root' })
export class UniversiteService {
  universites: Universite[];
  universite!: Universite;
  systemes: Systeme[];

  constructor() {
    this.systemes = [
      { idSysteme: 1, nomSysteme: 'Système école' },
      { idSysteme: 2, nomSysteme: 'Système faculté' },
    ];
    this.universites = [
      { idUniversite: 1, nomUniversite: 'Iset Nabeul', prixUniversite: 40, dateCreation: new Date('01/14/2011'), systeme: { idSysteme: 1, nomSysteme: 'Système école' } },
      { idUniversite: 2, nomUniversite: 'Iset Rades', prixUniversite: 30, dateCreation: new Date('12/17/2010'), systeme: { idSysteme: 1, nomSysteme: 'Système école' } },
      { idUniversite: 3, nomUniversite: 'FSEG Nabeul', prixUniversite: 70, dateCreation: new Date('02/20/2020'), systeme: { idSysteme: 2, nomSysteme: 'Système faculté' } },
    ];
  }

  listeUniversites(): Universite[] { return this.universites; }
  ajouterUniversite(universite: Universite): void { this.universites.push(universite); }
  supprimerUniversite(universite: Universite): void {
    const index = this.universites.indexOf(universite);
    if (index > -1) this.universites.splice(index, 1);
  }
  consulterUniversite(id: number): Universite { return this.universites.find(item => item.idUniversite == id)!; }
  trierUniversites(): void { this.universites.sort((a, b) => a.idUniversite! - b.idUniversite!); }
  updateUniversite(universite: Universite): void {
    this.supprimerUniversite(universite);
    this.ajouterUniversite(universite);
    this.trierUniversites();
  }
  listeSystemes(): Systeme[] { return this.systemes; }
  consulterSysteme(id: number): Systeme { return this.systemes.find(systeme => systeme.idSysteme === id)!; }
  enregistrerSysteme(systeme: Systeme, ancienId?: number): void {
    const index = ancienId === undefined ? -1 : this.systemes.findIndex(item => item.idSysteme === ancienId);
    if (index >= 0) this.systemes[index] = systeme;
    else this.systemes.push(systeme);
  }
}
