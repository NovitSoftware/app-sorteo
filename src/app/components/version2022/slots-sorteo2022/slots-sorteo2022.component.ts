import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-slots-sorteo2022',
  templateUrl: './slots-sorteo2022.component.html',
  styleUrls: ['./slots-sorteo2022.component.css']
})
export class SlotsSorteo2022Component implements OnInit {

    @Input() status!: {start: boolean, finish: boolean};

    forms!: {formPrimero: FormGroup, formSegundo: FormGroup};
    participantes: number[] = [];
    cantidadCifras: string[] = []; 
    
    sorteandoNoBtns: boolean = false;
    sorteando: boolean = false;
    winner: any = null;
    winnerString: string = ""
    showWinnerNumber: any[] = [];
    
    results: any[] = [];
    primerSorteo: boolean = true;
  
    constructor() { }

    ngOnInit(): void {
    }

    generateWinner(){
        this.winner = {
            numero: _.shuffle(this.participantes)[0],
            premio: this.primerSorteo ? this.forms.formPrimero.getRawValue().premio : this.forms.formSegundo.getRawValue().premio
        }
        
        this.getCifrasGanadoras();
        this.sorteando = this.sorteandoNoBtns = true;
        this.runWheel();
    }

    getCifrasGanadoras(){
        this.winnerString = this.winner.numero.toString();
        let letters = this.winnerString.split("");
        this.showWinnerNumber = [];
        letters.forEach(x => {
            this.showWinnerNumber.push({letter: x, show: false, placeholder: 0})
        });

    }

    runWheel(){
        let times = 0;
        const topTimes = 25;
        let set = 0; 

        const interval = setInterval(() => {
            if (this.showWinnerNumber.some(x => !x.show)){
                for (let i = 0; i < this.showWinnerNumber.length; i++){

                    if (!this.showWinnerNumber[i].show) {
                        this.showWinnerNumber[i].placeholder = _.random(0, 9);
                        times++;
                    }

                    if (times >= topTimes && set === i){
                        this.showWinnerNumber[i].show = true;
                        times = 0;
                        set++

                        if (this.showWinnerNumber.every(x => x.show)) {
                            this.sorteandoNoBtns = false;
                            clearInterval(interval);
                        }
                    }

                }
            }
        }, 100)
    }

    startSorteo(forms: {formPrimero: FormGroup, formSegundo: FormGroup}){
        this.forms = forms;
        this.startPrimerSorteo();
        this.status.start = true;
    }

    startPrimerSorteo(){
        this.setParticipantes(this.forms.formPrimero);
    }

    startSegundoSorteo(){
        this.setParticipantes(this.forms.formSegundo);
    }

    setParticipantes(form: FormGroup){
        let data = form.getRawValue();
        let numParticipantes = data.hastaParticipante - data.desdeParticipante;
        this.participantes = [...Array(numParticipantes).keys()];
        for (let i = 0; i < numParticipantes; i++ ){
            this.participantes[i] = this.participantes[i] + data.desdeParticipante;
        }
        this.participantes.push(data.hastaParticipante)
        this.cantidadCifras = Math.max(...this.participantes).toString().split("");
    }

    saveResult(){
        this.results.push(this.winner)
        this.participantes.splice(this.participantes.indexOf(this.winner), 1);
        this.winner = null;
        if (this.results.length === (this.primerSorteo ? this.forms.formPrimero.getRawValue().cantidad : this.forms.formPrimero.getRawValue().cantidad + this.forms.formSegundo.getRawValue().cantidad)){
            if (this.primerSorteo) {
                this.primerSorteo = false;
                this.startSegundoSorteo();
            } else {
                this.status.finish = true;
            }
        }
        else this.sorteando = false;
    }

    resetearSorteo(){
        this.results = [];
        this.winner = null;
        this.sorteando = false;
        this.primerSorteo = true;
    }

}
