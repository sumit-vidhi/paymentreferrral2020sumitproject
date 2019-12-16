import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmcaPolicyComponent } from './dmca-policy/dmca-policy.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [DmcaPolicyComponent, PrivacyPolicyComponent, TermsOfUseComponent, FaqComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  providers: [PagesRoutingModule.providers]
})
export class PagesModule { }
