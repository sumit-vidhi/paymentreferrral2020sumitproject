/**
 * Base routing module of the application.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Define the routes
const appRoutes: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  // { path: 'dashboard', loadChildren: './modules/home-dashboard/home-dashboard.module#HomeDashboardModule'},
  // { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
  // { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  { path: '', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)},
  { path: '', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)},
  // {path: '', component: HomeComponent, data: { title: 'Down Line Club' }  }
  // { path: '**', redirectTo: '/pages/404' }, //No route found
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
