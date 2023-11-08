import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-init-form2022',
  templateUrl: './init-form2022.component.html',
  styleUrls: ['./init-form2022.component.css']
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
        return this.formPrimero.invalid || this.formSegundo.invalid;
    }

    startSorteo(){
        this.fireStartSorteo.emit({formPrimero: this.formPrimero, formSegundo: this.formSegundo});
    }
}