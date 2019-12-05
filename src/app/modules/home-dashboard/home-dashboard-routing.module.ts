import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '@core/gaurds/auth-guard.service';
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: { title: 'Dashboard page' },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeDashboardRoutingModule { }
