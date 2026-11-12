import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Universite } from '../model/universite.model';
import { UniversiteService } from '../services/universite.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-universites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './universites.component.html',
  styleUrl: './universites.component.css'
})
export class UniversitesComponent implements OnInit {
  universites!: Universite[];
  constructor(private universiteService: UniversiteService, public authService: AuthService) {
    this.universites = universiteService.listeUniversites();
  }
  ngOnInit(): void {}

  supprimerUniversite(universite: Universite): void {
    if (confirm('Etes-vous sûr ?')) this.universiteService.supprimerUniversite(universite);
  }
}
