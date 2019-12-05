/**
 * Base routing module of the application.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Define the routes
const appRoutes: Routes = [
  { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: 'dashboard', loadChildren: './modules/home-dashboard/home-dashboard.module#HomeDashboardModule'},
  // { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  // { path: '**', redirectTo: '/pages/404' }, //No route found
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
