import { Component, OnInit } from '@angular/core';
import { JWTAuthService } from '@core/services/jwt-auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  referalUrl: any = '';
  constructor(public loginService: JWTAuthService) { }

  ngOnInit() {
    if (this.loginService.getUserStatus() === "1") {
      this.referalUrl = this.getUrl();
    } else {
      this.referalUrl = "Please update your profile and refer to firend."
    }
   
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
