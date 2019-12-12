(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-dashboard-home-dashboard-module"],{

/***/ "./src/app/modules/home-dashboard/home-dashboard-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/home-dashboard/home-dashboard-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: HomeDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDashboardRoutingModule", function() { return HomeDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/home-dashboard/home/home.component.ts");
/* harmony import */ var _core_gaurds_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/gaurds/auth-guard.service */ "./src/app/core/gaurds/auth-guard.service.ts");





var routes = [
    {
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: { title: 'Dashboard page' },
        canActivate: [_core_gaurds_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }
];
var HomeDashboardRoutingModule = /** @class */ (function () {
    function HomeDashboardRoutingModule() {
    }
    HomeDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeDashboardRoutingModule);
    return HomeDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/home-dashboard/home-dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home-dashboard/home-dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: HomeDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDashboardModule", function() { return HomeDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-dashboard-routing.module */ "./src/app/modules/home-dashboard/home-dashboard-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/home-dashboard/home/home.component.ts");





var HomeDashboardModule = /** @class */ (function () {
    function HomeDashboardModule() {
    }
    HomeDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _home_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeDashboardRoutingModule"]
            ]
        })
    ], HomeDashboardModule);
    return HomeDashboardModule;
}());



/***/ }),

/***/ "./src/app/modules/home-dashboard/home/home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home-dashboard/home/home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/home-dashboard/home/home.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/home-dashboard/home/home.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS1kYXNoYm9hcmQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/home-dashboard/home/home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/home-dashboard/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/home-dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/home-dashboard/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-home-dashboard-home-dashboard-module.js.map