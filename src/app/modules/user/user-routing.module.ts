import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate  } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from '@core/gaurds/auth-guard.service';
const routes: Routes = [
  {
    path: '', component: EditProfileComponent,
    data: { title: 'My account' },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
