import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

    @Input() results!: {texto: number|string, premio: string}[];
    @Input() columnaDerecha!: string;

    constructor() { }

    ngOnInit(): void {
    }

}
