import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.component.html',
  styleUrls: ['./ruleta.component.scss']
})
export class RuletaComponent implements OnInit {
  @Input() items: string[] = [];
  selectedItem: string | null = null;

  constructor() { }

  ngOnInit(): void { }

  startRuleta() {
    const totalItems = this.items.length;
    let currentIndex = 0;
    const interval = setInterval(() => {
      this.selectedItem = this.items[currentIndex];
      currentIndex = (currentIndex + 1) % totalItems;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      this.selectedItem = this.items[Math.floor(Math.random() * totalItems)];
    }, 5000); // Ruleta gira por 5 segundos
  }
}