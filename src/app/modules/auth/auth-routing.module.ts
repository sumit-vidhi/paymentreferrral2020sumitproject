/**
 * @module AuthRoutingModule
 * Auth routing module of the application.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importing components
import { MasterComponent } from '@modules/auth/components/master/master.component';
import { LoginComponent } from '@modules/auth/components/login/login.component';

// Importing services
import { AuthService } from '@modules/auth/services/auth.service';

// Importing guards
import { HasTokenResolver } from '@shared/resolvers/resolver.service';
import { SignUpComponent } from '@app/modules/auth/components/sign-up/sign-up.component';
import { ResetPasswordComponent } from '@app/modules/auth/components/reset-password/reset-password.component';

// defining routes
const routes: Routes = [
  {
    path: '', component: MasterComponent, children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
      },
      {
        path: 'signup',
        component: SignUpComponent,
        data: { title: 'Sign Up' }
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        data: { title: 'Reset Password' }
      }
    ], resolve: { access: HasTokenResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  static components = [
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    MasterComponent
  ];

  static providers = [
    AuthService,
    HasTokenResolver
  ];

}
