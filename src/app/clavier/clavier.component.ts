import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoutonComponent } from '../bouton/bouton.component';

@Component({
  selector: 'app-clavier',
  standalone: true,
  imports: [CommonModule, BoutonComponent],
  templateUrl: './clavier.component.html',
  styleUrls: ['./clavier.component.css']
})
export class ClavierComponent {
  constructor() { }
}