import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PaymentSettingsComponent } from './payment-settings/payment-settings.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { PaymentsComponent } from './payments/payments.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletCreditComponent } from './wallet-credit/wallet-credit.component';
@NgModule({
  declarations: [EditProfileComponent, UserHeaderComponent, UserNavComponent, UserDashboardComponent, ChangePasswordComponent, PaymentSettingsComponent, ReferralsComponent, PaymentsComponent, WalletComponent, WalletCreditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserRoutingModule.providers]
})
export class UserModule { }
