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
import { WalletCreditComponent } from './wallet-credit/wallet-credit.component';

const routes: Routes = [
  {
    path: 'edit-profile', component: EditProfileComponent,
    data: { title: 'My account' },
    canActivate: [AuthGuard]  
  },
  {
    path: '', component: UserDashboardComponent,
    data: { title: 'My Dashboard' },
    canActivate: [AuthGuard]
  },
  {
    path: 'change-password', component: ChangePasswordComponent,
    data: { title: 'Change Password' },
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-settings', component: PaymentSettingsComponent,
    data: { title: 'Payment Settings' },
    canActivate: [AuthGuard]
  },
  {
    path: 'referrals', component: ReferralsComponent,
    data: { title: 'Referrals' },
    canActivate: [AuthGuard]
  },
  {
    path: 'payments', component: PaymentsComponent,
    data: { title: 'Payments' },
    canActivate: [AuthGuard]
  },
  {
    path: 'wallet', component: WalletComponent,
    data: { title: 'Wallet' },
    canActivate: [AuthGuard]
  },
  {
    path: 'wallet-credit', component: WalletCreditComponent,
    data: { title: 'Add Wallet Credit' },
    canActivate: [AuthGuard]
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
