import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { LoaderService } from '@core/services/loader-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private authService: AuthService,
    private loginService: JWTAuthService, private loader: LoaderService) { }

  ngOnInit() {
  }

}
