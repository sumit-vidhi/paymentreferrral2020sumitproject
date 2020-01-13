import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from '@core/gaurds/auth-guard.service';
import { UserService } from '../user/services/user.service';
import { DmcaPolicyComponent } from './dmca-policy/dmca-policy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisitorsTrafficComponent } from './visitors-traffic/visitors-traffic.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'dmca-policy', component: DmcaPolicyComponent,
    data: { title: 'Digital Millennium Copyright Act Policy' }
  },
  {
    path: 'about-us', component: AboutUsComponent,
    data: { title: 'About Us' }
  },
  {
    path: 'visitors-traffic', component: VisitorsTrafficComponent,
    data: { title: 'Visitors/Traffic' }
  },
  {
    path: 'support', component: TestimonialsComponent,
    data: { title: 'Testimonials' }
  },
  {
    path: 'terms-of-use', component: TermsOfUseComponent,
    data: { title: 'Terms of Use' }
  },
  {
    path: 'faq', component: FaqComponent,
    data: { title: 'Frequently Asked Questions' }
  } 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
  static providers = [
    UserService
  ];
}
