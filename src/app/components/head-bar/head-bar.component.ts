import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.css']
})
export class HeadBarComponent implements OnInit {

    @Input() status!: {start: boolean, finish: boolean};

    @Output() fireResetearSorteo = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    resetearSorteo(){
        if (this.status.finish){
            this.status.finish = false;
            this.status.start = false;

            this.fireResetearSorteo.emit();
        }
    }
}
