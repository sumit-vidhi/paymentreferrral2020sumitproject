/**
 * Login component for auth module
 */

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { LoaderService } from '@core/services/loader-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private loginService: JWTAuthService, private loader: LoaderService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required
      ]],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }
  onSubmit() {
    if(this.loginForm.invalid){
      return;
    }
    let formModal = this.loginForm.value;
    this.loader.startLoading();
    this.authService.login(formModal).subscribe(result => {
      this.loader.stopLoading();
      if (result.status === 'success') {
        result.record.authToken = result.record.accessToken;
        this.loginService.setLoginUserDetail(result.record);
      } else if (result.status === 'notActive') {
        alert("Your email address is inactive please check your inbox and activate account.");
      } else {
        alert("Email and password is wrong");
      }
    });

  }
}
