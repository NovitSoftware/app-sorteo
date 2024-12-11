import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SlotsSorteo2023Component, Sorteos } from './slots-sorteo2023/slots-sorteo2023.component';
import { CargaListadoComponent } from './carga-listado/carga-listado.component';

@Component({
  selector: 'app-version2023',
  templateUrl: './version2023.component.html',
  styleUrls: ['./version2023.component.scss']
})
export class Version2023Component implements OnInit {
  @Input() status!: { start: boolean, finish: boolean };

  @ViewChild('listadoswen') listadoswen!: CargaListadoComponent;
  @ViewChild('slotsSorteo') slotsSorteo!: SlotsSorteo2023Component;

  initValue: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  resetearSorteo() {
    this.listadoswen.resetearSorteo();
    this.slotsSorteo.resetearSorteo();
    this.initValue = false;
  }

  disableStart() {
    return (!this.listadoswen || this.listadoswen.isInvalid());
  }

  comenzarSorteo() {
    let sorteos: Sorteos = {
      wen: this.listadoswen.getListados()
    }
    this.slotsSorteo.startSorteo(sorteos);
  }
}
