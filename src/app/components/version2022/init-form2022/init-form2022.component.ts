import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-init-form2022',
  templateUrl: './init-form2022.component.html',
  styleUrls: ['./init-form2022.component.scss']
})
export class InitForm2022Component implements OnInit {

    @Input() start: boolean = false;
    
    formPrimero: FormGroup = this.createForm();
    formSegundo: FormGroup = this.createForm();
  
    @Output() fireStartSorteo = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    createForm(){
        return new FormGroup(
            {
                desdeParticipante: new FormControl('', [Validators.required]),
                hastaParticipante: new FormControl('', [Validators.required]),
                cantidad: new FormControl('', [Validators.required]),
                premio: new FormControl('', [Validators.required]),
            }
        )
    }

    invalidForms(){
        let primero = this.formPrimero.getRawValue();
        let segundo = this.formSegundo.getRawValue();

        let invalidPrimero = this.formPrimero.invalid || primero.desdeParticipante > primero.hastaParticipante || primero.cantidad <= 0 || (primero.hastaParticipante - primero.desdeParticipante) < primero.cantidad-1  || primero.premio === "" ;
        let invalidSegundo = this.formSegundo.invalid || segundo.desdeParticipante > segundo.hastaParticipante || segundo.cantidad <= 0 || (segundo.hastaParticipante - segundo.desdeParticipante) < segundo.cantidad-1 || segundo.premio === "" ;

        return invalidPrimero || invalidSegundo;
    }

    startSorteo(){
        this.fireStartSorteo.emit({formPrimero: this.formPrimero, formSegundo: this.formSegundo});
    }
}