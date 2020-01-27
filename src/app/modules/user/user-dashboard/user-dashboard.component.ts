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
  mmeFreeurlForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService) {
  }

  ngOnInit() {
    this.sendMessage = false;
    this.mmeFreeurlForm = this.formBuilder.group({
      mmeUrl: ['', [Validators.required]],
      freeUrl: ['', Validators.required]
    });
    this.loader.startLoading();
    this.userService.getdashboardData().subscribe((result) => {
      this.loader.stopLoading();
      if (result.status === 'success') {
        this.dashboardData = result.record;
        const mmeUrl = this.loginService.getmmeUrl();
        const freeUrl = this.loginService.getfreeUrl();
        if (mmeUrl && freeUrl) {
          this.mmeFreeurlForm.controls.mmeUrl.setValue(mmeUrl);
          this.mmeFreeurlForm.controls.freeUrl.setValue(freeUrl);
        } else {
          this.mmeFreeurlForm.controls.mmeUrl.setValue(result.record.urlData['mmeUrl']);
          this.mmeFreeurlForm.controls.freeUrl.setValue(result.record.urlData['freeUrl']);
        }
      }
    })
  }

  get f() { return this.mmeFreeurlForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.mmeFreeurlForm.invalid) {
      return;
    }
    const formData = this.mmeFreeurlForm.value;
    formData.userId = this.loginService.getLoginUserId();
    this.loader.startLoading();
    this.userService.addUrl(formData).subscribe((result) => {
      this.loader.stopLoading();
      if (result.status == 'success') {
        result.record.authToken = result.record.accessToken;
        this.loginService.setLoginUserDetail(result.record);
        alert("Url added");
      } else {
        alert(result.message);
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
        this.ngOnInit();
      }
    })
  }

}
