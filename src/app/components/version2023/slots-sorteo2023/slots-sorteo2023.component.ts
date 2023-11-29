import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slots-sorteo2023',
  templateUrl: './slots-sorteo2023.component.html',
  styleUrls: ['./slots-sorteo2023.component.scss']
})
export class SlotsSorteo2023Component implements OnInit {

    @Input() status!: {start: boolean, finish: boolean};

    sorteos!: Sorteos;
    empresaSorteando: "consultatio"|"nordelta"|"asset" = "consultatio";
    indexPremio: number = 0;
        
    // RESULTADOS SORTEO
    sorteando: boolean = false;
    showParticipante: string = "- - - -";
    winnerIndex: number = 0;
    winner: any|null = null;
    results: any[] = [];

    // CONFIGURACION DE "RULETA"
    config: ConfiguracionRuleta = new ConfiguracionRuleta();
    
    // 
    TESTEANDO_RULETA: boolean = false;
    TESTEO_CONFIG = new FormGroup(
        {
            microSeg: new FormControl('50', [Validators.required]),
            microSeg_agregar: new FormControl('50', [Validators.required]),
            microSeg_suspenso: new FormControl('85', [Validators.required]),
            repetir_N_veces: new FormControl('27', [Validators.required]),
            restarRepeticiones: new FormControl('9', [Validators.required]),
            restarRepeticiones_suspenso: new FormControl('3', [Validators.required]),
        }
    );

    constructor() { }

    ngOnInit(): void {
    }

    startSorteo(data: Sorteos){
        this.sorteos = data;
        this.setDefaultIntervalValues();
        this.status.start = true;
    }

    disableShuffleBtn(){
        // return this.sorteando || this.winner !== null
        return this.sorteando
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

    generateWinner(){
        this.sorteando = true;
        this.setDefaultIntervalValues();
        this.generateInterval();
    }

    generateInterval(){
        this.config.intervalSpin = setInterval(() => {
            let participantes = this.sorteos[this.empresaSorteando].participantes;

            // para evitar que se repita el index;
            let posibleWinnerIndex = Math.floor((Math.random()*participantes.length));
            while (this.winnerIndex === posibleWinnerIndex) {
                posibleWinnerIndex = Math.floor((Math.random()*participantes.length));
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

                if (this.config.repetir_N_veces !== 0) this.generateInterval();
                else this.setWinner();
            }

        }, this.config.microSeg)
    }

    setWinner(){
        this.winner = {
            texto: this.showParticipante,
            premio: this.sorteos[this.empresaSorteando].premios[this.indexPremio]
        }
        
        setTimeout(() => {
            this.sorteando = false;
        }, 1000)
    }
    
    saveResult(){
        this.results.push(this.winner);
        this.sorteos[this.empresaSorteando].participantes.splice(this.winnerIndex, 1); 
        
        this.showParticipante = "- - - -";
        this.winner = null;
        this.indexPremio++;

        this.checkNextSorteo();
    }
    
    checkNextSorteo(){
        
        if (this.indexPremio === this.sorteos[this.empresaSorteando].premios.length) {
            if (this.empresaSorteando === "asset") {
                this.status.finish = true;
                return
            }

            if (this.empresaSorteando === "consultatio") this.empresaSorteando = "nordelta";
            else if (this.empresaSorteando === "nordelta") this.empresaSorteando = "asset";
            
            this.indexPremio = 0;
        }

    }

    resetearSorteo(){
        this.results = [];
        this.winner = null;
        this.sorteando = false;
        this.setDefaultIntervalValues();
        this.indexPremio = 0;
        this.empresaSorteando = "consultatio";
    }

}

export interface Sorteos {
    consultatio: Sorteo,
    nordelta: Sorteo,
    asset: Sorteo
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
    repetir_N_veces: number = 27;
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