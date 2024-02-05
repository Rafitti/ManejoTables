import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { AppBaseRouteComponent } from './app-base-route.component';
import  {RendicionComponent} from './pages/rendicion/rendicion.component';
import { AutorizarComponent } from './pages/autorizar/autorizar.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { Title } from '@angular/platform-browser';

// localhost/MesaRendicion
const routes: Routes = [
  {
    path:'',
    component:AppBaseRouteComponent,
    children:[
      {path: 'Rendicion', component: RendicionComponent, title: 'Rendición Web'},
      {path: 'Autoriza', component: AutorizarComponent, title: 'Autorizar Rendición'},
      {path: 'Reporte', component: ReporteComponent, title: 'Reporte Rendición'},
      {path: '**', redirectTo:'Rendicion'}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class AppRoutingModuleRoutingModule { }
