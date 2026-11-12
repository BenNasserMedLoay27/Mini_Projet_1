import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Systeme } from '../model/systeme.model';
import { UniversiteService } from '../services/universite.service';

@Component({
  selector: 'app-liste-systemes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-systemes.component.html'
})
export class ListeSystemesComponent {
  systemes: Systeme[];
  systeme = new Systeme();
  ajout = true;
  ancienId?: number;

  constructor(private universiteService: UniversiteService) {
    this.systemes = this.universiteService.listeSystemes();
  }

  nouveau(): void {
    this.systeme = new Systeme();
    this.ajout = true;
    this.ancienId = undefined;
  }

  modifier(systeme: Systeme): void {
    this.systeme = { ...systeme };
    this.ancienId = systeme.idSysteme;
    this.ajout = false;
  }

  enregistrer(): void {
    if (!this.systeme.nomSysteme?.trim() || this.systeme.idSysteme == null) return;
    this.systeme.nomSysteme = this.systeme.nomSysteme.trim();
    this.universiteService.enregistrerSysteme({ ...this.systeme }, this.ancienId);
    this.systemes = this.universiteService.listeSystemes();
    this.nouveau();
  }
}
