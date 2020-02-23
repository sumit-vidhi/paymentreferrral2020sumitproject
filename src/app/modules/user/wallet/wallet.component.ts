import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '@modules/user/services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader-service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {


  public sendMessage: boolean;
  dashboardData: any;
  mmeFreeurlForm: FormGroup;
  submitted = false;
  closeResult: string;
  modalReference: NgbModalRef;
  addCashForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.loader.startLoading();
    this.userService.getWalletData().subscribe((result) => {
      this.loader.stopLoading();
      if (result.status === 'success') {
        this.dashboardData = result.record;
      }
    })
    this.addCashForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]],
      status: [0]
    });
  }

  requestMoney(content) {
    this.addCashForm.reset();
    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.addCashForm.controls; }


  onSubmit(mode) {
    this.submitted = true;
    if (this.addCashForm.invalid) {
      return;
    }

    const formData = this.addCashForm.value;
    if (Number(formData.amount) > Number(this.dashboardData.walletAmount.amount)) {
      alert("Request amount should be less then to the wallet amount.");
      return;
    }
    formData.walletamount = this.dashboardData.walletAmount.amount;
    formData.userId = this.loginService.getLoginUserId();
    formData.status = 0;
    console.log(formData);
    this.loader.startLoading();
    this.userService.addCash(formData).subscribe((result) => {
      this.modalReference.close();
      this.loader.stopLoading();
      if (result.status == 'success') {
        alert("Request Send");
        this.ngOnInit();
      } else {
        alert(result.message);
      }
    })
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
