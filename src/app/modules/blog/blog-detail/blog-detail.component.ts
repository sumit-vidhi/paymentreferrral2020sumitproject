import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { LoaderService } from '@core/services/loader-service';
import { BlogService } from '@modules/blog/services/blog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blogData: any;
  mmeUrl: any;
  freeUrl: any;
  constructor(private authService: AuthService, private blogService: BlogService,
    private loginService: JWTAuthService, private loader: LoaderService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUrl();

  }
  getUrl() {
    const id = this.loginService.getSponserUserId();
    this.blogService.getUrl({ id: id }).subscribe((result) => {
      if (result.status == 'success') {
        this.mmeUrl = result.record.mmeUrl;
        this.freeUrl = result.record.freeUrl;
        this.route.paramMap.subscribe(params => {
          const id = params.get("id");

          this.getBlogById(id);
        })

      }
    })
  }

  getBlogById(id) {
    this.loader.startLoading();
    const plan = this.loginService.getPlan();
    //console.log(id);
    this.blogService.getBlogById({ plan: plan, id: id }).subscribe((result) => {
      this.loader.stopLoading();
      if (result.status == 'success') {
        this.blogData = result.record;
        this.blogData = this.blogData.map(result => {
          result.description = result.description.replace("{{MME_URL}}", '<a class="btn btn-lg btn-orange" target="_blank" href="' + this.mmeUrl + '" />' + 'Join Make Money Even Now</a>');
          result.description = result.description.replace("{{FREE_URL}}", '<a class="btn btn-lg btn-orange" target="_blank" href="' + this.freeUrl + '" />' + 'Get Your Free Lead System</a>');

          return result;
        })
        this.blogData = this.blogData[0];
        console.log(this.blogData);
      }
    })
  }

}
