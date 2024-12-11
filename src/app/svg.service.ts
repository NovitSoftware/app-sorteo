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
      "novitLogo",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo-azul.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "novitLogoBlanco",
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo-blanco.svg")
    );
  }
}
