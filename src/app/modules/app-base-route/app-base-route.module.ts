import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBaseRouteComponent } from './app-base-route.component';

import { SharedModule } from '../shared.module';
import { AppRoutingModuleRoutingModule } from './app-routing-module-routing.module';
import { RendicionComponent } from './pages/rendicion/rendicion.component';
import { AutorizarComponent } from './pages/autorizar/autorizar.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { GrillarendicionComponent } from './component/grillarendicion/grillarendicion.component';



@NgModule({
  imports: [
    CommonModule,
    AppRoutingModuleRoutingModule,
    SharedModule
  ],
  declarations: [
    AppBaseRouteComponent,
    RendicionComponent,
    AutorizarComponent,
    ReporteComponent,
    GrillarendicionComponent
  ],
})
export class AppBaseRouteModule { }
