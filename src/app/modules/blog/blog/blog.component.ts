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
  constructor(private authService: AuthService, private blogService: BlogService,
    private loginService: JWTAuthService, private loader: LoaderService) { }

  ngOnInit() {
    this.loader.startLoading();
    const plan = this.loginService.getPlan();
    console.log(plan);
    this.blogService.getBlog({plan:plan}).subscribe((result) => {
      this.loader.stopLoading();
      if (result.status == 'success') {
        this.blogData = result.record;
      }
    })
  }

}
