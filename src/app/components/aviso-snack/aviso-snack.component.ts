import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-aviso-snack',
  templateUrl: './aviso-snack.component.html',
  styleUrls: ['./aviso-snack.component.scss']
})
export class AvisoSnackComponent implements OnInit {

  constructor(
    public snackBarRef: MatSnackBarRef<AvisoSnackComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  dismiss(){
    this.snackBarRef.dismiss();
  }

}
