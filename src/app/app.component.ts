import { Component, ViewChild } from '@angular/core';
import { SvgService } from './svg.service';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { Version2023Component } from './components/version2023/version2023.component';

export enum Version {
  _2023
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showVersionControl: boolean = false;
  displayVersion: Version = Version._2023;
  version = Version;

  status = {
    start: false,
    finish: false
  }

  @ViewChild('headBar') headBar!: HeadBarComponent;
  @ViewChild('version2023') version2023!: Version2023Component;

  constructor(private svgService: SvgService) {
    this.svgService.init();
  }

  resetearSorteo() {
    switch (this.displayVersion) {
      case Version._2023:
        this.version2023.resetearSorteo();
        break;
    }
  }

  changeVersionDisplaying(version: Version) {
    this.headBar.resetearSorteo(true);
    this.displayVersion = version;
  }
}