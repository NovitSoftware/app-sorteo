import { Component, ViewChild } from '@angular/core';
import { SvgService } from './svg.service';
import * as _ from 'lodash';
import { Version2022Component } from './components/version2022/version2022.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    
    status = {
        start: false,
        finish: false
    }

    @ViewChild('version2022') version2022!: Version2022Component;

    constructor(private svgService: SvgService){
        this.svgService.init();
    }

    resetearSorteo(){
        this.version2022.resetearSorteo();
    }
}
