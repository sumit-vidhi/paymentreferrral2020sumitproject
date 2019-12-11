import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AuthGuard } from '@core/gaurds/auth-guard.service';
import { UserService } from '@modules/user/services/user.service';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { PaymentsComponent } from './payments/payments.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: 'edit-profile', component: EditProfileComponent,
    data: { title: 'My account' }    
  },
  {
    path: '', component: UserDashboardComponent,
    data: { title: 'My Dashboard' },
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password', component: ChangePasswordComponent,
    data: { title: 'Change Password' }
  },
  {
    path: 'payment-settings', component: PaymentSettingsComponent,
    data: { title: 'Payment Settings' }
  },
  {
    path: 'referrals', component: ReferralsComponent,
    data: { title: 'Referrals' }
  },
  {
    path: 'payments', component: PaymentsComponent,
    data: { title: 'Payments' }
  },
  {
    path: 'wallet', component: WalletComponent,
    data: { title: 'Wallet' }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
  static providers = [
    UserService
  ];
}
