import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '@modules/user/services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader-service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  referalUrl: any = '';
  referalData: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService) { }

  ngOnInit() {
    if (this.loginService.getUserStatus() === "1") {
      this.referalUrl = this.getUrl();
    } else {
      this.referalUrl = "Please update your profile and refer to firend."
    }
    this.userService.getSponserReferralData().subscribe((result) => {
      if (result.status === 'success') {
        this.referalData = result.record;
      }
    })

  }

  getUrl() {

    const _isDev = window.location.port.indexOf('4200') > -1;

    const protocol = window.location.protocol;

    const host = window.location.host;

    return _isDev ? 'http://localhost:4200/auth/signup?referralCode=' + this.getReferralCode() : protocol + "//" + host + '/auth/signup?referralCode=' + this.getReferralCode();
  }

  private getReferralCode() {
    return this.loginService.getRefferalCode();
  }

}