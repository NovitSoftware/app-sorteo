import { Component, Input, OnInit, Renderer2, ElementRef } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slots-sorteo2023',
  templateUrl: './slots-sorteo2023.component.html',
  styleUrls: ['./slots-sorteo2023.component.scss']
})
export class SlotsSorteo2023Component implements OnInit {

    @Input() status!: {start: boolean, finish: boolean};

    sorteos!: Sorteos;
    empresaSorteando: "consultatio"|"nordelta"= "consultatio";
    indexPremio: number = 0;
        
    // RESULTADOS SORTEO
    sorteando: boolean = false;
    sorteoHasStarted: boolean = false;
    showParticipante: string = "- - - -";
    countDown: string = "";
    winnerIndex: number = 0;
    winner: any|null = null;
    results: { texto: string; premio: string; empresa: string }[] = [];

    // CONFIGURACION DE "RULETA"
    config: ConfiguracionRuleta = new ConfiguracionRuleta();
    
    // 
    TESTEANDO_RULETA: boolean = false;
    TESTEO_CONFIG = new UntypedFormGroup(
        {
            microSeg: new UntypedFormControl('50', [Validators.required]),
            microSeg_agregar: new UntypedFormControl('50', [Validators.required]),
            microSeg_suspenso: new UntypedFormControl('85', [Validators.required]),
            repetir_N_veces: new UntypedFormControl('27', [Validators.required]),
            restarRepeticiones: new UntypedFormControl('9', [Validators.required]),
            restarRepeticiones_suspenso: new UntypedFormControl('3', [Validators.required]),
        }
    );

    constructor(private renderer: Renderer2, private el: ElementRef) { }

    ngOnInit(): void {
    }

    startSorteo(data: Sorteos){
        this.sorteos = data;
        this.setDefaultIntervalValues();
        this.status.start = true;
    }

    disableShuffleBtn(){
        // return this.sorteando || this.winner !== null
        return this.sorteoHasStarted;
    }

    disableOkBtn(){
        return this.sorteando || this.winner === null;
    }

    setDefaultIntervalValues() {
        this.config = new ConfiguracionRuleta();
        this.configureTestInterval();
    }

    configureTestInterval(){
        if (this.TESTEANDO_RULETA){
            let test = this.TESTEO_CONFIG.getRawValue();
            this.config.microSeg = parseInt(test.microSeg);
            this.config.microSeg_agregar = parseInt(test.microSeg_agregar);
            this.config.microSeg_suspenso = parseInt(test.microSeg_suspenso);
            this.config.repetir_N_veces = parseInt(test.repetir_N_veces);
            this.config.restarRepeticiones = parseInt(test.restarRepeticiones);
            this.config.restarRepeticiones_suspenso = parseInt(test.restarRepeticiones_suspenso);
        }
    }

    get consultatioResults() {
        return this.results?.filter(result => result.empresa === 'consultatio') || [];
    }

    get nordeltaResults() {
        return this.results?.filter(result => result.empresa === 'nordelta') || [];
    }

    async generateWinner(){
        this.sorteoHasStarted = true;
        await this.runProcess();
    }

    async runProcess() {
        const countDownElement = this.el.nativeElement.querySelector('#randomGeneratorStrings span');

        var premiosLenght = this.sorteos["nordelta"].premios.length + this.sorteos["consultatio"].premios.length;
        for (let i = premiosLenght; i > 0; i--) {
          this.sorteando = true;

          // Actualiza el número
          this.countDown = i.toString();

          // Forzar el reinicio de la animación
          this.renderer.removeClass(countDownElement, 'animate');
          void countDownElement.offsetWidth; // Forzar reflujo para reiniciar la animación
          this.renderer.addClass(countDownElement, 'animate');

          // Espera 1 segundo para que la animación se reproduzca
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Lógica adicional (como en tu ejemplo)
          this.setDefaultIntervalValues();
          await this.generateInterval();

          if (this.sorteos[this.empresaSorteando].premios.length === 0) {
            console.log('Premios vacíos. Finalizando iteraciones.');
            break;
          }
        }

        
      }

    async generateInterval(): Promise<void> {
        return new Promise((resolve) => {
            this.config.intervalSpin = setInterval(() => {
                let participantes = this.sorteos[this.empresaSorteando].participantes;
    
                // Para evitar que se repita el índice
                let posibleWinnerIndex = Math.floor(Math.random() * participantes.length);
                while (this.winnerIndex === posibleWinnerIndex) {
                    posibleWinnerIndex = Math.floor(Math.random() * participantes.length);
                }
    
                this.winnerIndex = posibleWinnerIndex;
                this.showParticipante = participantes[this.winnerIndex];
                this.config.intervalInstance++;
    
                if (this.config.intervalInstance === this.config.repetir_N_veces) {
                    this.config.intervalInstance = 1;
                    this.config.microSeg += this.config.microSeg_agregar;
                    this.config.repetir_N_veces -= this.config.restarRepeticiones;
    
                    if (this.config.repetir_N_veces === this.config.restarRepeticiones) {
                        this.config.restarRepeticiones = this.config.restarRepeticiones_suspenso;
                        this.config.microSeg_agregar = this.config.microSeg_suspenso;
                    }
    
                    clearInterval(this.config.intervalSpin);
    
                    if (this.config.repetir_N_veces !== 0) {
                        // Llama recursivamente a la siguiente iteración
                        resolve(this.generateInterval());
                    } else {
                        // Finaliza y resuelve la Promise
                        this.setWinner();
                        this.saveResult();
                        resolve();
                    }
                }
            }, this.config.microSeg);
        });
    }
    

    setWinner(){
        this.winner = {
            texto: this.showParticipante,
            premio: this.sorteos[this.empresaSorteando].premios[this.indexPremio],
            empresa: this.empresaSorteando
        }
        
        setTimeout(() => {
            this.sorteando = false;
        }, 1000)
    }
    
    saveResult(){
        this.results.push(this.winner);
        this.sorteos[this.empresaSorteando].participantes.splice(this.winnerIndex, 1); 
        
        this.showParticipante = "";
        this.winner = null;
        this.indexPremio++;

        this.checkNextSorteo();
    }
    
    checkNextSorteo(){
        
        if (this.indexPremio === this.sorteos[this.empresaSorteando].premios.length) {
            if (this.empresaSorteando === "nordelta") {
                this.status.finish = true;
                return
            }

            if (this.empresaSorteando === "consultatio") this.empresaSorteando = "nordelta";
            // else if (this.empresaSorteando === "nordelta") this.empresaSorteando = "asset";
            
            this.indexPremio = 0;
        }

    }

    resetearSorteo(){
        this.results = [];
        this.winner = null;
        this.sorteando = false;
        this.sorteoHasStarted = false;
        this.setDefaultIntervalValues();
        this.indexPremio = 0;
        this.empresaSorteando = "consultatio";
    }

}

export interface Sorteos {
    consultatio: Sorteo,
    nordelta: Sorteo
    // asset: Sorteo
}

export interface Sorteo {
    participantes: string[],
    premios: string[]
}

export interface Premio {
    nombre: string;
    cantidad: number;
}

export class ConfiguracionRuleta {
    intervalSpin: any;
    microSeg: number = 50;
    microSeg_agregar: number = 50;
    microSeg_suspenso: number = 85;
    intervalInstance: number = 1;
    repetir_N_veces: number = 9;
    restarRepeticiones: number = 9;
    restarRepeticiones_suspenso: number = 3;
}

// 1ra iteración:
// microSeg: number = 100;
// microSeg_agregar: number = 50;
// microSeg_suspenso: number = 100;
// repetir_N_veces: number = 18;
// restarRepeticiones: number = 6;
// restarRepeticiones_suspenso: number = 2;