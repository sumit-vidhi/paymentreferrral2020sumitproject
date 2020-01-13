import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [BlogComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  providers: [BlogRoutingModule.providers],
  
  exports: [SharedModule, ]
})
export class BlogModule { }
