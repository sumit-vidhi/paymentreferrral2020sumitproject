import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '@modules/user/services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LoaderService } from '@core/services/loader-service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { CreditCardValidator } from 'angular-cc-library';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
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
  formCard: FormGroup;
  modalReference: NgbModalRef;
  submittedForm: boolean = false;
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router, private loader: LoaderService, public loginService: JWTAuthService, public modalService: NgbModal) {
  }

  ngOnInit() {
    $(document).ready(function(){
     
      var owner = $('#owner');
      var cardNumber = $('#cardNumber');
      var cardNumberField = $('#card-number-field');
      var CVV = $("#cvv");
      var mastercard = $("#mastercard");
      var confirmButton = $('#confirm-purchase');
      var visa = $("#visa");
      var amex = $("#amex");
console.log(cardNumber);
      // Use the payform library to format and validate
      // the payment fields.

      // cardNumber.payform('formatCardNumber');
      //CVV.payform('formatCardCVC');


      cardNumber.keyup(function () {
        console.log(21211323);
        amex.removeClass('transparent');
        visa.removeClass('transparent');
        mastercard.removeClass('transparent');

        if ($.payform.validateCardNumber(cardNumber.val()) == false) {
          cardNumberField.addClass('has-error');
        } else {
          cardNumberField.removeClass('has-error');
          cardNumberField.addClass('has-success');
        }

        if ($.payform.parseCardType(cardNumber.val()) == 'visa') {
          mastercard.addClass('transparent');
          amex.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'amex') {
          mastercard.addClass('transparent');
          visa.addClass('transparent');
        } else if ($.payform.parseCardType(cardNumber.val()) == 'mastercard') {
          amex.addClass('transparent');
          visa.addClass('transparent');
        }
      });

      $("button").click(function (e) {
        alert(23232);
        e.preventDefault();

        var isCardValid = $.payform.validateCardNumber(cardNumber.val());
        var isCvvValid = $.payform.validateCardCVC(CVV.val());

        if (owner.val().length < 5) {
          alert("Wrong owner name");
        } else if (!isCardValid) {
          alert("Wrong card number");
        } else if (!isCvvValid) {
          alert("Wrong CVV");
        } else {
          // Everything is correct. Add your form submission code here.
          alert("Everything is correct");
        }
      });


    });


    this.formCard = this.formBuilder.group({
      creditCard: ['', [<any>CreditCardValidator.validateCCNumber]],
      expirationDate: ['', [<any>CreditCardValidator.validateExpDate]],
      cvc: ['', [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(4)]]
    });
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

  onFormSubmit() {
    this.submittedForm = true;
    console.log(this.formCard.value);
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
        alert("Setting Saved");
      } else {
        alert(result.message);
      }
    })
  }

  open(content) {

    this.modalReference = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', windowClass: 'ticket-modal' });

  }


  buyMoneyPlugin(content) {
    this.open(content);

    // this.loader.startLoading();
    // const userId = this.loginService.getLoginUserId();
    // this.userService.buyPlugin({ userId: userId }).subscribe((result) => {
    //   this.loader.stopLoading();
    //   if (result.status === 'success') {
    //     result.record.authToken = result.record.accessToken;
    //     this.loginService.setLoginUserDetail(result.record);
    //     this.ngOnInit();
    //   }
    // })
  }

}
