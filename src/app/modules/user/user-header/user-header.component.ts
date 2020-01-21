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
  name: any;
  createdDate: any;
  plan: any;
  image: any = 'data:image/jpeg;base64,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'
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService) { }

  ngOnInit() {
    if (this.loginService.getUserStatus() === "1") {
      this.referalUrl = this.getUrl();
    } else {
      this.referalUrl = "Please update your profile and refer to firend."
    }

    this.name = this.loginService.getFirstUserName() + ' ' + this.loginService.getLastUserName();
    if (this.loginService.getImage()) {
      this.image = this.loginService.getImage();

    }
    this.createdDate = this.loginService.getcreatedDate();
    this.plan = this.loginService.getPlan();
    this.userService.getSponserReferralData().subscribe((result) => {
      if (result.status === 'success') {
        this.referalData = result.record;
      }
    })

  }

  fileChange(event) {
    this.readThis(event.target);

  }

  readThis(inputValue: any): void {

    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
      const data = {
        id: this.loginService.getLoginUserId(),
        image: this.image
      }
      this.loader.startLoading();
      this.userService.imageUpload(data).subscribe((result) => {
        this.loader.stopLoading();
        if (result.status == 'success') {
          result.record.authToken = result.record.accessToken;
          this.loginService.setLoginUserDetail(result.record);
          alert("Image Uploaded");
        }
      })

    }
    myReader.readAsDataURL(file);
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert('Referral url is copied successfully.')
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
