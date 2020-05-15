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
  image: any = '/assets/images/defaultProfile.jpg'
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService) { }

  ngOnInit() {
    if (this.loginService.getUserStatus() === "1") {
      this.referalUrl = this.getUrl();
    } else {
      this.referalUrl = "Please complete your profile first to see your account details."
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

    return _isDev ? 'http://localhost:4200/auth/reg?code=' + this.getReferralCode() : protocol + "//" + host + '/auth/reg?code=' + this.getReferralCode();
  }

  private getReferralCode() {
    return this.loginService.getRefferalCode();
  }

}
