import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AvisoSnackService } from '../../aviso-snack/aviso-snack.service';
import { Premio } from '../slots-sorteo2023/slots-sorteo2023.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-carga-listado',
  templateUrl: './carga-listado.component.html',
  styleUrls: ['./carga-listado.component.scss']
})
export class CargaListadoComponent implements OnInit {

    participantes: string[] = [];
    premios: Premio[] = [];
    cantidadTotalPremios: number = 0;

    @Output() fireStartSorteo = new EventEmitter();

    constructor(
        private _avisoSnackService: AvisoSnackService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
    }

    cargarArchivo(event: any, tipo: 'participantes'|'premios'){
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            event.target.value = '';
            
            if (file.type === "text/plain") {
                let fileReader: FileReader = new FileReader();
                let output: string[] = [];

                let self = this;
                fileReader.onload = function(e: any) {
                    let lines = e.target.result.split(/[\r\n]+/g); // linebreaks

                    for(var i = 0; i < lines.length; i++) {
                        output.push(lines[i].toString().trim());
                    }

                    if (tipo === 'participantes') self.cargarParticipantes(output)
                    else self.cargarPremios(output);

                };
                fileReader.readAsText(file);        
            }
        }
    }

    cargarParticipantes(output: any){
        let lowerCase = _.map(output, x => x.toLowerCase());
        this.participantes = output.filter((value: string, index: number) => {
            return lowerCase.indexOf(value.toLowerCase()) === index
        });;
    }

    cargarPremios(output: any){
        let premios: any[] = [];
        let error: string = "";
        this.cantidadTotalPremios = 0;

        output.forEach((x: string) => {
            if (!error){
                let pair = x.split(",");
                
                error = this.validarPremios(pair);

                if (error !== ""){
                    this._avisoSnackService.displayMsg("error", "FORMATO INCORRECTO", error);
                    premios = [];
                } else {
                    let nombre = pair[0].trim();
                    let cantidad = parseInt(pair[1].trim())
                    premios.push({nombre: nombre, cantidad: cantidad})
                    this.cantidadTotalPremios += cantidad;
                }
            }
        })
        this.premios = premios;
        this.cdr.detectChanges();
    }

    validarPremios(pair: string[]): string {
        if (pair.length !== 2) return `El formato de texto de premio debe ser: "premio,cantidad"`

        try {
            let cantidad = parseInt(pair[1].trim());
            if (isNaN(cantidad)) return `No se ingresó un número para indicar la cantidad de premios`
            if (cantidad === 0) return `Un premio tiene cantidad cero`
        } catch {
            return `No se ingresó un número para indicar la cantidad de premios`
        }

        return ""
    }

    masPremiosQueParticipantes() {
        return (this.participantes.length > 0 && this.cantidadTotalPremios > 0) && this.participantes.length < this.cantidadTotalPremios
    }

    isInvalid(){
        return !this.participantes.length || !this.premios.length || this.masPremiosQueParticipantes()
    }

    getListados(){
        let premios: string[] = [];
        _.forEach(this.premios, x => { premios = [...premios, ...Array(x.cantidad).fill(x.nombre)]})
        return {participantes: this.participantes, premios: premios}
    }
}