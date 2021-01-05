// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AuthGuard } from './_helpers';

const routes: Routes =[
  {
    path: '',
    // redirectTo: 'dashboard',
    redirectTo:'yk_equipment_management',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      // loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
      canActivate: [AuthGuard]
    }]
  },
  { path: 'account', loadChildren:() => import('./account/account.module').then(x => x.AccountModule)},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
