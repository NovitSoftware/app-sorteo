import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SlotsSorteo2023Component } from './slots-sorteo2023/slots-sorteo2023.component';

@Component({
  selector: 'app-version2023',
  templateUrl: './version2023.component.html',
  styleUrls: ['./version2023.component.scss']
})
export class Version2023Component implements OnInit {

    @Input() status!: {start: boolean, finish: boolean};

    @ViewChild('slotsSorteo') slotsSorteo!: SlotsSorteo2023Component;

    constructor() { }

    ngOnInit(): void {
    }

    startSorteo(event: any){
        this.status.start = true;
        this.slotsSorteo.startSorteo(event)
    }

    resetearSorteo(){
        this.slotsSorteo.resetearSorteo();
    }
}
