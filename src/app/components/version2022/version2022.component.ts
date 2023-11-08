import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SlotsSorteo2022Component } from './slots-sorteo2022/slots-sorteo2022.component';

@Component({
  selector: 'app-version2022',
  templateUrl: './version2022.component.html',
  styleUrls: ['./version2022.component.css']
})
export class Version2022Component implements OnInit {

    @Input() status!: {start: boolean, finish: boolean};

    @ViewChild('slotsSorteo') slotsSorteo!: SlotsSorteo2022Component;
    
    constructor() { }

    ngOnInit(): void {
    }

    startSorteo(evento: any){
        this.slotsSorteo.startSorteo(evento)
    }

    resetearSorteo(){
        this.slotsSorteo.resetearSorteo()
    }
}
