import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Universite } from '../model/universite.model';
import { Systeme } from '../model/systeme.model';
import { UniversiteService } from '../services/universite.service';

@Component({
  selector: 'app-recherche-par-systeme',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-systeme.component.html',
  styles: ''
})
export class RechercheParSystemeComponent implements OnInit {
  universites: Universite[] = [];
  systemes: Systeme[] = [];
  idSysteme: number | null = null;
  private toutesLesUniversites: Universite[] = [];

  constructor(private universitesService: UniversiteService) {}

  ngOnInit(): void {
    this.systemes = this.universitesService.listeSystemes();
    this.toutesLesUniversites = this.universitesService.listeUniversites();
    this.universites = [...this.toutesLesUniversites];
  }

  onChange(): void {
    this.universites = this.idSysteme === null
      ? [...this.toutesLesUniversites]
      : this.toutesLesUniversites.filter(
          universite => universite.systeme?.idSysteme === Number(this.idSysteme)
        );
  }
}
