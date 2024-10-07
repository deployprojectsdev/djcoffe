import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "./shared/shared.module";
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

import * as $ from 'jquery';

import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CultivoComponent } from './cultivo/cultivo.component';
import { FincaComponent } from './finca/finca.component';
import { SensorComponent } from './sensor/sensor.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { VariedadCafeComponent } from './variedad-cafe/variedad-cafe.component';
import { CrearFincaComponent } from './crear-finca/crear-finca.component';
import { ActualizarFincaComponent } from './actualizar-finca/actualizar-finca.component';
import { BorrarFincaComponent } from './borrar-finca/borrar-finca.component';
import { UsuarioAlertaComponent } from './usuario-alerta/usuario-alerta.component';
import { LecturaSensorComponent } from './lectura-sensor/lectura-sensor.component';
import { CrearCultivoComponent } from './crear-cultivo/crear-cultivo.component';
import { EditarCultivoComponent } from './editar-cultivo/editar-cultivo.component';
import { BorrarCultivoComponent } from './borrar-cultivo/borrar-cultivo.component';
import { CrearSensorComponent } from './crear-sensor/crear-sensor.component';
import { ActualizarCultivoComponent } from './actualizar-cultivo/actualizar-cultivo.component';
import { ActualizarSensorComponent } from './actualizar-sensor/actualizar-sensor.component';
import { BorrarSensorComponent } from './borrar-sensor/borrar-sensor.component';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    CultivoComponent,
    FincaComponent,
    SensorComponent,
    UsuarioComponent,
    VariedadCafeComponent,
    CrearFincaComponent,
    ActualizarFincaComponent,
    BorrarFincaComponent,
    UsuarioAlertaComponent,
    LecturaSensorComponent,
    CrearCultivoComponent,
    EditarCultivoComponent,
    BorrarCultivoComponent,
    CrearSensorComponent,
    ActualizarCultivoComponent,
    ActualizarSensorComponent,
    BorrarSensorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    AppRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4' }),
    PerfectScrollbarModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
