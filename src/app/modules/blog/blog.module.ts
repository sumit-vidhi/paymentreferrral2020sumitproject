import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [BlogComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  providers: [BlogRoutingModule.providers]
})
export class BlogModule { }
