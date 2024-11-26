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
    
        this.countDown = "10"; // Inicializa el countdown
        this.sorteando = true;
    
        // Inicia las tareas en paralelo
        const intervalPromise = this.generateInterval(); // Calcula los ganadores
        const countdownPromise = this.runCountdown(countDownElement); // Maneja el countdown visual
    
        // Esperar a que ambas tareas terminen
        await Promise.all([intervalPromise, countdownPromise]);
    
        // Cambiar el estado del sorteo
        this.status.finish = true;
    
        // Reiniciar estados
        this.sorteando = false;
        console.log('Sorteo finalizado.');
    }
    
    
    

    async runCountdown(countDownElement: HTMLElement) {
        for (let i = 10; i >= 0; i--) {
            this.countDown = i.toString(); // Actualiza el countdown visual
    
            this.renderer.removeClass(countDownElement, 'animate');
            void countDownElement.offsetWidth; // Forzar reflujo para reiniciar la animación
            this.renderer.addClass(countDownElement, 'animate');
    
            // Espera para que la animación del countdown se reproduzca
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 segundo por iteración
        }
    
        console.log('Countdown completado.');
    }
    
    async generateInterval(): Promise<void> {
        const empresas = ["consultatio", "nordelta"] as const;
    
        for (const empresa of empresas) {
            this.empresaSorteando = empresa;
    
            while (this.sorteos[this.empresaSorteando].premios.length > 0) {
                const participantes = this.sorteos[this.empresaSorteando].participantes;
                const premios = this.sorteos[this.empresaSorteando].premios;
    
                // Validación: Participantes y Premios no deben estar vacíos
                if (!participantes || participantes.length === 0) {
                    console.error(`No hay participantes disponibles para ${empresa}.`);
                    break;
                }
    
                if (!premios || premios.length === 0) {
                    console.error(`No hay premios disponibles para ${empresa}.`);
                    break;
                }
    
                // Genera un índice aleatorio para elegir al ganador
                let posibleWinnerIndex = Math.floor(Math.random() * participantes.length);
    
                // Evita repetir el mismo ganador consecutivamente
                while (this.winnerIndex === posibleWinnerIndex && participantes.length > 1) {
                    posibleWinnerIndex = Math.floor(Math.random() * participantes.length);
                }
    
                this.winnerIndex = posibleWinnerIndex;
                this.showParticipante = participantes[this.winnerIndex];
                console.log(`Seleccionado en ${empresa}: ${this.showParticipante}`);
    
                // Establece al ganador y guarda el resultado
                this.setWinner();
                this.saveResult();
    
                // Pausa breve para liberar el hilo y permitir actualizaciones de renderizado
                await new Promise((resolve) => setTimeout(resolve, 0));
            }
    
            console.log(`Finalizado el sorteo para ${empresa}.`);
        }
    
        console.log('Sorteo completado para todas las empresas.');
    }

    setWinner() {
        const premios = this.sorteos[this.empresaSorteando].premios;
    
        if (premios.length === 0) {
            console.error(`No hay premios disponibles para ${this.empresaSorteando}`);
            return;
        }
    
        this.winner = {
            texto: this.showParticipante,
            premio: premios[this.indexPremio], // Asignar premio correctamente
            empresa: this.empresaSorteando
        };
    }
    
    
    saveResult() {
        if (!this.winner) {
            console.error('No se puede guardar un ganador porque no se ha seleccionado uno.');
            return;
        }
    
        // Guarda el ganador en los resultados
        this.results.push(this.winner);
    
        // Elimina al participante seleccionado
        this.sorteos[this.empresaSorteando].participantes.splice(this.winnerIndex, 1);
    
        // Elimina el premio asignado
        this.sorteos[this.empresaSorteando].premios.shift();
    
        // Limpia los datos temporales del ganador
        this.showParticipante = "";
        this.winner = null;
    
        console.log(`Resultado guardado: ${JSON.stringify(this.results[this.results.length - 1])}`);
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