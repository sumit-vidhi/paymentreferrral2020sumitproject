import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DmcaPolicyComponent } from './dmca-policy/dmca-policy.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisitorsTrafficComponent } from './visitors-traffic/visitors-traffic.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { SupportReplyComponent } from './support-reply/support-reply.component';
import { NgPaymentCardModule } from 'ng-payment-card';
@NgModule({
  declarations: [HomeComponent, DmcaPolicyComponent, PrivacyPolicyComponent, TermsOfUseComponent, FaqComponent, AboutUsComponent, VisitorsTrafficComponent, TestimonialsComponent, SupportReplyComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgPaymentCardModule
  ],
  providers: [PagesRoutingModule.providers],
  exports:[SharedModule]
})
export class PagesModule { }
