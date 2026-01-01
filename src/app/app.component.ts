import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficheurComponent } from './afficheur/afficheur.component';
import { ClavierComponent } from './clavier/clavier.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AfficheurComponent, ClavierComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = signal('Angular');
}
