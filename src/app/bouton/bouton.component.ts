import { Component, input, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bouton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {
  heigh = signal(30);
  width = signal(30);

  value = input.required<string>();
  working = input<boolean>(false);
  theType = input<string>();

  content = computed(() => this.value().toString());

  constructor() { }

  ngOnInit() {
  }
}