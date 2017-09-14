webpackJsonp([1,5],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Import the DataService

var AppComponent = (function () {
    // Create an instance of the DataService through dependency injection
    function AppComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.userloggedIn = false;
        // Access the Data Service's getUsers() method we defined
        this._dataService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    }
    AppComponent.prototype.ngOnInit = function () {
        // jquery code for bootstrap4 hamburger navmenu closing in mobile
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#navbarNavAltMarkup>.navbar-nav a').on('click', function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__('.navbar-collapse').removeClass('show');
        });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], AppComponent.prototype, "userloggedIn", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(184),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__settings_settings_component__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_16__settings_settings_component__["a" /* SettingsComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '*', component: __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__settings_settings_component__["a" /* SettingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_8__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_9__services_user_service__["a" /* UserService */],],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        this.sendLoggedInEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('currentUser') === null) {
            console.log('No local storage item');
            // do nothing
        }
        else {
            console.log('local storage item found');
            // READ STRING FROM LOCAL STORAGE
            var retrievedObject = localStorage.getItem('currentUser');
            // CONVERT STRING TO REGULAR JS OBJECT
            var parsedObject = JSON.parse(retrievedObject);
            // ACCESS DATA
            //console.log(parsedObject.item[0].Desc);
            console.log(parsedObject.email);
            // changing Login / Logout tag in top bar
            this.sendLoggedInEvent.emit(true);
        }
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "sendLoggedInEvent", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(185),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(186),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.user = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status // remove localstorage or current session
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('entered login function');
        console.log(this.user.email);
        console.log(this.user.password);
        this.loading = true;
        this.authenticationService.login(this.user.email, this.user.password)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/dashboard']);
            }
            else {
                // login failed
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(187),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__(188),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { UserService } from '../../_services/user.service';
var ProfileComponent = (function () {
    function ProfileComponent() {
        this.userid = '';
        this.userEmail = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // get users details from sessionstorage or localStorage JSON and set user details
        if (localStorage.getItem('currentUser') === null) {
            console.log('No local storage item');
            // do nothing
        }
        else {
            console.log('local storage item found');
            // READ STRING FROM LOCAL STORAGE
            var retrievedObject = localStorage.getItem('currentUser');
            // CONVERT STRING TO REGULAR JS OBJECT
            var parsedObject = JSON.parse(retrievedObject);
            // ACCESS DATA
            //console.log(parsedObject.item[0].Desc);
            console.log(parsedObject);
            this.userid = parsedObject.userid._id;
            this.userEmail = parsedObject.email;
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(189),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.user = {};
        this.loading = false;
        this.error = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
        // reset login status // remove localstorage or current session
        this.authenticationService.logout();
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        console.log('entered register function');
        console.log(this.user.email);
        console.log(this.user.password);
        this.loading = true;
        this.authenticationService.register(this.user.email, this.user.password)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/dashboard']);
            }
            else {
                // login failed
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(190),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__(191),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".container-fluid {\r\n   padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".dashboardcol {\r\n    min-height: 45vh;\r\n    border-right: 1px solid #cecece;\r\n}\r\n.dashboardcol .dashheading {\r\n    text-align: center;\r\n    background-color: #f1f1f1;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    font-weight: bold;\r\n}\r\n.dashheading i {\r\n    padding-right: 10px;\r\n    color: #a4a4a4;\r\n}\r\n.iconcolumns a {\r\n    color: #cecece;\r\n    padding: 10px;\r\n    display: inline-block;\r\n}\r\n@media (max-width:550px){\r\n    .iconcolumns a {\r\n        padding: 10px 1px;\r\n    }\r\n}\r\n\r\n.iconcolumns a:hover {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns a.iconactive {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns {\r\n    background-color: #111111;\r\n}\r\n.col-1.iconcolumns {\r\n    max-width: 50px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".fa-facebook, .fa-facebook-square {\r\n    color: #3b5998\r\n}\r\n.fa-twitter, .fa-twitter-square {\r\n    color: #00aced\r\n}\r\n.fa-google-plus, .fa-google-plus-square {\r\n    color: #dd4b39\r\n}\r\n.fa-linkedin, .fa-linkedin-square {\r\n    color: #007bb6\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".main-form-container {\r\n    max-width: 400px;\r\n    margin-top: 15vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".main-form-container {\r\n    max-width: 400px;\r\n    margin-top: 15vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".fullheight {\r\n    height: 88vh;\r\n}\r\n.dashboardcol {\r\n    min-height: 45vh;\r\n    border-right: 1px solid #cecece;\r\n}\r\n.dashboardcol .dashheading {\r\n    text-align: center;\r\n    background-color: #f1f1f1;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    font-weight: bold;\r\n}\r\n.dashheading i {\r\n    padding-right: 10px;\r\n    color: #a4a4a4;\r\n}\r\n.iconcolumns a {\r\n    color: #cecece;\r\n    padding: 10px;\r\n    display: inline-block;\r\n}\r\n@media (max-width:550px){\r\n    .iconcolumns a {\r\n        padding: 10px 1px;\r\n    }\r\n}\r\n\r\n.iconcolumns a:hover {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns a.iconactive {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns {\r\n    background-color: #111111;\r\n}\r\n.col-1.iconcolumns {\r\n    max-width: 50px !important;\r\n}\r\n/* social buttons */\r\n.btn-twitter {\r\n    color: #fff !important;\r\n    background-color: #00aced;\r\n    border-color: rgba(0,0,0,0.2);\r\n}\r\n.btn-social {\r\n    position: relative;\r\n    padding-left: 44px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.btn-social :first-child {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 32px;\r\n    line-height: 34px;\r\n    font-size: 1.6em;\r\n    text-align: center;\r\n    border-right: 1px solid rgba(0,0,0,0.2);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <!-- Content here -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #12132d;\">\r\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/images/tweetblock-logo.png\"/></a>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n        <div class=\"navbar-nav\">\r\n          <a class=\"nav-item nav-link active\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n          <a class=\"nav-item nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\r\n          <a class=\"nav-item nav-link\" href=\"#\">About Us</a>\r\n          <a class=\"nav-item nav-link\" href=\"#\">Latest News</a>\r\n          <a class=\"nav-item nav-link\" href=\"#\">Blog</a>\r\n          <a class=\"nav-item nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\r\n          <a class=\"nav-item nav-link\" routerLink=\"/settings\" routerLinkActive=\"active\">Settings</a>\r\n          \r\n        </div>\r\n      </div>\r\n\r\n      <form class=\"form-inline\">\r\n          <a class=\"navbar-brand\" routerLink=\"/login\"><span *ngIf=\"!userloggedIn;then content else other_content\">here is ignored</span></a>\r\n          <ng-template #content>Login</ng-template>\r\n          <ng-template #other_content>Logout</ng-template>\r\n        </form>\r\n    </nav>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\"> <!-- top first half row -->\n  <div class=\"col-1 iconcolumns\">\n    <a href=\"\" routerLink=\"/dashboard\" class=\"iconactive\"><i class=\"fa fa-home fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-tachometer fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-line-chart fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-envelope-o fa-lg\"></i></a><br/>\n    <a href=\"\" routerLink=\"/settings\"><i class=\"fa fa-cogs fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-sliders fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-plus fa-lg\"></i></a><br/>\n  </div>\n  <div class=\"col-11\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-xs-12 col-sm-6 col-md-3 dashboardcol\">\n        <div class=\"dashheading\">\n          <span class=\"mainheading\"><img src=\"assets/images/cryptoicons-sm/ethereum.png\" /> Ethereum</span>\n          <span class=\"float-right\"><i class=\"fa fa-bar-chart fa-lg\"></i></span>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 dashboardcol\">\n        <div class=\"dashheading\">\n          <span class=\"mainheading\"><img src=\"assets/images/cryptoicons-sm/omisego.png\" /> OmiseGO</span>\n          <span class=\"float-right\"><i class=\"fa fa-bar-chart fa-lg\"></i></span>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 dashboardcol\">\n        <div class=\"dashheading\">\n          <span class=\"mainheading\"><img src=\"assets/images/cryptoicons-sm/ripple.png\" /> Ripple</span>\n          <span class=\"float-right\"><i class=\"fa fa-bar-chart fa-lg\"></i></span>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 dashboardcol\">\n          <div class=\"dashheading\">\n            <span class=\"mainheading\"><img src=\"assets/images/cryptoicons-sm/litecoin.png\" /> Litecoin</span>\n            <span class=\"float-right\"><i class=\"fa fa-bar-chart fa-lg\"></i></span>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row no-gutters\"> <!-- second half row -->\n  <div class=\"col-1 iconcolumns\">\n    \n  </div>\n  <div class=\"col-11\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-xs-12 col-sm-6 col-md-3 dashboardcol\">\n        <div class=\"dashheading\">\n          <span class=\"mainheading\"><img src=\"assets/images/cryptoicons-sm/nem.png\" /> NEM</span>\n          <span class=\"float-right\"><i class=\"fa fa-bar-chart fa-lg\"></i></span>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 dashboardcol\">\n        <div class=\"dashheading\">\n          <span class=\"mainheading\"><img src=\"assets/images/cryptoicons-sm/dash.png\" /> Dash</span>\n          <span class=\"float-right\"><i class=\"fa fa-bar-chart fa-lg\"></i></span>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 dashboardcol\">\n        <div class=\"dashheading\">\n          <span class=\"mainheading\"><img src=\"assets/images/cryptoicons-sm/iota.png\" /> IOTA</span>\n          <span class=\"float-right\"><i class=\"fa fa-bar-chart fa-lg\"></i></span>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-3 dashboardcol\">\n        <div class=\"dashheading\">\n          <span class=\"mainheading\"><img src=\"assets/images/cryptoicons-sm/monero.png\" /> Monero</span>\n          <span class=\"float-right\"><i class=\"fa fa-bar-chart fa-lg\"></i></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\">\r\n    <div class=\"container\">\r\n      <h1 class=\"jumbotron-heading\">Tweet Block</h1>\r\n      <p class=\"lead text-muted\">Crypto Currency news from all around the world, \r\n        with latest tweets, posts, videos from various de facto channels.\r\n      </p>\r\n      <p>\r\n        <a  routerLink=\"/login\" class=\"btn btn-primary\">Login</a>\r\n        <a  routerLink=\"/signup\" class=\"btn btn-secondary\">Signup</a>\r\n      </p>\r\n      <p>\r\n          or Login using <br/>\r\n          <a href=\"/auth/twitter\"><i class=\"fa fa-twitter-square fa-2x\"></i></a>\r\n          <a href=\"/auth/facebook\"><i class=\"fa fa-facebook-square fa-2x\"></i></a>\r\n          <i class=\"fa fa-linkedin-square fa-2x\"></i>\r\n          <i class=\"fa fa-google-plus-square fa-2x\"></i>\r\n      </p>\r\n    </div>\r\n  </section>\r\n\r\n  <div class=\"album text-muted\">\r\n      <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"text-muted\">\r\n      <div class=\"container\">\r\n        <p class=\"float-right\">\r\n          <a href=\"#\">Back to top</a>\r\n        </p>\r\n        <p>you can customize dashboard for yourself!</p>\r\n        <p>New to tweetblock <a href=\"../../\">Visit the homepage</a> or read our <a href=\"../../tweetblock-guide/\">getting started guide</a>.</p>\r\n      </div>\r\n    </footer>\r\n    \r\n<br/>"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-form-container\">\n  <h3 class=\"text-center jumbotron-heading\">Login</h3>\n  <form>\n    <div class=\"form-group row\">\n      <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\n      <div class=\"col-sm-10\">\n        <input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\n      <div class=\"col-sm-10\">\n        <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n      </div>\n    </div>\n    \n    <div class=\"form-group row\">\n      <div class=\"offset-sm-2 col-sm-10 text-center\">\n        <button (click)=\"login()\" type=\"submit\" class=\"btn btn-primary\">Login</button>\n      </div>\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n  </form>\n</div>"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n        <div class=\"page-header text-center\">\n            <h1><span class=\"fa fa-anchor\"></span> Profile</h1>\n            <a href=\"/logout\" class=\"btn btn-default btn-sm\">Logout</a>\n        </div>\n    \n        <div class=\"row\">\n    \n            <!-- LOCAL INFORMATION -->\n            <div class=\"col-sm-6\">\n                <div class=\"well\">\n                    <h3><span class=\"fa fa-user\"></span> Local</h3>\n    \n                        <p>\n                            <strong>id</strong>: {{userid}}<br>\n                            <strong>email</strong>: {{userEmail}}<br>\n                            <strong>password</strong>: ****\n                        </p>\n    \n                </div>\n            </div>\n    \n        </div>\n\n        <div class=\"col-md-6 col-md-offset-3\">\n            <h4>Customize your dashboard</h4>\n            <h5>Watch your preferred Crypto currency news Live</h5>\n            \n            <div>\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">1.</label>\n                        <div class=\"col-sm-10\">\n                            <select class=\"form-control\" id=\"exampleSelect1\">\n                                <option selected>Ethereum</option>\n                                <option>OmiseGO</option>\n                                <option>Ripple</option>\n                                <option>Litecoin</option>\n                                <option>NEM</option>\n                                <option>Dash</option>\n                                <option>IOTA</option>\n                                <option>Monero</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                            <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">2.</label>\n                            <div class=\"col-sm-10\">\n                                <select class=\"form-control\" id=\"exampleSelect1\">\n                                    <option>Ethereum</option>\n                                    <option selected>OmiseGO</option>\n                                    <option>Ripple</option>\n                                    <option>Litecoin</option>\n                                    <option>NEM</option>\n                                    <option>Dash</option>\n                                    <option>IOTA</option>\n                                    <option>Monero</option>\n                                </select>\n                            </div>\n                    </div>\n                    <div class=\"form-group row\">\n                            <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">3.</label>\n                            <div class=\"col-sm-10\">\n                                <select class=\"form-control\" id=\"exampleSelect1\">\n                                    <option>Ethereum</option>\n                                    <option>OmiseGO</option>\n                                    <option selected>Ripple</option>\n                                    <option>Litecoin</option>\n                                    <option>NEM</option>\n                                    <option>Dash</option>\n                                    <option>IOTA</option>\n                                    <option>Monero</option>\n                                </select>\n                            </div>\n                    </div>\n                    <div class=\"form-group row\">\n                            <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">4.</label>\n                            <div class=\"col-sm-10\">\n                                <select class=\"form-control\" id=\"exampleSelect1\">\n                                    <option>Ethereum</option>\n                                    <option>OmiseGO</option>\n                                    <option>Ripple</option>\n                                    <option selected>Litecoin</option>\n                                    <option>NEM</option>\n                                    <option>Dash</option>\n                                    <option>IOTA</option>\n                                    <option>Monero</option>\n                                </select>\n                            </div>\n                    </div>\n                    <div class=\"form-group row\">\n                            <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">5.</label>\n                            <div class=\"col-sm-10\">\n                                <select class=\"form-control\" id=\"exampleSelect1\">\n                                    <option>Ethereum</option>\n                                    <option>OmiseGO</option>\n                                    <option>Ripple</option>\n                                    <option>Litecoin</option>\n                                    <option selected>NEM</option>\n                                    <option>Dash</option>\n                                    <option>IOTA</option>\n                                    <option>Monero</option>\n                                </select>\n                            </div>\n                    </div>\n                    <div class=\"form-group row\">\n                            <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">6.</label>\n                            <div class=\"col-sm-10\">\n                                <select class=\"form-control\" id=\"exampleSelect1\">\n                                    <option>Ethereum</option>\n                                    <option>OmiseGO</option>\n                                    <option>Ripple</option>\n                                    <option>Litecoin</option>\n                                    <option>NEM</option>\n                                    <option selected>Dash</option>\n                                    <option>IOTA</option>\n                                    <option>Monero</option>\n                                </select>\n                            </div>\n                    </div>\n                    <div class=\"form-group row\">\n                            <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">7.</label>\n                            <div class=\"col-sm-10\">\n                                <select class=\"form-control\" id=\"exampleSelect1\">\n                                    <option>Ethereum</option>\n                                    <option>OmiseGO</option>\n                                    <option>Ripple</option>\n                                    <option>Litecoin</option>\n                                    <option>NEM</option>\n                                    <option>Dash</option>\n                                    <option selected>IOTA</option>\n                                    <option>Monero</option>\n                                </select>\n                            </div>\n                    </div>\n                    <div class=\"form-group row\">\n                            <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">8.</label>\n                            <div class=\"col-sm-10\">\n                                <select class=\"form-control\" id=\"exampleSelect1\">\n                                    <option>Ethereum</option>\n                                    <option>OmiseGO</option>\n                                    <option>Ripple</option>\n                                    <option>Litecoin</option>\n                                    <option>NEM</option>\n                                    <option>Dash</option>\n                                    <option>IOTA</option>\n                                    <option selected>Monero</option>\n                                </select>\n                            </div>\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-primary\">Save preference</button>\n                </form>\n\n            </div>\n            <p><a [routerLink]=\"['/login']\">Logout</a></p>\n        </div>\n    \n    </div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-form-container\">\n  <h3 class=\"text-center jumbotron-heading\">Register</h3>\n  <form>\n    <div class=\"form-group row\">\n      <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\n      <div class=\"col-sm-10\">\n        <input [(ngModel)]=\"user.email\" type=\"email\" name=\"email\" class=\"form-control\"  id=\"email\" placeholder=\"Email\">\n      </div>\n    </div>\n    <div class=\"form-group row\">\n      <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\n      <div class=\"col-sm-10\">\n        <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n      </div>\n    </div>\n    \n    <div class=\"form-group row\">\n      <div class=\"offset-sm-2 col-sm-10 text-center\">\n        <button (click)=\"register()\" type=\"submit\" class=\"btn btn-primary\">Signup</button>\n      </div>\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n  </form>\n  </div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\"> <!-- top first half row -->\n  <div class=\"col-1 iconcolumns fullheight\">\n    <a href=\"\" routerLink=\"/dashboard\"><i class=\"fa fa-home fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-tachometer fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-line-chart fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-envelope-o fa-lg\"></i></a><br/>\n    <a href=\"\" class=\"iconactive\" routerLink=\"/settings\"><i class=\"fa fa-cogs fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-sliders fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-plus fa-lg\"></i></a><br/>\n  </div>\n  <div class=\"col-11\">\n      <div class=\"row\">\n        <div class=\"container\">\n          <p>&nbsp;</p>\n          <div class=\"col-md-6\">\n            <h6>Login using your twitter account to start getting feeds</h6>\n            <p>You will login to twitter app cryptoNews</p>\n            <p>\n                <a class=\"btn btn-social btn-twitter\">\n                  <i class=\"fa fa-twitter\"></i> Sign in with Twitter\n                </a>\n            </p>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userid = currentUser;
    }
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('/login', JSON.stringify({ email: email, password: password }), options)
            .map(function (response) {
            // login successful if there's json in the response
            var userid = response.json();
            if (userid) {
                // set userid property
                _this.userid = userid;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid }));
                sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.register = function (email, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('/signup', JSON.stringify({ email: email, password: password }), options)
            .map(function (response) {
            // signup successful if there's a json in the response
            var userid = response.json();
            if (userid) {
                // set userid property
                _this.userid = userid;
                // store username and id in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid }));
                sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.userid = null;
        localStorage.removeItem('currentUser');
        sessionStorage.clear();
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getUsers = function () {
        var _this = this;
        return this._http.get("/api/users")
            .map(function (result) { return _this.result = result.json().data; });
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 90;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(113);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[225]);
//# sourceMappingURL=main.bundle.js.map