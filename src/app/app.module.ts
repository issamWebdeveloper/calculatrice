import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BoutonComponent } from './bouton/bouton.component';
import { ClavierComponent } from './clavier/clavier.component';
import { AfficheurComponent } from './afficheur/afficheur.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BoutonComponent, ClavierComponent, AfficheurComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
