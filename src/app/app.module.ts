import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { SvgService } from './svg.service';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Version2022Component } from './components/version2022/version2022.component';
import { InitForm2022Component } from './components/version2022/init-form2022/init-form2022.component';
import { SlotsSorteo2022Component } from './components/version2022/slots-sorteo2022/slots-sorteo2022.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { HeadBarComponent } from './components/head-bar/head-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    Version2022Component,
    InitForm2022Component,
    SlotsSorteo2022Component,
    ResultadosComponent,
    HeadBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [SvgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
