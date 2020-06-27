import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { LoaderService } from '@core/services/loader-service';
import { BlogService } from '@modules/blog/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogData: any;
  mmeUrl: any;
  freeUrl: any;
  constructor(public authService: AuthService, private blogService: BlogService,
    public loginService: JWTAuthService, private loader: LoaderService) { }

  ngOnInit() {
    this.getUrl();

  }
  getUrl() {
    this.loader.startLoading();
    const id = this.loginService.getSponserId();
    this.blogService.getUrl({ id: id }).subscribe((result) => {
      if (result.status == 'success') {
        this.mmeUrl = result.record.mmeUrl;
        this.freeUrl = result.record.freeUrl;
        this.getBlog();
      }
    })
  }

  getBlog() {

    const plan = this.loginService.getPlan();
    this.blogService.getBlog({ plan: plan }).subscribe((result) => {
      this.loader.stopLoading();
      if (result.status == 'success') {
        this.blogData = result.record;
        this.blogData = this.blogData.map(result => {
          result.description = result.description.replace("{{MME_URL}}", '<a class="btn btn-lg btn-orange" target="_blank" href="'+this.mmeUrl+'" />'+ 'Join Make Money Even Now</a>');
          result.description = result.description.replace("{{FREE_URL}}", '<a class="btn btn-lg btn-orange" target="_blank" href="'+this.freeUrl+'" />'+ 'Get Your Free Lead System</a>');
          return result;
        })
      }
    })
  }

}
