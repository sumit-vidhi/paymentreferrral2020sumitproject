import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SharedModule } from '@shared/shared.module';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { SafeHtmlPipeBlogHTML } from './services/safeHTML.pipe';

@NgModule({
  declarations: [BlogComponent, BlogDetailComponent, BlogPageComponent, SafeHtmlPipeBlogHTML],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  providers: [BlogRoutingModule.providers],
  
  exports: [SharedModule, ]
})
export class BlogModule { }


