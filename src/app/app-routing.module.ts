/**
 * Base routing module of the application.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home-dashboard/home/home.component';

// Define the routes
const appRoutes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  // { path: 'dashboard', loadChildren: './modules/home-dashboard/home-dashboard.module#HomeDashboardModule'},
  // { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { path: 'user', loadChildren: './modules/user/user.module#UserModule'},
  { path: 'pages', loadChildren: './modules/pages/pages.module#PagesModule'},
  {path: '', component: HomeComponent, data: { title: 'Down Line Club' }  }
  // { path: '**', redirectTo: '/pages/404' }, //No route found
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
