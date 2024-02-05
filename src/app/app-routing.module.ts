import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './modules/shared.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module')
        .then(m => m.LoginModule),
    // canActivate: [

    // ]
  },
  {
    path: 'MesaRendicion',
    loadChildren: () => import('./modules/app-base-route/app-base-route.module')
        .then(m => m.AppBaseRouteModule),
  },
  {
    path:'**',
    redirectTo:'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
