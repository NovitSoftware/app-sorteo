import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AvisoSnackComponent } from "./aviso-snack.component";

@Injectable({
  providedIn: 'root'
})
export class AvisoSnackService {

    constructor(private _snackBar: MatSnackBar){}

    displayMsg(type: "error"|"exito", title: string, text: string){
        this._snackBar.openFromComponent(AvisoSnackComponent, {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            data: {
                type: type,
                title: title,
                text: text
            }
        });
    }
}