(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-user-module"],{

/***/ "./src/app/modules/user/change-password/change-password.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/change-password/change-password.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-header></app-user-header>\r\n\r\n<div class=\"container mt-4 mb-5\">\r\n\r\n  <app-user-nav></app-user-nav>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/user/change-password/change-password.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/change-password/change-password.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/user/change-password/change-password.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user/change-password/change-password.component.ts ***!
  \***************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/modules/user/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/modules/user/change-password/change-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/edit-profile/edit-profile.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user/edit-profile/edit-profile.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-header></app-user-header>\r\n\r\n<div class=\"container mt-4 mb-5\">\r\n\r\n  <app-user-nav></app-user-nav>\r\n\r\n  <!-- <div class=\"referral-link alert alert-secondary my-4\" *ngIf='message'>{{message}}</div>\r\n  <a class=\"referral-link alert alert-secondary my-4 d-flex justify-content-between\" href=\"javascript:void(0)\" *ngIf='!message'>\r\n      <span>Referral Url : {{referral}}</span>\r\n        <svg \r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n        width=\"21px\" height=\"20px\">\r\n        <path fill-rule=\"evenodd\"  fill=\"#555\"\r\n        d=\"M18.645,7.956 L14.400,12.200 C13.802,12.798 13.054,13.222 12.235,13.427 L12.198,13.427 L12.005,13.467 L11.898,13.487 L11.668,13.521 L11.555,13.521 C11.468,13.521 11.391,13.537 11.318,13.541 L11.118,13.564 L11.098,13.564 L10.864,13.564 C10.698,13.557 10.532,13.542 10.367,13.517 C10.231,13.494 10.097,13.467 9.964,13.434 L9.767,13.381 C9.697,13.361 9.624,13.337 9.554,13.311 C9.484,13.284 9.410,13.261 9.340,13.231 C9.270,13.201 9.200,13.174 9.130,13.141 C8.634,12.911 8.182,12.595 7.796,12.207 C7.526,11.936 7.385,11.562 7.409,11.180 C7.431,10.858 7.568,10.555 7.796,10.327 C8.323,9.831 9.144,9.831 9.670,10.327 C10.452,11.107 11.717,11.107 12.499,10.327 L13.592,9.240 L13.619,9.210 L16.747,6.085 C17.529,5.304 17.529,4.036 16.747,3.255 C15.966,2.473 14.698,2.473 13.916,3.255 L11.405,5.762 C11.310,5.858 11.166,5.887 11.041,5.835 C10.365,5.559 9.641,5.417 8.910,5.419 L8.787,5.419 C8.650,5.421 8.526,5.341 8.473,5.215 C8.419,5.090 8.447,4.945 8.543,4.848 L12.042,1.354 C13.865,-0.469 16.822,-0.469 18.645,1.354 C20.469,3.177 20.469,6.133 18.645,7.956 ZM11.428,7.156 C11.712,7.336 11.975,7.547 12.212,7.786 C12.482,8.057 12.623,8.431 12.599,8.813 C12.576,9.132 12.438,9.433 12.212,9.660 C11.685,10.155 10.864,10.155 10.338,9.660 C9.556,8.880 8.291,8.880 7.509,9.660 L3.250,13.914 C2.469,14.696 2.469,15.963 3.250,16.745 C4.032,17.527 5.300,17.527 6.082,16.745 L8.600,14.224 C8.695,14.128 8.839,14.099 8.963,14.151 C9.641,14.426 10.366,14.567 11.098,14.564 L11.231,14.564 C11.415,14.563 11.566,14.712 11.567,14.896 C11.567,14.985 11.532,15.071 11.468,15.134 L7.966,18.635 C7.092,19.510 5.905,20.000 4.668,19.996 C2.089,19.994 0.000,17.903 0.002,15.325 C0.002,14.089 0.493,12.905 1.366,12.030 L5.608,7.786 C6.483,6.909 7.671,6.417 8.910,6.419 C9.803,6.419 10.676,6.675 11.428,7.156 Z\"/>\r\n        </svg>\r\n    </a> -->\r\n\r\n  <h2 class=\"page-title mt-3\">Edit Profile</h2>\r\n  \r\n  <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\">\r\n        <h5>Billing Address</h5>\r\n      </div>\r\n    \r\n      <div class=\"card-body\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"first_name\">Email</label>\r\n              <div  class=\"form-control\">  {{email}}</div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"first_name\">Username</label>\r\n              <div  class=\"form-control\">  {{userName}}</div>\r\n\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"first_name\">First Name</label>\r\n              <input type=\"text\" formControlName=\"firstName\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n              <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"last_name\">Last Name</label>\r\n              <input type=\"text\" formControlName=\"lastName\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n              <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"address_1\">Address 1</label>\r\n              <input type=\"text\" formControlName=\"address\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\r\n              <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.address.errors.required\">Address is required</div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"address_2\">Address 2</label>\r\n              <input type=\"text\" formControlName=\"address2\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.address2.errors }\" />\r\n              <div *ngIf=\"submitted && f.address2.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.address2.errors.required\">Address2 is required</div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"city\">City</label>\r\n              <input type=\"text\" formControlName=\"city\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" />\r\n              <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.city.errors.required\">City is required</div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"state\">State</label>\r\n              <input type=\"text\" formControlName=\"state\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" />\r\n              <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.state.errors.required\">State is required</div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"postal_code\">Postal Code</label>\r\n              <input type=\"text\" formControlName=\"postalCode\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.postalCode.errors }\" />\r\n              <div *ngIf=\"submitted && f.postalCode.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.postalCode.errors.required\">Postal Code is required</div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"country\">Country</label>\r\n              <select formControlName=\"country\" id=\"country\" class=\"form-control\">\r\n                <option value=\"AF\">Afghanistan</option>\r\n                <option value=\"AX\">Aland Islands</option>\r\n                <option value=\"AL\">Albania</option>\r\n                <option value=\"DZ\">Algeria</option>\r\n                <option value=\"AS\">American Samoa</option>\r\n                <option value=\"AD\">Andorra</option>\r\n                <option value=\"AO\">Angola</option>\r\n                <option value=\"AI\">Anguilla</option>\r\n                <option value=\"AQ\">Antarctica</option>\r\n                <option value=\"AG\">Antigua and Barbuda</option>\r\n                <option value=\"AR\">Argentina</option>\r\n                <option value=\"AM\">Armenia</option>\r\n                <option value=\"AW\">Aruba</option>\r\n                <option value=\"AU\">Australia</option>\r\n                <option value=\"AT\">Austria</option>\r\n                <option value=\"AZ\">Azerbaijan</option>\r\n                <option value=\"BS\">Bahamas</option>\r\n                <option value=\"BH\">Bahrain</option>\r\n                <option value=\"BD\">Bangladesh</option>\r\n                <option value=\"BB\">Barbados</option>\r\n                <option value=\"BY\">Belarus</option>\r\n                <option value=\"BE\">Belgium</option>\r\n                <option value=\"BZ\">Belize</option>\r\n                <option value=\"BJ\">Benin</option>\r\n                <option value=\"BM\">Bermuda</option>\r\n                <option value=\"BT\">Bhutan</option>\r\n                <option value=\"BO\">Bolivia</option>\r\n                <option value=\"BA\">Bosnia and Herzegovina</option>\r\n                <option value=\"BW\">Botswana</option>\r\n                <option value=\"BV\">Bouvet Island</option>\r\n                <option value=\"BR\">Brazil</option>\r\n                <option value=\"IO\">British Indian Ocean Territory</option>\r\n                <option value=\"VG\">British Virgin Islands</option>\r\n                <option value=\"BN\">Brunei</option>\r\n                <option value=\"BG\">Bulgaria</option>\r\n                <option value=\"BF\">Burkina Faso</option>\r\n                <option value=\"BI\">Burundi</option>\r\n                <option value=\"KH\">Cambodia</option>\r\n                <option value=\"CM\">Cameroon</option>\r\n                <option value=\"CA\">Canada</option>\r\n                <option value=\"CV\">Cape Verde</option>\r\n                <option value=\"KY\">Cayman Islands</option>\r\n                <option value=\"CF\">Central African Republic</option>\r\n                <option value=\"TD\">Chad</option>\r\n                <option value=\"CL\">Chile</option>\r\n                <option value=\"CN\">China</option>\r\n                <option value=\"CX\">Christmas Island</option>\r\n                <option value=\"CC\">Cocos (Keeling) Islands</option>\r\n                <option value=\"CO\">Colombia</option>\r\n                <option value=\"KM\">Comoros</option>\r\n                <option value=\"CG\">Congo (Brazzaville)</option>\r\n                <option value=\"CD\">Congo (Kinshasa)</option>\r\n                <option value=\"CK\">Cook Islands</option>\r\n                <option value=\"CR\">Costa Rica</option>\r\n                <option value=\"HR\">Croatia</option>\r\n                <option value=\"CU\">Cuba</option>\r\n                <option value=\"CY\">Cyprus</option>\r\n                <option value=\"CZ\">Czech Republic</option>\r\n                <option value=\"DK\">Denmark</option>\r\n                <option value=\"DJ\">Djibouti</option>\r\n                <option value=\"DM\">Dominica</option>\r\n                <option value=\"DO\">Dominican Republic</option>\r\n                <option value=\"EC\">Ecuador</option>\r\n                <option value=\"EG\">Egypt</option>\r\n                <option value=\"SV\">El Salvador</option>\r\n                <option value=\"GQ\">Equatorial Guinea</option>\r\n                <option value=\"ER\">Eritrea</option>\r\n                <option value=\"EE\">Estonia</option>\r\n                <option value=\"ET\">Ethiopia</option>\r\n                <option value=\"FK\">Falkland Islands</option>\r\n                <option value=\"FO\">Faroe Islands</option>\r\n                <option value=\"FJ\">Fiji</option>\r\n                <option value=\"FI\">Finland</option>\r\n                <option value=\"FR\">France</option>\r\n                <option value=\"GF\">French Guiana</option>\r\n                <option value=\"PF\">French Polynesia</option>\r\n                <option value=\"TF\">French Southern Territories</option>\r\n                <option value=\"GA\">Gabon</option>\r\n                <option value=\"GM\">Gambia</option>\r\n                <option value=\"GE\">Georgia</option>\r\n                <option value=\"DE\">Germany</option>\r\n                <option value=\"GH\">Ghana</option>\r\n                <option value=\"GI\">Gibraltar</option>\r\n                <option value=\"GR\">Greece</option>\r\n                <option value=\"GL\">Greenland</option>\r\n                <option value=\"GD\">Grenada</option>\r\n                <option value=\"GP\">Guadeloupe</option>\r\n                <option value=\"GU\">Guam</option>\r\n                <option value=\"GT\">Guatemala</option>\r\n                <option value=\"GG\">Guernsey</option>\r\n                <option value=\"GN\">Guinea</option>\r\n                <option value=\"GW\">Guinea-Bissau</option>\r\n                <option value=\"GY\">Guyana</option>\r\n                <option value=\"HT\">Haiti</option>\r\n                <option value=\"HM\">Heard Island and McDonald Islands</option>\r\n                <option value=\"HN\">Honduras</option>\r\n                <option value=\"HK\">Hong Kong S.A.R., China</option>\r\n                <option value=\"HU\">Hungary</option>\r\n                <option value=\"IS\">Iceland</option>\r\n                <option value=\"IN\">India</option>\r\n                <option value=\"ID\">Indonesia</option>\r\n                <option value=\"IR\">Iran</option>\r\n                <option value=\"IQ\">Iraq</option>\r\n                <option value=\"IE\">Ireland</option>\r\n                <option value=\"IM\">Isle of Man</option>\r\n                <option value=\"IL\">Israel</option>\r\n                <option value=\"IT\">Italy</option>\r\n                <option value=\"CI\">Ivory Coast</option>\r\n                <option value=\"JM\">Jamaica</option>\r\n                <option value=\"JP\">Japan</option>\r\n                <option value=\"JE\">Jersey</option>\r\n                <option value=\"JO\">Jordan</option>\r\n                <option value=\"KZ\">Kazakhstan</option>\r\n                <option value=\"KE\">Kenya</option>\r\n                <option value=\"KI\">Kiribati</option>\r\n                <option value=\"KW\">Kuwait</option>\r\n                <option value=\"KG\">Kyrgyzstan</option>\r\n                <option value=\"LA\">Laos</option>\r\n                <option value=\"LV\">Latvia</option>\r\n                <option value=\"LB\">Lebanon</option>\r\n                <option value=\"LS\">Lesotho</option>\r\n                <option value=\"LR\">Liberia</option>\r\n                <option value=\"LY\">Libya</option>\r\n                <option value=\"LI\">Liechtenstein</option>\r\n                <option value=\"LT\">Lithuania</option>\r\n                <option value=\"LU\">Luxembourg</option>\r\n                <option value=\"MO\">Macao S.A.R., China</option>\r\n                <option value=\"MK\">Macedonia</option>\r\n                <option value=\"MG\">Madagascar</option>\r\n                <option value=\"MW\">Malawi</option>\r\n                <option value=\"MY\">Malaysia</option>\r\n                <option value=\"MV\">Maldives</option>\r\n                <option value=\"ML\">Mali</option>\r\n                <option value=\"MT\">Malta</option>\r\n                <option value=\"MH\">Marshall Islands</option>\r\n                <option value=\"MQ\">Martinique</option>\r\n                <option value=\"MR\">Mauritania</option>\r\n                <option value=\"MU\">Mauritius</option>\r\n                <option value=\"YT\">Mayotte</option>\r\n                <option value=\"MX\">Mexico</option>\r\n                <option value=\"FM\">Micronesia</option>\r\n                <option value=\"MD\">Moldova</option>\r\n                <option value=\"MC\">Monaco</option>\r\n                <option value=\"MN\">Mongolia</option>\r\n                <option value=\"ME\">Montenegro</option>\r\n                <option value=\"MS\">Montserrat</option>\r\n                <option value=\"MA\">Morocco</option>\r\n                <option value=\"MZ\">Mozambique</option>\r\n                <option value=\"MM\">Myanmar</option>\r\n                <option value=\"NA\">Namibia</option>\r\n                <option value=\"NR\">Nauru</option>\r\n                <option value=\"NP\">Nepal</option>\r\n                <option value=\"NL\">Netherlands</option>\r\n                <option value=\"AN\">Netherlands Antilles</option>\r\n                <option value=\"NC\">New Caledonia</option>\r\n                <option value=\"NZ\">New Zealand</option>\r\n                <option value=\"NI\">Nicaragua</option>\r\n                <option value=\"NE\">Niger</option>\r\n                <option value=\"NG\">Nigeria</option>\r\n                <option value=\"NU\">Niue</option>\r\n                <option value=\"NF\">Norfolk Island</option>\r\n                <option value=\"KP\">North Korea</option>\r\n                <option value=\"MP\">Northern Mariana Islands</option>\r\n                <option value=\"NO\">Norway</option>\r\n                <option value=\"OM\">Oman</option>\r\n                <option value=\"PK\">Pakistan</option>\r\n                <option value=\"PW\">Palau</option>\r\n                <option value=\"PS\">Palestinian Territory</option>\r\n                <option value=\"PA\">Panama</option>\r\n                <option value=\"PG\">Papua New Guinea</option>\r\n                <option value=\"PY\">Paraguay</option>\r\n                <option value=\"PE\">Peru</option>\r\n                <option value=\"PH\">Philippines</option>\r\n                <option value=\"PN\">Pitcairn</option>\r\n                <option value=\"PL\">Poland</option>\r\n                <option value=\"PT\">Portugal</option>\r\n                <option value=\"PR\">Puerto Rico</option>\r\n                <option value=\"QA\">Qatar</option>\r\n                <option value=\"RE\">Reunion</option>\r\n                <option value=\"RO\">Romania</option>\r\n                <option value=\"RU\">Russia</option>\r\n                <option value=\"RW\">Rwanda</option>\r\n                <option value=\"BL\">Saint Barthelemy</option>\r\n                <option value=\"SH\">Saint Helena</option>\r\n                <option value=\"KN\">Saint Kitts and Nevis</option>\r\n                <option value=\"LC\">Saint Lucia</option>\r\n                <option value=\"MF\">Saint Martin (French part)</option>\r\n                <option value=\"PM\">Saint Pierre and Miquelon</option>\r\n                <option value=\"VC\">Saint Vincent and the Grenadines</option>\r\n                <option value=\"WS\">Samoa</option>\r\n                <option value=\"SM\">San Marino</option>\r\n                <option value=\"ST\">Sao Tome and Principe</option>\r\n                <option value=\"SA\">Saudi Arabia</option>\r\n                <option value=\"SN\">Senegal</option>\r\n                <option value=\"RS\">Serbia</option>\r\n                <option value=\"SC\">Seychelles</option>\r\n                <option value=\"SL\">Sierra Leone</option>\r\n                <option value=\"SG\">Singapore</option>\r\n                <option value=\"SK\">Slovakia</option>\r\n                <option value=\"SI\">Slovenia</option>\r\n                <option value=\"SB\">Solomon Islands</option>\r\n                <option value=\"SO\">Somalia</option>\r\n                <option value=\"ZA\">South Africa</option>\r\n                <option value=\"GS\">South Georgia and the South Sandwich Islands</option>\r\n                <option value=\"KR\">South Korea</option>\r\n                <option value=\"ES\">Spain</option>\r\n                <option value=\"LK\">Sri Lanka</option>\r\n                <option value=\"SD\">Sudan</option>\r\n                <option value=\"SR\">Suriname</option>\r\n                <option value=\"SJ\">Svalbard and Jan Mayen</option>\r\n                <option value=\"SZ\">Swaziland</option>\r\n                <option value=\"SE\">Sweden</option>\r\n                <option value=\"CH\">Switzerland</option>\r\n                <option value=\"SY\">Syria</option>\r\n                <option value=\"TW\">Taiwan</option>\r\n                <option value=\"TJ\">Tajikistan</option>\r\n                <option value=\"TZ\">Tanzania</option>\r\n                <option value=\"TH\">Thailand</option>\r\n                <option value=\"TL\">Timor-Leste</option>\r\n                <option value=\"TG\">Togo</option>\r\n                <option value=\"TK\">Tokelau</option>\r\n                <option value=\"TO\">Tonga</option>\r\n                <option value=\"TT\">Trinidad and Tobago</option>\r\n                <option value=\"TN\">Tunisia</option>\r\n                <option value=\"TR\">Turkey</option>\r\n                <option value=\"TM\">Turkmenistan</option>\r\n                <option value=\"TC\">Turks and Caicos Islands</option>\r\n                <option value=\"TV\">Tuvalu</option>\r\n                <option value=\"VI\">U.S. Virgin Islands</option>\r\n                <option value=\"USAF\">US Armed Forces</option>\r\n                <option value=\"UG\">Uganda</option>\r\n                <option value=\"UA\">Ukraine</option>\r\n                <option value=\"AE\">United Arab Emirates</option>\r\n                <option value=\"GB\">United Kingdom</option>\r\n                <option value=\"US\" selected=\"selected\">United States</option>\r\n                <option value=\"UM\">United States Minor Outlying Islands</option>\r\n                <option value=\"UY\">Uruguay</option>\r\n                <option value=\"UZ\">Uzbekistan</option>\r\n                <option value=\"VU\">Vanuatu</option>\r\n                <option value=\"VA\">Vatican</option>\r\n                <option value=\"VE\">Venezuela</option>\r\n                <option value=\"VN\">Vietnam</option>\r\n                <option value=\"WF\">Wallis and Futuna</option>\r\n                <option value=\"EH\">Western Sahara</option>\r\n                <option value=\"YE\">Yemen</option>\r\n                <option value=\"ZM\">Zambia</option>\r\n                <option value=\"ZW\">Zimbabwe</option>\r\n              </select>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"phone\">Phone</label>\r\n              <input type=\"text\" formControlName=\"phone\" class=\"form-control\"\r\n                [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\r\n              <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.phone.errors.required\">Phone is required</div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mt-4\">\r\n      <button class=\"btn btn-lg btn-primary btn-submit btn-radius\">Complete Account Verification</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n</div>"

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

/***/ "./src/app/modules/user/payment-settings/payment-settings.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/payment-settings/payment-settings.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-header></app-user-header>\r\n\r\n<div class=\"container mt-4 mb-5\">\r\n\r\n  <app-user-nav></app-user-nav>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/user/payment-settings/payment-settings.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/payment-settings/payment-settings.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYXltZW50LXNldHRpbmdzL3BheW1lbnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/user/payment-settings/payment-settings.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/payment-settings/payment-settings.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PaymentSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSettingsComponent", function() { return PaymentSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentSettingsComponent = /** @class */ (function () {
    function PaymentSettingsComponent() {
    }
    PaymentSettingsComponent.prototype.ngOnInit = function () {
    };
    PaymentSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-settings',
            template: __webpack_require__(/*! ./payment-settings.component.html */ "./src/app/modules/user/payment-settings/payment-settings.component.html"),
            styles: [__webpack_require__(/*! ./payment-settings.component.scss */ "./src/app/modules/user/payment-settings/payment-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentSettingsComponent);
    return PaymentSettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/payments/payments.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/payments/payments.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-header></app-user-header>\r\n\r\n<div class=\"container mt-4 mb-5\">\r\n\r\n  <app-user-nav></app-user-nav>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/user/payments/payments.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/payments/payments.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9wYXltZW50cy9wYXltZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/user/payments/payments.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/payments/payments.component.ts ***!
  \*************************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent() {
    }
    PaymentsComponent.prototype.ngOnInit = function () {
    };
    PaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.component.html */ "./src/app/modules/user/payments/payments.component.html"),
            styles: [__webpack_require__(/*! ./payments.component.scss */ "./src/app/modules/user/payments/payments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaymentsComponent);
    return PaymentsComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/referrals/referrals.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/user/referrals/referrals.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-header></app-user-header>\r\n\r\n<div class=\"container mt-4 mb-5\">\r\n\r\n  <app-user-nav></app-user-nav>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/user/referrals/referrals.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/user/referrals/referrals.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci9yZWZlcnJhbHMvcmVmZXJyYWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/user/referrals/referrals.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/referrals/referrals.component.ts ***!
  \***************************************************************/
/*! exports provided: ReferralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralsComponent", function() { return ReferralsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReferralsComponent = /** @class */ (function () {
    function ReferralsComponent() {
    }
    ReferralsComponent.prototype.ngOnInit = function () {
    };
    ReferralsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-referrals',
            template: __webpack_require__(/*! ./referrals.component.html */ "./src/app/modules/user/referrals/referrals.component.html"),
            styles: [__webpack_require__(/*! ./referrals.component.scss */ "./src/app/modules/user/referrals/referrals.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReferralsComponent);
    return ReferralsComponent;
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

/***/ "./src/app/modules/user/user-dashboard/user-dashboard.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user/user-dashboard/user-dashboard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-header></app-user-header>\r\n\r\n<div class=\"container mt-4 mb-5\">\r\n\r\n  <app-user-nav></app-user-nav>\r\n\r\n  <div class=\"referral-link alert alert-secondary my-4\" *ngIf='message'>{{message}}</div>\r\n  <a class=\"referral-link alert alert-secondary my-4 d-flex justify-content-between\" href=\"javascript:void(0)\" *ngIf='!message'>\r\n      <span>Referral Url : http://localhost:4200/auth/signup?referralCode=111111</span>\r\n        <svg \r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n        width=\"21px\" height=\"20px\">\r\n        <path fill-rule=\"evenodd\"  fill=\"#555\"\r\n        d=\"M18.645,7.956 L14.400,12.200 C13.802,12.798 13.054,13.222 12.235,13.427 L12.198,13.427 L12.005,13.467 L11.898,13.487 L11.668,13.521 L11.555,13.521 C11.468,13.521 11.391,13.537 11.318,13.541 L11.118,13.564 L11.098,13.564 L10.864,13.564 C10.698,13.557 10.532,13.542 10.367,13.517 C10.231,13.494 10.097,13.467 9.964,13.434 L9.767,13.381 C9.697,13.361 9.624,13.337 9.554,13.311 C9.484,13.284 9.410,13.261 9.340,13.231 C9.270,13.201 9.200,13.174 9.130,13.141 C8.634,12.911 8.182,12.595 7.796,12.207 C7.526,11.936 7.385,11.562 7.409,11.180 C7.431,10.858 7.568,10.555 7.796,10.327 C8.323,9.831 9.144,9.831 9.670,10.327 C10.452,11.107 11.717,11.107 12.499,10.327 L13.592,9.240 L13.619,9.210 L16.747,6.085 C17.529,5.304 17.529,4.036 16.747,3.255 C15.966,2.473 14.698,2.473 13.916,3.255 L11.405,5.762 C11.310,5.858 11.166,5.887 11.041,5.835 C10.365,5.559 9.641,5.417 8.910,5.419 L8.787,5.419 C8.650,5.421 8.526,5.341 8.473,5.215 C8.419,5.090 8.447,4.945 8.543,4.848 L12.042,1.354 C13.865,-0.469 16.822,-0.469 18.645,1.354 C20.469,3.177 20.469,6.133 18.645,7.956 ZM11.428,7.156 C11.712,7.336 11.975,7.547 12.212,7.786 C12.482,8.057 12.623,8.431 12.599,8.813 C12.576,9.132 12.438,9.433 12.212,9.660 C11.685,10.155 10.864,10.155 10.338,9.660 C9.556,8.880 8.291,8.880 7.509,9.660 L3.250,13.914 C2.469,14.696 2.469,15.963 3.250,16.745 C4.032,17.527 5.300,17.527 6.082,16.745 L8.600,14.224 C8.695,14.128 8.839,14.099 8.963,14.151 C9.641,14.426 10.366,14.567 11.098,14.564 L11.231,14.564 C11.415,14.563 11.566,14.712 11.567,14.896 C11.567,14.985 11.532,15.071 11.468,15.134 L7.966,18.635 C7.092,19.510 5.905,20.000 4.668,19.996 C2.089,19.994 0.000,17.903 0.002,15.325 C0.002,14.089 0.493,12.905 1.366,12.030 L5.608,7.786 C6.483,6.909 7.671,6.417 8.910,6.419 C9.803,6.419 10.676,6.675 11.428,7.156 Z\"/>\r\n        </svg>\r\n    </a>\r\n\r\n  <h5>50 Users are registered after your registration.</h5>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/user/user-dashboard/user-dashboard.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/user/user-dashboard/user-dashboard.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/user/user-dashboard/user-dashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user/user-dashboard/user-dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/modules/user/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.scss */ "./src/app/modules/user/user-dashboard/user-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/user-header/user-header.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/user-header/user-header.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-header text-white\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-6\">\r\n        <div class=\"user-info d-flex align-items-center\">\r\n          <div class=\"user-img mr-4\">\r\n            <img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUVGBgXFxgYFxobGhcYGBcXGBcXGhcYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0dHyUtLS0tLS0tLS0tLS0tLSstLS0tLSstKy0tLS0tKy0tLS0rLS0tLS0tLS0tLS0tLS0tK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgABBwj/xABAEAABAwIDBQYEBAQEBgMAAAABAAIRAyEEMUEFBhJRYRMicYGR8DKhscFCUtHhByOS8RRicoIVFjNjssI1RKL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgIDAAIDAQAAAAAAAAABAhESIQMxQTJREyJxBP/aAAwDAQACEQMRAD8AMxpOqIKV/f1XNHoiNagj2V8vRFAHPyUwxEaAbTHkg5rBClwBc2n4e+iIxnv9kEW0witpjxU6NLwTDGDkgWFL5o7aXRFc3op02HkVQE0RdSbQgZJgtAEuMdbWKocZvhh6VYUy+xkE5gEA5k9YHmoLUUiD0RG0VXu3wwYbJqj/AGgnw6fqlsdvrhmgFjw8OjyGp6RyzugvOxshGn6JDYG81DEnhBDKn5TrHLn+yuG1WElocC4aA88kCxoz91EUbynjRQuzVAH00MgaJlzVDs0QsouamTSCEWwVQJrFF7NNEUs1UHj5oAZWGqgSEZwUSy2SAJGuaE6nJsmS0ckMoF+wPVcicS5ABiMTGi8Yyw9+inwHn5LKogI7WKPD795ozB0QesYmGSosEi6aYy3u6CLGk3yTDWFesZzHvmjtbqqIMpoGNxbKI4nmBeToALk5WACPiXAtc0Oh3Q3HI2ItPuV862/tWuZpvh4a6Q8AtdbKb5wBPUZ6LNqybD3+3lL/AOTTu3ORmDbIjO2ZHNYSphye84k+Pr5Horh9VjaocGgsd8Q5HUa6ybeCZq1WRMcQizpPFHJwHLms7akZxro0InmjMFxIF9VYvxTI4XAFuQdq30sR4X1vkquu0sygjPpzsgKxwDpaS0jr70VjQx1Rry/jLjqZIPyjVUZqTeAj0amqo+wbq70CtSDajmio2xm3FGvibrRUHB0xpHzEr4jRqyCWmCIDo5G0x6LUbl73dk8065EOe0cWjQQb9ADw+qsrNj6O5i84U5wAiQZHMGyF2S0hRzbIRHsp11IIRp9EQpw6QoPamnMIlBe4qhV0oYCZKE43UC5MSoFGI8V52foqFrrkbhHRcgC0eiIwKLWc0WmFlU2tCI2mvWMKYpUkHjB7lNU29AubSmEwxgCD1rJRKpDGlxsACb5COuniiU2rHb+beNMdkxoFrucD5cJFv72S0Zje7azXVGnDksLoMAkCTFw3Q3II1nmb1uFr1TIqtlp11F/wkaZ903T2Bog9/som5d3gPGHCD4Jqri+YBi2QIj0B5Lla6yKXG4LvTBIPWc/MEaeCniMFwts4iLgZjxAzGUaiyYqniIDRc8vuCEzS2XXLYAJGYsZ+VvP5qba47ZLEUZyAnWP00SLqRuPfgtpX3bruvwET7y0UKW7Vbi7zb855ac1ecP46w/AQbWTOFpEkDnl0P7rcVd1ZFxBVdU3fc08495pM4XxWKWoDTLXDMi4+R8j70Su26TmuD23a8AtPO2RPMXlXeP2ZUcMpcNR9ffRVNQ1KYNN7e6cgcgdCIW9udxra/wALd8P+nhHZRUNzEXaWNE6QKlrCwAkmD9VY8OHE0gg6i6/L2KZDiRln66L7h/DDetuIpNwxaRUpMAnuw4C1g3IDLLktRitj2aE5icc2ENwWkIOCXqMT5pkpeoxQIPYh8Kec1BcECtQKBai1SuaLKgPAOfyC5SgLxEBa1HpjpKhTGiYpsWWhKTUxTCjSYmabOiDmNTDG+K5rUVoQdTXznfHGO/xZY2ZAyBtrcyJHkQvpNMXEL55vUYx75AgMDhAGUZuOpzWcvTWPslUaQBxm9tbeZP7+Kd2Nsh1ciB3efPzzVZXoPe4AmC45eOQ8eZ9n63u3gmU6LA0AQAvPf07zU7oGxt06NNoJaCffNXBwTGiwHomO0Qa9UZSrrHTHLK0liaLc4EKoxTmtm2XRWuKrCICz+Me2H55XXOvVhvXanq4iZVe4hTNcQeiRdipyskjdTcwKv2rsYVQnsPc9E5SZZdI45Pl2N2f2TiHcp8Be31TW5+N7DG0X2jjDXTkOLuyrXenBQ/qLeay7hwmRoZHiLrtK8uU1X6fcBA6oL2qGyMW2rh6VRuT6bHC0ZtByR10cy4Fig1WJotQ6rVRXPagcCeqUkMsQIvYNVE+VkxVbyQCxALib7lcpR7lcgAymfI+4lNUm9ECgAdE5SasqKxvuU1TB5QgU2JmmxBIIwbzUQPRG4UHUwvnW8tTixlUwYBa3LPgEmByn5hfSWBYTe+nw4kR+IT4afWFnP01h7VOFZFUknoOgm/z+i+l7HrdwDovm1G5aTaJJ53MAD0H9Q8Fv9j1JYOnJebJ6sJtbVamg9+SWdROcnmf0ummNOaKW2Uk2ctKx+H1M+vqqXEMb3xoRa9v3VzjSIzVV2TSWyZ6TpGZ80dIx2JADSBmTB/QIf+HKvMXTpsIys4/2S2JeOl/7I0rqIj375K3wTASB80kzhkc09gTFQR79F0jllWX34pxWMagff9ViMaxfWt8NliozjAuGuByzzB6GZ9fNfLsc20e/2XWPPk+77j1Q/Z2GIIP8sCbzIsQ6Se8NeeequYVRuR/8dhT/ANpg9BHrZXBC6RyCcPVDe1GcouKqE3hBeU1UCA+mgUeECo4g2TTxogPPogU4uq9Rrcz8lyANJtsvqnKAsl6abwxtKypimEwxBpt5I7W+KAgspM6rxgRIQSasL/EQ8Fak6M258oPz1st0xZD+JuCJpU6o/C7hcP8AK7+3zUy9Lj7ZWhiIAAmXZdBEz45L6NsDDEMA8F8y3eJq4iix2UievP8Auvq2Pq9lSc4C4yXlznb14Xo5j9oU6LZcf1WWxn8QsMCWl0fP6TCw28m1y4/zn3APdBvfm4mBproAsbj8Yz8oEmIzPm2zh4reOO2brF9er72UajSGPaZvncet0tgMY6rUEHmc18fbWc0juiDcWIMc4Oa+nfw/wrny+bAKZY6dMM9ld48Zw1b5AyqTHbwvjuNNtVo9p4Jru1e/8BNl8rxu0H1qnCHQ0nuiYAW8MdseTPXS5G1a7zrdbHdrar+611/GxHzj918zpVKjHxcwb3MfJy3NDHtw/eJDi0tkt/mUnNJAPBW4WkOGZa4GRkdDuxyxr6ewB7ImQ4ed/uPsvje2qMOeI+EkEciPZ9F9Y2Pi2VG9zIaSTnlEr51vZhi7FV6bRd1QQBrLQT9QpDKPsO6dLhwWGH/aYc+YB9L+SsnLObkbZNVhwz2htTD06YdAMBrgQ0Sc3Q35rTGy6SuVmrqguUOFHJ6KD1pks5hUOEIz2IYAQLVADaEtWpRknajRzS1YjJAhZci8I9hcgFTJ8k5TbklaIyCcpBZUdrLpliBTTLUEgpkhRAXEoCU1hBtXEV8bi8M8B+HbLQwgAt4YIcHC5nkennvGLNVHNwtTFYgtu+oAJ1HA0n5rl5b09X/NJbkyu7uzzS2g2mTPDfL8PD8jJW/2pQNRnAHQT4foVit1sYa+O7d4Ac5jwBpAeYj1A8lvGAuNr+PznouGV26ScbWLpbmYanxVKxe94PFxZBpGWVrdfRZ3eWngnPNUmk6oTJeeLiJAgE8L4JyvGi+u1tnB3xEnzt5NFgFT4rYGFaeJzGSLmRJ8Z9wrLlGpwyfI9mbDOKqAimXNEAOMgADl0X1ndvZjaLC1otH90fBNbEtaGtVlhWgT4JvdW6xlYXGtHaPaR8Ur55tndU039pSALXS7h1bczHML6Btl84hw5FI7aptFLic8NIIHUHTy0810x9MeSS1gaLoI4qbrcitFU29x0uxp0SGugOc6JgaDiBGXVdQYHXJB1lP0qITkcFvuewNENmMjOh0kHL6EFK7YpdntRlTu98DOwngLL+fDdXGwaNwRnHqM4+/rzKr/AOIeH4pLfip0S8+AM/b5KxyynejW41V3/FsaxzS0GhSdHPhLRPq53oV9AIXz7+Em0W1zWc4fzabKdMu1czie5voZHovoBErrj6cvL+TxRIUnNXi25BvCCQjOQqvRAs8JWom3pWq1ADy+a5R7ML1FRojkU3Tb/ZK0oBTlNZB6KZYUswnmjsKAzSucF4F6ZnogmxZ3fPZbsQ1jWm4dPDq4ax6LQgLqjJiRMH35rHkx3HXw58MtsbicD2VTDvpAAUgaT2jUQXA+v/ktPs6paVn9pdpJ7wIZNjZ2c39Ex/jAykXT8LW39QvLXrs7aDFY0DVZPbe2ms043HIC/vxSe1NqFjON8gH4QfqqzYTzUeajv9vgtTvtZrFqt2q9R7nOxHdDQOFugmZ8Tb5q4/4vSAdfIKlxPZmkW1DZ4i0ggxaCLgr57UIwlYuZXqPabFr3Fwc0+OvXNWJlY0JcMRiSWOE3JOgGv9kXH7IpVGvDqzOHhJcSYLYGflms9gtv4fDhzmHje/RwsBrN7qvxu02YhzSWwGNhrQ2Gi+QE6rrjOnPLPtW7OxLgBfT0V7hMVMDmkK2AIE8JiJnkkcHjuzqAHn91LE5/H1zd6gGgOcf3lVe8lI1qjqQc2JpB4cD3mNklvq5p8gjYvGcNLChhk16jRP8AlDS4n1Df6lc7N3c7SpUrVCA11SQNSGta3yu35Kyb6Zt1d1DcDYTMMyq5jOFr3QJMlwGRJ5cvErTEXReEAQBAGUKDl2k08+V3duIQ4XpK9JsqyC4ITgiuQXoAVHfNKPKZe5LPQBgrlGOnzXIqNF902wpGiT7uU3TdePNZDdMI4SrAUxTNkDDV6oNMqbUEwpKEr0uKCGLwNOqOGo0EZTqJ5HNZGvR7jmOMy2D1IJJP1W0asjt4cFR2fxEjlDu96S6PJcfNOtu/hy70xn8RS81KZg9mGMyykgE/P6IeyN4qOHaG4hlS9xDSZBjUeAWjdTbXY6m65ZIHMhOYLZVOpRNN7QRlB+q5zKa1Xfju7VtLfDB1GzTovcNbOH0GSqtp7Zwb2maLTNx3jPSDC0e7+zKmDPZ02MrUC4nhe4tqUp4pEhru0b3jyOl81LE7Yho7XA0gS1rSA8yCS20VKTbDUzon1rv9PmWKqUX2p0Y6l36BXewd33Ag9nk3juD8MxNzzsm8RvBSbMYIz3ojhLZ0kjSc7KGL3yxmJY5lLDtoOcGM42unhY1xcdBBLvQLc255f4qMV/EKmAWUsLNoDnkDz4RP1WfoB1apJEEkE9NStPs7c9lOm+pUMuLTw/5bGXHqvdxtly/tXj+WwcX+oz3WrdunPV+tZRwp7XB0z/8AXpF7ujqkW9AF9F2VT4aDRz4nf1Oc71usPgGOc5z/AMdQk+YFh7+6+gGnwtDfygD0EK4MeShOIUCvSF0Lo5PFF6kXoT3Sg8cBqUCoQpVHGEvWzt79VUQqEBAqPhTqgzCXqNQedoF4oR1XIqFJxTNK99FX0anqnKLjyWQ8wo4ck6ZRmP8AcoGmFFBSzXIjCgOApAqAKlCCTVnd7hHC8ZAQ/wAJs49ASZ6OnSVoWqs26yzbaEePNc/L+NdPF+UZTCzIcImxy1tHkeSuMIyAXCbEgjxjRVWFApO4SCWGOE5xpwk520Judb53+zag4i0tFxaLWymDppOlvLyvXLovi3iDNoyP3WN2ttDEtsHlzet/qVudpYIO6/qsrtbdqZPFE+81rGt7vxj6uPrOsSAL5AK13frgmDnn7CFid2HA/HAub8spUcJhOyk8Uj6rrMo55XK+13tOr2gNJtuKxPJup803gMK1jAxg7ou4a8QOUeEm3M9EnsageIvfkSTl52+icbXJaBGZm94Bg65dByjRVyvto908K19ZxiRTh06cRgtHI/mt/lWrrFZvckAB8ZW8SZMk9StBUOa64+nDP2HF16uUStMvCUJ6kVFyIE4JaqZKPVKUqKgbzA9/ZBebdEZ5SxegFwBcpcQ5LkUnT5FNU3jIJRjbWTVLqFkOUnD2ExIkJKn1TIKBlhlGFRLNR2+aBgFchhy940B2pHbRs3z+yaYZySG16oIbBBzyIPJc/Lf6V08X5RWYmgHNIImfS6z2Lxb6L+JsuY0m4PeA6xmBGeeQMrTwYsqLG0CXAZjX9x915Mbp7MsdxE7yBwBaRHTrn6xKS2lt8QYItbPnbXPVU239mBjiWy2T3o+EnOeHrzWcrNdkHNPyPpddpjK5csouKu2zUJ4z3eluf7oDNpcTxAB0GdvuVWUsCSREA8i6dOiv9l7EbMvcOHUNt/8Ao/WP1W9RjllVxg8W57eBosJNR5iwj4QdSeURGfVoVGxDBAEQLzHWT1VUcW0u4Gjha2zR0+838c03hTawjmlpI2m5lT4h0n5j9VoisJsjaJod8CYEEcxNx75K83Y3obi3VafZupVaPDxNJ4muDp4XMeM2mDYwbZLphfjlnO9r0qLyV65Qc9dGHOysgPKk4odV/REDrtS73KT3IL3kIA1M1EuHP34qdWr4eCFx6R7KDvMfL9FyhA5e/RcgRpuPlEQmG+7++qUaPYuitykT76LKnKMJpryEhSITNEoHmFHDo6pOm4KRq+vvRA2Xxeyga8mGyTyF0N1EgAv7s5N/Ef0VrhmhjcgMrD7nUrNyXSr2/h3tw4aHFpqvax7hmymZc+DzcG8E6cfRJmm1rQ1ohoEADIBXu0qZqUXtbd0BzepaQ4DzIjzWeNaQCNcvBeXzW7erw+kqjrQlXOjPPmp1K0a3VZi8T09Pf1XKO6O28M17ZXz/AGpgi2YPvRbPE4kltjI5ZrPVyDMrrhuOeWqzuDLg8LW4atAl3KeHp9hkqDh4TM5qb8TpPj1Xb25ejFNxc/ilaLBPlZnAmTOn7q9oVMiEot2PsQq7ZD3AYuswkEup0GdSx0k/1VI8ipVMYR3QJe6zB+Z32GpOglPUMM2lTpUGmRTEud+aobl3qXO9FcZ9YzvxoP8AmoMfTY8T2lg4WgzAnoeatcLtOjUyeJP4SQHSNIP2XzXbj+J9OLBp+/7JXbGKl7wLhxnzXTblp9bfIslqhuvmuwd5a2HcAXF1M2LXEnh6j9FsWbxUiQH9wmO9PcvlfMT1ACsqWLR7j5JaodER55GQRmLjyKA/JaRAqM+q7iKiSglK5CvzHquQItdkiNOl0nVxIYATkTA6TOfRTq4poWVPsdqj06mkXOUfRJYPDVal44G8zPyGZVhisTTw47l6hESTf00WblIsmzAa1rmse48TvwtufMqyY5lMOIybm43JPIFU+ysOSeIzxvu4nRug6c0rvNtO/YsNhmudyrcxh3A4l1eqXm4yaFoa1gAqjdnDcLZPJWdaqOYUnpb7MUa0eXv34LPbdwhpO42/A8n/AGuJnh8Dp6aK1p1NQjmqC0ggEGxByPQrOU5RcbxrC1a6r8VVOYPvxzV1tbYFQcT6HeAuWEw4f6XEgO8zPistVxBHceHNcMw4EHx4TFlymNj0cpQsRXzVTi6pU8TiLpWtUldJGbStV5S76hTTiIS9Oi5x7jS6M4Fh4k2HmukYpzCOgKwpY0yGsBc7Ro+pOg6pCngHT33R/lZc+btPL1VhRqCm2GQwanU+J59blXTFyXGG/lTJDqzhDjpTb+Ufpm459OqY3hsPA9OY6k6qnFdxs2R11M8uXib+CnUMQBkFtzH2jWkAquL5U8TUmyC1FETdB4qM7Jxgj4Hf+p6JQLyFA5s3atfCuhpsD3mOu0+Wh6hbfZG3aWJEN7j9WE38vzBYJ9Tjz+Ia80uaZBkWIyIVl0mn1IM4YF+V9epJ1Qnu1+awFHbNdtxUeD4yD/tNgrrAb36VmDq5tvPhy+i1yZ0v+HqF6qz/AJnw35j/AEfuuV2DN2MDZ9QnmAB95T2Hw1On8DZd+Y3d+3klaVYkxPROUHho4iuHK100axWLFJnEc9P1KotnUjWqcb8psg4ys6u/oFc4JoptWVPYzGClTMRJCyOBmpVl3OUXeLHyeCfLMomw2GQYPnE+gSrG0wkBkIgIAgJZj+6Ao4msGjwRBnVQFB+IGc35+81nsXtETY+/ulziyir6rjYHey56ev4fO3ihV6rajYPC9uge0OHkdPGFUU8UVKpTY65EHm0lpPiWxPmgSrbuYd4MsHFNuCo8AeI4/sgM3Nw4EuNUnlxgDy7sp19M6VnxyPCR/wCKUqcUx2pno0IbDdsLDMsym2ebnF5/pJP0Se0SwASYaMhZo/UeiarYcxerUPSWgfIT81Cls6mDPDJGrrn1N1U2p2hz7U2wOZED0zKn/gQ25PE7mdPAaK6qENEqtLpkrW0KOCG9yMWyR6pTEG8LUShi6kApBsBetCDwBewpALxRXkL1eSvJRHFQLVxcotcg7swuXnZu5Lle0b7DfG7xRMZ8K5cuToDs/Mp9n6/RcuQYyv8A9d/+orT7H0XLkpGipZtSO1ffovVyfBma2ZXM/VeLkDFBFqrlyAVf4ffJKUMj4rlyJTNbRczLzXq5UhDaCTb8K5crChU/sq93xrly1GaIfsvWrlyD0Lx69XKKgVFeLkRByg3VeLlRoVy5ctMv/9k=\" alt=\"John Doe\">\r\n          </div>\r\n          <div class=\"user-name\">\r\n            <h2>John Doe</h2>\r\n            <h6>Affiliate since December 6, 2019 10:09 pm</h6>\r\n            <span class=\"badge badge-light pb-1\">Basic</span>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n\r\n          <div class=\"badges d-flex mb-3 justify-content-end\">\r\n            \r\n            <div class=\"custom-badge d-inline-flex align-items-center referrals\">\r\n              <div class=\"badge-icon\">\r\n                <img src=\"/assets/images/referral-icon.svg\" width=\"28\" alt=\"Referral\">\r\n              </div>\r\n              <div class=\"badge-title\">\r\n                <strong>Referrals</strong>\r\n                <h4 class=\"mt-0\">0</h4>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"custom-badge d-inline-flex align-items-center referrals\">\r\n              <div class=\"badge-icon\">\r\n                <img src=\"/assets/images/dollar-icon.svg\" width=\"28\" alt=\"Dollor\">\r\n              </div>\r\n              <div class=\"badge-title\">\r\n                <strong>Earnings</strong>\r\n                <h4 class=\"mt-0\">$10</h4>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"custom-badge d-inline-flex align-items-center referrals\">\r\n              <div class=\"badge-icon\">\r\n                <img src=\"/assets/images/referral-icon.svg\" width=\"28\" alt=\"Referral\">\r\n              </div>\r\n              <div class=\"badge-title\">\r\n                <strong>Pass Referrals</strong>\r\n                <h4 class=\"mt-0\">0</h4>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"badges d-flex justify-content-end\">\r\n              <div class=\"custom-badge d-inline-flex align-items-center referrals\">\r\n                <div class=\"badge-icon\">\r\n                  <img src=\"/assets/images/referral-icon.svg\" width=\"28\" alt=\"Referral\">\r\n                </div>\r\n                <div class=\"badge-title\">\r\n                  <strong>Referrals Pass by Sponsored Members</strong>\r\n                  <h4 class=\"mt-0\">0</h4>\r\n                </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div><!-- .user-header ends here -->"

/***/ }),

/***/ "./src/app/modules/user/user-header/user-header.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/user/user-header/user-header.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLWhlYWRlci91c2VyLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/user/user-header/user-header.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/user/user-header/user-header.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHeaderComponent", function() { return UserHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserHeaderComponent = /** @class */ (function () {
    function UserHeaderComponent() {
    }
    UserHeaderComponent.prototype.ngOnInit = function () {
    };
    UserHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-header',
            template: __webpack_require__(/*! ./user-header.component.html */ "./src/app/modules/user/user-header/user-header.component.html"),
            styles: [__webpack_require__(/*! ./user-header.component.scss */ "./src/app/modules/user/user-header/user-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserHeaderComponent);
    return UserHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/user/user-nav/user-nav.component.html":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/user-nav/user-nav.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark p-0\">\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"navbar-nav\">\r\n          <li class=\"nav-item\">\r\n              <a class=\"nav-link\" href=\"javascript:void(0)\" routerLinkActive=\"active\" routerLink=\"/user\">Dashboard</a>\r\n          </li>        \r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"javascript:void(0)\" routerLinkActive=\"active\" routerLink=\"/user/referrals\">Referrals</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"javascript:void(0)\" routerLinkActive=\"active\" routerLink=\"/user/payments\">Payments</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"javascript:void(0)\" routerLinkActive=\"active\" routerLink=\"/user/wallet\">Wallet</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0)\">Profile</a>\r\n            <ul>\r\n              <li><a href=\"javascript:void(0)\" routerLinkActive=\"active\" routerLink=\"/user/edit-profile\">Edit Account</a></li>\r\n              <li><a href=\"javascript:void(0)\" routerLinkActive=\"active\" routerLink=\"/user/change-password\">Change Password</a></li>\r\n              <li><a href=\"javascript:void(0)\" routerLinkActive=\"active\" routerLink=\"/user/payment-settings\">Payment Settings</a></li>\r\n            </ul>\r\n          </li>\r\n      </ul>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/modules/user/user-nav/user-nav.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/user/user-nav/user-nav.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci91c2VyLW5hdi91c2VyLW5hdi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/user/user-nav/user-nav.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/user/user-nav/user-nav.component.ts ***!
  \*************************************************************/
/*! exports provided: UserNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNavComponent", function() { return UserNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserNavComponent = /** @class */ (function () {
    function UserNavComponent() {
    }
    UserNavComponent.prototype.ngOnInit = function () {
    };
    UserNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-nav',
            template: __webpack_require__(/*! ./user-nav.component.html */ "./src/app/modules/user/user-nav/user-nav.component.html"),
            styles: [__webpack_require__(/*! ./user-nav.component.scss */ "./src/app/modules/user/user-nav/user-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserNavComponent);
    return UserNavComponent;
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
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/modules/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/modules/user/change-password/change-password.component.ts");
/* harmony import */ var _payment_settings_payment_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-settings/payment-settings.component */ "./src/app/modules/user/payment-settings/payment-settings.component.ts");
/* harmony import */ var _referrals_referrals_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./referrals/referrals.component */ "./src/app/modules/user/referrals/referrals.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/modules/user/payments/payments.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/modules/user/wallet/wallet.component.ts");












var routes = [
    {
        path: 'edit-profile', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_3__["EditProfileComponent"],
        data: { title: 'My account' }
    },
    {
        path: '', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["UserDashboardComponent"],
        data: { title: 'My Dashboard' },
        canActivate: [_core_gaurds_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'change-password', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"],
        data: { title: 'Change Password' }
    },
    {
        path: 'payment-settings', component: _payment_settings_payment_settings_component__WEBPACK_IMPORTED_MODULE_8__["PaymentSettingsComponent"],
        data: { title: 'Payment Settings' }
    },
    {
        path: 'referrals', component: _referrals_referrals_component__WEBPACK_IMPORTED_MODULE_9__["ReferralsComponent"],
        data: { title: 'Referrals' }
    },
    {
        path: 'payments', component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_10__["PaymentsComponent"],
        data: { title: 'Payments' }
    },
    {
        path: 'wallet', component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_11__["WalletComponent"],
        data: { title: 'Wallet' }
    },
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
/* harmony import */ var _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-header/user-header.component */ "./src/app/modules/user/user-header/user-header.component.ts");
/* harmony import */ var _user_nav_user_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-nav/user-nav.component */ "./src/app/modules/user/user-nav/user-nav.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/modules/user/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/modules/user/change-password/change-password.component.ts");
/* harmony import */ var _payment_settings_payment_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment-settings/payment-settings.component */ "./src/app/modules/user/payment-settings/payment-settings.component.ts");
/* harmony import */ var _referrals_referrals_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./referrals/referrals.component */ "./src/app/modules/user/referrals/referrals.component.ts");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./payments/payments.component */ "./src/app/modules/user/payments/payments.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/modules/user/wallet/wallet.component.ts");














var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_4__["EditProfileComponent"], _user_header_user_header_component__WEBPACK_IMPORTED_MODULE_6__["UserHeaderComponent"], _user_nav_user_nav_component__WEBPACK_IMPORTED_MODULE_7__["UserNavComponent"], _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["UserDashboardComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_9__["ChangePasswordComponent"], _payment_settings_payment_settings_component__WEBPACK_IMPORTED_MODULE_10__["PaymentSettingsComponent"], _referrals_referrals_component__WEBPACK_IMPORTED_MODULE_11__["ReferralsComponent"], _payments_payments_component__WEBPACK_IMPORTED_MODULE_12__["PaymentsComponent"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_13__["WalletComponent"]],
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



/***/ }),

/***/ "./src/app/modules/user/wallet/wallet.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/user/wallet/wallet.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-header></app-user-header>\r\n\r\n<div class=\"container mt-4 mb-5\">\r\n\r\n  <app-user-nav></app-user-nav>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/user/wallet/wallet.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/user/wallet/wallet.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/user/wallet/wallet.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/user/wallet/wallet.component.ts ***!
  \*********************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WalletComponent = /** @class */ (function () {
    function WalletComponent() {
    }
    WalletComponent.prototype.ngOnInit = function () {
    };
    WalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/modules/user/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/modules/user/wallet/wallet.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-user-user-module.js.map