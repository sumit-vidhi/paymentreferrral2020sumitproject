import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from '@core/gaurds/auth-guard.service';
import { UserService } from '../user/services/user.service';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


const routes: Routes = [
  {
    path: '', component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'blog-detail', component: BlogDetailComponent,
    data: { title: 'Downline Club\'s Epic Guide to Affiliate Marketing' }
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {
  static providers = [
    UserService
  ];
}
