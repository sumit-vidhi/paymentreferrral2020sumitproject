import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '@modules/user/services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader-service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
@Component({
  selector: 'app-wallet-credit',
  templateUrl: './wallet-credit.component.html',
  styleUrls: ['./wallet-credit.component.scss']
})
export class WalletCreditComponent implements OnInit {

  public sendMessage: boolean;
  dashboardData: any;
  mmeFreeurlForm: FormGroup;
  submitted = false;
  fromId = [];
  amount: number = 0;
  theCheckbox = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService) {
  }

  ngOnInit() {
    this.loader.startLoading();
    this.userService.getWalletCredit().subscribe((result) => {
      this.loader.stopLoading();
      if (result.status === 'success') {
        this.dashboardData = result.record;
      }
    })
  }

  checkWallet(id: number, amount: number) {
    if (this.fromId.indexOf(id) > -1) {
      this.fromId.splice(this.fromId.indexOf(id), 1);
      this.amount = Number(this.amount) - Number(amount);
    } else {
      this.fromId.push(id);
      this.amount = Number(this.amount) + Number(amount);
    }

  }

  addToWallet() {
    if (Number(this.amount) < 50) {
      alert("Minimum amount $50 to be added in your wallet.");
      return;
    }
    const data = {
      id: this.fromId,
      amount: this.amount
    }
    this.userService.addWalletCredit(data).subscribe((result) => {
      this.loader.stopLoading();
      if (result.status === 'success') {
        alert("Wallet Updated");
        this.amount = 0;
        this.fromId = [];
        this.ngOnInit();
      } else {
        alert('Something went wrong please try again later');
      }
    })
  }

  checkAllWallet(event) {
    if (event.target.checked) {
      this.theCheckbox = true;
      this.fromId = this.dashboardData.map((result) => {
        return result.id;
      })
      this.amount = this.dashboardData.reduce((acc, value) => {
        return acc + value.amount;
      }, 0)
    } else {
      this.theCheckbox = false;
      this.fromId = [];
      this.amount = 0;
    }

  }

}
