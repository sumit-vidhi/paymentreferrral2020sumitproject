import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader-service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  message: any;
  referral:any;
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router, private loader: LoaderService, private loginService: JWTAuthService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      userName: [''],
      email: [''],
      firstName: ['11', Validators.required],
      lastName: ['11', Validators.required],
      address: ['dsfsdfdsf', Validators.required],
      address2: ['dsfsdfdsf', Validators.required],
      state: ['sdfdsfsdf', Validators.required],
      city: ['sdfdsfdsf', Validators.required],
      postalCode: ['dsfsdfsdfdsf', Validators.required],
      phone: ['22112121212', Validators.required],
      country: ['AF', Validators.required],

    });
    this.editForm.controls['email'].setValue(this.getEmail());
    this.editForm.controls['userName'].setValue(this.getUserName());
    const status = this.loginService.getUserStatus();
    console.log(status)
    if (status === '1') {
      this.message = "";
      this.referral = this.getUrl();
    } else {
      this.message = "Your account is pending please update your profile";
    }
  }

  getUrl() {

    const _isDev = window.location.port.indexOf('4200') > -1;

    const protocol = window.location.protocol;

    const host = window.location.host;

    return _isDev ? 'http://localhost:4200/auth/signup?referralCode='+this.getReferralCode() : '/auth/signup';
  }

  getEmail() {
    return this.loginService.getLoginUserEmail();
  }

  getReferralCode() {
    return this.loginService.getRefferalCode();
  }

  getUserName() {
    return this.loginService.getLoginUserName();
  }

  onSubmit() {
    if (this.editForm.invalid) {
      return;
    }
    if (this.loginService.getUserStatus()) {
      console.log(this.editForm.value);
    }

  }

}
