import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from '@core/gaurds/auth-guard.service';
import { UserService } from '../user/services/user.service';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogPageComponent } from './blog-page/blog-page.component';


const routes: Routes = [
  {
    path: 'blog', component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'blog/blog-detail/:id', component: BlogDetailComponent,
    data: { title: 'Downline Club\'s Epic Guide to Affiliate Marketing' }
  },
  {
    path: 'blog/:id', component: BlogPageComponent,
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
