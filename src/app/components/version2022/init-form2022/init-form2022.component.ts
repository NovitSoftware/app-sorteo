import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-init-form2022',
  templateUrl: './init-form2022.component.html',
  styleUrls: ['./init-form2022.component.scss']
})
export class InitForm2022Component implements OnInit {

    @Input() start: boolean = false;
    
    formPrimero: UntypedFormGroup = this.createForm();
    formSegundo: UntypedFormGroup = this.createForm();
  
    @Output() fireStartSorteo = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    createForm(){
        return new UntypedFormGroup(
            {
                desdeParticipante: new UntypedFormControl('', [Validators.required]),
                hastaParticipante: new UntypedFormControl('', [Validators.required]),
                cantidad: new UntypedFormControl('', [Validators.required]),
                premio: new UntypedFormControl('', [Validators.required]),
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