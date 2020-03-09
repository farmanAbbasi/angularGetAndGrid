(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ang7/ang7.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ang7/ang7.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn\" (mousedown)='clickButton()'>\nclick\n</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">CoolApp</a>\n    <nav>\n      <ul>\n        <li><a href=\"#\" routerLink=\"/\">Home</a></li>\n        <li><a href=\"#\" routerLink=\"/list\">List</a></li>\n        <li><a href=\"#\" routerLink=\"/grid\">Grid</a></li>\n        <li><a href=\"#\" routerLink=\"/ang7\">Ang7</a></li>\n        <li><a href=\"#\" routerLink=\"/forms\">Forms</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/forms.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/forms.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"messageForm\" (ngSubmit)=\"onSubmit(messageForm.value)\">\n    <h5 *ngIf=\"success\">Your form is valid!</h5>\n\n    <label>\n        Name:\n        <input type=\"text\" formControlName=\"name\">\n        <div *ngIf=\"submitted && messageForm.controls.name.errors\" class=\"error\">\n            <div *ngIf=\"messageForm.controls.name.errors.required\">Your name is required</div>\n\n        </div>\n    </label>\n\n    <label>\n        Message:\n        <textarea formControlName=\"message\"></textarea>\n        <div *ngIf=\"submitted && messageForm.controls.message.errors\" class=\"error\">\n            <div *ngIf=\"messageForm.controls.message.errors.required\">A message is required</div>\n        </div>\n    </label>\n    <label>\n        E-mail:\n        <input type=\"text\" formControlName=\"email\">\n        <div *ngIf=\"submitted && messageForm.controls.email.errors\" class=\"error2\" [style.background]=\"messageForm.controls.email.errors.required?'yellow': 'yellowgreen'\">\n            <div *ngIf=\"messageForm.controls.email.errors.required\">An email is requred</div>\n            <div *ngIf=\"messageForm.controls.email.errors.email\">Enter a valid email</div>\n        </div>\n\n    </label>\n\n    <input type=\"submit\" value=\"Send message\" class=\"cta\">\n</form>\n\n<div *ngIf=\"submitted && success\" class=\"results\">\n    <strong>Name:</strong>\n    <span>{{ messageForm.controls.name.value }}</span>\n\n    <strong>Message:</strong>\n    <span>{{ messageForm.controls.message.value }}</span>\n\n    <strong>Email:</strong>\n    <span>{{ messageForm.controls.email.value }}</span>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/grid/grid.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/grid/grid.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container\">\n    <main>\n        main\n    </main>\n\n    <section class=\"nom\">\n        nom\n    </section>\n    <section class=\"yum\">\n        yum\n    </section>\n    <div class=\"header2\">\n        header2\n    </div>\n\n    <div class=\"candy\">\n        candy\n    </div>\n    <footer>\n        footer\n    </footer>\n\n</div>\n\n<div class=\"grid-container2\">\n    <div class=\"a\">\n        section a\n    </div>\n    <div class=\"b\">\n        section b\n    </div>\n    <div class=\"c\">\n        section c\n    </div>\n    <div class=\"d\">\n        section d\n    </div>\n</div>\n\n<div class=\"grid-container3\"> \n<div class=\"left\"> left</div>\n<div class=\"right\">right</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome!</h1>\n\n<div class=\"play-container\">\n    <p>You've clicked <span (click)=\"countClick()\">this</span> {{ clickCounter }} times.</p>\n    <p>Click<span (click)=\"countClickReduce()\">this</span> to reduce.</p>\n\n</div>\n<div class=\"play-container\">\n    <p>\n        <input type=\"text\" [(ngModel)]=\"name\"><br>\n        <strong>You said: </strong> {{ name }}\n    </p>\n</div>\n\n<div class=\"play-container\" [ngStyle]=\"{\n    'background-color': clickCounter > 4 ? 'yellow' : 'lightgray',\n    'border':           clickCounter > 4 ? '4px solid black' : 'none'}\n\">\n    <ng-template [ngIf]=\"clickCounter > 4\" [ngIfElse]=\"none\">\n        <p>The click counter <strong>IS GREATER</strong> than 4.</p>\n    </ng-template>\n\n    <ng-template #none>\n        <p>The click counter is <strong>not greater</strong> than 4.</p>\n    </ng-template>\n</div>\n\n<!-- <ng-template [ngIf]=\"gola==false\" [ngIfElse]=\"no\">\n    <p>No gola</p>\n</ng-template>\n<ng-template #no>\n    <p>Gola</p>\n</ng-template> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Breweries</h1>\n<h3>Using Observables</h3>\n<ul *ngIf=\"brews | async; else loading\">\n    <li *ngFor=\"let brew of brews | async\">\n    <p class=\"name\">{{ brew.name }}</p>\n    <p class=\"country\">{{ brew.country }}</p>\n    <a class=\"site\" href=\"{{ brew.website_url }}\" target=\"_blank\">visit</a>\n  </li>\n</ul>\n<ng-template #loading>\n<img src=\"../../assets/loading.gif\" style=\"width:250px;height:120px\" alt=\"Loading...\">\n</ng-template>\n<h3>Using Promises , Aync and Await</h3>\n<ul *ngIf=\"brews2\">\n    <li *ngFor=\"let brew of brews2\">\n    <p class=\"name\">{{ brew.name }}</p>\n    <p class=\"country\">{{ brew.country }}</p>\n    <a class=\"site\" href=\"{{ brew.website_url }}\" target=\"_blank\">visit</a>\n  </li>\n</ul>\n<h3>Using Subscribe</h3>\n<ul *ngIf=\"brews3\">\n    <li *ngFor=\"let brew of brews3\">\n    <p class=\"name\">{{ brew.name }}</p>\n    <p class=\"country\">{{ brew.country }}</p>\n    <a class=\"site\" href=\"{{ brew.website_url }}\" target=\"_blank\">visit</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/ang7/ang7.component.scss":
/*!******************************************!*\
  !*** ./src/app/ang7/ang7.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZzcvYW5nNy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ang7/ang7.component.ts":
/*!****************************************!*\
  !*** ./src/app/ang7/ang7.component.ts ***!
  \****************************************/
/*! exports provided: Ang7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ang7Component", function() { return Ang7Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Ang7Component = /** @class */ (function () {
    function Ang7Component() {
    }
    Ang7Component.prototype.ngOnInit = function () {
    };
    Ang7Component.prototype.clickButton = function () {
        console.log('this is clicked');
    };
    Ang7Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ang7',
            template: __webpack_require__(/*! raw-loader!./ang7.component.html */ "./node_modules/raw-loader/index.js!./src/app/ang7/ang7.component.html"),
            styles: [__webpack_require__(/*! ./ang7.component.scss */ "./src/app/ang7/ang7.component.scss")]
        })
    ], Ang7Component);
    return Ang7Component;
}());



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
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");
/* harmony import */ var _ang7_ang7_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ang7/ang7.component */ "./src/app/ang7/ang7.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");








var routes = [
    {
        path: 'list',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    },
    {
        path: 'forms',
        component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"]
    },
    {
        path: 'ang7',
        component: _ang7_ang7_component__WEBPACK_IMPORTED_MODULE_6__["Ang7Component"]
    },
    {
        path: 'grid',
        component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_5__["GridComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular 8';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/grid/grid.component.ts");
/* harmony import */ var _ang7_ang7_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ang7/ang7.component */ "./src/app/ang7/ang7.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"],
                _ang7_ang7_component__WEBPACK_IMPORTED_MODULE_11__["Ang7Component"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_4__["FormsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.scss":
/*!********************************************!*\
  !*** ./src/app/forms/forms.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: block;\n}\nlabel input, label textarea {\n  display: block;\n  width: 50%;\n  margin-bottom: 20px;\n  padding: 1em;\n}\nlabel .error {\n  margin-top: -20px;\n  background: yellow;\n  padding: 0.5em;\n  display: inline-block;\n  font-size: 0.9em;\n  margin-bottom: 20px;\n}\nlabel .error2 {\n  margin-top: -20px;\n  padding: 0.5em;\n  display: inline-block;\n  font-size: 0.9em;\n  margin-bottom: 20px;\n}\n.cta {\n  background: #7700FF;\n  border: none;\n  color: white;\n  text-transform: uppercase;\n  border-radius: 4px;\n  padding: 1em;\n  cursor: pointer;\n  font-family: \"Montserrat\";\n}\n.results {\n  margin-top: 50px;\n}\n.results strong {\n  display: block;\n}\n.results span {\n  margin-bottom: 20px;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvQzpcXFVzZXJzXFxtb2FiYmFzaVxcRGVza3RvcFxcUHl0aG9uUHJvamVjdHNcXGFuZ3VsYXI3XFxteS1uZXctYXBwL3NyY1xcYXBwXFxmb3Jtc1xcZm9ybXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvcm1zL2Zvcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NSO0FERUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRElBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDRko7QURLQTtFQUNJLGdCQUFBO0FDRko7QURJSTtFQUNJLGNBQUE7QUNGUjtBRElJO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgICAgICAgcGFkZGluZzogLjVlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuZXJyb3IyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmN0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzcwMEZGO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG59XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59IiwibGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmxhYmVsIGlucHV0LCBsYWJlbCB0ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxZW07XG59XG5sYWJlbCAuZXJyb3Ige1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxubGFiZWwgLmVycm9yMiB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY3RhIHtcbiAgYmFja2dyb3VuZDogIzc3MDBGRjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cblxuLnJlc3VsdHMge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuLnJlc3VsdHMgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucmVzdWx0cyBzcGFuIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FormsComponent = /** @class */ (function () {
    function FormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
    }
    FormsComponent.prototype.ngOnInit = function () {
        this.messageForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    FormsComponent.prototype.onSubmit = function (value) {
        console.log(value);
        this.submitted = true;
        if (this.messageForm.invalid) {
            return;
        }
        this.success = true;
    };
    FormsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/forms/forms.component.scss")]
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/grid/grid.component.scss":
/*!******************************************!*\
  !*** ./src/app/grid/grid.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  display: grid;\n  grid-template-columns: 1fr 1.2fr 1.5fr;\n  grid-template-rows: 1fr 4fr 3fr 2fr;\n  height: 100vh;\n}\n\nmain {\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row: 1/3;\n  background-color: pink;\n}\n\n.nom {\n  grid-column: 1/2;\n  grid-row: 3/4;\n  background-color: red;\n}\n\n.yum {\n  grid-column: 2/3;\n  grid-row: 3/4;\n  background-color: yellow;\n}\n\n.header2 {\n  grid-column: 3/4;\n  grid-row: 1/2;\n  background-color: orange;\n}\n\n.candy {\n  grid-column: 3/4;\n  grid-row: 2/5;\n  background-color: grey;\n}\n\nfooter {\n  grid-column: 1/3;\n  grid-row: 4/5;\n  background-color: blue;\n}\n\n.grid-container2 {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n  grid-template-rows: 25% 25% 25% 25%;\n  grid-template-areas: \"a  a  b  b\" \"a  a  b  b\" \"a  a  c  c\" \"d   d  d  d\";\n  height: 100vh;\n}\n\n.a {\n  grid-area: a;\n  background-color: lightgreen;\n}\n\n.b {\n  grid-area: b;\n  background-color: yellowgreen;\n}\n\n.c {\n  grid-area: c;\n  background-color: green;\n}\n\n.d {\n  grid-area: d;\n  background-color: darkolivegreen;\n}\n\n.grid-container3 {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 50% 50%;\n  grid-template-areas: \"left right\" \"left right\";\n  height: 100vh;\n}\n\n.left {\n  grid-area: left;\n  background-color: goldenrod;\n}\n\n.right {\n  grid-area: right;\n  background-color: gold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9DOlxcVXNlcnNcXG1vYWJiYXNpXFxEZXNrdG9wXFxQeXRob25Qcm9qZWN0c1xcYW5ndWxhcjdcXG15LW5ldy1hcHAvc3JjXFxhcHBcXGdyaWRcXGdyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBS0EsYUFBQTtBQ0pKOztBRE1BO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFNQSxzQkFBQTtBQ1JKOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUNQSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDTko7O0FEU0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ05KOztBRFNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNOSjs7QURTQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDTko7O0FEU0E7RUFDSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHlFQUFBO0VBS0EsYUFBQTtBQ1ZKOztBRFlBO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0FDVEo7O0FEV0E7RUFDSSxZQUFBO0VBQ0EsNkJBQUE7QUNSSjs7QURVQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQ1BKOztBRFNBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0FDTko7O0FEVUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhDQUNBO0VBRUEsYUFBQTtBQ1RKOztBRFlBO0VBQ0ksZUFBQTtFQUNKLDJCQUFBO0FDVEE7O0FEV0E7RUFDSSxnQkFBQTtFQUNKLHNCQUFBO0FDUkEiLCJmaWxlIjoic3JjL2FwcC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmdyaWQtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuMmZyIDEuNWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDNmciAyZnI7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgIC8vIFwibWFpbiBtYWluIGhlYWRlclwiXHJcbiAgICAvLyBcIm1haW4gbWFpbiB3aGF0ZXZlclwiO1xyXG5cclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxubWFpbntcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OjE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6MztcclxuICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAvL29yXHJcbiAgICAvL2dyaWQtYXJlYToxIC8zIC8xLyAzO1xyXG4gICAgLy8gb3IgdG8gdXNlIHRoZSBhYm92ZSBjb21tZW50ZWQgY29kZVxyXG4gICAgLy91c2VcclxuICAgIC8vZ3JpZC1hcmVhOm1haW5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XHJcbn1cclxuLm5vbXtcclxuICAgIGdyaWQtY29sdW1uOjEvMjtcclxuICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuLnl1bXtcclxuICAgIGdyaWQtY29sdW1uOjIvMztcclxuICAgIGdyaWQtcm93OiAzLzQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcblxyXG59XHJcbi5oZWFkZXIye1xyXG4gICAgZ3JpZC1jb2x1bW46My80O1xyXG4gICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuXHJcbn1cclxuLmNhbmR5e1xyXG4gICAgZ3JpZC1jb2x1bW46My80O1xyXG4gICAgZ3JpZC1yb3c6IDIvNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcblxyXG59XHJcbmZvb3RlcntcclxuICAgIGdyaWQtY29sdW1uOjEvMztcclxuICAgIGdyaWQtcm93OiA0LzU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlOyBcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czoyNSUgMjUlIDI1JSAyNSU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlwiYSAgYSAgYiAgYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYSAgYSAgYiAgYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYSAgYSAgYyAgY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZCAgIGQgIGQgIGRcIjtcclxuICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5he1xyXG4gICAgZ3JpZC1hcmVhOiBhO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxufVxyXG4uYntcclxuICAgIGdyaWQtYXJlYTogYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xyXG59XHJcbi5je1xyXG4gICAgZ3JpZC1hcmVhOiBjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuLmR7XHJcbiAgICBncmlkLWFyZWE6IGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcclxufVxyXG5cclxuXHJcbi5ncmlkLWNvbnRhaW5lcjN7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwibGVmdCByaWdodFwiXHJcbiAgICBcImxlZnQgcmlnaHRcIjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5sZWZ0e1xyXG4gICAgZ3JpZC1hcmVhOiBsZWZ0O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2RcclxufVxyXG4ucmlnaHR7XHJcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBnb2xkXHJcbn0iLCIuZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxLjJmciAxLjVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDNmciAyZnI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbm1haW4ge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICBncmlkLXJvdzogMS8zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufVxuXG4ubm9tIHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ueXVtIHtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDMvNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xufVxuXG4uaGVhZGVyMiB7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmNhbmR5IHtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbiAgZ3JpZC1yb3c6IDIvNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDQvNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmdyaWQtY29udGFpbmVyMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSAyNSUgMjUlIDI1JTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJhICBhICBiICBiXCIgXCJhICBhICBiICBiXCIgXCJhICBhICBjICBjXCIgXCJkICAgZCAgZCAgZFwiO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uYSB7XG4gIGdyaWQtYXJlYTogYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmIge1xuICBncmlkLWFyZWE6IGI7XG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuO1xufVxuXG4uYyB7XG4gIGdyaWQtYXJlYTogYztcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5kIHtcbiAgZ3JpZC1hcmVhOiBkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrb2xpdmVncmVlbjtcbn1cblxuLmdyaWQtY29udGFpbmVyMyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCUgNTAlO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxlZnQgcmlnaHRcIiBcImxlZnQgcmlnaHRcIjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxlZnQge1xuICBncmlkLWFyZWE6IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcbn1cblxuLnJpZ2h0IHtcbiAgZ3JpZC1hcmVhOiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/grid/grid.component.ts":
/*!****************************************!*\
  !*** ./src/app/grid/grid.component.ts ***!
  \****************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () {
    };
    GridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/grid/grid.component.scss")]
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  font-weight: bold;\n  background: lightgray;\n  padding: 0.3em 0.8em;\n  cursor: pointer;\n}\n\n.play-container {\n  padding: 3em;\n  border: 1px solid lightgray;\n  margin-bottom: 1em;\n}\n\n.play-container input {\n  padding: 1em;\n  margin-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG1vYWJiYXNpXFxEZXNrdG9wXFxQeXRob25Qcm9qZWN0c1xcYW5ndWxhcjdcXG15LW5ldy1hcHAvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbiAgICBwYWRkaW5nOiAuM2VtIC44ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wbGF5LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgICB9XHJcbn0iLCJzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMC4zZW0gMC44ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBsYXktY29udGFpbmVyIHtcbiAgcGFkZGluZzogM2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5wbGF5LWNvbnRhaW5lciBpbnB1dCB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    // gola: boolean=true;
    function HomeComponent() {
        this.clickCounter = 0;
        this.name = "";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.countClick = function () {
        this.clickCounter += 1;
    };
    HomeComponent.prototype.countClickReduce = function () {
        if (this.clickCounter > 0) {
            this.clickCounter -= 1;
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    //or
    // constructor(private http: HttpClient){
    // }
    HttpService.prototype.myMethod = function () {
        return console.log('Hey, what is up!');
    };
    HttpService.prototype.getSomethingUsingObservable = function () {
        return this.http.get('https://api.openbrewerydb.org/breweries')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(5000));
        // tap(console.log))
    };
    HttpService.prototype.getSomethingUsingPromise = function () {
        return this.http.get('https://api.openbrewerydb.org/breweries').toPromise();
    };
    HttpService.prototype.getSomethingUsingSubscribe = function () {
        return this.http.get('https://api.openbrewerydb.org/breweries');
    };
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/list/list.component.scss":
/*!******************************************!*\
  !*** ./src/app/list/list.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\nul li {\n  background: #eeeeee;\n  padding: 1em;\n  margin-right: 10px;\n  width: 20%;\n  height: 200px;\n  margin-bottom: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\nul li p {\n  margin: 0;\n}\nul li p.name {\n  font-weight: bold;\n  font-size: 1.2rem;\n}\nul li p.country {\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9DOlxcVXNlcnNcXG1vYWJiYXNpXFxEZXNrdG9wXFxQeXRob25Qcm9qZWN0c1xcYW5ndWxhcjdcXG15LW5ldy1hcHAvc3JjXFxhcHBcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NSO0FEQ1E7RUFDSSxTQUFBO0FDQ1o7QURFUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNBWjtBREVRO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ0FaIiwiZmlsZSI6InNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLmNvdW50cnkge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwidWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxudWwgbGkge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxudWwgbGkgcCB7XG4gIG1hcmdpbjogMDtcbn1cbnVsIGxpIHAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbnVsIGxpIHAuY291bnRyeSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmbGV4LWdyb3c6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(http) {
        this.http = http;
    }
    //note: async is used for method 2 , method 1 and 3 will work without this also 
    ListComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.http.myMethod();
                        //1
                        //this.data and this.brews are observables so in the html we have to use
                        // async pipe
                        this.brews = this.http.getSomethingUsingObservable();
                        //2
                        //this is returning a promise
                        _a = this;
                        return [4 /*yield*/, this.http.getSomethingUsingPromise()];
                    case 1:
                        //2
                        //this is returning a promise
                        _a.brews2 = _b.sent();
                        //3
                        //this returns ob
                        this.http.getSomethingUsingSubscribe()
                            .subscribe(function (data) {
                            _this.brews3 = data;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ListComponent.ctorParameters = function () { return [
        { type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ]; };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/list/list.component.scss")]
        })
    ], ListComponent);
    return ListComponent;
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
    production: false
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
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

module.exports = __webpack_require__(/*! C:\Users\moabbasi\Desktop\PythonProjects\angular7\my-new-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map