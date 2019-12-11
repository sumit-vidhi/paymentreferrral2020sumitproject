(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-user-module"],{

/***/ "./src/app/modules/user/edit-profile/edit-profile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user/edit-profile/edit-profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-title mb-5\">Edit Profile</h2>\r\n<span style='color:red' *ngIf='message'>{{message}}</span>\r\n<span style='color:red' *ngIf='!message'>Referral Url::{{referral}}</span>\r\n<form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"card mt-5\">\r\n    <div class=\"card-header\">\r\n      <h5>Billing Address</h5>\r\n    </div>\r\n   \r\n    <div class=\"card-body\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"first_name\">Email</label>\r\n            <div  class=\"form-control\">  {{email}}</div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"first_name\">Username</label>\r\n            <div  class=\"form-control\">  {{userName}}</div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"first_name\">First Name</label>\r\n            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"last_name\">Last Name</label>\r\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"address_1\">Address 1</label>\r\n            <input type=\"text\" formControlName=\"address\" class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\r\n            <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.address.errors.required\">Address is required</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"address_2\">Address 2</label>\r\n            <input type=\"text\" formControlName=\"address2\" class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.address2.errors }\" />\r\n            <div *ngIf=\"submitted && f.address2.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.address2.errors.required\">Address2 is required</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"city\">City</label>\r\n            <input type=\"text\" formControlName=\"city\" class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" />\r\n            <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.city.errors.required\">City is required</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <input type=\"text\" formControlName=\"state\" class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" />\r\n            <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.state.errors.required\">State is required</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"postal_code\">Postal Code</label>\r\n            <input type=\"text\" formControlName=\"postalCode\" class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.postalCode.errors }\" />\r\n            <div *ngIf=\"submitted && f.postalCode.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.postalCode.errors.required\">Postal Code is required</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"country\">Country</label>\r\n            <select formControlName=\"country\" id=\"country\" class=\"form-control\">\r\n              <option value=\"AF\">Afghanistan</option>\r\n              <option value=\"AX\">Aland Islands</option>\r\n              <option value=\"AL\">Albania</option>\r\n              <option value=\"DZ\">Algeria</option>\r\n              <option value=\"AS\">American Samoa</option>\r\n              <option value=\"AD\">Andorra</option>\r\n              <option value=\"AO\">Angola</option>\r\n              <option value=\"AI\">Anguilla</option>\r\n              <option value=\"AQ\">Antarctica</option>\r\n              <option value=\"AG\">Antigua and Barbuda</option>\r\n              <option value=\"AR\">Argentina</option>\r\n              <option value=\"AM\">Armenia</option>\r\n              <option value=\"AW\">Aruba</option>\r\n              <option value=\"AU\">Australia</option>\r\n              <option value=\"AT\">Austria</option>\r\n              <option value=\"AZ\">Azerbaijan</option>\r\n              <option value=\"BS\">Bahamas</option>\r\n              <option value=\"BH\">Bahrain</option>\r\n              <option value=\"BD\">Bangladesh</option>\r\n              <option value=\"BB\">Barbados</option>\r\n              <option value=\"BY\">Belarus</option>\r\n              <option value=\"BE\">Belgium</option>\r\n              <option value=\"BZ\">Belize</option>\r\n              <option value=\"BJ\">Benin</option>\r\n              <option value=\"BM\">Bermuda</option>\r\n              <option value=\"BT\">Bhutan</option>\r\n              <option value=\"BO\">Bolivia</option>\r\n              <option value=\"BA\">Bosnia and Herzegovina</option>\r\n              <option value=\"BW\">Botswana</option>\r\n              <option value=\"BV\">Bouvet Island</option>\r\n              <option value=\"BR\">Brazil</option>\r\n              <option value=\"IO\">British Indian Ocean Territory</option>\r\n              <option value=\"VG\">British Virgin Islands</option>\r\n              <option value=\"BN\">Brunei</option>\r\n              <option value=\"BG\">Bulgaria</option>\r\n              <option value=\"BF\">Burkina Faso</option>\r\n              <option value=\"BI\">Burundi</option>\r\n              <option value=\"KH\">Cambodia</option>\r\n              <option value=\"CM\">Cameroon</option>\r\n              <option value=\"CA\">Canada</option>\r\n              <option value=\"CV\">Cape Verde</option>\r\n              <option value=\"KY\">Cayman Islands</option>\r\n              <option value=\"CF\">Central African Republic</option>\r\n              <option value=\"TD\">Chad</option>\r\n              <option value=\"CL\">Chile</option>\r\n              <option value=\"CN\">China</option>\r\n              <option value=\"CX\">Christmas Island</option>\r\n              <option value=\"CC\">Cocos (Keeling) Islands</option>\r\n              <option value=\"CO\">Colombia</option>\r\n              <option value=\"KM\">Comoros</option>\r\n              <option value=\"CG\">Congo (Brazzaville)</option>\r\n              <option value=\"CD\">Congo (Kinshasa)</option>\r\n              <option value=\"CK\">Cook Islands</option>\r\n              <option value=\"CR\">Costa Rica</option>\r\n              <option value=\"HR\">Croatia</option>\r\n              <option value=\"CU\">Cuba</option>\r\n              <option value=\"CY\">Cyprus</option>\r\n              <option value=\"CZ\">Czech Republic</option>\r\n              <option value=\"DK\">Denmark</option>\r\n              <option value=\"DJ\">Djibouti</option>\r\n              <option value=\"DM\">Dominica</option>\r\n              <option value=\"DO\">Dominican Republic</option>\r\n              <option value=\"EC\">Ecuador</option>\r\n              <option value=\"EG\">Egypt</option>\r\n              <option value=\"SV\">El Salvador</option>\r\n              <option value=\"GQ\">Equatorial Guinea</option>\r\n              <option value=\"ER\">Eritrea</option>\r\n              <option value=\"EE\">Estonia</option>\r\n              <option value=\"ET\">Ethiopia</option>\r\n              <option value=\"FK\">Falkland Islands</option>\r\n              <option value=\"FO\">Faroe Islands</option>\r\n              <option value=\"FJ\">Fiji</option>\r\n              <option value=\"FI\">Finland</option>\r\n              <option value=\"FR\">France</option>\r\n              <option value=\"GF\">French Guiana</option>\r\n              <option value=\"PF\">French Polynesia</option>\r\n              <option value=\"TF\">French Southern Territories</option>\r\n              <option value=\"GA\">Gabon</option>\r\n              <option value=\"GM\">Gambia</option>\r\n              <option value=\"GE\">Georgia</option>\r\n              <option value=\"DE\">Germany</option>\r\n              <option value=\"GH\">Ghana</option>\r\n              <option value=\"GI\">Gibraltar</option>\r\n              <option value=\"GR\">Greece</option>\r\n              <option value=\"GL\">Greenland</option>\r\n              <option value=\"GD\">Grenada</option>\r\n              <option value=\"GP\">Guadeloupe</option>\r\n              <option value=\"GU\">Guam</option>\r\n              <option value=\"GT\">Guatemala</option>\r\n              <option value=\"GG\">Guernsey</option>\r\n              <option value=\"GN\">Guinea</option>\r\n              <option value=\"GW\">Guinea-Bissau</option>\r\n              <option value=\"GY\">Guyana</option>\r\n              <option value=\"HT\">Haiti</option>\r\n              <option value=\"HM\">Heard Island and McDonald Islands</option>\r\n              <option value=\"HN\">Honduras</option>\r\n              <option value=\"HK\">Hong Kong S.A.R., China</option>\r\n              <option value=\"HU\">Hungary</option>\r\n              <option value=\"IS\">Iceland</option>\r\n              <option value=\"IN\">India</option>\r\n              <option value=\"ID\">Indonesia</option>\r\n              <option value=\"IR\">Iran</option>\r\n              <option value=\"IQ\">Iraq</option>\r\n              <option value=\"IE\">Ireland</option>\r\n              <option value=\"IM\">Isle of Man</option>\r\n              <option value=\"IL\">Israel</option>\r\n              <option value=\"IT\">Italy</option>\r\n              <option value=\"CI\">Ivory Coast</option>\r\n              <option value=\"JM\">Jamaica</option>\r\n              <option value=\"JP\">Japan</option>\r\n              <option value=\"JE\">Jersey</option>\r\n              <option value=\"JO\">Jordan</option>\r\n              <option value=\"KZ\">Kazakhstan</option>\r\n              <option value=\"KE\">Kenya</option>\r\n              <option value=\"KI\">Kiribati</option>\r\n              <option value=\"KW\">Kuwait</option>\r\n              <option value=\"KG\">Kyrgyzstan</option>\r\n              <option value=\"LA\">Laos</option>\r\n              <option value=\"LV\">Latvia</option>\r\n              <option value=\"LB\">Lebanon</option>\r\n              <option value=\"LS\">Lesotho</option>\r\n              <option value=\"LR\">Liberia</option>\r\n              <option value=\"LY\">Libya</option>\r\n              <option value=\"LI\">Liechtenstein</option>\r\n              <option value=\"LT\">Lithuania</option>\r\n              <option value=\"LU\">Luxembourg</option>\r\n              <option value=\"MO\">Macao S.A.R., China</option>\r\n              <option value=\"MK\">Macedonia</option>\r\n              <option value=\"MG\">Madagascar</option>\r\n              <option value=\"MW\">Malawi</option>\r\n              <option value=\"MY\">Malaysia</option>\r\n              <option value=\"MV\">Maldives</option>\r\n              <option value=\"ML\">Mali</option>\r\n              <option value=\"MT\">Malta</option>\r\n              <option value=\"MH\">Marshall Islands</option>\r\n              <option value=\"MQ\">Martinique</option>\r\n              <option value=\"MR\">Mauritania</option>\r\n              <option value=\"MU\">Mauritius</option>\r\n              <option value=\"YT\">Mayotte</option>\r\n              <option value=\"MX\">Mexico</option>\r\n              <option value=\"FM\">Micronesia</option>\r\n              <option value=\"MD\">Moldova</option>\r\n              <option value=\"MC\">Monaco</option>\r\n              <option value=\"MN\">Mongolia</option>\r\n              <option value=\"ME\">Montenegro</option>\r\n              <option value=\"MS\">Montserrat</option>\r\n              <option value=\"MA\">Morocco</option>\r\n              <option value=\"MZ\">Mozambique</option>\r\n              <option value=\"MM\">Myanmar</option>\r\n              <option value=\"NA\">Namibia</option>\r\n              <option value=\"NR\">Nauru</option>\r\n              <option value=\"NP\">Nepal</option>\r\n              <option value=\"NL\">Netherlands</option>\r\n              <option value=\"AN\">Netherlands Antilles</option>\r\n              <option value=\"NC\">New Caledonia</option>\r\n              <option value=\"NZ\">New Zealand</option>\r\n              <option value=\"NI\">Nicaragua</option>\r\n              <option value=\"NE\">Niger</option>\r\n              <option value=\"NG\">Nigeria</option>\r\n              <option value=\"NU\">Niue</option>\r\n              <option value=\"NF\">Norfolk Island</option>\r\n              <option value=\"KP\">North Korea</option>\r\n              <option value=\"MP\">Northern Mariana Islands</option>\r\n              <option value=\"NO\">Norway</option>\r\n              <option value=\"OM\">Oman</option>\r\n              <option value=\"PK\">Pakistan</option>\r\n              <option value=\"PW\">Palau</option>\r\n              <option value=\"PS\">Palestinian Territory</option>\r\n              <option value=\"PA\">Panama</option>\r\n              <option value=\"PG\">Papua New Guinea</option>\r\n              <option value=\"PY\">Paraguay</option>\r\n              <option value=\"PE\">Peru</option>\r\n              <option value=\"PH\">Philippines</option>\r\n              <option value=\"PN\">Pitcairn</option>\r\n              <option value=\"PL\">Poland</option>\r\n              <option value=\"PT\">Portugal</option>\r\n              <option value=\"PR\">Puerto Rico</option>\r\n              <option value=\"QA\">Qatar</option>\r\n              <option value=\"RE\">Reunion</option>\r\n              <option value=\"RO\">Romania</option>\r\n              <option value=\"RU\">Russia</option>\r\n              <option value=\"RW\">Rwanda</option>\r\n              <option value=\"BL\">Saint Barthelemy</option>\r\n              <option value=\"SH\">Saint Helena</option>\r\n              <option value=\"KN\">Saint Kitts and Nevis</option>\r\n              <option value=\"LC\">Saint Lucia</option>\r\n              <option value=\"MF\">Saint Martin (French part)</option>\r\n              <option value=\"PM\">Saint Pierre and Miquelon</option>\r\n              <option value=\"VC\">Saint Vincent and the Grenadines</option>\r\n              <option value=\"WS\">Samoa</option>\r\n              <option value=\"SM\">San Marino</option>\r\n              <option value=\"ST\">Sao Tome and Principe</option>\r\n              <option value=\"SA\">Saudi Arabia</option>\r\n              <option value=\"SN\">Senegal</option>\r\n              <option value=\"RS\">Serbia</option>\r\n              <option value=\"SC\">Seychelles</option>\r\n              <option value=\"SL\">Sierra Leone</option>\r\n              <option value=\"SG\">Singapore</option>\r\n              <option value=\"SK\">Slovakia</option>\r\n              <option value=\"SI\">Slovenia</option>\r\n              <option value=\"SB\">Solomon Islands</option>\r\n              <option value=\"SO\">Somalia</option>\r\n              <option value=\"ZA\">South Africa</option>\r\n              <option value=\"GS\">South Georgia and the South Sandwich Islands</option>\r\n              <option value=\"KR\">South Korea</option>\r\n              <option value=\"ES\">Spain</option>\r\n              <option value=\"LK\">Sri Lanka</option>\r\n              <option value=\"SD\">Sudan</option>\r\n              <option value=\"SR\">Suriname</option>\r\n              <option value=\"SJ\">Svalbard and Jan Mayen</option>\r\n              <option value=\"SZ\">Swaziland</option>\r\n              <option value=\"SE\">Sweden</option>\r\n              <option value=\"CH\">Switzerland</option>\r\n              <option value=\"SY\">Syria</option>\r\n              <option value=\"TW\">Taiwan</option>\r\n              <option value=\"TJ\">Tajikistan</option>\r\n              <option value=\"TZ\">Tanzania</option>\r\n              <option value=\"TH\">Thailand</option>\r\n              <option value=\"TL\">Timor-Leste</option>\r\n              <option value=\"TG\">Togo</option>\r\n              <option value=\"TK\">Tokelau</option>\r\n              <option value=\"TO\">Tonga</option>\r\n              <option value=\"TT\">Trinidad and Tobago</option>\r\n              <option value=\"TN\">Tunisia</option>\r\n              <option value=\"TR\">Turkey</option>\r\n              <option value=\"TM\">Turkmenistan</option>\r\n              <option value=\"TC\">Turks and Caicos Islands</option>\r\n              <option value=\"TV\">Tuvalu</option>\r\n              <option value=\"VI\">U.S. Virgin Islands</option>\r\n              <option value=\"USAF\">US Armed Forces</option>\r\n              <option value=\"UG\">Uganda</option>\r\n              <option value=\"UA\">Ukraine</option>\r\n              <option value=\"AE\">United Arab Emirates</option>\r\n              <option value=\"GB\">United Kingdom</option>\r\n              <option value=\"US\" selected=\"selected\">United States</option>\r\n              <option value=\"UM\">United States Minor Outlying Islands</option>\r\n              <option value=\"UY\">Uruguay</option>\r\n              <option value=\"UZ\">Uzbekistan</option>\r\n              <option value=\"VU\">Vanuatu</option>\r\n              <option value=\"VA\">Vatican</option>\r\n              <option value=\"VE\">Venezuela</option>\r\n              <option value=\"VN\">Vietnam</option>\r\n              <option value=\"WF\">Wallis and Futuna</option>\r\n              <option value=\"EH\">Western Sahara</option>\r\n              <option value=\"YE\">Yemen</option>\r\n              <option value=\"ZM\">Zambia</option>\r\n              <option value=\"ZW\">Zimbabwe</option>\r\n            </select>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"phone\">Phone</label>\r\n            <input type=\"text\" formControlName=\"phone\" class=\"form-control\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\r\n            <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.phone.errors.required\">Phone is required</div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"mt-4\">\r\n    <button class=\"btn btn-lg btn-primary btn-submit btn-radius\">Complete Account Verification</button>\r\n  </div>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/modules/user/edit-profile/edit-profile.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user/edit-profile/edit-profile.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/user/edit-profile/edit-profile.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/edit-profile/edit-profile.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/user/services/user.service */ "./src/app/modules/user/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/loader-service */ "./src/app/core/services/loader-service.ts");
/* harmony import */ var _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/jwt-auth.service */ "./src/app/core/services/jwt-auth.service.ts");







var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(formBuilder, userService, router, loader, loginService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.loader = loader;
        this.loginService = loginService;
        this.submitted = false;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.email = this.getEmail();
        this.userName = this.getUserName();
        var status = this.loginService.getUserStatus();
        if (status === '1') {
            this.message = "";
            var formdata = {};
            this.userService.getProfile(formdata).subscribe(function (result) {
                if (result.status === 'success') {
                    delete result.record.id;
                    delete result.record.user_id;
                    _this.editForm.setValue(result.record);
                }
            });
            this.referral = this.getUrl();
        }
        else {
            this.message = "Your account is pending please update your profile";
        }
    };
    Object.defineProperty(EditProfileComponent.prototype, "f", {
        get: function () { return this.editForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditProfileComponent.prototype.getUrl = function () {
        var _isDev = window.location.port.indexOf('4200') > -1;
        var protocol = window.location.protocol;
        var host = window.location.host;
        return _isDev ? 'http://localhost:4200/auth/signup?referralCode=' + this.getReferralCode() : protocol + "//" + host + '/auth/signup?referralCode=' + this.getReferralCode();
    };
    EditProfileComponent.prototype.getEmail = function () {
        return this.loginService.getLoginUserEmail();
    };
    EditProfileComponent.prototype.getReferralCode = function () {
        return this.loginService.getRefferalCode();
    };
    EditProfileComponent.prototype.getUserName = function () {
        return this.loginService.getLoginUserName();
    };
    EditProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editForm.invalid) {
            return;
        }
        if (this.loginService.getUserStatus() === '1') {
            var formdata = this.editForm.value;
            formdata.updateStatus = this.loginService.getUserStatus();
            formdata.userId = this.loginService.getLoginUserId();
            this.loader.startLoading();
            this.userService.editProfile(formdata).subscribe(function (result) {
                _this.loader.stopLoading();
                if (result.status === 'success') {
                    result.record.authToken = result.record.accessToken;
                    _this.loginService.setLoginUserDetail(result.record);
                }
            });
        }
        else {
            var formdata = this.editForm.value;
            formdata.updateStatus = this.loginService.getUserStatus();
            formdata.userId = this.loginService.getLoginUserId();
            this.loader.startLoading();
            this.userService.editProfile(formdata).subscribe(function (result) {
                _this.loader.stopLoading();
                if (result.status === 'success') {
                    result.record.authToken = result.record.accessToken;
                    _this.loginService.setLoginUserDetail(result.record);
                }
            });
        }
    };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/modules/user/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/app/modules/user/edit-profile/edit-profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_6__["JWTAuthService"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/services/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/user/services/user.service.ts ***!
  \*******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_common_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/common-http.service */ "./src/app/core/services/common-http.service.ts");
/* harmony import */ var _configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @configs/app-api-urls.config */ "./src/app/configs/app-api-urls.config.ts");
/**
 * Creating a new instance of AuthService
 * @class AuthService
 * @description
 * This is auth service, responsible for managing the Authentication related task.
 */




var UserService = /** @class */ (function () {
    function UserService(commonHttp) {
        this.commonHttp = commonHttp;
    }
    UserService.prototype.editProfile = function (data) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.editProfile, data);
    };
    UserService.prototype.getProfile = function (data) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.getdata, data);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/modules/user/user-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/user/user-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/modules/user/edit-profile/edit-profile.component.ts");
/* harmony import */ var _core_gaurds_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/gaurds/auth-guard.service */ "./src/app/core/gaurds/auth-guard.service.ts");
/* harmony import */ var _modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/user/services/user.service */ "./src/app/modules/user/services/user.service.ts");






var routes = [
    {
        path: '', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__["EditProfileComponent"],
        data: { title: 'My account' },
        canActivate: [_core_gaurds_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule.providers = [
        _modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
    ];
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/user/user.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/user/user.module.ts ***!
  \*********************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/modules/user/edit-profile/edit-profile.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/modules/user/user-routing.module.ts");






var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__["EditProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"].providers]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-user-user-module.js.map