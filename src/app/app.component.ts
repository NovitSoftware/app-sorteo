import { Component, ViewChild } from '@angular/core';
import { SvgService } from './svg.service';
import * as _ from 'lodash';
import { Version2022Component } from './components/version2022/version2022.component';
import { Version2023Component } from './components/version2023/version2023.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    showVersionControl: boolean = true;
    displayVersion: Version = Version._2023;
    version = Version;

    status = {
        start: false,
        finish: false
    }

    @ViewChild('headBar') headBar!: HeadBarComponent;
    @ViewChild('version2022') version2022!: Version2022Component;
    @ViewChild('version2023') version2023!: Version2023Component;


    constructor(private svgService: SvgService){
        this.svgService.init();
    }

    resetearSorteo(){
        switch(this.displayVersion){
            case Version._2022:
                this.version2022.resetearSorteo();
                break;
            case Version._2023:
                this.version2023.resetearSorteo();
                break;
        }
    }

    changeVersionDisplaying(version: Version){
        this.headBar.resetearSorteo(true);
        this.displayVersion = version;
    }
}

export enum Version {
    _2022 = 0,
    _2023 = 1
}