import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '@modules/user/services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader-service';
import { JWTAuthService } from '@core/services/jwt-auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  public sendMessage: boolean;
  dashboardData: any;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService) {
     }

  ngOnInit() {
    this.sendMessage = false;
    this.loader.startLoading();
    this.userService.getdashboardData().subscribe((result) => {
      this.loader.stopLoading();
      if (result.status === 'success') {
        this.dashboardData = result.record;
      }
    })
  }

  buyMoneyPlugin() {
    this.loader.startLoading();
    const userId = this.loginService.getLoginUserId();
    this.userService.buyPlugin({ userId: userId }).subscribe((result) => {
      this.loader.stopLoading();
      if (result.status === 'success') {
        result.record.authToken = result.record.accessToken;
        this.loginService.setLoginUserDetail(result.record);
      }
    })
  }

}
