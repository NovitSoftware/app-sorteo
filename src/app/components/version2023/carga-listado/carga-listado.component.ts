import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

    @Output() fireStartSorteo = new EventEmitter();

    constructor(
        private _avisoSnackService: AvisoSnackService
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
        this.participantes = output;
    }

    cargarPremios(output: any){
        let premios: any[] = [];
        let error: boolean = false;

        output.forEach((x: string) => {
            if (!error){
                let pair = x.split(",");
                if (pair.length === 2){
                    try {
                        let nombre = pair[0].trim();
                        let cantidad = parseInt(pair[1].trim())
                        premios.push({nombre: nombre, cantidad: cantidad})
                    } catch {
                        this._avisoSnackService.displayMsg("error", "ERROR", "Formato de archivo incorrecto");
                        premios = [];
                        error = true;
                    }
                } else {
                    this._avisoSnackService.displayMsg("error", "ERROR", "Formato de archivo incorrecto");
                    error = true;
                }
            }
        })
        this.premios = premios;
    }

    isInvalid(){
        return !this.participantes.length || !this.premios.length
    }

    getListados(){
        let premios: string[] = [];
        _.forEach(this.premios, x => { premios = [...premios, ...Array(x.cantidad).fill(x.nombre)]})
        return {participantes: this.participantes, premios: premios}
    }
}