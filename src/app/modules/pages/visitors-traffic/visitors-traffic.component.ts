import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { LoaderService } from '@core/services/loader-service';
import { PageService } from '@modules/pages/services/page.service';
import { UserService } from '@modules/user/services/user.service';
import { JWTAuthService } from '@core/services/jwt-auth.service';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { CardValidator } from './validator/card-validator';
import { ICardDetails } from './domain/i-card-details';
import { CardDetails } from './domain/card-details';
import { PaymentCardService } from './service/payment-card.service';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
@Component({
  selector: 'app-visitors-traffic',
  templateUrl: './visitors-traffic.component.html',
  styleUrls: ['./visitors-traffic.component.scss']
})
export class VisitorsTrafficComponent implements OnInit {
  data: any;
  modalReference: NgbModalRef;
  cc: any = {
    cardNumber: '',
    cardHolder: '',
    expirationMonth: '',
    expirationYear: '',
    ccv: ''

  }

  public ccForm: FormGroup;

  /**
   * List of months
   */
  public months: Array<string> = [];

  /**
   * List of years
   */
  public years: Array<number> = [];

  /**
   * Validation message for missing payment card number
   */

  public ccNumMissingTxt?= 'Card number is required';

  /**
   * Validation message for too short payment card number
   */

  public ccNumTooShortTxt?= 'Card number is too short';

  /**
   * Validation message for too long payment card number
   */

  public ccNumTooLongTxt?= 'Card number is too long';

  /**
   * Validation message for payment card number that contains characters other than digits
   */
  public ccNumContainsLettersTxt?= 'Card number can contain digits only';

  /**
   * Validation message for invalid payment card  number (Luhn's validation)
   */
  public ccNumChecksumInvalidTxt?= 'Provided card number is invalid';

  /**
   * Validation message for missing card holder name
   */

  public cardHolderMissingTxt?= 'Card holder name is required';

  /**
   * Validation message for too long card holder name
   */

  public cardHolderTooLongTxt?= 'Card holder name is too long';

  /**
   * Validation message for missing expiration month
   */

  public expirationMonthMissingTxt?= 'Expiration month is required';

  /**
   * Validation message for missing expiration year
   */

  public expirationYearMissingTxt?= 'Expiration year is required';

  /**
   * Validation message for missing CCV number
   */

  public ccvMissingTxt?= 'CCV number is required';

  /**
   * Validation message for too short CCV number
   */

  public ccvNumTooShortTxt?= 'CCV number is too short';

  /**
   * Validation message for too long CCV number
   */

  public ccvNumTooLongTxt?= 'CCV number is too long';

  /**
   * Validation message for incorrect CCV number containing characters other than digits
   */

  public ccvContainsLettersTxt?= 'CCV number can contain digits only';

  /**
   * Validation message for expired card
   */

  public cardExpiredTxt?= 'Card has expired';

  /**
   * Switch validation of the payment card number
   */

  public validateCCNum?= true;

  /**
   * Switch validation of the payment card holder
   */

  public validateCardHolder?= true;

  /**
   * Switch validation of the payment card expiration month
   */

  public validateExpirationMonth?= true;

  /**
   * Switch validation of the payment card expiration year
   */

  public validateExpirationYear?= true;

  /**
   * Switch validation of the payment card expiration
   */

  public validateCardExpiration?= true;

  /**
   * Switch validation of the payment card CCV number
   */

  public validateCCV?= true;


  constructor(private _ccService: PaymentCardService, private _fb: FormBuilder, private pageService: PageService, private userService: UserService, public modalService: NgbModal, private loader: LoaderService, public loginService: JWTAuthService) { }

  public ngOnInit(): void {
    this.buildForm();
    this.assignDateValues();


    this.loader.startLoading();
    this.pageService.getPage({ title: 'money-plugin' }).subscribe((result: any) => {
      this.loader.stopLoading();
      this.data = result.record[0].body;
    })

  }

  /**
   * Populate months and years
   */
  private assignDateValues(): void {
    this.months = PaymentCardService.getMonths();
    this.years = PaymentCardService.getYears();
  }

  /**
   * Build reactive form
   */
  private buildForm(): void {
    this.ccForm = this._fb.group(
      {
        cardNumber: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(12),
            Validators.maxLength(19),
            CardValidator.numbersOnly,
            CardValidator.checksum,
          ]),
        ],
        cardHolder: ['', Validators.compose([Validators.required, Validators.maxLength(22)])],
        expirationMonth: ['', Validators.required],
        expirationYear: ['', Validators.required],
        ccv: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(4),
            CardValidator.numbersOnly,
          ]),
        ],
      },
      {
        validator: CardValidator.expiration,
      }
    );
  }

  /**
   * Returns payment card type based on payment card number
   */
  public getCardType(ccNum: string): string | null {
    return PaymentCardService.getCardType(ccNum);
  }

  /**
   * Callback function that emits payment card details after user clicks submit, or press enter
   */
  public emitSavedCard(): void {
    const cardDetails = this.ccForm.value;
    cardDetails.name = this.loginService.getFirstUserName();
    cardDetails.email = this.loginService.getLoginUserEmail();
    cardDetails.userId = this.loginService.getLoginUserId();
    cardDetails.amount = 19.97;
    this.userService.payment(cardDetails).subscribe((data) => {
      this.modalReference.close();
      if (data.status == "success") {

        this.loader.startLoading();
        const userId = this.loginService.getLoginUserId();
        this.userService.buyPlugin({ userId: userId }).subscribe((result) => {
          this.loader.stopLoading();
          if (result.status === 'success') {
            result.record.authToken = result.record.accessToken;
            this.loginService.setLoginUserDetail(result.record);
            alert("Payment done your transaction id is:" + data.record)
            this.ngOnInit();
          }
        })

      }
      if (data.status == "error") {
        alert("Payment Failed:" + data.message)

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
