(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/auth/auth.module": [
		"./src/app/modules/auth/auth.module.ts",
		"modules-auth-auth-module"
	],
	"./modules/home-dashboard/home-dashboard.module": [
		"./src/app/modules/home-dashboard/home-dashboard.module.ts",
		"modules-home-dashboard-home-dashboard-module"
	],
	"./modules/user/user.module": [
		"./src/app/modules/user/user.module.ts",
		"modules-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * Base routing module of the application.
 */



// Define the routes
var appRoutes = [
    { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
    { path: 'dashboard', loadChildren: './modules/home-dashboard/home-dashboard.module#HomeDashboardModule' },
    // { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
    { path: '', pathMatch: 'full', redirectTo: '/auth/login' },
    { path: 'user', loadChildren: './modules/user/user.module#UserModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <router-outlet></router-outlet>\r\n</app-layout>\r\n<app-loader></app-loader>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configs_app_settings_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @configs/app-settings.config */ "./src/app/configs/app-settings.config.ts");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/**
 * Component
 * This is the entry component of the application.
 * On application startup, this component is loaded
 */




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = _configs_app_settings_config__WEBPACK_IMPORTED_MODULE_2__["appSettings"].appTitle;
        this.logo = _configs_app_settings_config__WEBPACK_IMPORTED_MODULE_2__["appSettings"].appLogo;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _modules_theme_basic_theme_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/theme/basic-theme.module */ "./src/app/modules/theme/basic-theme.module.ts");
/* harmony import */ var _app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/app-routing.module */ "./src/app/app-routing.module.ts");
/**
 * Base module of the application
 */



// Importing App Component

// Importing modules



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _modules_theme_basic_theme_module__WEBPACK_IMPORTED_MODULE_5__["BasicThemeModule"]
            ],
            providers: [],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/configs/app-api-urls.config.ts":
/*!************************************************!*\
  !*** ./src/app/configs/app-api-urls.config.ts ***!
  \************************************************/
/*! exports provided: appApiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appApiUrl", function() { return appApiUrl; });
var appApiUrl = {
    auth: {
        login: 'user/login',
        register: 'user/register',
        emailVerification: 'user/emailVerification',
        forgotPassword: 'user/forgotPassword',
        emailCheck: 'user/emailValidation',
        confirmToken: 'user/confirmToken',
        resetPassword: 'user/resetPassword',
        getRefferal: 'user/getRefferal',
        editProfile: 'user/updateProfile',
        getdata: 'user/getProfile'
    }
};


/***/ }),

/***/ "./src/app/configs/app-settings.config.ts":
/*!************************************************!*\
  !*** ./src/app/configs/app-settings.config.ts ***!
  \************************************************/
/*! exports provided: appSettings, TOKEN_NAME, TOKEN_HEADER_KEY, AUTH_PREFIX, USER_STORAGE_KEY, ROLE_KEY, DM_PREFIX, APP_USER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appSettings", function() { return appSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_HEADER_KEY", function() { return TOKEN_HEADER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_PREFIX", function() { return AUTH_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STORAGE_KEY", function() { return USER_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROLE_KEY", function() { return ROLE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DM_PREFIX", function() { return DM_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_USER", function() { return APP_USER; });
/**
 * @name appSettings
 * @description
 * This is config file, it include only global application related settings
 * Define Settings the object way(based on requirement):
 * @example {paramsName}:{value}
 * @constant appSettings
 * @type {CommonBase}
 */
var appSettings = {
    appTitle: 'Angular 7 Boilerplate',
    appLogo: ''
};
var TOKEN_NAME = 'api_token'; // Local storage Key where user JWT token stored
var TOKEN_HEADER_KEY = 'Authorization'; // JWT token header name
// JWT token header name. It depends on your application, which header need to used. Modify it per needed.
var AUTH_PREFIX = 'Bearer';
var USER_STORAGE_KEY = 'user'; // Local storage Key name where login user detail stored
var ROLE_KEY = 'roles'; //  Local storage Key name where login user roles stored, if any.
var DM_PREFIX = 'A7B_APP_'; // Any prefix to use for local storage to make it unique
var APP_USER = 'A7B_APP_USER'; // Local storage Key name where login user all detail stored


/***/ }),

/***/ "./src/app/core/EnsureModuleLoadedOnceGuard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/EnsureModuleLoadedOnceGuard.ts ***!
  \*****************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard, throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
/**
 * @class EnsureModuleLoadedOnceGuard
 * @description
 * This class ensure the modules are only loaded once
 */
var EnsureModuleLoadedOnceGuard = /** @class */ (function () {
    function EnsureModuleLoadedOnceGuard(targetModule) {
        if (targetModule) {
            throw new Error(targetModule.constructor.name + " has already been loaded. Import this module in the AppModule only.");
        }
    }
    return EnsureModuleLoadedOnceGuard;
}());

/**
 * @function throwIfAlreadyLoaded
 * @description
 * Throw error if module is loaded twice
 * @param {parentModule} {any}
 * @param {moduleName} {string}
 */
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/components/loader/loader.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/loader/loader.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\" class=\"loader-box\">\r\n  <div class=\"loading\">Loading&#8230;</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/loader/loader.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/core/components/loader/loader.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Absolute Center Spinner */\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n/* Transparent Overlay */\n.loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n/* :not(:required) hides these rules from IE9 and below */\n.loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n.loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0; }\n/* Animation */\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2xvYWRlci9DOlxceGFtcHBcXGh0ZG9jc1xcZG93bmxpbmVcXGRvd25saW5lY2x1Yi13ZWIvc3JjXFxhcHBcXGNvcmVcXGNvbXBvbmVudHNcXGxvYWRlclxcbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUFBO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRLEVBQUE7QUFHVix3QkFBQTtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFpQyxFQUFBO0FBR25DLHlEQUFBO0FBQ0E7RUFDRSwyQkFBQTtFQUNBLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixTQUFTLEVBQUE7QUFHWDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlEQUFpRDtFQUlqRCx5Q0FBeUM7RUFDekMsb0JBQW9CO0VBRXBCLHdTQUF3UyxFQUFBO0FBRzFTLGNBQUE7QUFFQTtFQUNFO0lBQ0UsK0JBQStCO0lBSS9CLHVCQUF1QixFQUFBO0VBRXpCO0lBQ0UsaUNBQWlDO0lBSWpDLHlCQUF5QixFQUFBLEVBQUE7QUFtQzdCO0VBQ0U7SUFDRSwrQkFBK0I7SUFJL0IsdUJBQXVCLEVBQUE7RUFFekI7SUFDRSxpQ0FBaUM7SUFJakMseUJBQXlCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWJzb2x1dGUgQ2VudGVyIFNwaW5uZXIgKi9cclxuLmxvYWRpbmcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBvdmVyZmxvdzogc2hvdztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4vKiBUcmFuc3BhcmVudCBPdmVybGF5ICovXHJcbi5sb2FkaW5nOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi8qIDpub3QoOnJlcXVpcmVkKSBoaWRlcyB0aGVzZSBydWxlcyBmcm9tIElFOSBhbmQgYmVsb3cgKi9cclxuLmxvYWRpbmc6bm90KDpyZXF1aXJlZCkge1xyXG4gIC8qIGhpZGUgXCJsb2FkaW5nLi4uXCIgdGV4dCAqL1xyXG4gIGZvbnQ6IDAvMCBhO1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxuICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtbW96LWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDEuMWVtIDEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIDEuNWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjVlbSAwIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxufVxyXG5cclxuLyogQW5pbWF0aW9uICovXHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtbW96LWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/components/loader/loader.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/loader/loader.component.ts ***!
  \************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loader-service */ "./src/app/core/services/loader-service.ts");



var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loadingScreenService) {
        this.loadingScreenService = loadingScreenService;
        this.loading = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe(function (value) {
            _this.loading = value;
        });
    };
    LoaderComponent.prototype.ngOnDestroy = function () {
        this.loadingSubscription.unsubscribe();
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/core/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/core/components/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_EnsureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/EnsureModuleLoadedOnceGuard */ "./src/app/core/EnsureModuleLoadedOnceGuard.ts");
/* harmony import */ var _interceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @interceptors/error-handler.interceptor */ "./src/app/core/interceptors/error-handler.interceptor.ts");
/* harmony import */ var _interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @interceptors/api-prefix.interceptor */ "./src/app/core/interceptors/api-prefix.interceptor.ts");
/* harmony import */ var _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @interceptors/http.token.interceptor */ "./src/app/core/interceptors/http.token.interceptor.ts");
/* harmony import */ var _core_services_title_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/title.service */ "./src/app/core/services/title.service.ts");
/* harmony import */ var _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/jwt-auth.service */ "./src/app/core/services/jwt-auth.service.ts");
/* harmony import */ var _core_services_common_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/common-http.service */ "./src/app/core/services/common-http.service.ts");
/* harmony import */ var _core_gaurds_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/gaurds/auth-guard.service */ "./src/app/core/gaurds/auth-guard.service.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/core/components/loader/loader.component.ts");
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/services/loader-service */ "./src/app/core/services/loader-service.ts");
/**
 * @module CoreModule
 * @description
 * This is a core module of the application.
 * It is used to include the dependencies that was loaded only one time across the application
 */






// Preventing this module only once

// Importing custom http interceptors









// Adding the http interceptors providers and services
var providers = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["HttpTokenInterceptor"],
        multi: true
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerInterceptor"],
        multi: true,
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_8__["ApiPrefixInterceptor"],
        multi: true,
    },
    _core_services_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"],
    _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_11__["JWTAuthService"],
    _core_services_common_http_service__WEBPACK_IMPORTED_MODULE_12__["CommonHttpService"],
    _core_gaurds_auth_guard_service__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
    _core_services_loader_service__WEBPACK_IMPORTED_MODULE_15__["LoaderService"]
];
/** @module core */
var CoreModule = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CoreModule, _super);
    function CoreModule(parentModule, titleService) {
        var _this = _super.call(this, parentModule) || this;
        // Changing the title of the application.
        titleService.init();
        return _this;
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: providers.slice(),
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__["LoaderComponent"]
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule, _core_services_title_service__WEBPACK_IMPORTED_MODULE_10__["TitleService"]])
    ], CoreModule);
    return CoreModule;
}(_core_EnsureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_6__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/gaurds/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/gaurds/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/jwt-auth.service */ "./src/app/core/services/jwt-auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.IsAuthUser()) {
            return true;
        }
        this.router.navigate(['auth/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JWTAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptors/api-prefix.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/api-prefix.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: ApiPrefixInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return ApiPrefixInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environment/environment */ "./src/environments/environment.ts");
/**
 * Interceptor
 * This is ApiPrefixInterceptor, responsible for prefixes all requests with `environment.host`.
 */



/**
 * Creates a ApiPrefixInterceptor.
 * @class
 * @name ApiPrefixInterceptor
 * @description
 * This class is used to add Base url to each api request
 * It use the configuration variable `environment.host` from environment file
 */
var ApiPrefixInterceptor = /** @class */ (function () {
    function ApiPrefixInterceptor() {
    }
    ApiPrefixInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({ url: _environment_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + request.url });
        return next.handle(request);
    };
    ApiPrefixInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ApiPrefixInterceptor);
    return ApiPrefixInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/error-handler.interceptor.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/interceptors/error-handler.interceptor.ts ***!
  \****************************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http-status-codes */ "./node_modules/http-status-codes/index.js");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @environment/environment */ "./src/environments/environment.ts");
/**
 * Interceptor
 * This is ErrorHandlerInterceptor that adds a default error handler to all requests.
 */







/**
 * Creates a ErrorHandlerInterceptor.
 * @class ErrorHandlerInterceptor
 * @description
 *  This class is used to add error handler for all api requests
 */
var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor(logger, router) {
        this.logger = logger;
        this.router = router;
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) { return _this.errorHandler(error); }));
    };
    /**
    * Customize the default error handler here if needed
    * @param {response} HttpEvent
    * @returns Http Response Object
    */
    // Customize the default error handler here if needed
    ErrorHandlerInterceptor.prototype.errorHandler = function (response) {
        if (!_environment_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
            // Do something with the error
            this.logger.logError('Request error ' + JSON.stringify(response));
        }
        // console.error(error);
        var httpErrorCode = response['status'];
        switch (httpErrorCode) {
            case http_status_codes__WEBPACK_IMPORTED_MODULE_4__["UNAUTHORIZED"]:
                this.router.navigateByUrl('/users/login');
                break;
            case http_status_codes__WEBPACK_IMPORTED_MODULE_4__["FORBIDDEN"]:
                this.router.navigateByUrl('/pages/403');
                break;
            case http_status_codes__WEBPACK_IMPORTED_MODULE_4__["NOT_FOUND"]:
                this.router.navigateByUrl('/pages/404');
                break;
            default:
        }
        throw response;
    };
    ErrorHandlerInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ErrorHandlerInterceptor);
    return ErrorHandlerInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/http.token.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/jwt-auth.service */ "./src/app/core/services/jwt-auth.service.ts");
/* harmony import */ var _configs_app_settings_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @configs/app-settings.config */ "./src/app/configs/app-settings.config.ts");
/**
 * Interceptor
 * This is HttpTokenInterceptor that adds a token to each api request.
 */




/**
 * Creates a HttpTokenInterceptor.
 * @class HttpTokenInterceptor
 * @classdesc This class is used to add user token/auth entity to the headers.
 * You can define the custom header here.
 */
var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(authService) {
        this.authService = authService;
    }
    HttpTokenInterceptor.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
        };
        var token = this.authService.getUserAccessToken();
        if (token) {
            headersConfig[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_3__["TOKEN_HEADER_KEY"]] = "" + token;
        }
        console.log(token);
        var request = req.clone({ setHeaders: headersConfig });
        console.log(request);
        return next.handle(request);
    };
    HttpTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JWTAuthService"]])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/common-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/common-http.service.ts ***!
  \******************************************************/
/*! exports provided: CommonHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonHttpService", function() { return CommonHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/map */ "./node_modules/rxjs/internal/operators/map.js");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_models_api_response_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/models/api-response-model */ "./src/app/modules/shared/models/api-response-model.ts");
/* harmony import */ var _shared_decorators_model_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/decorators/model-map */ "./src/app/modules/shared/decorators/model-map.ts");
/**
 * Create a new instance of CommonHttpService
 * @class CommonHttpService
 * @description
 * This service define a wrapper over http requests GET,POST,PUT,PATCH,DELETE
 */






var CommonHttpService = /** @class */ (function () {
    function CommonHttpService(http) {
        this.http = http;
    }
    /**
     * @function get
     * @description
     * Constructs a GET request that interprets the body as a JSON object and returns the response body in a given type.
     * It will parse the the response and map it with {ApiResponseModel} to set common response format
     * @param  {string} url
     * @param  {CommonBase} [n]
     * @return {ApiResponseModel} Promise of type ApiResponseModel
     */
    CommonHttpService.prototype.get = function (url, args) {
        if (args === void 0) { args = {}; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](args);
        return this.http.get(url, { params: params })
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            console.log(data, 'data');
            return new _shared_decorators_model_map__WEBPACK_IMPORTED_MODULE_5__["MapModel"](_shared_models_api_response_model__WEBPACK_IMPORTED_MODULE_4__["ApiResponseModel"]).map(data);
        }));
    };
    /**
     * @function post
     * @description
     * Constructs a wrapper over POST request that interprets the body as a JSON object and returns an observable of the response.
     * It will parse the the response and map it with {ApiResponseModel} to set common response format
     * @param  {string} url
     * @param  {CommonBase} [n]
     * @return {ApiResponseModel} Promise of type ApiResponseModel
     */
    CommonHttpService.prototype.post = function (url, params) {
        return this.http.post(url, params);
    };
    /**
     * @function put
     * @description
     * Constructs a wrapper over PUT request that interprets the body as a JSON object and returns an observable of the response.
     * It will parse the the response and map it with {ApiResponseModel} to set common response format
     * @param  {string} url
     * @param {CommonBase} n
     * @return {ApiResponseModel} Promise of type ApiResponseModel
     */
    CommonHttpService.prototype.put = function (url, args) {
        if (args === void 0) { args = {}; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](args);
        return this.http.put(url, params)
            .pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return new _shared_decorators_model_map__WEBPACK_IMPORTED_MODULE_5__["MapModel"](_shared_models_api_response_model__WEBPACK_IMPORTED_MODULE_4__["ApiResponseModel"]).map(data);
        }));
    };
    /**
     * @function delete
     * @description
     * Constructs a wrapper over DELETE request and returns the response in a given type.
     * It will parse the the response and map it with {ApiResponseModel} to set common response format
     * @param  {string} url
     * @return {ApiResponseModel} Promise of type ApiResponseModel
     */
    CommonHttpService.prototype.delete = function (url) {
        return this.http.delete(url);
    };
    CommonHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommonHttpService);
    return CommonHttpService;
}());



/***/ }),

/***/ "./src/app/core/services/jwt-auth.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/jwt-auth.service.ts ***!
  \***************************************************/
/*! exports provided: JWTAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWTAuthService", function() { return JWTAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @configs/app-settings.config */ "./src/app/configs/app-settings.config.ts");
/**
 0* Creating a new instance of JWTAuthService
 * @class JWTAuthService
 * @description
 * This 0is auth service, responsible for managing the Authentication related task.
 */





var JWTAuthService = /** @class */ (function () {
    function JWTAuthService(router) {
        this.router = router;
    }
    /**
     * @function logout
     * @description
     * Check current login user token exists
     * @returns {Observable<any>}
     */
    JWTAuthService.prototype.logout = function () {
        this.deleteUserAccessToken();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
    };
    /**
     * @function getUserInfo
     * @description
     * Check current login user token exists
     * @returns {Observable<any>}
     */
    JWTAuthService.prototype.getUserInfo = function () {
        var savedCredentials = this.getLoginUser();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(savedCredentials);
    };
    /**
     * @function IsAuthUser
     * @description
     * Check current login user token exists
     * @returns {boolean}
     */
    JWTAuthService.prototype.IsAuthUser = function () {
        if (window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]] && JSON.parse(window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]).authToken) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
    * @function setLoginUserDetail
    * @description
    * Set login user details in local storage
    * @param {obj} {CommonBase}
    * @returns none
    */
    JWTAuthService.prototype.setLoginUserDetail = function (obj) {
        window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]] = JSON.stringify(obj);
        if (window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]].updateStatus == 1) {
            this.router.navigate(["/dashboard"]);
        }
        else {
            this.router.navigate(["/user"]);
        }
    };
    /**
    * @function
    * @description Set login user details in local storage
    * @param {data} CommonBase
    * @returns none
    */
    JWTAuthService.prototype.updateLoginUserDetail = function (data) {
        if (window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]) {
            var authObject = JSON.parse(window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]);
            // Update the user details here
            window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]] = JSON.stringify(authObject);
        }
    };
    /**
     * @function getUserAccessToken
     * @description
     * Get user access token
     * @returns null | CommonBase
    */
    JWTAuthService.prototype.getUserAccessToken = function () {
        if (this.IsAuthUser()) {
            return JSON.parse(window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]).authToken;
        }
        else {
            return null;
        }
    };
    /**
    * @function deleteUserAccessToken
    * @param {redirect} boolean
    * @description
    * Delete user access token
    * @returns {void}
    */
    JWTAuthService.prototype.deleteUserAccessToken = function (redirect) {
        if (redirect === void 0) { redirect = true; }
        window.localStorage.clear();
        console.log(redirect);
        if (redirect === true) {
            this.router.navigate(["auth/login"]);
        }
    };
    /**
    * @function getLoginUserId
    * @description
    * Get login user id
    * @returns {CommonBase}
    */
    JWTAuthService.prototype.getLoginUserId = function () {
        if (window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]) {
            return JSON.parse(window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]).userId;
        }
    };
    /**
    * @function getLoginUserEmail
    * @description
    * Get login user email
    * @returns {CommonBase}
    */
    JWTAuthService.prototype.getLoginUserEmail = function () {
        if (window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]) {
            return JSON.parse(window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]).email;
        }
    };
    JWTAuthService.prototype.getRefferalCode = function () {
        if (window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]) {
            return JSON.parse(window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]).referralCode;
        }
    };
    /**
    * @function getLoginUserEmail
    * @description
    * Get login user email
    * @returns {CommonBase}
    */
    JWTAuthService.prototype.getLoginUserName = function () {
        if (window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]) {
            return JSON.parse(window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]).userName;
        }
    };
    /**
   * @function getLoginUserEmail
   * @description
   * Get login user email
   * @returns {CommonBase}
   */
    JWTAuthService.prototype.getUserStatus = function () {
        if (window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]) {
            return JSON.parse(window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]).updateStatus;
        }
    };
    /**
    * @function getLoginUserNameLetter
    * @description
    * Get login user name first letter
    * @returns {CommonBase}
    */
    JWTAuthService.prototype.getLoginUserNameLetter = function () {
        if (window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]) {
            return JSON.parse(window.localStorage[_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]]).Name.substring(0, 1);
        }
    };
    /**
    * @function getLoginUser
    * @description
    * Get login user details from local storage
    * @returns {CommonBase}
    */
    JWTAuthService.prototype.getLoginUser = function () {
        var savedCredentials = localStorage.getItem(_configs_app_settings_config__WEBPACK_IMPORTED_MODULE_4__["APP_USER"]);
        return JSON.parse(savedCredentials);
    };
    JWTAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JWTAuthService);
    return JWTAuthService;
}());



/***/ }),

/***/ "./src/app/core/services/loader-service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/loader-service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this._loading = false;
        this.loadingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    Object.defineProperty(LoaderService.prototype, "loading", {
        get: function () {
            return this._loading;
        },
        set: function (value) {
            this._loading = value;
            this.loadingStatus.next(value);
        },
        enumerable: true,
        configurable: true
    });
    LoaderService.prototype.startLoading = function () {
        this.loading = true;
    };
    LoaderService.prototype.stopLoading = function () {
        this.loading = false;
    };
    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/core/services/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Creates a new LoggerService.
 * @class LoggerService
 * @description This is logger service, responsible for logging the messages.
 */


var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    /**
     * @function log
     * @description
     * Log a given message
     * @param {msg} Message to log
     * @returns none
     */
    LoggerService.prototype.log = function (msg) {
        console.log(msg);
    };
    /**
     * @function logError
     * @description
     * Log a given error message
     * @param {msg} Message to log
     * @returns none
     */
    LoggerService.prototype.logError = function (msg) {
        console.error(msg);
    };
    LoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/core/services/title.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/title.service.ts ***!
  \************************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _configs_app_settings_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @configs/app-settings.config */ "./src/app/configs/app-settings.config.ts");
/**
* Creates a new TitleService.
* @class TitleService
* @description
* This is title service, responsible for changing the application title.
* We need to attach title related information in the route file. It will
* automatically get from there
* Reference Links
* https://toddmotto.com/dynamic-page-titles-angular-2-router-events
* https://stackoverflow.com/questions/34597835/how-to-get-current-route
*/







var APP_TITLE = _configs_app_settings_config__WEBPACK_IMPORTED_MODULE_6__["appSettings"].appTitle;
var SEPARATOR = ' | ';
var TitleService = /** @class */ (function () {
    function TitleService(router, activatedRoute, metaTitle) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.metaTitle = metaTitle;
    }
    /**
     * @function ucFirst
     * @param {string} String to convert
     * @description
     * Uppercase the first character from given string
     * @example
     * ucFirst('appTitle')
     * @returns string
     */
    TitleService.ucFirst = function (string) {
        if (!string) {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    /**
     * @function init
     * @param {string} String to convert
     * @description
     * Change the application title on route navigation
     */
    TitleService.prototype.init = function () {
        var _this = this;
        var onNavigationEnd = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]; }));
        // Change page title on navigation or language change, based on route data
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(onNavigationEnd)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            var title = event['title'];
            if (title) {
                _this.metaTitle.setTitle(title + " " + SEPARATOR + " " + APP_TITLE);
            }
            else {
                _this.metaTitle.setTitle("" + title);
            }
        });
    };
    TitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/modules/auth/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
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




var AuthService = /** @class */ (function () {
    function AuthService(commonHttp) {
        this.commonHttp = commonHttp;
    }
    AuthService.prototype.login = function (param) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.login, param);
    };
    AuthService.prototype.register = function (formData) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.register, formData);
    };
    AuthService.prototype.confirm = function (token) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.emailVerification, token);
    };
    AuthService.prototype.forgotPassword = function (token) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.forgotPassword, token);
    };
    AuthService.prototype.checkEmailToken = function (email) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.emailCheck, email);
    };
    AuthService.prototype.confirmToken = function (token) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.confirmToken, token);
    };
    AuthService.prototype.reset = function (token) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.resetPassword, token);
    };
    AuthService.prototype.getReferral = function (code) {
        return this.commonHttp.post(_configs_app_api_urls_config__WEBPACK_IMPORTED_MODULE_3__["appApiUrl"].auth.getRefferal, code);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_common_http_service__WEBPACK_IMPORTED_MODULE_2__["CommonHttpService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/modules/shared/decorators/model-map.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/shared/decorators/model-map.ts ***!
  \********************************************************/
/*! exports provided: MapModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModel", function() { return MapModel; });
/**
 * Create a new instance MapModel
 * @class MapModel
 * @description
 * Define mapModel model mapper
 * To handle the case of backend data field renaming, we created the ModelMapper utility class.
 * @example:
 * return this.http.get<ModelName[]>(url).pipe(
   map(data => data.map((item: any) => {
      return new mapModel(ModelName).map(item);
})));
*/
var MapModel = /** @class */ (function () {
    function MapModel(type) {
        this._target = new type();
        this._propertyMapping = this._target.constructor._propertyMap;
    }
    MapModel.prototype.map = function (source) {
        var _this = this;
        Object.keys(this._target).forEach(function (key) {
            var mappedKey = _this._propertyMapping[key];
            if (mappedKey) {
                _this._target[key] = source[mappedKey];
            }
            else {
                _this._target[key] = source[key];
            }
        });
        Object.keys(source).forEach(function (key) {
            var targetKeys = Object.keys(_this._target);
            if (targetKeys.indexOf(key) === -1) {
                _this._target[key] = source[key];
            }
        });
        return this._target;
    };
    return MapModel;
}());



/***/ }),

/***/ "./src/app/modules/shared/models/api-response-model.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/shared/models/api-response-model.ts ***!
  \*************************************************************/
/*! exports provided: ApiResponseModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiResponseModel", function() { return ApiResponseModel; });
/**
 * Create a new instance of ApiResponseModel
 * @class ApiResponseModel
 * @description
 * ApiResponseModel is used to define the base API response
 */
var ApiResponseModel = /** @class */ (function () {
    function ApiResponseModel() {
    }
    return ApiResponseModel;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @module SharedModule
 * @description
 * This is the shared module of the application.
 * It contain the application related dependencies that can be shared across the applications
 */



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/theme/basic-theme.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/theme/basic-theme.module.ts ***!
  \*****************************************************/
/*! exports provided: BasicThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicThemeModule", function() { return BasicThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _theme_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @theme/components/layout/header/header.component */ "./src/app/modules/theme/components/layout/header/header.component.ts");
/* harmony import */ var _theme_components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @theme/components/layout/footer/footer.component */ "./src/app/modules/theme/components/layout/footer/footer.component.ts");
/* harmony import */ var _theme_components_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @theme/components/layout/layout/layout.component */ "./src/app/modules/theme/components/layout/layout/layout.component.ts");
/**
 * This is the theme module of the application, It contain the application theme related dependencies
 */








var components = [
    _theme_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
    _theme_components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    _theme_components_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"]
];
var BasicThemeModule = /** @class */ (function () {
    function BasicThemeModule() {
    }
    BasicThemeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: components.slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]].concat(components)
        })
    ], BasicThemeModule);
    return BasicThemeModule;
}());



/***/ }),

/***/ "./src/app/modules/theme/components/layout/footer/footer.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/theme/components/layout/footer/footer.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"site-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n          <ul class=\"list-inline\">\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\">DMCA Policy</a></li>\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\">Privacy Policy</a></li>\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\">Terms of Use</a></li>\r\n            <li class=\"list-inline-item\"><a href=\"javascript:void(0)\">FAQ</a></li>\r\n          </ul>\r\n      </div>\r\n      <div class=\"col-md-6 justify-content-end d-flex\">\r\n          &copy; Copyright 2020 guaranteedownlineclub.com\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/components/layout/footer/footer.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/theme/components/layout/footer/footer.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGhlbWUvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/theme/components/layout/footer/footer.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/theme/components/layout/footer/footer.component.ts ***!
  \****************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * Footer component for Basic theme module
 */


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/modules/theme/components/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/modules/theme/components/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/components/layout/header/header.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/theme/components/layout/header/header.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"site-header\">\r\n  <nav class=\"navbar navbar-expand-lg p-0\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" href=\"javascript:void(0)\">DownLineClub</a>\r\n        <div class=\"collapse navbar-collapse d-flex justify-content-end\" id=\"navbarNav\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" href=\"/\">Home</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf='!loginService.IsAuthUser()'>\r\n              <a class=\"btn btn-radius btn-primary\" href=\"javascript:void(0)\" routerLink=\"/auth/login\">Login</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf='!loginService.IsAuthUser()'>\r\n              <a class=\"btn btn-radius btn-success\" href=\"javascript:void(0)\" routerLink=\"/auth/signup\">Sign Up</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf='loginService.IsAuthUser()'>\r\n                <a class=\"btn btn-radius btn-success\" href=\"javascript:void(0)\" (click)='loginService.deleteUserAccessToken(true)'>Logout</a>\r\n              </li>\r\n          </ul>\r\n        </div>\r\n    </div>\r\n  </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/modules/theme/components/layout/header/header.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/theme/components/layout/header/header.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGhlbWUvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/theme/components/layout/header/header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/theme/components/layout/header/header.component.ts ***!
  \****************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/jwt-auth.service */ "./src/app/core/services/jwt-auth.service.ts");
/**
 * Header component for Basic theme module
 */



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/theme/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/modules/theme/components/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JWTAuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/theme/components/layout/layout/layout.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/theme/components/layout/layout/layout.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-wrapper\">\r\n  <div class=\"container\">  \r\n    <ng-content select=\"router-outlet\"></ng-content>  \r\n  </div>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/modules/theme/components/layout/layout/layout.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/theme/components/layout/layout/layout.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGhlbWUvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/theme/components/layout/layout/layout.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/theme/components/layout/layout/layout.component.ts ***!
  \****************************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/jwt-auth.service */ "./src/app/core/services/jwt-auth.service.ts");
/**
 * layout component for Basic theme module
 */



var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(authService) {
        this.authService = authService;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.isUserLogin = this.authService.IsAuthUser();
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/modules/theme/components/layout/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/modules/theme/components/layout/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_2__["JWTAuthService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    env: 'local',
    host: 'http://localhost/downlineclub-api/' // Add the api url here with slash at the end
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environment/environment */ "./src/environments/environment.ts");




if (_environment_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\downline\downlineclub-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map