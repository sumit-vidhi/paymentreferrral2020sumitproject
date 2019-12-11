(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_auth_components_master_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/components/master/master.component */ "./src/app/modules/auth/components/master/master.component.ts");
/* harmony import */ var _modules_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/auth/components/login/login.component */ "./src/app/modules/auth/components/login/login.component.ts");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _shared_resolvers_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/resolvers/resolver.service */ "./src/app/modules/shared/resolvers/resolver.service.ts");
/* harmony import */ var _app_modules_auth_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/auth/components/sign-up/sign-up.component */ "./src/app/modules/auth/components/sign-up/sign-up.component.ts");
/* harmony import */ var _app_modules_auth_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/modules/auth/components/reset-password/reset-password.component */ "./src/app/modules/auth/components/reset-password/reset-password.component.ts");
/* harmony import */ var _app_modules_auth_components_register_finish_register_finish_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/modules/auth/components/register-finish/register-finish.component */ "./src/app/modules/auth/components/register-finish/register-finish.component.ts");
/* harmony import */ var _app_modules_auth_components_email_varification_email_varification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/modules/auth/components/email-varification/email-varification.component */ "./src/app/modules/auth/components/email-varification/email-varification.component.ts");
/* harmony import */ var _app_modules_auth_components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/modules/auth/components/update-password/update-password.component */ "./src/app/modules/auth/components/update-password/update-password.component.ts");
/**
 * @module AuthRoutingModule
 * Auth routing module of the application.
 */



// Importing components


// Importing services

// Importing guards






// defining routes
var routes = [
    {
        path: '', component: _modules_auth_components_master_master_component__WEBPACK_IMPORTED_MODULE_3__["MasterComponent"], children: [
            {
                path: 'login',
                component: _modules_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                data: { title: 'Login' }
            },
            {
                path: 'signup',
                component: _app_modules_auth_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                data: { title: 'Sign Up' }
            },
            {
                path: 'thankyou',
                component: _app_modules_auth_components_register_finish_register_finish_component__WEBPACK_IMPORTED_MODULE_9__["RegisterFinishComponent"],
                data: { title: 'Thank You' }
            },
            {
                path: 'reset-password',
                component: _app_modules_auth_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"],
                data: { title: 'Reset Password' }
            },
            {
                path: 'email_varification/:id/:code',
                component: _app_modules_auth_components_email_varification_email_varification_component__WEBPACK_IMPORTED_MODULE_10__["EmailVarificationComponent"],
                data: { title: 'Reset Password' }
            },
            {
                path: 'forgot_password/:id/:code',
                component: _app_modules_auth_components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_11__["UpdatePasswordComponent"],
                data: { title: 'Forgot Password' }
            },
        ], resolve: { access: _shared_resolvers_resolver_service__WEBPACK_IMPORTED_MODULE_6__["HasTokenResolver"] }
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule.components = [
        _modules_auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _app_modules_auth_components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
        _app_modules_auth_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"],
        _modules_auth_components_master_master_component__WEBPACK_IMPORTED_MODULE_3__["MasterComponent"],
        _app_modules_auth_components_register_finish_register_finish_component__WEBPACK_IMPORTED_MODULE_9__["RegisterFinishComponent"],
        _app_modules_auth_components_email_varification_email_varification_component__WEBPACK_IMPORTED_MODULE_10__["EmailVarificationComponent"],
        _app_modules_auth_components_update_password_update_password_component__WEBPACK_IMPORTED_MODULE_11__["UpdatePasswordComponent"]
    ];
    AuthRoutingModule.providers = [
        _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _shared_resolvers_resolver_service__WEBPACK_IMPORTED_MODULE_6__["HasTokenResolver"]
    ];
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/auth/auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/**
 * @module AuthModule
 * @description
 * Auth module of the application.
 */





var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_modules_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"].components],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _modules_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_modules_auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"].providers]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/email-varification/email-varification.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/auth/components/email-varification/email-varification.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL2VtYWlsLXZhcmlmaWNhdGlvbi9lbWFpbC12YXJpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/auth/components/email-varification/email-varification.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/auth/components/email-varification/email-varification.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container top-banner\">\r\n      \t<div class=\"row\">\r\n            <div class=\"col-md-5 banner-heading\">\r\n                <h2>Email Confirmation <strong>message! </strong></h2>\r\n              \r\n             </div>\r\n        </div>\r\n   \r\n    </div>\r\n   \r\n  <!-- category-bar -->\r\n<div class=\"container-fluid bg-section\">\r\n  <div class=\"row\"  >\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n    \t<div class=\"col-md-12 aboutus\"  *ngIf=\"isEmailConfirmed\">\r\n     \r\n          <span>Email Confirmation <strong>success! </strong>\r\n            Thanks for confirming your email. Click <strong><a routerLink=\"/login\">here</a></strong> to login.\r\n          </span>      \r\n       \r\n    </div>\r\n\r\n    <div class=\"col-md-12 aboutus\"  *ngIf=\"!isEmailConfirmed && !alreadyactivate\">\r\n     \r\n          <span>Email Confirmation <strong> Error! </strong>\r\n            We are unabled to  confirm your email.    \r\n        </span>\r\n    </div>\r\n    <div class=\"col-md-12 aboutus\"   *ngIf=\"alreadyactivate\">\r\n  \r\n      \r\n          <span>Email Already Activated Click <strong><a routerLink=\"/login\">here</a></strong> to login.</span>\r\n       \r\n\t\t</div>\r\n\t\t</div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n\r\n\r\n   \r\n\r\n   "

/***/ }),

/***/ "./src/app/modules/auth/components/email-varification/email-varification.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/auth/components/email-varification/email-varification.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EmailVarificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVarificationComponent", function() { return EmailVarificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/loader-service */ "./src/app/core/services/loader-service.ts");





var EmailVarificationComponent = /** @class */ (function () {
    function EmailVarificationComponent(route, authService, loader) {
        this.route = route;
        this.authService = authService;
        this.loader = loader;
    }
    EmailVarificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isEmailConfirmed = false;
        this.loader.startLoading();
        this.route.params.subscribe(function (params) {
            _this.authService.confirm({
                id: params.id,
                token: params.code
            })
                .subscribe(function (response) {
                _this.loader.stopLoading();
                if (response.status == 'success') {
                    if (response.message == 'active') {
                        _this.isEmailConfirmed = true;
                    }
                    if (response.message == 'alreadyactivate') {
                        _this.alreadyactivate = true;
                    }
                }
            });
        });
    };
    EmailVarificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email-varification',
            template: __webpack_require__(/*! ./email-varification.component.html */ "./src/app/modules/auth/components/email-varification/email-varification.component.html"),
            styles: [__webpack_require__(/*! ./email-varification.component.css */ "./src/app/modules/auth/components/email-varification/email-varification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], EmailVarificationComponent);
    return EmailVarificationComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/login/login.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\r\n  <div class=\"col-md-6\">\r\n\r\n    <div class=\"shadow rounded mt-5\">\r\n      <div class=\"card-body p-5\">\r\n        <h3 class=\"card-title\">Login to your account</h3>\r\n        <div class=\"card-text\">\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"email_address\">Username or Email address</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"username\" autofocus>\r\n              <div *ngIf=\"\r\n\t\t\t\t\tloginForm.get('username').invalid && \r\n\t\t\t\t\tloginForm.get('username').touched\">\r\n\r\n                <span *ngIf=\"\r\n\t\t\t\t\t\tloginForm.get('username').errors.required || \r\n\t\t\t\t\t\tloginForm.get('username').errors.email\t\r\n\t\t\t\t\t\t\" class=\"help-block\">\r\n                  Email is required\r\n                </span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n             <input type=\"password\" class=\"form-control\" formControlName=\"password\">\r\n\t\t\t\t<div *ngIf=\"\r\n\t\t\t\t\tloginForm.get('password').invalid && \r\n\t\t\t\t\tloginForm.get('password').touched\">\r\n\t\t\t\t\t<span *ngIf=\"\r\n\t\t\t\t\t\tloginForm.get('password').errors.required\" class=\"help-block\">\r\n\t\t\t\t\t\t\tpassword is required\r\n\t\t\t\t\t</span>\t\t\r\n\t\t\t\t</div>\r\n            </div>\r\n\r\n            <div class=\"form-group d-flex justify-content-between\">\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"remember_me\">\r\n                <label class=\"form-check-label\" for=\"remember_me\">Remember Me</label>\r\n              </div>\r\n              <a href=\"javascript:void(0)\" routerLink=\"/auth/reset-password\">Forgot Password?</a>\r\n            </div>\r\n\r\n            <div class=\"text-center\">\r\n              <button class=\"btn btn-lg btn-primary btn-submit btn-radius\">Submit</button>\r\n            </div>\r\n          </form>\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"text-center mt-4\">\r\n          <p class=\"signup-text mb-0\">Dont have an account? <a href=\"javascript:void(0)\" routerLink=\"/auth/signup\">Sign\r\n              Up</a></p>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/auth/components/login/login.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/auth/components/login/login.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/auth/components/login/login.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/jwt-auth.service */ "./src/app/core/services/jwt-auth.service.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/loader-service */ "./src/app/core/services/loader-service.ts");
/**
 * Login component for auth module
 */






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, loginService, loader) {
        this.fb = fb;
        this.authService = authService;
        this.loginService = loginService;
        this.loader = loader;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['a@a.com', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            password: ['111111', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rememberMe: ['']
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModal = this.loginForm.value;
        this.loader.startLoading();
        this.authService.login(formModal).subscribe(function (result) {
            _this.loader.stopLoading();
            if (result.status === 'success') {
                result.record.authToken = result.record.accessToken;
                _this.loginService.setLoginUserDetail(result.record);
            }
            else if (result.status === 'notActive') {
                alert("Your email address is inactive please check your inbox and activate account.");
            }
            else {
                alert("Email and password is wrong");
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/auth/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JWTAuthService"], _core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/master/master.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/components/master/master.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/modules/auth/components/master/master.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/components/master/master.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL21hc3Rlci9tYXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/auth/components/master/master.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/auth/components/master/master.component.ts ***!
  \********************************************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * This is the entry component for the auth module.
 */


var MasterComponent = /** @class */ (function () {
    function MasterComponent() {
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master',
            template: __webpack_require__(/*! ./master.component.html */ "./src/app/modules/auth/components/master/master.component.html"),
            styles: [__webpack_require__(/*! ./master.component.scss */ "./src/app/modules/auth/components/master/master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/register-finish/register-finish.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/auth/components/register-finish/register-finish.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyLWZpbmlzaC9yZWdpc3Rlci1maW5pc2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/auth/components/register-finish/register-finish.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/auth/components/register-finish/register-finish.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\t<div class=\"container top-banner\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-5 banner-heading\">\r\n\t\t\t\t <h2><strong>Thank you for signing up with Down Line Club</strong></h2>\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>      \r\n\r\n\r\n<div class=\"container category-bar\">\r\n\t\r\n\t  <div class=\"row\">\r\n  \r\n\t\t\t <div class=\"col-md-12 aboutus\" style=\"margin-bottom:50px;\">\r\n\t\t<span>\r\n\t\t\tA confirmation email has been sent to your email address. \r\n\t\t\tTo confirm your account, please click on the \"Activate account\" link.\r\n\t\t</span>\r\n\t</div>\r\n\t  </div>\r\n\t</div>\r\n"

/***/ }),

/***/ "./src/app/modules/auth/components/register-finish/register-finish.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/components/register-finish/register-finish.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RegisterFinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFinishComponent", function() { return RegisterFinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RegisterFinishComponent = /** @class */ (function () {
    function RegisterFinishComponent(route) {
        this.route = route;
    }
    RegisterFinishComponent.prototype.ngOnInit = function () {
        this.loadPage();
    };
    RegisterFinishComponent.prototype.loadPage = function () {
        this.page = "user";
    };
    RegisterFinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-finish',
            template: __webpack_require__(/*! ./register-finish.component.html */ "./src/app/modules/auth/components/register-finish/register-finish.component.html"),
            styles: [__webpack_require__(/*! ./register-finish.component.css */ "./src/app/modules/auth/components/register-finish/register-finish.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RegisterFinishComponent);
    return RegisterFinishComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/reset-password/reset-password.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/components/reset-password/reset-password.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\r\n    <div class=\"col-md-6\">\r\n\r\n        <div class=\"shadow rounded mt-5\">\r\n            <div class=\"card-body p-5\">\r\n              <h3 class=\"card-title\">Reset your password</h3>\r\n              <span style='color:green;'>{{message}}</span>\r\n              <div class=\"card-text\">\r\n                  <form [formGroup]=\"forgotForm\" (ngSubmit)=\"onSubmit()\">\r\n                      <div class=\"form-group\">\r\n                        <div [ngClass]=\"{'has-error' : \r\n                              forgotForm.get('email').invalid && ( \r\n                              forgotForm.get('email').dirty || \r\n                              forgotForm.get('email').touched)\r\n                            }\"\r\n                            class=\"form-group\">  \r\n                            <div class=\"white-btn rmshd\">\r\n                              <input \r\n                                type=\"text\" \r\n                                formControlName=\"email\"\r\n                                class=\"form-control\"\r\n                                placeholder=\"Enter your username or email address\">\r\n                            </div>    \r\n                            \r\n                            <div *ngIf=\"\r\n                            forgotForm.get('email').invalid && ( \r\n                              forgotForm.get('email').dirty || \r\n                              forgotForm.get('email').touched)\"\r\n                            >\r\n                            <span *ngIf=\"forgotForm.get('email').errors.required\"\r\n                              class=\"help-block\">\r\n                                Username or Email is required.\r\n                            </span>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"text-center\">\r\n                          <button class=\"btn btn-lg btn-primary btn-submit btn-radius\" [disabled]=\"!forgotForm.valid\">Get New Password</button>\r\n                        </div>\r\n                    </form> \r\n\r\n              </div>\r\n\r\n           \r\n\r\n              <div class=\"text-center mt-4\">\r\n                  <p class=\"signup-text mb-0\">Remember your password? <a href=\"javascript:void(0)\" routerLink=\"/auth/login\">Login Here</a></p>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/modules/auth/components/reset-password/reset-password.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/components/reset-password/reset-password.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/auth/components/reset-password/reset-password.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/auth/components/reset-password/reset-password.component.ts ***!
  \************************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/loader-service */ "./src/app/core/services/loader-service.ts");





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(fb, authService, loader) {
        this.fb = fb;
        this.authService = authService;
        this.loader = loader;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = this.fb.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        var formModel = this.forgotForm.value;
        this.loader.startLoading();
        this.authService.forgotPassword(formModel)
            .subscribe(function (result) {
            _this.loader.stopLoading();
            if (result.status === 'success') {
                _this.message = 'Reset password instructions has been sent to your email address. Please check your email';
            }
            else if (result.status === 'notActive') {
                alert("Your email address is inactive please check your inbox and activate account.");
            }
            else {
                _this.message = 'We have no account for this email, Please try again with other email.';
            }
        });
    };
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/modules/auth/components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/modules/auth/components/reset-password/reset-password.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/sign-up/sign-up.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/auth/components/sign-up/sign-up.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-title mb-5\">New User Sign up here! <small>Already have an account <a href=\"javascript:void(0)\" routerLink=\"/auth/login\">Login here</a></small></h2>\r\n <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h5>Account Information</h5>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      \r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" formControlName=\"userName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.userName.errors }\" />\r\n                        <div *ngIf=\"submitted && f.userName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.userName.errors.required\">Username is required</div>\r\n                            <div *ngIf=\"f.userName.errors.minlength\">Username must be at least 6 characters</div>\r\n                        </div>\r\n                        <div *ngIf=\"f.userName.errors && f.userName.errors.isUernameUnique\" class=\"invalid-feedback\">\r\n                          *Username already exists.\r\n                      </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n           <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                        </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"confirm_password\">Confirm Password</label>\r\n          <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmPassword.errors }\" />\r\n                        <div *ngIf=\"submitted && f.confirmPassword.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.confirmPassword.errors.required\">Confirm Password is required</div>\r\n                            <div *ngIf=\"f.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                        </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"email_address\">E-mail Address</label>\r\n          <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                        <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                          \r\n                            <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                            <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                        </div>\r\n                        <div *ngIf=\"f.email.errors && f.email.errors.isEmailUnique\" class=\"invalid-feedback\">\r\n                            *Email already exists.\r\n                        </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"confirm_email_address\">Confirm E-mail Address</label>\r\n              <input type=\"text\" formControlName=\"confirmEmail\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.confirmEmail.errors }\" />\r\n                        <div *ngIf=\"submitted && f.confirmEmail.errors\" class=\"invalid-feedback\">\r\n\t\t\t\t\t\t  <div *ngIf=\"f.confirmEmail.errors.email\">Confirm Email must be a valid email address</div>\r\n                            <div *ngIf=\"f.confirmEmail.errors.required\">Confirm Email is required</div>\r\n                            <div *ngIf=\"f.confirmEmail.errors.mustMatch\">Email must match</div>\r\n                        </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"confirm_email_address\">Sponsored By</label>\r\n              <div  class=\"form-control\"> {{referralName}} </div>\r\n            </div>\r\n  \r\n          </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"card mt-5\">\r\n      <div class=\"card-header\">\r\n        <h5>Billing Address</h5>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        \r\n        <div class=\"row\">\r\n  \r\n          <div class=\"col-md-6\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"first_name\">First Name</label>\r\n             <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\r\n                        <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\r\n                        </div>\r\n            </div>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"col-md-6\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"last_name\">Last Name</label>\r\n              <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\r\n                        <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\r\n                        </div>\r\n            </div>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"col-md-6\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"address_1\">Address 1</label>\r\n             <input type=\"text\" formControlName=\"address\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" />\r\n                        <div *ngIf=\"submitted && f.address.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.address.errors.required\">Address is required</div>\r\n                        </div>\r\n            </div>\r\n  \r\n          </div>\r\n  \r\n          <div class=\"col-md-6\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"address_2\">Address 2</label>\r\n               <input type=\"text\" formControlName=\"address2\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.address2.errors }\" />\r\n                        <div *ngIf=\"submitted && f.address2.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.address2.errors.required\">Address2 is required</div>\r\n                        </div>\r\n            </div>\r\n  \r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"city\">City</label>\r\n                <input type=\"text\" formControlName=\"city\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" />\r\n                        <div *ngIf=\"submitted && f.city.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.city.errors.required\">City is required</div>\r\n                        </div>\r\n            </div>\r\n  \r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"state\">State</label>\r\n               <input type=\"text\" formControlName=\"state\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" />\r\n                        <div *ngIf=\"submitted && f.state.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.state.errors.required\">State is required</div>\r\n                        </div>\r\n            </div>\r\n  \r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"postal_code\">Postal Code</label>\r\n                <input type=\"text\" formControlName=\"postalCode\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.postalCode.errors }\" />\r\n                        <div *ngIf=\"submitted && f.postalCode.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.postalCode.errors.required\">Postal Code is required</div>\r\n                        </div>\r\n            </div>\r\n  \r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n  \r\n            <div class=\"form-group\">\r\n              <label for=\"country\">Country</label>\r\n              <select name=\"country\" id=\"country\" class=\"form-control\">\r\n                  <option value=\"AF\">Afghanistan</option>\r\n                    <option value=\"AX\">Aland Islands</option>\r\n                    <option value=\"AL\">Albania</option>\r\n                    <option value=\"DZ\">Algeria</option>\r\n                    <option value=\"AS\">American Samoa</option>\r\n                    <option value=\"AD\">Andorra</option>\r\n                    <option value=\"AO\">Angola</option>\r\n                    <option value=\"AI\">Anguilla</option>\r\n                    <option value=\"AQ\">Antarctica</option>\r\n                    <option value=\"AG\">Antigua and Barbuda</option>\r\n                    <option value=\"AR\">Argentina</option>\r\n                    <option value=\"AM\">Armenia</option>\r\n                    <option value=\"AW\">Aruba</option>\r\n                    <option value=\"AU\">Australia</option>\r\n                    <option value=\"AT\">Austria</option>\r\n                    <option value=\"AZ\">Azerbaijan</option>\r\n                    <option value=\"BS\">Bahamas</option>\r\n                    <option value=\"BH\">Bahrain</option>\r\n                    <option value=\"BD\">Bangladesh</option>\r\n                    <option value=\"BB\">Barbados</option>\r\n                    <option value=\"BY\">Belarus</option>\r\n                    <option value=\"BE\">Belgium</option>\r\n                    <option value=\"BZ\">Belize</option>\r\n                    <option value=\"BJ\">Benin</option>\r\n                    <option value=\"BM\">Bermuda</option>\r\n                    <option value=\"BT\">Bhutan</option>\r\n                    <option value=\"BO\">Bolivia</option>\r\n                    <option value=\"BA\">Bosnia and Herzegovina</option>\r\n                    <option value=\"BW\">Botswana</option>\r\n                    <option value=\"BV\">Bouvet Island</option>\r\n                    <option value=\"BR\">Brazil</option>\r\n                    <option value=\"IO\">British Indian Ocean Territory</option>\r\n                    <option value=\"VG\">British Virgin Islands</option>\r\n                    <option value=\"BN\">Brunei</option>\r\n                    <option value=\"BG\">Bulgaria</option>\r\n                    <option value=\"BF\">Burkina Faso</option>\r\n                    <option value=\"BI\">Burundi</option>\r\n                    <option value=\"KH\">Cambodia</option>\r\n                    <option value=\"CM\">Cameroon</option>\r\n                    <option value=\"CA\">Canada</option>\r\n                    <option value=\"CV\">Cape Verde</option>\r\n                    <option value=\"KY\">Cayman Islands</option>\r\n                    <option value=\"CF\">Central African Republic</option>\r\n                    <option value=\"TD\">Chad</option>\r\n                    <option value=\"CL\">Chile</option>\r\n                    <option value=\"CN\">China</option>\r\n                    <option value=\"CX\">Christmas Island</option>\r\n                    <option value=\"CC\">Cocos (Keeling) Islands</option>\r\n                    <option value=\"CO\">Colombia</option>\r\n                    <option value=\"KM\">Comoros</option>\r\n                    <option value=\"CG\">Congo (Brazzaville)</option>\r\n                    <option value=\"CD\">Congo (Kinshasa)</option>\r\n                    <option value=\"CK\">Cook Islands</option>\r\n                    <option value=\"CR\">Costa Rica</option>\r\n                    <option value=\"HR\">Croatia</option>\r\n                    <option value=\"CU\">Cuba</option>\r\n                    <option value=\"CY\">Cyprus</option>\r\n                    <option value=\"CZ\">Czech Republic</option>\r\n                    <option value=\"DK\">Denmark</option>\r\n                    <option value=\"DJ\">Djibouti</option>\r\n                    <option value=\"DM\">Dominica</option>\r\n                    <option value=\"DO\">Dominican Republic</option>\r\n                    <option value=\"EC\">Ecuador</option>\r\n                    <option value=\"EG\">Egypt</option>\r\n                    <option value=\"SV\">El Salvador</option>\r\n                    <option value=\"GQ\">Equatorial Guinea</option>\r\n                    <option value=\"ER\">Eritrea</option>\r\n                    <option value=\"EE\">Estonia</option>\r\n                    <option value=\"ET\">Ethiopia</option>\r\n                    <option value=\"FK\">Falkland Islands</option>\r\n                    <option value=\"FO\">Faroe Islands</option>\r\n                    <option value=\"FJ\">Fiji</option>\r\n                    <option value=\"FI\">Finland</option>\r\n                    <option value=\"FR\">France</option>\r\n                    <option value=\"GF\">French Guiana</option>\r\n                    <option value=\"PF\">French Polynesia</option>\r\n                    <option value=\"TF\">French Southern Territories</option>\r\n                    <option value=\"GA\">Gabon</option>\r\n                    <option value=\"GM\">Gambia</option>\r\n                    <option value=\"GE\">Georgia</option>\r\n                    <option value=\"DE\">Germany</option>\r\n                    <option value=\"GH\">Ghana</option>\r\n                    <option value=\"GI\">Gibraltar</option>\r\n                    <option value=\"GR\">Greece</option>\r\n                    <option value=\"GL\">Greenland</option>\r\n                    <option value=\"GD\">Grenada</option>\r\n                    <option value=\"GP\">Guadeloupe</option>\r\n                    <option value=\"GU\">Guam</option>\r\n                    <option value=\"GT\">Guatemala</option>\r\n                    <option value=\"GG\">Guernsey</option>\r\n                    <option value=\"GN\">Guinea</option>\r\n                    <option value=\"GW\">Guinea-Bissau</option>\r\n                    <option value=\"GY\">Guyana</option>\r\n                    <option value=\"HT\">Haiti</option>\r\n                    <option value=\"HM\">Heard Island and McDonald Islands</option>\r\n                    <option value=\"HN\">Honduras</option>\r\n                    <option value=\"HK\">Hong Kong S.A.R., China</option>\r\n                    <option value=\"HU\">Hungary</option>\r\n                    <option value=\"IS\">Iceland</option>\r\n                    <option value=\"IN\">India</option>\r\n                    <option value=\"ID\">Indonesia</option>\r\n                    <option value=\"IR\">Iran</option>\r\n                    <option value=\"IQ\">Iraq</option>\r\n                    <option value=\"IE\">Ireland</option>\r\n                    <option value=\"IM\">Isle of Man</option>\r\n                    <option value=\"IL\">Israel</option>\r\n                    <option value=\"IT\">Italy</option>\r\n                    <option value=\"CI\">Ivory Coast</option>\r\n                    <option value=\"JM\">Jamaica</option>\r\n                    <option value=\"JP\">Japan</option>\r\n                    <option value=\"JE\">Jersey</option>\r\n                    <option value=\"JO\">Jordan</option>\r\n                    <option value=\"KZ\">Kazakhstan</option>\r\n                    <option value=\"KE\">Kenya</option>\r\n                    <option value=\"KI\">Kiribati</option>\r\n                    <option value=\"KW\">Kuwait</option>\r\n                    <option value=\"KG\">Kyrgyzstan</option>\r\n                    <option value=\"LA\">Laos</option>\r\n                    <option value=\"LV\">Latvia</option>\r\n                    <option value=\"LB\">Lebanon</option>\r\n                    <option value=\"LS\">Lesotho</option>\r\n                    <option value=\"LR\">Liberia</option>\r\n                    <option value=\"LY\">Libya</option>\r\n                    <option value=\"LI\">Liechtenstein</option>\r\n                    <option value=\"LT\">Lithuania</option>\r\n                    <option value=\"LU\">Luxembourg</option>\r\n                    <option value=\"MO\">Macao S.A.R., China</option>\r\n                    <option value=\"MK\">Macedonia</option>\r\n                    <option value=\"MG\">Madagascar</option>\r\n                    <option value=\"MW\">Malawi</option>\r\n                    <option value=\"MY\">Malaysia</option>\r\n                    <option value=\"MV\">Maldives</option>\r\n                    <option value=\"ML\">Mali</option>\r\n                    <option value=\"MT\">Malta</option>\r\n                    <option value=\"MH\">Marshall Islands</option>\r\n                    <option value=\"MQ\">Martinique</option>\r\n                    <option value=\"MR\">Mauritania</option>\r\n                    <option value=\"MU\">Mauritius</option>\r\n                    <option value=\"YT\">Mayotte</option>\r\n                    <option value=\"MX\">Mexico</option>\r\n                    <option value=\"FM\">Micronesia</option>\r\n                    <option value=\"MD\">Moldova</option>\r\n                    <option value=\"MC\">Monaco</option>\r\n                    <option value=\"MN\">Mongolia</option>\r\n                    <option value=\"ME\">Montenegro</option>\r\n                    <option value=\"MS\">Montserrat</option>\r\n                    <option value=\"MA\">Morocco</option>\r\n                    <option value=\"MZ\">Mozambique</option>\r\n                    <option value=\"MM\">Myanmar</option>\r\n                    <option value=\"NA\">Namibia</option>\r\n                    <option value=\"NR\">Nauru</option>\r\n                    <option value=\"NP\">Nepal</option>\r\n                    <option value=\"NL\">Netherlands</option>\r\n                    <option value=\"AN\">Netherlands Antilles</option>\r\n                    <option value=\"NC\">New Caledonia</option>\r\n                    <option value=\"NZ\">New Zealand</option>\r\n                    <option value=\"NI\">Nicaragua</option>\r\n                    <option value=\"NE\">Niger</option>\r\n                    <option value=\"NG\">Nigeria</option>\r\n                    <option value=\"NU\">Niue</option>\r\n                    <option value=\"NF\">Norfolk Island</option>\r\n                    <option value=\"KP\">North Korea</option>\r\n                    <option value=\"MP\">Northern Mariana Islands</option>\r\n                    <option value=\"NO\">Norway</option>\r\n                    <option value=\"OM\">Oman</option>\r\n                    <option value=\"PK\">Pakistan</option>\r\n                    <option value=\"PW\">Palau</option>\r\n                    <option value=\"PS\">Palestinian Territory</option>\r\n                    <option value=\"PA\">Panama</option>\r\n                    <option value=\"PG\">Papua New Guinea</option>\r\n                    <option value=\"PY\">Paraguay</option>\r\n                    <option value=\"PE\">Peru</option>\r\n                    <option value=\"PH\">Philippines</option>\r\n                    <option value=\"PN\">Pitcairn</option>\r\n                    <option value=\"PL\">Poland</option>\r\n                    <option value=\"PT\">Portugal</option>\r\n                    <option value=\"PR\">Puerto Rico</option>\r\n                    <option value=\"QA\">Qatar</option>\r\n                    <option value=\"RE\">Reunion</option>\r\n                    <option value=\"RO\">Romania</option>\r\n                    <option value=\"RU\">Russia</option>\r\n                    <option value=\"RW\">Rwanda</option>\r\n                    <option value=\"BL\">Saint Barthelemy</option>\r\n                    <option value=\"SH\">Saint Helena</option>\r\n                    <option value=\"KN\">Saint Kitts and Nevis</option>\r\n                    <option value=\"LC\">Saint Lucia</option>\r\n                    <option value=\"MF\">Saint Martin (French part)</option>\r\n                    <option value=\"PM\">Saint Pierre and Miquelon</option>\r\n                    <option value=\"VC\">Saint Vincent and the Grenadines</option>\r\n                    <option value=\"WS\">Samoa</option>\r\n                    <option value=\"SM\">San Marino</option>\r\n                    <option value=\"ST\">Sao Tome and Principe</option>\r\n                    <option value=\"SA\">Saudi Arabia</option>\r\n                    <option value=\"SN\">Senegal</option>\r\n                    <option value=\"RS\">Serbia</option>\r\n                    <option value=\"SC\">Seychelles</option>\r\n                    <option value=\"SL\">Sierra Leone</option>\r\n                    <option value=\"SG\">Singapore</option>\r\n                    <option value=\"SK\">Slovakia</option>\r\n                    <option value=\"SI\">Slovenia</option>\r\n                    <option value=\"SB\">Solomon Islands</option>\r\n                    <option value=\"SO\">Somalia</option>\r\n                    <option value=\"ZA\">South Africa</option>\r\n                    <option value=\"GS\">South Georgia and the South Sandwich Islands</option>\r\n                    <option value=\"KR\">South Korea</option>\r\n                    <option value=\"ES\">Spain</option>\r\n                    <option value=\"LK\">Sri Lanka</option>\r\n                    <option value=\"SD\">Sudan</option>\r\n                    <option value=\"SR\">Suriname</option>\r\n                    <option value=\"SJ\">Svalbard and Jan Mayen</option>\r\n                    <option value=\"SZ\">Swaziland</option>\r\n                    <option value=\"SE\">Sweden</option>\r\n                    <option value=\"CH\">Switzerland</option>\r\n                    <option value=\"SY\">Syria</option>\r\n                    <option value=\"TW\">Taiwan</option>\r\n                    <option value=\"TJ\">Tajikistan</option>\r\n                    <option value=\"TZ\">Tanzania</option>\r\n                    <option value=\"TH\">Thailand</option>\r\n                    <option value=\"TL\">Timor-Leste</option>\r\n                    <option value=\"TG\">Togo</option>\r\n                    <option value=\"TK\">Tokelau</option>\r\n                    <option value=\"TO\">Tonga</option>\r\n                    <option value=\"TT\">Trinidad and Tobago</option>\r\n                    <option value=\"TN\">Tunisia</option>\r\n                    <option value=\"TR\">Turkey</option>\r\n                    <option value=\"TM\">Turkmenistan</option>\r\n                    <option value=\"TC\">Turks and Caicos Islands</option>\r\n                    <option value=\"TV\">Tuvalu</option>\r\n                    <option value=\"VI\">U.S. Virgin Islands</option>\r\n                    <option value=\"USAF\">US Armed Forces</option>\r\n                    <option value=\"UG\">Uganda</option>\r\n                    <option value=\"UA\">Ukraine</option>\r\n                    <option value=\"AE\">United Arab Emirates</option>\r\n                    <option value=\"GB\">United Kingdom</option>\r\n                    <option value=\"US\" selected=\"selected\">United States</option>\r\n                    <option value=\"UM\">United States Minor Outlying Islands</option>\r\n                    <option value=\"UY\">Uruguay</option>\r\n                    <option value=\"UZ\">Uzbekistan</option>\r\n                    <option value=\"VU\">Vanuatu</option>\r\n                    <option value=\"VA\">Vatican</option>\r\n                    <option value=\"VE\">Venezuela</option>\r\n                    <option value=\"VN\">Vietnam</option>\r\n                    <option value=\"WF\">Wallis and Futuna</option>\r\n                    <option value=\"EH\">Western Sahara</option>\r\n                    <option value=\"YE\">Yemen</option>\r\n                    <option value=\"ZM\">Zambia</option>\r\n                    <option value=\"ZW\">Zimbabwe</option>\r\n                </select>\r\n            </div>\r\n  \r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n  \r\n              <div class=\"form-group\">\r\n                <label for=\"phone\">Phone</label>\r\n                <input type=\"text\" formControlName=\"phone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\" />\r\n                        <div *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.phone.errors.required\">Phone is required</div>\r\n                        </div>\r\n              </div>\r\n    \r\n            </div>\r\n  \r\n        </div>\r\n  \r\n      </div>\r\n  </div> -->\r\n\r\n  <div class=\"form-check mt-4\">\r\n    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" formControlName=\"accept\" id=\"remember_me\">\r\n    <label class=\"form-check-label\" for=\"remember_me\">I agree to the <a href=\"javascript:void(0)\">Terms of Use</a></label>\r\n    <div *ngIf=\"accept.invalid && submitted\"> \r\n     Accept terms of use.\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"mt-4\">\r\n      <button class=\"btn btn-lg btn-primary btn-submit btn-radius\">Register Now</button>\r\n    </div>\r\n\r\n</form>  "

/***/ }),

/***/ "./src/app/modules/auth/components/sign-up/sign-up.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/auth/components/sign-up/sign-up.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/auth/components/sign-up/sign-up.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/auth/components/sign-up/sign-up.component.ts ***!
  \**********************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/loader-service */ "./src/app/core/services/loader-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(formBuilder, authService, router, loader, route) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.loader = loader;
        this.route = route;
        this.submitted = false;
        this.referralName = 'NA';
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            userName: ['demouser', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)], this.isUernameUnique.bind(this)],
            email: ['a@a.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email], this.isEmailUnique.bind(this)],
            confirmEmail: ['a@a.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['111111', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['111111', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            accept: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
        }, {
            validator: [MustMatch('password', 'confirmPassword'), MustMatch('email', 'confirmEmail')]
        });
        this.checkReferralCode();
    };
    SignUpComponent.prototype.checkReferralCode = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            console.log(params);
            var size = Object.keys(params).length;
            console.log(size);
            if (size === 1) {
                _this.loader.startLoading();
                _this.authService.getReferral(params).subscribe(function (result) {
                    _this.loader.stopLoading();
                    if (result.status === 'success') {
                        _this.referralName = result.record.firstName + ' ' + result.record.lastName;
                        _this.referralId = result.record.userId;
                    }
                });
            }
        });
    };
    SignUpComponent.prototype.isUernameUnique = function (control) {
        var _this = this;
        var q = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.authService.checkEmailToken({ email: control.value }).subscribe(function (res) {
                    if (res.status == 'error') {
                        resolve({ 'isUernameUnique': true });
                    }
                    else {
                        resolve(null);
                    }
                });
            }, 1000);
        });
        return q;
    };
    SignUpComponent.prototype.isEmailUnique = function (control) {
        var _this = this;
        var q = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.authService.checkEmailToken({ email: control.value }).subscribe(function (res) {
                    if (res.status == 'error') {
                        resolve({ 'isEmailUnique': true });
                    }
                    else {
                        resolve(null);
                    }
                });
            }, 1000);
        });
        return q;
    };
    Object.defineProperty(SignUpComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "accept", {
        get: function () {
            return this.registerForm.get('accept');
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        var formData = this.registerForm.value;
        formData.referralId = '';
        if (this.referralId) {
            formData.referralId = this.referralId;
        }
        this.loader.startLoading();
        this.authService.register(formData).subscribe(function (result) {
            _this.loader.stopLoading();
            if (result.status == 'success') {
                _this.router.navigate(['auth/thankyou']);
            }
            else {
                alert(result.message);
            }
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/modules/auth/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/modules/auth/components/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _core_services_loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/components/update-password/update-password.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/auth/components/update-password/update-password.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL3VwZGF0ZS1wYXNzd29yZC91cGRhdGUtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/auth/components/update-password/update-password.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/auth/components/update-password/update-password.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"top-header forgot-pass\">\r\n\r\n\r\n    <div class=\"container top-banner\">\r\n        <div *ngIf=\"isValidReset\" class=\"row\">\r\n            <div class=\"col-md-5 banner-heading\">\r\n                <h2>Reset <strong>password! </strong></h2>\r\n                <label>\r\n                    Provide your username and we'll send instructions to the email associated with your account to set a\r\n                    new password.\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!isValidReset\" class=\"row\">\r\n            <div class=\"col-md-5 banner-heading\">\r\n                <h2>Reset Password <strong>Error! </strong></h2>\r\n                <label>\r\n                    We are unable to verify you.\r\n                </label>\r\n                <!-- <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n                        <button class=\"btn get-early mtb-30\">Resend instruction</button>\r\n                    </div>  \r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- banner -->\r\n\r\n</header>\r\n\r\n\r\n<div class=\"row justify-content-center\" *ngIf=\"isValidReset\">\r\n    <div class=\"col-md-6\">\r\n\r\n        <div class=\"shadow rounded mt-5\">\r\n            <div class=\"card-body p-5\">\r\n                <h3 class=\"card-title\">Reset your password</h3>\r\n                <span style='color:green;'>{{message}}</span>\r\n                <div class=\"card-text\">\r\n\r\n                    <form [formGroup]=\"resetForm\" (ngSubmit)=\"onSubmit()\">\r\n                            <div [ngClass]=\"{'has-error': \r\n                        resetForm.get('password').invalid && ( \r\n                        resetForm.get('password').dirty || \r\n                        resetForm.get('password').touched)}\" class=\"form-group\">\r\n\r\n                                <div class=\"white-btn rmshd\">\r\n                                    <input formControlName=\"password\" type=\"password\"   \r\n                                        placeholder=\"Enter password\" class=\"form-control\" autofocus>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"\r\n                            resetForm.get('password').invalid && ( \r\n                            resetForm.get('password').dirty || \r\n                            resetForm.get('password').touched)\">\r\n                                    <span *ngIf=\"resetForm.get('password').errors.required\" class=\"help-block\">\r\n                                        *Password is required.\r\n                                    </span>\r\n\r\n                                    <span *ngIf=\"\r\n                                !resetForm.get('password').errors.required && (\r\n                                resetForm.get('password').errors.minlength ||\r\n                                resetForm.get('password').errors.maxlength )\" class=\"help-block\">\r\n                                        *Password must be 6-20 characters long.\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div [ngClass]=\"{'has-error': \r\n                        resetForm.get('confirm_password').invalid && ( \r\n                        resetForm.get('confirm_password').dirty || \r\n                        resetForm.get('confirm_password').touched)}\" class=\"form-group\">\r\n                                <div class=\"white-btn rmshd\">\r\n                                    <input formControlName=\"confirm_password\" type=\"password\" class=\"form-control\"\r\n                                        placeholder=\"confirm password\">\r\n                                </div>\r\n\r\n                                <div *ngIf=\"\r\n                            resetForm.get('confirm_password').value !== \r\n                            resetForm.get('password').value && \r\n                            resetForm.get('confirm_password').touched\">\r\n                                    <span class=\"help-block\">\r\n                                        Confirm password must be same.\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n\r\n                        <div class=\"col-md-4\">\r\n                            <button class=\"btn sign-up-trainer\" [disabled]=\"!resetForm.valid\">Reset</button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/auth/components/update-password/update-password.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/components/update-password/update-password.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UpdatePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePasswordComponent", function() { return UpdatePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/loader-service */ "./src/app/core/services/loader-service.ts");






function passwordMatchValidator(g) {
    return g.get('password').value === g.get('confirm_password').value
        ? null : { 'mismatch': true };
}
var UpdatePasswordComponent = /** @class */ (function () {
    function UpdatePasswordComponent(fb, authService, router, loader, route) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.loader = loader;
        this.route = route;
        this.dismissible = true;
    }
    UpdatePasswordComponent.prototype.createForm = function () {
        this.resetForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validator: passwordMatchValidator
        });
    };
    UpdatePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.resetForm.invalid) {
            return;
        }
        var formModel = this.resetForm.value;
        formModel.token = this.token;
        this.loader.startLoading();
        this.authService.reset(formModel)
            .subscribe(function (res) {
            if (res.status === 'success') {
                _this.loader.stopLoading();
                _this.message = 'Your password has reset successfully';
            }
            else {
                _this.message = 'Internal Server Error. Please try again';
            }
        });
    };
    UpdatePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isValidReset = false;
        this.createForm();
        this.loader.startLoading();
        this.route.params.subscribe(function (params) {
            _this.token = params.code;
            _this.authService.confirmToken({
                id: params.id,
                token: params.code
            })
                .subscribe(function (response) {
                _this.loader.stopLoading();
                if (response.status == 'success') {
                    _this.isValidReset = true;
                }
            });
        });
    };
    UpdatePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-password',
            template: __webpack_require__(/*! ./update-password.component.html */ "./src/app/modules/auth/components/update-password/update-password.component.html"),
            styles: [__webpack_require__(/*! ./update-password.component.css */ "./src/app/modules/auth/components/update-password/update-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UpdatePasswordComponent);
    return UpdatePasswordComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/resolvers/resolver.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/shared/resolvers/resolver.service.ts ***!
  \**************************************************************/
/*! exports provided: HasTokenResolver, AppRoutingAccess, AppCheckUserAlreadyLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasTokenResolver", function() { return HasTokenResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingAccess", function() { return AppRoutingAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCheckUserAlreadyLogin", function() { return AppCheckUserAlreadyLogin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/jwt-auth.service */ "./src/app/core/services/jwt-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @resolver
 * @description
 * Define all the application level resolvers
 */




var HasTokenResolver = /** @class */ (function () {
    function HasTokenResolver(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HasTokenResolver.prototype.resolve = function () {
        if (this.authService.IsAuthUser()) {
            this.router.navigate(["/user"]);
        }
    };
    HasTokenResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JWTAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HasTokenResolver);
    return HasTokenResolver;
}());

var AppRoutingAccess = /** @class */ (function () {
    function AppRoutingAccess(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppRoutingAccess.prototype.resolve = function () {
        if (!this.authService.IsAuthUser()) {
            this.router.navigate(["auth/login"]);
        }
    };
    AppRoutingAccess = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JWTAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppRoutingAccess);
    return AppRoutingAccess;
}());

var AppCheckUserAlreadyLogin = /** @class */ (function () {
    function AppCheckUserAlreadyLogin(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppCheckUserAlreadyLogin.prototype.resolve = function () {
        if (this.authService.IsAuthUser()) {
            this.router.navigate(["/dashboard"]);
        }
    };
    AppCheckUserAlreadyLogin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JWTAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppCheckUserAlreadyLogin);
    return AppCheckUserAlreadyLogin;
}());



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module.js.map