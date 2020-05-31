import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '@modules/user/services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { LoaderService } from '@core/services/loader-service';
@Component({
  selector: 'app-payment-settings',
  templateUrl: './payment-settings.component.html',
  styleUrls: ['./payment-settings.component.scss']
})
export class PaymentSettingsComponent implements OnInit {

  paymentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loader: LoaderService, private userService: UserService, public loginService: JWTAuthService) { }

  ngOnInit() {
    this.userService.getPayment().subscribe((result: any) => {
      if (result.record) {
        this.paymentForm.patchValue({
          details: result.record[0].details
        });
      }
    })
    this.paymentForm = this.formBuilder.group({
      details: ['']

    });
  }
  onSubmit() {
    const data = this.paymentForm.value;
    data.id = this.loginService.getLoginUserId();
    this.loader.startLoading()
    this.userService.savePayment(data).subscribe((result: any) => {
      this.loader.stopLoading()
      alert("Payment saved")
    })
  }

}
