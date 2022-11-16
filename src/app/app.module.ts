import { MenuComponent } from './Composant/menu/menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccueilComponent } from './Composant/accueil/accueil.component';
import { AboutusComponent } from './Composant/aboutus/aboutus.component';
import { AdoptComponent } from './Composant/adopt/adopt.component';
import { ProduitsComponent } from './Composant/produits/produits.component';
import { ContactComponent } from './Composant/contact/contact.component';
import { ErreurComponent } from './Composant/erreur/erreur.component';
import { FooterComponent } from './Composant/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AboutusComponent,
    AdoptComponent,
    ProduitsComponent,
    ContactComponent,
    MenuComponent,
    ErreurComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
