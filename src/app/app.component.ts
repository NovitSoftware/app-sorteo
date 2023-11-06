import { Component } from '@angular/core';
import { SvgService } from './svg.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sorteo-consultatio';

  participantes: number[] = [];
  sorteando: boolean = false;
  sorteandoNoBtns: boolean = false;
  winner: any = null;
  winnerString: string = ""
  showWinnerNumber: any[] = [];
  cantidadCifras: string[] = []; 
  results: any[] = [];
  start: boolean = false;
  finish: boolean = false;
  primerSorteo: boolean = true;
  participanteDesdePrimero: number = 0;
  participanteHastaPrimero: number = 0;
  cantidadPremiosPrimero: number = 0;
  participanteDesdeSegundo: number = 0;
  participanteHastaSegundo: number = 0;
  cantidadPremiosSegundo: number = 0;
  premioPrimero: string = "";
  premioSegundo: string = "";

  constructor(private svgService: SvgService){
    this.svgService.init();
  }

  generateWinner(){
    this.winner = {
      numero: _.shuffle(this.participantes)[0],
      premio: this.primerSorteo ? this.premioPrimero : this.premioSegundo
    }
    this.winnerString = this.winner.numero.toString();
    let letters = this.winnerString.split("");
    this.showWinnerNumber = [];
    letters.forEach(x => {
      this.showWinnerNumber.push({letter: x, show: false, placeholder: 0})
    });
    this.sorteando = this.sorteandoNoBtns = true;
    this.runWheel();
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
  
  saveResult(){
    this.results.push(this.winner)
    this.participantes.splice(this.participantes.indexOf(this.winner), 1);
    this.winner = null;
    if (this.results.length === (this.primerSorteo ? this.cantidadPremiosPrimero : this.cantidadPremiosPrimero + this.cantidadPremiosSegundo)){
      if (this.primerSorteo) {
        this.primerSorteo = false;
        this.startSorteo();
      } else {
        this.finish = true;
      }
    }
    else this.sorteando = false;
  }

  startSorteo(){
    if ( this.participanteHastaPrimero > this.participanteDesdePrimero && this.participanteHastaSegundo > this.participanteDesdeSegundo&& this.cantidadPremiosPrimero > 0 && this.cantidadPremiosSegundo > 0){
      let numParticipantes = this.primerSorteo ? this.participanteHastaPrimero - this.participanteDesdePrimero : this.participanteHastaSegundo - this.participanteDesdeSegundo;
      this.participantes = [...Array(numParticipantes).keys()];
      for (let i = 0; i < numParticipantes; i++ ){
        this.participantes[i] = this.participantes[i] + (this.primerSorteo ? this.participanteDesdePrimero : this.participanteDesdeSegundo);
      }
      this.participantes.push(this.primerSorteo ? this.participanteHastaPrimero : this.participanteHastaSegundo)
      this.cantidadCifras = Math.max(...this.participantes).toString().split("");
      this.start = true;
    }
  }

  resetearSorteo(){
    if (this.finish){
      this.finish = false;
      this.results = [];
      this.start = false;
      this.winner = null;
      this.sorteando = false;
      this.primerSorteo = true;
    }
  }
}
