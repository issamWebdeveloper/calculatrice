import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-afficheur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './afficheur.component.html',
  styleUrls: ['./afficheur.component.css']
})
export class AfficheurComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}