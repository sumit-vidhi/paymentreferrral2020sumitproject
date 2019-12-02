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
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,
    private loginService: JWTAuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }
  onSubmit() {
    let formModal = this.loginForm.value;
    this.authService.login(formModal).subscribe(result => {
      if (result.status === 'success') {
        this.loginService.setLoginUserDetail(result.record);
      } else if (result.status === 'notActive') {
        alert("Your email address is inactive please check your inbox and activate account.");
      } else {
        alert("Email and password is wrong");
      }
    });

  }
}
