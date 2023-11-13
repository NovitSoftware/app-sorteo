import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slots-sorteo2023',
  templateUrl: './slots-sorteo2023.component.html',
  styleUrls: ['./slots-sorteo2023.component.scss']
})
export class SlotsSorteo2023Component implements OnInit {

    @Input() status!: {start: boolean, finish: boolean};

    participantes: any[] = [];
    premios: any[] = [];

    showParticipante: string = "- - - -";
    winnerIndex: number = 0;
    winner: any|null = null;
    results: any[] = [];

    sorteando: boolean = false;
    indexPremio: number = 0;

    intervalSpin: any;
    intervalNum: number = 100;
    intervalNum_step: number = 50;
    intervalNum_lastStep: number = 100;
    intervalInstance: number = 1;
    intervalRepeat: number = 30;
    intervalRepeat_step: number = 10;
    intervalRepeat_lastStep: number = 2;

    constructor() { }

    ngOnInit(): void {
    }

    startSorteo(data: any){
        this.participantes = data.participantes;
        data.premios.forEach((premio: any) => {
            for(let i=0; i<premio.cantidad; i++){
                this.premios.push(premio.nombre)
            }
        })
        this.setDefaultIntervalValues();
    }

    disableShuffleBtn(){
        return this.sorteando || this.winner !== null
    }

    disableOkBtn(){
        return this.sorteando || this.winner === null;
    }

    setDefaultIntervalValues() {
        this.intervalNum = 100;
        this.intervalNum_step = 50;
        this.intervalRepeat = 30;
        this.intervalRepeat_step = 10;
        this.intervalInstance = 1;
    }

    generateWinner(){
        this.sorteando = true;
        this.setDefaultIntervalValues();
        this.generateInterval();
    }

    generateInterval(){
        this.intervalSpin = setInterval(() => {

            this.winnerIndex = Math.floor((Math.random()*this.participantes.length));
            this.showParticipante = this.participantes[this.winnerIndex];
            this.intervalInstance++;

            if (this.intervalInstance === this.intervalRepeat) {
                this.intervalInstance = 1;
                this.intervalNum += this.intervalNum_step;
                this.intervalRepeat -= this.intervalRepeat_step;
                if (this.intervalRepeat === this.intervalRepeat_step) {
                    this.intervalRepeat_step = this.intervalRepeat_lastStep;
                    this.intervalNum_step = this.intervalNum_lastStep;
                }
                clearInterval(this.intervalSpin);

                if (this.intervalRepeat !== 0) this.generateInterval();
                else this.setWinner();
            }

        }, this.intervalNum)
    }

    setWinner(){
        
        this.winner = {
            texto: this.showParticipante,
            premio: this.premios[this.indexPremio]
        }
        
        setTimeout(() => {
            this.sorteando = false;
        }, 1000)

        this.indexPremio++;
    }
    
    saveResult(){
        this.results.push(this.winner);
        this.participantes.splice(this.winnerIndex, 1); 
        
        this.showParticipante = "- - - -";
        this.winner = null;

        if (this.indexPremio === this.premios.length) this.status.finish = true;
    }

    resetearSorteo(){
        this.results = [];
        this.winner = null;
        this.sorteando = false;
        this.setDefaultIntervalValues();
        this.indexPremio = 0;
    }

}
