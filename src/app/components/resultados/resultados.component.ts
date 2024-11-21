import { Component, ViewChild, ElementRef, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss'],
  animations: [
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

  @ViewChild('resultadosContainer') resultadosContainer!: ElementRef;
  visibleResults: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

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
      await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
    }
  }

  ngOnInit(): void {
    this.showResults();
  }
}
