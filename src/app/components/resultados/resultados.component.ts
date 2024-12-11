import { Component, ViewChild, ElementRef, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import confetti from 'canvas-confetti';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
  animations: [
    trigger('zoomInOut', [
      transition(':enter', [
        animate('1s ease-in-out', keyframes([
          style({ transform: 'scale(0.5)', offset: 0 }),
          style({ transform: 'scale(1.2)', offset: 0.5 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ResultadosComponent implements OnInit {
  @Input() results!: { texto: number | string; premio: string }[];
  @Input() columnaDerecha!: string;
  @Input() empresa!: string;
  @Input() classEmpresa: string = '';
  @Input() sgvIconEmpresa: string = '';

  @ViewChild('resultadosContainer') resultadosContainer!: ElementRef;
  visibleResults: any[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  private scrollToBottom(): void {
    setTimeout(() => {
      const appContainer = document.querySelector('#app') as HTMLElement;
      const scrollContainer = appContainer || this.resultadosContainer.nativeElement;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;

      // if (this.resultadosContainer) {
      //   const nativeElement = this.resultadosContainer.nativeElement;
      //   if (nativeElement.scrollHeight > nativeElement.clientHeight) {
      //     nativeElement.scrollTop = nativeElement.scrollHeight;
      //   }
      // }
    }, 0);
  }

  async showResults(): Promise<void> {
    for (let i = 0; i < this.results.length; i++) {
      this.visibleResults.push(this.results[i]); // Agrega el resultado a la lista visible
      this.cdr.detectChanges(); // Asegura que el DOM esté actualizado
      this.scrollToBottom(); // Realiza el scroll al final

      if (i < this.results.length - 1) //no espera si es el ultimo
        await new Promise(resolve => setTimeout(resolve, 5000)); // Espera unos segundos
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Espera un segundo
    this.showConfetti();
    this.animateWinners();
  }

  private showConfetti(): void {
    confetti({
      particleCount: 500,
      spread: 90,
      origin: { y: 0.6 }
    });
  }

  private animateWinners(): void {
    const elements = document.querySelectorAll('.winner');
    elements.forEach(element => {
      element.classList.add('dance');
    });
  }

  ngOnInit(): void {
    this.showResults();
  }
}
