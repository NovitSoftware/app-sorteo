import { Injectable } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class SvgService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }
   init() {
    this.matIconRegistry.addSvgIcon(
      "consultatioBlanco",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/consultatio-logo-blanco.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "nordeltaBlanco",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/nordelta-blanco.svg")
    );
  }
}
