import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SlotsSorteo2023Component, Sorteos } from './slots-sorteo2023/slots-sorteo2023.component';
import { CargaListadoComponent } from './carga-listado/carga-listado.component';

@Component({
  selector: 'app-version2023',
  templateUrl: './version2023.component.html',
  styleUrls: ['./version2023.component.scss']
})
export class Version2023Component implements OnInit {

    @Input() status!: {start: boolean, finish: boolean};

    @ViewChild('listadosConsultatio') listadosConsultatio!: CargaListadoComponent;
    @ViewChild('listadosNordelta') listadosNordelta!: CargaListadoComponent;
    @ViewChild('listadosAsset') listadosAsset!: CargaListadoComponent;

    @ViewChild('slotsSorteo') slotsSorteo!: SlotsSorteo2023Component;

    constructor() { }

    ngOnInit(): void {
    }

    resetearSorteo(){
        this.listadosConsultatio.resetearSorteo();
        this.listadosNordelta.resetearSorteo();
        this.listadosAsset.resetearSorteo();
        this.slotsSorteo.resetearSorteo();
    }

    disableStart(){
        return (this.listadosConsultatio && this.listadosConsultatio.isInvalid()) || 
               (this.listadosNordelta && this.listadosNordelta.isInvalid()) ||
               (this.listadosAsset && this.listadosAsset.isInvalid())
    }

    comenzarSorteo(){
        let sorteos: Sorteos = {
            consultatio: this.listadosConsultatio.getListados(),
            nordelta: this.listadosNordelta.getListados(),
            asset: this.listadosAsset.getListados()
        }
        this.slotsSorteo.startSorteo(sorteos);
    }
}
