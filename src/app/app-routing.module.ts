import { AboutusComponent } from './Composant/aboutus/aboutus.component';
import { AdoptComponent } from './Composant/adopt/adopt.component';
import { ErreurComponent } from './Composant/erreur/erreur.component';
import { ProduitsComponent } from './Composant/produits/produits.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Composant/accueil/accueil.component';
import { ContactComponent } from './Composant/contact/contact.component';

const routes: Routes = [
  {path:'accueil',title:'Accueil', component:AccueilComponent},
  {path:'produits',title:'Produits', component:ProduitsComponent},
  // {path:'produits/:id',title:'Produit choisi', component:SelectedProduitComponent},
  {path:'contact',title:'Contact', component:ContactComponent},
  {path:'adopt',title:'Adopt', component:AdoptComponent},
  {path:'aboutus',title:'A propos de nous', component:AboutusComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', title:'Erreur',component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
