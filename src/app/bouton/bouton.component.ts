import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {
  heigh: number = 30;
  width: number = 30;
  content: string;
  @Input() value: string;
  @Input() working: boolean = false;
  @Input() theType: string;
  
  constructor() {  }

  ngOnInit() {
    this.content = this.value.toString();
  }

}