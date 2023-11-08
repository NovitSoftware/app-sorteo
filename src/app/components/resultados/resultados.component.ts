import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

    @Input() results!: {numero: number, premio: string}[];

    constructor() { }

    ngOnInit(): void {
    }

}
