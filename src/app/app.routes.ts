import { Routes } from '@angular/router';
import { UniversitesComponent } from './universites/universites.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';
import { RechercheParSystemeComponent } from './recherche-par-systeme/recherche-par-systeme.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeSystemesComponent } from './liste-systemes/liste-systemes.component';
import { adminGuard } from './admin.guard';

export const routes: Routes = [
  { path: 'universites', component: UniversitesComponent },
  { path: 'add-universite', component: AddUniversiteComponent, canActivate: [adminGuard] },
  { path: 'updateUniversite/:id', component: UpdateUniversiteComponent, canActivate: [adminGuard] },
  { path: 'rechercheParCategorie', component: RechercheParSystemeComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'listeSystemes', component: ListeSystemesComponent, canActivate: [adminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'universites', pathMatch: 'full' },
  { path: '**', redirectTo: 'universites' },
];
