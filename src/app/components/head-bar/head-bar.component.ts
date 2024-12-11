import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Version } from 'src/app/app.component';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.scss']
})
export class HeadBarComponent implements OnInit {
  @Input() displayVersion!: Version;
  @Input() status!: { start: boolean, finish: boolean };

  @Output() fireResetearSorteo = new EventEmitter();
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

  resetearSorteo(force: boolean = false) {
    if (this.status.finish || force) {
      this.status.finish = false;
      this.status.start = false;

      this.fireResetearSorteo.emit();
    }
  }

  getVersion() {
    return "2023";
  }
}
