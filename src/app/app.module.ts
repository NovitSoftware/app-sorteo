import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { SvgService } from './svg.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL ANGULAR
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

// COMPONENTES
import { AppComponent } from './app.component';
import { Version2022Component } from './components/version2022/version2022.component';
import { InitForm2022Component } from './components/version2022/init-form2022/init-form2022.component';
import { SlotsSorteo2022Component } from './components/version2022/slots-sorteo2022/slots-sorteo2022.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';
import { Version2023Component } from './components/version2023/version2023.component';
import { CargaListadoComponent } from './components/version2023/carga-listado/carga-listado.component';
import { SlotsSorteo2023Component } from './components/version2023/slots-sorteo2023/slots-sorteo2023.component';
import { AvisoSnackComponent } from './components/aviso-snack/aviso-snack.component';


@NgModule({
  declarations: [
    AppComponent,
    Version2022Component,
    InitForm2022Component,
    SlotsSorteo2022Component,
    ResultadosComponent,
    HeadBarComponent,
    Version2023Component,
    CargaListadoComponent,
    AvisoSnackComponent,
    SlotsSorteo2023Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSnackBarModule, 
    MatTooltipModule
  ],
  providers: [SvgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
