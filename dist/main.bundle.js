webpackJsonp([1,5],{

/***/ 122:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 122;


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(154);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COINS; });
var COINS = [
    {
        "Ethereum": {
            name: "Ethereum",
            id: "2312333412",
            logourl: "assets/images/cryptoicons-sm/ethereum.png",
            handle: "@ethereumproject",
            handleurl: "https://twitter.com/ethereumproject"
        },
        "OmiseGO": {
            name: "OmiseGO",
            id: "831847934534746114",
            logourl: "assets/images/cryptoicons-sm/omisego.png",
            handle: "@omise_go",
            handleurl: "https://twitter.com/omise_go"
        },
        "Ripple": {
            name: "Ripple",
            id: "1051053836",
            logourl: "assets/images/cryptoicons-sm/ripple.png",
            handle: "@Ripple",
            handleurl: "https://twitter.com/Ripple"
        },
        "Litecoin": {
            name: "Litecoin",
            id: "1393174363",
            logourl: "assets/images/cryptoicons-sm/litecoin.png",
            handle: "@LitecoinProject",
            handleurl: "https://twitter.com/LitecoinProject"
        },
        "NEM": {
            name: "NEM",
            id: "2313671966",
            logourl: "assets/images/cryptoicons-sm/nem.png",
            handle: "@NEMofficial",
            handleurl: "https://twitter.com/NEMofficial"
        },
        "Dash": {
            name: "Dash",
            id: "2338506822",
            logourl: "assets/images/cryptoicons-sm/dash.png",
            handle: "@Dashpay",
            handleurl: "https://twitter.com/Dashpay"
        },
        "IOTA": {
            name: "IOTA",
            id: "3992601857",
            logourl: "assets/images/cryptoicons-sm/iota.png",
            handle: "@iotatoken",
            handleurl: "https://twitter.com/iotatoken"
        },
        "Monero": {
            name: "Monero",
            id: "2478439963",
            logourl: "assets/images/cryptoicons-sm/monero.png",
            handle: "@monerocurrency",
            handleurl: "https://twitter.com/monerocurrency"
        },
        "Lisk": {
            name: "Lisk",
            id: "4736263474",
            logourl: "",
            handle: "@LiskHQ",
            handleurl: "https://twitter.com/LiskHQ"
        },
        "Bitcoin": {
            name: "Bitcoin",
            id: "357312062",
            logourl: "",
            handle: "@Bitcoin",
            handleurl: "https://twitter.com/Bitcoin"
        },
        "EthereumClassic": {
            name: "EthereumClassic",
            id: "759252279862104064",
            logourl: "",
            handle: "@eth_classic",
            handleurl: "https://twitter.com/eth_classic"
        },
        "NEO": {
            name: "NEO",
            id: "2592325530",
            logourl: "",
            handle: "@NEO_Blockchain",
            handleurl: "https://twitter.com/NEO_Blockchain"
        },
        "BitConnect": {
            name: "BitConnect",
            id: "711438260354953216",
            logourl: "",
            handle: "@bitconnect",
            handleurl: "https://twitter.com/bitconnect"
        },
        "Qtum": {
            name: "Qtum",
            id: "773009781644677120",
            logourl: "",
            handle: "@QtumOfficial",
            handleurl: "https://twitter.com/QtumOfficial"
        },
        "stratis": {
            name: "stratis",
            id: "734688391942524928",
            logourl: "",
            handle: "@stratisplatform",
            handleurl: "https://twitter.com/stratisplatform"
        },
        "Tether": {
            name: "Tether",
            id: "2893133450",
            logourl: "",
            handle: "@Tether_to",
            handleurl: "https://twitter.com/Tether_to"
        },
        "Zcash": {
            name: "Zcash",
            id: "4633094778",
            logourl: "",
            handle: "@zcashco",
            handleurl: "https://twitter.com/zcashco"
        },
        "Waves": {
            name: "Waves",
            id: "707515829798182912",
            logourl: "",
            handle: "@wavesplatform",
            handleurl: "https://twitter.com/wavesplatform"
        },
        "Ark": {
            name: "ArkEcosystem",
            id: "774791455680434176",
            logourl: "",
            handle: "@ArkEcosystem",
            handleurl: "https://twitter.com/ArkEcosystem"
        },
        "Steem": {
            name: "Steem",
            id: "711030662728437760",
            logourl: "",
            handle: "@steemit",
            handleurl: "https://twitter.com/steemit"
        },
        "MaidSafeCoin": {
            name: "MaidSafeCoin",
            id: "1322660676",
            logourl: "",
            handle: "@maidsafe",
            handleurl: "https://twitter.com/maidsafe"
        },
        "Bytecoin": {
            name: "Bytecoin",
            id: "2510084300",
            logourl: "",
            handle: "@Bytecoin_BCN",
            handleurl: "https://twitter.com/Bytecoin_BCN"
        },
        "Golem": {
            name: "Golem",
            id: "4053977488",
            logourl: "",
            handle: "@golemproject",
            handleurl: "https://twitter.com/golemproject"
        },
        "EOS": {
            name: "EOS",
            id: "862675563693125632",
            logourl: "",
            handle: "@EOS_io",
            handleurl: "https://twitter.com/EOS_io"
        },
        "Decred": {
            name: "Decred",
            id: "2349043879",
            logourl: "",
            handle: "@decredproject",
            handleurl: "https://twitter.com/decredproject"
        },
        "Attentiontoken": {
            name: "Attentiontoken",
            id: "841424245938769920",
            logourl: "",
            handle: "@Attention",
            handleurl: "https://twitter.com/AttentionToken"
        },
        "Veritaseum": {
            name: "Veritaseum",
            id: "2571393578",
            logourl: "",
            handle: "@Veritaseuminc",
            handleurl: "https://twitter.com/Veritaseuminc"
        },
        "BitShares": {
            name: "BitShares",
            id: "503238457",
            logourl: "",
            handle: "@bitshares",
            handleurl: "https://twitter.com/bitshares"
        },
        "Augur": {
            name: "Augur",
            id: "2895317462",
            logourl: "",
            handle: "@AugurProject",
            handleurl: "https://twitter.com/AugurProject"
        },
        "TenX": {
            name: "TenX",
            id: "4585412124",
            logourl: "",
            handle: "@tenxwallet",
            handleurl: "https://twitter.com/tenxwallet"
        },
        "StellarLumens": {
            name: "StellarLumens",
            id: "2460502890",
            logourl: "",
            handle: "@StellarOrg",
            handleurl: "https://twitter.com/StellarOrg"
        },
        "Komodo": {
            name: "Komodo",
            id: "769457743807844352",
            logourl: "",
            handle: "@KomodoPlatform",
            handleurl: "https://twitter.com/KomodoPlatform"
        },
        "Hshare": {
            name: "Hshare",
            id: "877078771366453248",
            logourl: "",
            handle: "@Mkt_Hcash",
            handleurl: "https://twitter.com/Mkt_Hcash"
        },
        "PIVX": {
            name: "PIVX",
            id: "4020178512",
            logourl: "",
            handle: "@_pivx",
            handleurl: "https://twitter.com/_pivx"
        },
        "Nexus": {
            name: "Nexus",
            id: "2575764354",
            logourl: "",
            handle: "@NxsEarth",
            handleurl: "https://twitter.com/NxsEarth"
        },
        "Metal": {
            name: "Metal",
            id: "3111739836",
            logourl: "",
            handle: "@metalpaysme",
            handleurl: "https://twitter.com/metalpaysme"
        },
        "Factom": {
            name: "Factom",
            id: "2804855658",
            logourl: "",
            handle: "@factom",
            handleurl: "https://twitter.com/factom"
        },
        "iconominet": {
            name: "iconominet",
            id: "725253338640617472",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "DigixGlobal": {
            name: "DigixGlobal",
            id: "2925093697",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "ByteballOrg": {
            name: "ByteballOrg",
            id: "773447880564731904",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "SiaTechHQ": {
            name: "SiaTechHQ",
            id: "3351041295",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "civickey": {
            name: "civickey",
            id: "4711101020",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "DigiByteCoin": {
            name: "DigiByteCoin",
            id: "2266631022",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "BitPopulous": {
            name: "BitPopulous",
            id: "808032684270354433",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "BitcoinDark": {
            name: "BitcoinDark",
            id: "2611894398",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "gnosisPM": {
            name: "gnosisPM",
            id: "3448833448",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "ArdorPlatform": {
            name: "ArdorPlatform",
            id: "744075632997470208",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "SingularDTV": {
            name: "SingularDTV",
            id: "736586614797783040",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "gamecredits": {
            name: "gamecredits",
            id: "3094365867",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "0xProject": {
            name: "0xProject",
            id: "826699259441328128",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "The_Blocknet": {
            name: "The_Blocknet",
            id: "2842476639",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "dogecoin": {
            name: "dogecoin",
            id: "2235729541",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "syscoin": {
            name: "syscoin",
            id: "119060937",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "FunFairTech": {
            name: "FunFairTech",
            id: "871853588540248064",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "LykkeCity": {
            name: "LykkeCity",
            id: "3741781096",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "aetrnty": {
            name: "aetrnty",
            id: "760049490187386880",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "BancorNetwork": {
            name: "BancorNetwork",
            id: "816646997356777472",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "monaco_card": {
            name: "monaco_card",
            id: "864347902029709314",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "vergecurrency": {
            name: "vergecurrency",
            id: "4826209539",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "ethstatus": {
            name: "ethstatus",
            id: "774689518767181828",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "binance_2017": {
            name: "binance_2017",
            id: "877807935493033984",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "gas": {
            name: "gas",
            id: "X",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "bitdealuk": {
            name: "bitdealuk",
            id: "877429242128023552",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "edgelessproject": {
            name: "edgelessproject",
            id: "805450407078203392",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "IO_Coin": {
            name: "IO_Coin",
            id: "2648931079",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "NxtCommunity": {
            name: "NxtCommunity",
            id: "2243862290",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "bitquence": {
            name: "bitquence",
            id: "862007728956485632",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "RiseVisionTeam": {
            name: "RiseVisionTeam",
            id: "723270672986845184",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "ParticlProject": {
            name: "ParticlProject",
            id: "835194759178244096",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "ubiqsmart": {
            name: "ubiqsmart",
            id: "2917040642",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "firstcoin": {
            name: "firstcoin",
            id: "X",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "AragonProject": {
            name: "AragonProject",
            id: "828668619986964480",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "wingsplatform": {
            name: "wingsplatform",
            id: "732169766450954240",
            logourl: "",
            handle: "",
            handleurl: ""
        },
        "NAVCoin": {
            name: "NAVCoin",
            id: "2532881881",
            logourl: "",
            handle: "",
            handleurl: ""
        }
    }
];
//# sourceMappingURL=coins.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__(34);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(80);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AppComponent.prototype, "userloggedIn", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(251),
        styles: [__webpack_require__(225)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngui_auto_complete__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngui_auto_complete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__ngui_auto_complete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filter_pipe__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_socialcallback_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_streamtweets_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard_component__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_page_not_found_page_not_found_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_fbcallback_fbcallback_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_twittercallback_twittercallback_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_privacy_policy_privacy_policy_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_terms_of_service_terms_of_service_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_googlecallback_googlecallback_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_linkedincallback_linkedincallback_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_twitterwall_twitterwall_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_events_events_component__ = __webpack_require__(140);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_17__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_18__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_29__pages_events_events_component__["a" /* EventsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'fbcallback', component: __WEBPACK_IMPORTED_MODULE_22__pages_fbcallback_fbcallback_component__["a" /* FbcallbackComponent */] },
    { path: 'twittercallback', component: __WEBPACK_IMPORTED_MODULE_23__pages_twittercallback_twittercallback_component__["a" /* TwittercallbackComponent */] },
    { path: 'googlecallback', component: __WEBPACK_IMPORTED_MODULE_26__pages_googlecallback_googlecallback_component__["a" /* GooglecallbackComponent */] },
    { path: 'linkedincallback', component: __WEBPACK_IMPORTED_MODULE_27__pages_linkedincallback_linkedincallback_component__["a" /* LinkedincallbackComponent */] },
    { path: 'twitterwall', component: __WEBPACK_IMPORTED_MODULE_28__pages_twitterwall_twitterwall_component__["a" /* TwitterwallComponent */] },
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_24__pages_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */] },
    { path: 'terms-of-service', component: __WEBPACK_IMPORTED_MODULE_25__pages_terms_of_service_terms_of_service_component__["a" /* TermsOfServiceComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '*', component: __WEBPACK_IMPORTED_MODULE_16__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__pages_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_19__pages_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__pages_fbcallback_fbcallback_component__["a" /* FbcallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_twittercallback_twittercallback_component__["a" /* TwittercallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pages_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pages_terms_of_service_terms_of_service_component__["a" /* TermsOfServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pages_googlecallback_googlecallback_component__["a" /* GooglecallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_27__pages_linkedincallback_linkedincallback_component__["a" /* LinkedincallbackComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pages_twitterwall_twitterwall_component__["a" /* TwitterwallComponent */],
            __WEBPACK_IMPORTED_MODULE_8__filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_29__pages_events_events_component__["a" /* EventsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngui_auto_complete__["NguiAutoCompleteModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_12__services_socialcallback_service__["a" /* SocialcallbackService */],
            __WEBPACK_IMPORTED_MODULE_14__services_streamtweets_service__["a" /* StreamtweetsService */],
            __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!searchText) {
            return items;
        }
        else {
            return items
                .filter(function (item) {
                //item.name.en.toLowerCase().indexOf(searchText[0]) !== -1 || item.name.it.toLowerCase().indexOf(searchText[1]) !== -1 
                return item.text.toLowerCase().indexOf(searchText) !== -1 || item.user.screen_name.toLowerCase().indexOf(searchText) !== -1;
            });
        }
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_streamtweets_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_coins__ = __webpack_require__(134);
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
    function DashboardComponent(_streamService, http) {
        this._streamService = _streamService;
        this.http = http;
        this.coins = __WEBPACK_IMPORTED_MODULE_3__models_coins__["a" /* COINS */];
        this.userEmail = '';
        this.userToken = '';
        this.UID = '';
        this.prefer_retrieve_url = '/api/userretrivepreference/' + this.UID;
        this.load_old_tweets_url = '/api/last24hourtweets/';
        this.crypto1 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
        this.crypto2 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
        this.crypto3 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
        this.crypto4 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
        this.crypto5 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
        this.crypto6 = { name: 'loading...', logourl: '', id: 1, handle: '', handleurl: '' };
        this.sendLoggedInEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.messages = [];
        this.messages_crypto1 = [];
        this.messages_crypto2 = [];
        this.messages_crypto3 = [];
        this.messages_crypto4 = [];
        this.messages_crypto5 = [];
        this.messages_crypto6 = [];
        this.messages_old_crypto1 = [];
        this.messages_old_crypto2 = [];
        this.messages_old_crypto3 = [];
        this.messages_old_crypto4 = [];
        this.messages_old_crypto5 = [];
        this.messages_old_crypto6 = [];
        this.messages_Ethereum = []; // 2312333412
        this.messages_OmiseGO = []; // 831847934534746114
        this.messages_Ripple = []; //  1051053836
        this.messages_Litecoin = []; //  1393174363
        this.messages_NEM = []; //  2313671966
        this.messages_Dashpay = []; //  2338506822
        this.messages_iotatoken = []; //  3992601857
        this.messages_monerocurrency = []; //  2478439963
        this.messages_LiskHQ = [];
        this.messages_bitcoin = [];
        this.messages_eth_classic = [];
        this.messages_NEO_Blockchain = [];
        this.messages_bitconnect = [];
        this.messages_QtumOfficial = [];
        this.messages_stratisplatform = [];
        this.messages_Tether_to = [];
        this.messages_zcashco = [];
        this.messages_wavesplatform = [];
        this.messages_ArkEcosystem = [];
        this.messages_steemit = [];
        this.messages_maidsafe = [];
        this.messages_Bytecoin_BCN = [];
        this.messages_golemproject = [];
        this.messages_EOS_io = [];
        this.messages_decredproject = [];
        this.messages_AttentionToken = [];
        this.messages_Veritaseuminc = [];
        this.messages_bitshares = [];
        this.messages_AugurProject = [];
        this.messages_tenxwallet = [];
        this.messages_StellarOrg = [];
        this.messages_KomodoPlatform = [];
        this.messages_Mkt_Hcash = [];
        this.messages__pivx = [];
        this.messages_NxsEarth = [];
        this.messages_metalpaysme = [];
        this.messages_factom = [];
        this.messages_iconominet = [];
        this.messages_DigixGlobal = [];
        this.messages_ByteballOrg = [];
        this.messages_SiaTechHQ = [];
        this.messages_civickey = [];
        this.messages_DigiByteCoin = [];
        this.messages_BitPopulous = [];
        this.messages_BitcoinDark = [];
        this.messages_gnosisPM = [];
        this.messages_ArdorPlatform = [];
        this.messages_SingularDTV = [];
        this.messages_gamecredits = [];
        this.messages_0xProject = [];
        this.messages_The_Blocknet = [];
        this.messages_dogecoin = [];
        this.messages_syscoin = [];
        this.messages_FunFairTech = [];
        this.messages_LykkeCity = [];
        this.messages_aetrnty = [];
        this.messages_BancorNetwork = [];
        this.messages_monaco_card = [];
        this.vergecurrency = [];
        this.messages_ethstatus = [];
        this.messages_binance_2017 = [];
        this.messages_gas = [];
        this.messages_bitdealuk = [];
        this.messages_edgelessproject = [];
        this.messages_IO_Coin = [];
        this.messages_NxtCommunity = [];
        this.messages_bitquence = [];
        this.messages_RiseVisionTeam = [];
        this.messages_ParticlProject = [];
        this.messages_ubiqsmart = [];
        this.messages_firstcoin = [];
        this.messages_AragonProject = [];
        this.messages_wingsplatform = [];
        this.messages_NAVCoin = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            console.log(parsedObject.userid._id);
            console.log(parsedObject.userid);
            if (parsedObject.userid._id) {
                this.UID = parsedObject.userid._id;
            }
            else if (parsedObject.userid) {
                this.UID = parsedObject.userid;
            }
            if (this.UID !== '') {
                this.prefer_retrieve_url = '/api/userretrivepreference/' + this.UID;
                this.http.get(this.prefer_retrieve_url)
                    .subscribe(
                // Successful responses call the first callback.
                function (data) {
                    //console.log(data)
                    console.log(data.cryptopreference1);
                    console.log(_this.coins);
                    _this.crypto1.name = _this.coins[0][data.cryptopreference1]['name']; //data.cryptopreference1;
                    _this.crypto1.logourl = _this.coins[0][data.cryptopreference1]['logourl'];
                    _this.crypto1.id = _this.coins[0][data.cryptopreference1]['id'];
                    _this.crypto1.handle = _this.coins[0][data.cryptopreference1]['handle'];
                    _this.crypto1.handleurl = _this.coins[0][data.cryptopreference1]['handleurl'];
                    _this.crypto2.name = _this.coins[0][data.cryptopreference2]['name'];
                    _this.crypto2.logourl = _this.coins[0][data.cryptopreference2]['logourl'];
                    _this.crypto2.id = _this.coins[0][data.cryptopreference2]['id'];
                    _this.crypto2.handle = _this.coins[0][data.cryptopreference2]['handle'];
                    _this.crypto2.handleurl = _this.coins[0][data.cryptopreference2]['handleurl'];
                    _this.crypto3.name = _this.coins[0][data.cryptopreference3]['name'];
                    _this.crypto3.logourl = _this.coins[0][data.cryptopreference3]['logourl'];
                    _this.crypto3.id = _this.coins[0][data.cryptopreference3]['id'];
                    _this.crypto3.handle = _this.coins[0][data.cryptopreference3]['handle'];
                    _this.crypto3.handleurl = _this.coins[0][data.cryptopreference3]['handleurl'];
                    _this.crypto4.name = _this.coins[0][data.cryptopreference4]['name'];
                    _this.crypto4.logourl = _this.coins[0][data.cryptopreference4]['logourl'];
                    _this.crypto4.id = _this.coins[0][data.cryptopreference4]['id'];
                    _this.crypto4.handle = _this.coins[0][data.cryptopreference4]['handle'];
                    _this.crypto4.handleurl = _this.coins[0][data.cryptopreference4]['handleurl'];
                    _this.crypto5.name = _this.coins[0][data.cryptopreference5]['name'];
                    _this.crypto5.logourl = _this.coins[0][data.cryptopreference5]['logourl'];
                    _this.crypto5.handle = _this.coins[0][data.cryptopreference5]['handle'];
                    _this.crypto5.handleurl = _this.coins[0][data.cryptopreference5]['handleurl'];
                    _this.crypto5.id = _this.coins[0][data.cryptopreference5]['id'];
                    _this.crypto6.name = _this.coins[0][data.cryptopreference6]['name'];
                    _this.crypto6.logourl = _this.coins[0][data.cryptopreference6]['logourl'];
                    _this.crypto6.id = _this.coins[0][data.cryptopreference6]['id'];
                    _this.crypto6.handle = _this.coins[0][data.cryptopreference6]['handle'];
                    _this.crypto6.handleurl = _this.coins[0][data.cryptopreference6]['handleurl'];
                    console.log("this.crypto1 is " + _this.crypto1.name);
                    _this.loadOldTweets();
                }, 
                // Errors will call this callback instead:
                function (err) {
                    console.log('Something went wrong!');
                });
                //////////////////////////////////////////////////////////////////////////
                ///////////////////////////////////////////////////////////////////////////
            }
            /////////////////////////
            if (parsedObject.token) {
                this.userEmail = parsedObject.email;
                this.userToken = parsedObject.token;
            }
            // changing Login / Logout tag in top bar
            this.sendLoggedInEvent.emit(true);
        }
        ////////////////////////////////////////
        //////////////  tweet feeding code  ///
        ///////////////////////////////////////
        this.connection = this._streamService.getTweets().subscribe(function (message) {
            var tempText = message['text'];
            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            var modifiedText = tempText.replace(exp, "<a href='$1' target='_blank'>$1</a>");
            message['text'] = modifiedText;
            // All coins show in wall
            _this.messages.unshift(message);
            //// other coins show in respective div 
            // if(message['retweeted_status']['user']['id'] == 2312333412) {
            //   this.messages_Ethereum.unshift(message);
            // }
            var tempID = 1;
            if ('retweeted_status' in message) {
                //Retweeted
                console.log(message['retweeted_status']['user']['id_str']);
                console.log('condition retweeted');
                //tempID  = message['retweeted_status']['user']['id'];
                tempID = message['retweeted_status']['user']['id_str'];
            }
            else if ('in_reply_to_status_id' in message) {
                // in reply to
                console.log(message['in_reply_to_user_id_str']); // in_reply_to_status_id // in_reply_to_user_id 
                console.log('condition tweet reply');
                //tempID = message['in_reply_to_status_id'];
                tempID = message['in_reply_to_user_id_str'];
            }
            else {
                console.log(message['user']['id_str']);
                console.log('condition 3rd, not RT & not R, normal tweet');
                tempID = message['user']['id_str'];
            }
            /////////////////////////////////////
            if (_this.crypto1.id == tempID) {
                _this.messages_crypto1.unshift(message);
            }
            else if (_this.crypto2.id == tempID) {
                _this.messages_crypto2.unshift(message);
            }
            else if (_this.crypto3.id == tempID) {
                _this.messages_crypto3.unshift(message);
            }
            else if (_this.crypto4.id == tempID) {
                _this.messages_crypto4.unshift(message);
            }
            else if (_this.crypto5.id == tempID) {
                _this.messages_crypto5.unshift(message);
            }
            else if (_this.crypto6.id == tempID) {
                _this.messages_crypto6.unshift(message);
            }
            //////////////////////////////////////
            switch (tempID) {
                case (2312333412):
                    _this.messages_Ethereum.unshift(message); //1
                    break;
                case (831847934534746114):
                    _this.messages_OmiseGO.unshift(message); //2
                    break;
                case (1051053836):
                    _this.messages_Ripple.unshift(message); //3
                    break;
                case (1393174363):
                    _this.messages_Litecoin.unshift(message); //4
                    break;
                case (2313671966):
                    _this.messages_NEM.unshift(message); //5
                    break;
                case (2338506822):
                    _this.messages_Dashpay.unshift(message); //6
                    break;
                case (3992601857):
                    _this.messages_iotatoken.unshift(message); //7
                    break;
                case (2478439963):
                    _this.messages_monerocurrency.unshift(message); //8
                    break;
                case (4736263474):
                    _this.messages_LiskHQ.unshift(message); //9
                    break;
                case (357312062):
                    _this.messages_bitcoin.unshift(message); //10
                    break;
                case (759252279862104064):
                    _this.messages_eth_classic.unshift(message); //11
                    break;
                case (2592325530):
                    _this.messages_NEO_Blockchain.unshift(message); //12
                    break;
                case (711438260354953216):
                    _this.messages_bitconnect.unshift(message); //13
                    break;
                case (773009781644677120):
                    _this.messages_QtumOfficial.unshift(message); //14
                    break;
                case (734688391942524928):
                    _this.messages_stratisplatform.unshift(message); //15
                    break;
                case (2893133450):
                    _this.messages_Tether_to.unshift(message); //16
                    break;
                case (4633094778):
                    _this.messages_zcashco.unshift(message); //17
                    break;
                case (707515829798182912):
                    _this.messages_wavesplatform.unshift(message); //18
                    break;
                case (1):
                    _this.messages_wavesplatform.unshift(message);
                    break;
                default:
                    // this.messages_Ethereum.unshift(message);
                    break;
            }
            // messages_Ethereum = []; // 2312333412
            // messages_OmiseGO = []; // 831847934534746114
            // messages_Ripple = []; //  1051053836
            // messages_Litecoin = []; //  1393174363
            // messages_NEM = []; //  2313671966
            // messages_Dashpay = []; //  2338506822
            // messages_iotatoken = []; //  3992601857
            // messages_monerocurrency = []; //  2478439963
        });
        ///////////////////////////////////////
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    DashboardComponent.prototype.loadOldTweets = function () {
        var _this = this;
        console.log('entering loadOldTweets function...');
        // First box load with its old tweets
        var tempURL = this.load_old_tweets_url + this.crypto1.id;
        this.http.get(tempURL)
            .subscribe(function (res) {
            _this.result = res; //console.log(res); //this.posts = res;
            console.log(_this.result);
            console.log(_this.result[0].field1json);
            _this.messages_old_crypto1.unshift(_this.result[0].field1json);
            _this.messages_old_crypto1.unshift(_this.result[1].field1json);
            _this.messages_old_crypto1.unshift(_this.result[2].field1json);
        });
        // Second box load with its old tweets
        var tempURL = this.load_old_tweets_url + this.crypto2.id;
        this.http.get(tempURL)
            .subscribe(function (res) {
            _this.result = res; //console.log(res); //this.posts = res;
            console.log(_this.result);
            console.log(_this.result[0].field1json);
            _this.messages_old_crypto2.unshift(_this.result[0].field1json);
            _this.messages_old_crypto2.unshift(_this.result[1].field1json);
            _this.messages_old_crypto2.unshift(_this.result[2].field1json);
        });
        // Third box load with its old tweets
        var tempURL = this.load_old_tweets_url + this.crypto3.id;
        this.http.get(tempURL)
            .subscribe(function (res) {
            _this.result = res; //console.log(res); //this.posts = res;
            console.log(_this.result);
            console.log(_this.result[0].field1json);
            _this.messages_old_crypto3.unshift(_this.result[0].field1json);
            _this.messages_old_crypto3.unshift(_this.result[1].field1json);
            _this.messages_old_crypto3.unshift(_this.result[2].field1json);
        });
        // Fourth box load with its old tweets
        var tempURL = this.load_old_tweets_url + this.crypto4.id;
        this.http.get(tempURL)
            .subscribe(function (res) {
            _this.result = res; //console.log(res); //this.posts = res;
            console.log(_this.result);
            console.log(_this.result[0].field1json);
            _this.messages_old_crypto4.unshift(_this.result[0].field1json);
            _this.messages_old_crypto4.unshift(_this.result[1].field1json);
            _this.messages_old_crypto4.unshift(_this.result[2].field1json);
        });
        // Fifth box load with its old tweets
        var tempURL = this.load_old_tweets_url + this.crypto5.id;
        this.http.get(tempURL)
            .subscribe(function (res) {
            _this.result = res; //console.log(res); //this.posts = res;
            console.log(_this.result);
            console.log(_this.result[0].field1json);
            _this.messages_old_crypto5.unshift(_this.result[0].field1json);
            _this.messages_old_crypto5.unshift(_this.result[1].field1json);
            _this.messages_old_crypto5.unshift(_this.result[2].field1json);
        });
        // Sixth box load with its old tweets
        var tempURL = this.load_old_tweets_url + this.crypto6.id;
        this.http.get(tempURL)
            .subscribe(function (res) {
            _this.result = res; //console.log(res); //this.posts = res;
            console.log(_this.result);
            console.log(_this.result[0].field1json);
            _this.messages_old_crypto6.unshift(_this.result[0].field1json);
            _this.messages_old_crypto6.unshift(_this.result[1].field1json);
            _this.messages_old_crypto6.unshift(_this.result[2].field1json);
        });
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "sendLoggedInEvent", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(252),
        styles: [__webpack_require__(226)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_streamtweets_service__["a" /* StreamtweetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_streamtweets_service__["a" /* StreamtweetsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events',
        template: __webpack_require__(253),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [])
], EventsComponent);

//# sourceMappingURL=events.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbcallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FbcallbackComponent = (function () {
    function FbcallbackComponent(router, http, socialcallbackService) {
        this.router = router;
        this.http = http;
        this.socialcallbackService = socialcallbackService;
    }
    FbcallbackComponent.prototype.ngOnInit = function () {
        this.fbcallbackfetchdata();
    };
    FbcallbackComponent.prototype.fbcallbackfetchdata = function () {
        var _this = this;
        this.socialcallbackService.facebookcallback()
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/dashboard']);
            }
            else {
                // login failed
                //this.error = 'Username or password is incorrect';
            }
        });
    };
    return FbcallbackComponent;
}());
FbcallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-fbcallback',
        template: __webpack_require__(254),
        styles: [__webpack_require__(228)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__["a" /* SocialcallbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__["a" /* SocialcallbackService */]) === "function" && _c || Object])
], FbcallbackComponent);

var _a, _b, _c;
//# sourceMappingURL=fbcallback.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglecallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GooglecallbackComponent = (function () {
    function GooglecallbackComponent(router, http, socialcallbackService) {
        this.router = router;
        this.http = http;
        this.socialcallbackService = socialcallbackService;
    }
    GooglecallbackComponent.prototype.ngOnInit = function () {
        this.googlecallbackfetchdata();
    };
    GooglecallbackComponent.prototype.googlecallbackfetchdata = function () {
        var _this = this;
        this.socialcallbackService.googlecallback()
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/dashboard']);
            }
            else {
                // login failed
                //this.error = 'Username or password is incorrect';
            }
        });
    };
    return GooglecallbackComponent;
}());
GooglecallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-googlecallback',
        template: __webpack_require__(255),
        styles: [__webpack_require__(229)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__["a" /* SocialcallbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__["a" /* SocialcallbackService */]) === "function" && _c || Object])
], GooglecallbackComponent);

var _a, _b, _c;
//# sourceMappingURL=googlecallback.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(256),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkedincallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LinkedincallbackComponent = (function () {
    function LinkedincallbackComponent(router, http, socialcallbackService) {
        this.router = router;
        this.http = http;
        this.socialcallbackService = socialcallbackService;
    }
    LinkedincallbackComponent.prototype.ngOnInit = function () {
        this.linkedincallbackfetchdata();
    };
    LinkedincallbackComponent.prototype.linkedincallbackfetchdata = function () {
        var _this = this;
        this.socialcallbackService.linkedincallback()
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/dashboard']);
            }
            else {
                // login failed
                //this.error = 'Username or password is incorrect';
            }
        });
    };
    return LinkedincallbackComponent;
}());
LinkedincallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-linkedincallback',
        template: __webpack_require__(257),
        styles: [__webpack_require__(231)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__["a" /* SocialcallbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__["a" /* SocialcallbackService */]) === "function" && _c || Object])
], LinkedincallbackComponent);

var _a, _b, _c;
//# sourceMappingURL=linkedincallback.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(34);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(258),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(259),
        styles: [__webpack_require__(233)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    return PrivacyPolicyComponent;
}());
PrivacyPolicyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-privacy-policy',
        template: __webpack_require__(260),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [])
], PrivacyPolicyComponent);

//# sourceMappingURL=privacy-policy.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this.userName = '';
        this.userLoggedInAs = '';
        this.userToken = '';
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
            this.userid = parsedObject.userid;
            this.userEmail = parsedObject.email;
            this.userName = parsedObject.name;
            this.userLoggedInAs = parsedObject.loggedinas;
            if (parsedObject.token) {
                this.userToken = parsedObject.token;
            }
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(261),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
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
    function SettingsComponent(http) {
        this.http = http;
        this.arrayOfCoins = ['Ethereum', 'OmiseGO', 'Ripple', 'Litecoin', 'NEM', 'Dash', 'IOTA', 'Monero',
            'Lisk', 'Bitcoin', 'EthereumClassic', 'NEO', 'BitConnect', 'Qtum', 'Stratis', 'Tether', 'Zcash',
            'Waves', 'Ark', 'Steem', 'MaidSafeCoin', 'Bytecoin', 'Golem', 'EOS', 'Decred',
            'Attentiontoken', 'Veritaseum', 'BitShares', 'Augur', 'TenX', 'StellarLumens', 'Komodo',
            'Hshare', 'PIVX', 'Nexus', 'Metal', 'Factom', 'iconominet', 'DigixGlobal', 'ByteballOrg',
            'SiaTechHQ', 'civickey', 'DigiByteCoin', 'BitPopulous', 'BitcoinDark', 'gnosisPM', 'ArdorPlatform',
            'SingularDTV', 'gamecredits', '0xProject', 'The_Blocknet', 'dogecoin', 'syscoin', 'FunFairTech',
            'LykkeCity', 'aetrnty', 'BancorNetwork', 'monaco_card', 'vergecurrency', 'ethstatus', 'binance_2017',
            'gas', 'bitdealuk', 'edgelessproject', 'IO_Coin', 'NxtCommunity', 'bitquence', 'RiseVisionTeam',
            'ParticlProject', 'ubiqsmart', 'firstcoin', 'AragonProject', 'wingsplatform', 'NAVCoin'];
        this.userid = '';
        //myData : any;
        this.UID = '';
        this.prefer_update_url = '/api/userupdatepreference/' + this.UID; //example user id 59e1b50416998f180c5c6238
        this.prefer_retrieve_url = '/api/userretrivepreference/' + this.UID;
        this.crypto1 = 'Loading...';
        this.crypto2 = 'Loading...';
        this.crypto3 = 'Loading...';
        this.crypto4 = 'Loading...';
        this.crypto5 = 'Loading...';
        this.crypto6 = 'Loading...';
        this.data = { cryptopreference1: this.crypto1,
            cryptopreference2: this.crypto2,
            cryptopreference3: this.crypto3,
            cryptopreference4: this.crypto4,
            cryptopreference5: this.crypto5,
            cryptopreference6: this.crypto6,
        };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            console.log(parsedObject.userid._id);
            console.log(parsedObject.userid);
            if (parsedObject.userid._id) {
                this.UID = parsedObject.userid._id;
            }
            else if (parsedObject.userid) {
                this.UID = parsedObject.userid;
            }
            if (this.UID !== '') {
                this.userid = parsedObject.userid._id;
                this.prefer_update_url = '/api/userupdatepreference/' + this.UID;
                this.prefer_retrieve_url = '/api/userretrivepreference/' + this.UID;
                this.http.get(this.prefer_retrieve_url)
                    .subscribe(
                // Successful responses call the first callback.
                function (data) {
                    // this.myData = data;
                    //console.log(data)
                    console.log(data.cryptopreference1);
                    _this.data.cryptopreference1 = data.cryptopreference1;
                    _this.data.cryptopreference2 = data.cryptopreference2;
                    _this.data.cryptopreference3 = data.cryptopreference3;
                    _this.data.cryptopreference4 = data.cryptopreference4;
                    _this.data.cryptopreference5 = data.cryptopreference5;
                    _this.data.cryptopreference6 = data.cryptopreference6;
                }, 
                // Errors will call this callback instead:
                function (err) {
                    console.log('Something went wrong!');
                });
                //////////////////////////////////////////////////////////////////////////
            }
        }
    };
    SettingsComponent.prototype.onSubmit = function () {
        console.log('onSubmit function called');
        //console.log(this.myData);
        this.http.post(this.prefer_update_url, this.data)
            .subscribe(
        // Successful responses call the first callback.
        function (data) { }, 
        // Errors will call this callback instead:
        function (err) {
            console.log('Something went wrong!');
        });
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(262),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(34);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(263),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsOfServiceComponent = (function () {
    function TermsOfServiceComponent() {
    }
    TermsOfServiceComponent.prototype.ngOnInit = function () {
    };
    return TermsOfServiceComponent;
}());
TermsOfServiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-terms-of-service',
        template: __webpack_require__(264),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [])
], TermsOfServiceComponent);

//# sourceMappingURL=terms-of-service.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwittercallbackComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TwittercallbackComponent = (function () {
    function TwittercallbackComponent(router, http, socialcallbackService) {
        this.router = router;
        this.http = http;
        this.socialcallbackService = socialcallbackService;
    }
    TwittercallbackComponent.prototype.ngOnInit = function () {
        this.twittercallbackfetchdata();
    };
    TwittercallbackComponent.prototype.twittercallbackfetchdata = function () {
        var _this = this;
        this.socialcallbackService.twittercallback()
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                _this.router.navigate(['/dashboard']);
            }
            else {
                // login failed
                //this.error = 'Username or password is incorrect';
            }
        });
    };
    return TwittercallbackComponent;
}());
TwittercallbackComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-twittercallback',
        template: __webpack_require__(265),
        styles: [__webpack_require__(239)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__["a" /* SocialcallbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_socialcallback_service__["a" /* SocialcallbackService */]) === "function" && _c || Object])
], TwittercallbackComponent);

var _a, _b, _c;
//# sourceMappingURL=twittercallback.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_streamtweets_service__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterwallComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterwallComponent = (function () {
    function TwitterwallComponent(_streamService) {
        this._streamService = _streamService;
        this.messages = [];
    }
    TwitterwallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connection = this._streamService.getTweets().subscribe(function (message) {
            //this.messages.push(message);
            var tempText = message['text'];
            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            var modifiedText = tempText.replace(exp, "<a href='$1' target='_blank'>$1</a>");
            message['text'] = modifiedText;
            _this.messages.unshift(message);
        });
        //this.connection = this._streamService.getTweets().subscribe(result => this.tweet = result);
    };
    TwitterwallComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return TwitterwallComponent;
}());
TwitterwallComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-twiterwall',
        template: __webpack_require__(266),
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_streamtweets_service__["a" /* StreamtweetsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_streamtweets_service__["a" /* StreamtweetsService */]) === "function" && _a || Object])
], TwitterwallComponent);

var _a;
//# sourceMappingURL=twitterwall.component.js.map

/***/ }),

/***/ 154:
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

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".container-fluid {\r\n   padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".dashboardcol {\r\n    min-height: 45vh;\r\n    border-right: 1px solid #cecece;\r\n}\r\n.dashboardcol.all-crypto {\r\n    min-height: 90vh;\r\n}\r\n.dashboardcol .dashheading {\r\n    background-color: #f1f1f1;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    padding-left: 8px;\r\n    font-weight: bold;\r\n}\r\n.dashheading i {\r\n    padding-right: 10px;\r\n    color: #a4a4a4;\r\n}\r\n.percentage-change {\r\n    float: right;\r\n    padding-right: 12px;\r\n}\r\n.iconcolumns a {\r\n    color: #cecece;\r\n    padding: 10px;\r\n    display: inline-block;\r\n}\r\n@media (max-width:550px){\r\n    .iconcolumns a {\r\n        padding: 10px 1px;\r\n    }\r\n}\r\n\r\n.iconcolumns a:hover {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns a.iconactive {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns {\r\n    background-color: #111111;\r\n}\r\n.col-1.iconcolumns {\r\n    max-width: 50px !important;\r\n}\r\n.thinline {\r\n    font-size: 0.7em;\r\n    background: #00BDDF;\r\n    color: #000000;\r\n}\r\n.dashbody {\r\n    font-size: 0.7em;\r\n    height: 40vh;\r\n    max-height: 40vh;\r\n    border: 1px solid #cecece;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n.all-crypto .dashbody {\r\n    height: 85vh;\r\n    max-height: 85vh;\r\n}\r\n.searchText {\r\n    width: 100%;\r\n    font-size: 14px;\r\n    line-height: 0.5em;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \r\n    border-radius: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \r\n}\r\n.handlelink {\r\n    color: #cecece;\r\n    font-size: 12px;\r\n}\r\n.oldfeeds {\r\n    font-size: 8px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".fullheight {\r\n    height: 88vh;\r\n}\r\n.dashboardcol {\r\n    min-height: 45vh;\r\n    border-right: 1px solid #cecece;\r\n}\r\n.dashboardcol .dashheading {\r\n    text-align: center;\r\n    background-color: #f1f1f1;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    font-weight: bold;\r\n}\r\n.dashheading i {\r\n    padding-right: 10px;\r\n    color: #a4a4a4;\r\n}\r\n.iconcolumns a {\r\n    color: #cecece;\r\n    padding: 10px;\r\n    display: inline-block;\r\n}\r\n@media (max-width:550px){\r\n    .iconcolumns a {\r\n        padding: 10px 1px;\r\n    }\r\n}\r\n\r\n.iconcolumns a:hover {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns a.iconactive {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns {\r\n    background-color: #111111;\r\n}\r\n.col-1.iconcolumns {\r\n    max-width: 50px !important;\r\n}\r\n/* social buttons */\r\n.btn-twitter {\r\n    color: #fff !important;\r\n    background-color: #00aced;\r\n    border-color: rgba(0,0,0,0.2);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".fa-facebook, .fa-facebook-square {\r\n    color: #3b5998\r\n}\r\n.fa-twitter, .fa-twitter-square {\r\n    color: #00aced\r\n}\r\n.fa-google-plus, .fa-google-plus-square {\r\n    color: #dd4b39\r\n}\r\n.fa-linkedin, .fa-linkedin-square {\r\n    color: #007bb6\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".main-form-container {\r\n    max-width: 400px;\r\n    margin-top: 15vh;\r\n}\r\n\r\n.fa-facebook, .fa-facebook-square {\r\n    color: #3b5998\r\n}\r\n.fa-twitter, .fa-twitter-square {\r\n    color: #00aced\r\n}\r\n.fa-google-plus, .fa-google-plus-square {\r\n    color: #dd4b39\r\n}\r\n.fa-linkedin, .fa-linkedin-square {\r\n    color: #007bb6\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".fullheight {\r\n    height: 88vh;\r\n}\r\n.dashboardcol {\r\n    min-height: 45vh;\r\n    border-right: 1px solid #cecece;\r\n}\r\n.dashboardcol .dashheading {\r\n    text-align: center;\r\n    background-color: #f1f1f1;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    font-weight: bold;\r\n}\r\n.dashheading i {\r\n    padding-right: 10px;\r\n    color: #a4a4a4;\r\n}\r\n.iconcolumns a {\r\n    color: #cecece;\r\n    padding: 10px;\r\n    display: inline-block;\r\n}\r\n@media (max-width:550px){\r\n    .iconcolumns a {\r\n        padding: 10px 1px;\r\n    }\r\n}\r\n\r\n.iconcolumns a:hover {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns a.iconactive {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns {\r\n    background-color: #111111;\r\n}\r\n.col-1.iconcolumns {\r\n    max-width: 50px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".fullheight {\r\n    height: 88vh;\r\n}\r\n.dashboardcol {\r\n    min-height: 45vh;\r\n    border-right: 1px solid #cecece;\r\n}\r\n.dashboardcol .dashheading {\r\n    text-align: center;\r\n    background-color: #f1f1f1;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    font-weight: bold;\r\n}\r\n.dashheading i {\r\n    padding-right: 10px;\r\n    color: #a4a4a4;\r\n}\r\n.iconcolumns a {\r\n    color: #cecece;\r\n    padding: 10px;\r\n    display: inline-block;\r\n}\r\n@media (max-width:550px){\r\n    .iconcolumns a {\r\n        padding: 10px 1px;\r\n    }\r\n}\r\n\r\n.iconcolumns a:hover {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns a.iconactive {\r\n    color: #ffffff;\r\n}\r\n.iconcolumns {\r\n    background-color: #111111;\r\n}\r\n.col-1.iconcolumns {\r\n    max-width: 50px !important;\r\n}\r\n/* social buttons */\r\n.btn-twitter {\r\n    color: #fff !important;\r\n    background-color: #00aced;\r\n    border-color: rgba(0,0,0,0.2);\r\n}\r\n.btn-social {\r\n    position: relative;\r\n    padding-left: 44px;\r\n    text-align: left;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.btn-social :first-child {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 32px;\r\n    line-height: 34px;\r\n    font-size: 1.6em;\r\n    text-align: center;\r\n    border-right: 1px solid rgba(0,0,0,0.2);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".main-form-container {\r\n    max-width: 400px;\r\n    margin-top: 15vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".wall-container {\r\n    height: 60vh;\r\n    max-height: 60vh;\r\n    border: 1px solid #cecece;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n}\r\n#twitter-feed img {\r\n    width: 32px;\r\n}\r\n#twitter-feed .t_screen_name {\r\n    font-size: 1em;\r\n    font-weight: bold;\r\n    margin-bottom: 10px;\r\n}\r\n#twitter-feed .t_name {\r\n    background: rgb(32, 178, 170);\r\n}\r\n#twitter-feed .t_text {\r\n    margin-bottom: 5px;\r\n    padding: 5px;\r\n    font-size: 0.8em;\r\n}\r\n#twitter-feed .t_text:nth-child(odd){\r\n    background-color: rgb(238,238,238);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <!-- Content here -->\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #12132d;\">\r\n      <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/images/tweetblock-logo.png\"/></a>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n        <div class=\"navbar-nav\">\r\n          <a class=\"nav-item nav-link active\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n          <a class=\"nav-item nav-link\" routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\r\n          <a class=\"nav-item nav-link\" routerLink=\"/twitterwall\" routerLinkActive=\"active\">Wall</a>\r\n          \r\n          \r\n        </div>\r\n      </div>\r\n\r\n      <form class=\"form-inline\">\r\n          <a class=\"navbar-brand\" routerLink=\"/login\"><span *ngIf=\"!userloggedIn;then content else other_content\">here is ignored</span></a>\r\n          <ng-template #content>Login</ng-template>\r\n          <ng-template #other_content>Logout</ng-template>\r\n        </form>\r\n    </nav>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\"> <!-- top first half row -->\r\n  <div class=\"col-1 iconcolumns\">\r\n    <a href=\"\" routerLink=\"/dashboard\" class=\"iconactive\"><i class=\"fa fa-home fa-lg\"></i></a><br/>\r\n    <a href=\"\"><i class=\"fa fa-line-chart fa-lg\"></i></a><br/>\r\n    <a href=\"\" routerLink=\"/events\"><i class=\"fa fa-calendar fa-lg\"></i></a><br/>\r\n    <a href=\"\"><i class=\"fa fa-envelope-o fa-lg\"></i></a><br/>\r\n    <a href=\"\" routerLink=\"/settings\"><i class=\"fa fa-cogs fa-lg\"></i></a><br/>\r\n    <a href=\"\" routerLink=\"/profile\"><i class=\"fa fa-user fa-lg\"></i></a><br/>\r\n  </div>\r\n  <div class=\"col-11\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-xs-12 col-sm-6 col-md-3\"> <!-- col 1 -->\r\n          <div class=\"row no-gutters\"> \r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 dashboardcol\">\r\n              <div class=\"dashheading\">\r\n                <span class=\"mainheading\"><img src=\"{{crypto1.logourl}}\" /> {{crypto1.name}}\r\n                  <a class=\"handlelink\" target=\"_blank\" href=\"{{crypto1.handleurl}}\">{{crypto1.handle}}</a>\r\n                </span>\r\n                <span class=\"float-right\"><i class=\"fa fa-ellipsis-v\"></i></span>\r\n                <span class=\"float-right\"><i class=\"fa fa-filter\"></i></span>\r\n                <span class=\"float-right\"><i class=\"fa fa-search\"></i></span>\r\n                <span class=\"percentage-change\">%.</span>\r\n              </div>\r\n              <div class=\"dashbody\">\r\n                  <!-- tweet feed goes here --> \r\n                  <div *ngFor=\"let message of messages_crypto1\">\r\n                    <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                    <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                    <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                  </div>\r\n                  <!-- old feeds load here -->\r\n                  <div class=\"oldfeeds\">old feeds below</div>\r\n                  <div *ngFor=\"let message of messages_old_crypto1\">\r\n                    <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                    <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                    <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <!-- col first row 2 -->\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 dashboardcol\">\r\n                <div class=\"dashheading\">\r\n                  <span class=\"mainheading\"><img src=\"{{crypto2.logourl}}\" /> {{crypto2.name}}\r\n                    <a class=\"handlelink\" target=\"_blank\" href=\"{{crypto2.handleurl}}\">{{crypto2.handle}}</a>\r\n                  </span>\r\n                  <span class=\"float-right\"><i class=\"fa fa-ellipsis-v\"></i></span>\r\n                  <span class=\"float-right\"><i class=\"fa fa-filter\"></i></span>\r\n                  <span class=\"float-right\"><i class=\"fa fa-search\"></i></span>\r\n                  <span class=\"percentage-change\">%.</span>\r\n                </div>\r\n                <div class=\"dashbody\">\r\n                  <!-- tweet feed goes here --> \r\n                  <div *ngFor=\"let message of messages_crypto2\">\r\n                    <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                    <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                    <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                  </div>\r\n                  <!-- old feeds load here -->\r\n                  <div class=\"oldfeeds\">old feeds below</div>\r\n                  <div *ngFor=\"let message of messages_old_crypto2\">\r\n                    <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                    <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                    <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-6 col-md-3\"> <!-- col 2 -->\r\n          <div class=\"row no-gutters\"> \r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 dashboardcol\">\r\n              <div class=\"dashheading\">\r\n                <span class=\"mainheading\"><img src=\"{{crypto3.logourl}}\" /> {{crypto3.name}}\r\n                  <a class=\"handlelink\" target=\"_blank\" href=\"{{crypto3.handleurl}}\">{{crypto3.handle}}</a>\r\n                </span>\r\n                <span class=\"float-right\"><i class=\"fa fa-ellipsis-v\"></i></span>\r\n                <span class=\"float-right\"><i class=\"fa fa-filter\"></i></span>\r\n                <span class=\"float-right\"><i class=\"fa fa-search\"></i></span>\r\n                <span class=\"percentage-change\">%.</span>\r\n              </div>\r\n              <div class=\"dashbody\">\r\n                <!-- tweet feed goes here --> \r\n                <div *ngFor=\"let message of messages_crypto3\">\r\n                  <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                  <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                  <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                </div>\r\n                <!-- old feeds load here -->\r\n                <div class=\"oldfeeds\">old feeds below</div>\r\n                <div *ngFor=\"let message of messages_old_crypto3\">\r\n                  <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                  <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                  <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- col second row 2 -->\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 dashboardcol\">\r\n                <div class=\"dashheading\">\r\n                  <span class=\"mainheading\"><img src=\"{{crypto4.logourl}}\" /> {{crypto4.name}}\r\n                    <a class=\"handlelink\" target=\"_blank\" href=\"{{crypto4.handleurl}}\">{{crypto4.handle}}</a>\r\n                  </span>\r\n                  <span class=\"float-right\"><i class=\"fa fa-ellipsis-v\"></i></span>\r\n                  <span class=\"float-right\"><i class=\"fa fa-filter\"></i></span>\r\n                  <span class=\"float-right\"><i class=\"fa fa-search\"></i></span>\r\n                  <span class=\"percentage-change\">%.</span>\r\n                </div>\r\n                <div class=\"dashbody\">\r\n                  <!-- tweet feed goes here --> \r\n                  <div *ngFor=\"let message of messages_crypto4\">\r\n                    <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                    <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                    <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                  </div>\r\n                  <!-- old feeds load here -->\r\n                  <div class=\"oldfeeds\">old feeds below</div>\r\n                  <div *ngFor=\"let message of messages_old_crypto4\">\r\n                    <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                    <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                    <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-6 col-md-3\">\r\n          <div class=\"row no-gutters\"> \r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 dashboardcol\">\r\n              <div class=\"dashheading\">\r\n                <span class=\"mainheading\"><img src=\"{{crypto5.logourl}}\" /> {{crypto5.name}}\r\n                  <a class=\"handlelink\" target=\"_blank\" href=\"{{crypto5.handleurl}}\">{{crypto5.handle}}</a>\r\n                </span>\r\n                <span class=\"float-right\"><i class=\"fa fa-ellipsis-v\"></i></span>\r\n                <span class=\"float-right\"><i class=\"fa fa-filter\"></i></span>\r\n                <span class=\"float-right\"><i class=\"fa fa-search\"></i></span>\r\n                <span class=\"percentage-change\">%.</span>\r\n              </div>\r\n              <div class=\"dashbody\">\r\n                <!-- tweet feed goes here --> \r\n                <div *ngFor=\"let message of messages_crypto5\">\r\n                  <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                  <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                  <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                </div>\r\n                <!-- old feeds load here -->\r\n                <div class=\"oldfeeds\">old feeds below</div>\r\n                <div *ngFor=\"let message of messages_old_crypto5\">\r\n                  <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                  <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                  <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- col third row 2 -->\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 dashboardcol\">\r\n                <div class=\"dashheading\">\r\n                  <span class=\"mainheading\"><img src=\"{{crypto6.logourl}}\" /> {{crypto6.name}}\r\n                    <a class=\"handlelink\" target=\"_blank\" href=\"{{crypto6.handleurl}}\">{{crypto6.handle}}</a>\r\n                  </span>\r\n                  <span class=\"float-right\"><i class=\"fa fa-ellipsis-v\"></i></span>\r\n                  <span class=\"float-right\"><i class=\"fa fa-filter\"></i></span>\r\n                  <span class=\"float-right\"><i class=\"fa fa-search\"></i></span>\r\n                  <span class=\"percentage-change\">%.</span>\r\n                </div>\r\n                <div class=\"dashbody\">\r\n                  <!-- tweet feed goes here --> \r\n                  <div *ngFor=\"let message of messages_crypto6\">\r\n                    <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                    <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                    <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                  </div>\r\n                  <!-- old feeds load here -->\r\n                  <div class=\"oldfeeds\">old feeds below</div>\r\n                  <div *ngFor=\"let message of messages_old_crypto6\">\r\n                    <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n                    <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n                    <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n      </div>\r\n      <div class=\"col-xs-12 col-sm-6 col-md-3 dashboardcol all-crypto\">\r\n          <div class=\"dashheading\">\r\n            <span class=\"mainheading\"> Live Feed</span>\r\n            <span class=\"float-right\"><i class=\"fa fa-ellipsis-v\"></i></span>\r\n            <span class=\"float-right\"><i class=\"fa fa-filter\"></i></span>\r\n            <span class=\"float-right\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <div><input class=\"searchText\" [(ngModel)]=\"searchText\" placeholder=\"search ... \"></div>\r\n          <div class=\"dashbody\">\r\n            <div *ngFor=\"let message of messages | filter : searchText\">\r\n              <span><img src=\"{{message.user.profile_image_url_https}}\" width=\"20px\" alt=\"photo\"/></span>\r\n              <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n              <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row no-gutters\"> <!-- second half row -->\r\n  <div class=\"col-1 iconcolumns\">\r\n    \r\n  </div>\r\n  <div class=\"col-11\">\r\n    <div class=\"row no-gutters\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\"> <!-- top first half row -->\n  <div class=\"col-1 iconcolumns fullheight\">\n    <a href=\"\" routerLink=\"/dashboard\"><i class=\"fa fa-home fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-line-chart fa-lg\"></i></a><br/>\n    <a href=\"\" routerLink=\"/events\"><i class=\"fa fa-calendar fa-lg\"></i></a><br/>\n    <a href=\"\"><i class=\"fa fa-envelope-o fa-lg\"></i></a><br/>\n    <a href=\"\" class=\"iconactive\" routerLink=\"/settings\"><i class=\"fa fa-cogs fa-lg\"></i></a><br/>\n    <a href=\"\" routerLink=\"/profile\"><i class=\"fa fa-user fa-lg\"></i></a><br/>\n  </div>\n  <div class=\"col-11\">\n      <div class=\"row\">\n        <div class=\"container\">\n          <p>&nbsp;</p>\n        <div class=\"col-md-6 col-md-offset-3\">\n            All your personal upcoming events, calender.\n        </div>\n\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  fbcallback !\r\n</p>\r\n\r\n<p>Loading ....    Please wait ...</p>\r\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  googlecallback !\r\n</p>\r\n\r\n<p>Loading ....    Please wait ...</p>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "<section class=\"jumbotron text-center\">\r\n    <div class=\"container\">\r\n      <h1 class=\"jumbotron-heading\">Tweet Block</h1>\r\n      <p class=\"lead text-muted\">Crypto Currency news from all around the world, \r\n        with latest tweets, posts, videos from various de facto channels.\r\n      </p>\r\n      <p>\r\n        <a  routerLink=\"/login\" class=\"btn btn-primary\">Login</a>\r\n        <a  routerLink=\"/signup\" class=\"btn btn-secondary\">Signup</a>\r\n      </p>\r\n      <p>\r\n          or Login using <br/>\r\n          <a href=\"/auth/twitter\"><i class=\"fa fa-twitter-square fa-2x\"></i></a>\r\n          <a href=\"/auth/facebook\"><i class=\"fa fa-facebook-square fa-2x\"></i></a>\r\n          <a href=\"/auth/linkedin\"><i class=\"fa fa-linkedin-square fa-2x\"></i></a>\r\n          <a href=\"/auth/google\"><i class=\"fa fa-google-plus-square fa-2x\"></i></a>\r\n      </p>\r\n    </div>\r\n  </section>\r\n\r\n  <div class=\"album text-muted\">\r\n      <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n          <div class=\"card\">\r\n            <img data-src=\"holder.js/100px280/thumb\" alt=\"Card image cap\">\r\n            <p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"text-muted\">\r\n      <div class=\"container\">\r\n        <p class=\"float-right\">\r\n          <a href=\"#\">Back to top</a>\r\n        </p>\r\n        <p>you can customize dashboard for yourself!</p>\r\n        <p>New to tweetblock <a href=\"../../\">Visit the homepage</a> or read our <a href=\"../../tweetblock-guide/\">getting started guide</a>.</p>\r\n      </div>\r\n    </footer>\r\n    \r\n<br/>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  linkedincallback !\r\n</p>\r\n\r\n<p>Loading ....    Please wait ...</p>\r\n"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-form-container\">\r\n  <h3 class=\"text-center jumbotron-heading\">Login</h3>\r\n  <form>\r\n    <div class=\"form-group row\">\r\n      <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\r\n      <div class=\"col-sm-10\">\r\n        <input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\r\n      <div class=\"col-sm-10\">\r\n        <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group row\">\r\n      <div class=\"offset-sm-2 col-sm-12 text-center\">\r\n        <button (click)=\"login()\" type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n  </form>\r\n  <p class=\"text-center\">\r\n    or Login using <br/>\r\n    <a href=\"/auth/twitter\"><i class=\"fa fa-twitter-square fa-2x\"></i></a>\r\n    <a href=\"/auth/facebook\"><i class=\"fa fa-facebook-square fa-2x\"></i></a>\r\n    <a href=\"/auth/linkedin\"><i class=\"fa fa-linkedin-square fa-2x\"></i></a>\r\n    <a href=\"/auth/google\"><i class=\"fa fa-google-plus-square fa-2x\"></i></a>\r\n</p>\r\n</div>"

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialcallbackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialcallbackService = (function () {
    function SocialcallbackService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.userid = currentUser;
    }
    SocialcallbackService.prototype.facebookcallback = function () {
        return this.http.get('/check_fb_correctly_loggenin')
            .map(function (response) {
            // login successful if there's json in the response
            var user = response.json();
            console.log(user);
            var userid = user._id;
            var email = user.facebook.email;
            var name = user.facebook.name;
            var token = user.facebook.token;
            if (userid) {
                // if userid exists
                // store username and id or token local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas: 'facebook', token: token }));
                sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas: 'facebook', token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    SocialcallbackService.prototype.twittercallback = function () {
        return this.http.get('/check_twitter_correctly_loggenin')
            .map(function (response) {
            // login successful if there's json in the response
            var user = response.json();
            console.log(user);
            var userid = user._id;
            var username = user.twitter.username;
            var name = user.twitter.displayName;
            var token = user.twitter.token;
            if (userid) {
                // if userid exists
                // store username and id or token local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: username, userid: userid, name: name, loggedinas: 'twitter', token: token }));
                sessionStorage.setItem('currentUser', JSON.stringify({ email: username, userid: userid, name: name, loggedinas: 'twitter', token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    SocialcallbackService.prototype.googlecallback = function () {
        return this.http.get('/check_google_correctly_loggenin')
            .map(function (response) {
            // login successful if there's json in the response
            var user = response.json();
            console.log(user);
            var userid = user._id;
            var email = user.google.email;
            var name = user.google.name;
            var token = user.google.token;
            if (userid) {
                // if userid exists
                // store username and id or token local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas: 'google', token: token }));
                sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas: 'google', token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    SocialcallbackService.prototype.linkedincallback = function () {
        return this.http.get('/check_linkedin_correctly_loggenin')
            .map(function (response) {
            // login successful if there's json in the response
            var user = response.json();
            console.log(user);
            var userid = user._id;
            var email = user.linkedin.email;
            var name = user.linkedin.name;
            if (userid) {
                // if userid exists
                // store username and id or token local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas: 'linkedin' }));
                sessionStorage.setItem('currentUser', JSON.stringify({ email: email, userid: userid, name: name, loggedinas: 'linkedin' }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    return SocialcallbackService;
}());
SocialcallbackService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SocialcallbackService);

var _a;
//# sourceMappingURL=socialcallback.service.js.map

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  privacy-policy works!\r\n</p>\r\n"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\"> <!-- top first half row -->\r\n    <div class=\"col-1 iconcolumns fullheight\">\r\n      <a href=\"\" routerLink=\"/dashboard\"><i class=\"fa fa-home fa-lg\"></i></a><br/>\r\n      <a href=\"\"><i class=\"fa fa-line-chart fa-lg\"></i></a><br/>\r\n      <a href=\"\" routerLink=\"/events\"><i class=\"fa fa-calendar fa-lg\"></i></a><br/>\r\n      <a href=\"\"><i class=\"fa fa-envelope-o fa-lg\"></i></a><br/>\r\n      <a href=\"\" class=\"iconactive\" routerLink=\"/settings\"><i class=\"fa fa-cogs fa-lg\"></i></a><br/>\r\n      <a href=\"\" routerLink=\"/profile\"><i class=\"fa fa-user fa-lg\"></i></a><br/>\r\n      <a href=\"\"><i class=\"fa fa-plus fa-lg\"></i></a><br/>\r\n    </div>\r\n    <div class=\"col-11\">\r\n        <div class=\"row\">\r\n          <div class=\"container\">\r\n    \r\n        <div class=\"page-header text-center\">\r\n            <h1><span class=\"fa fa-anchor\"></span> Profile</h1>\r\n            <a href=\"/logout\" class=\"btn btn-default btn-sm\">Logout</a>\r\n        </div>\r\n    \r\n        <div class=\"row\">\r\n    \r\n            <!-- LOCAL INFORMATION -->\r\n            <div class=\"col-sm-6\">\r\n                <div class=\"well\">\r\n                    <h3><span class=\"fa fa-user\"></span> Basic profile</h3>\r\n    \r\n                        <p>\r\n                            <strong>id</strong>: {{userid}}<br>\r\n                            <strong>email</strong>: {{userEmail}}<br>\r\n                            <strong>password</strong>: - <br>\r\n                            <strong>Name</strong>: {{userName}}<br>\r\n                            <strong>Logged in As</strong>: {{userLoggedInAs}} user<br>\r\n                            <strong>Token</strong>: {{userToken}}<br>\r\n                            <strong>Phone</strong>: - <br>\r\n                        </p>\r\n    \r\n                </div>\r\n            </div>\r\n    \r\n        </div>\r\n    </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\"> <!-- top first half row -->\r\n  <div class=\"col-1 iconcolumns fullheight\">\r\n    <a href=\"\" routerLink=\"/dashboard\"><i class=\"fa fa-home fa-lg\"></i></a><br/>\r\n    <a href=\"\"><i class=\"fa fa-line-chart fa-lg\"></i></a><br/>\r\n    <a href=\"\" routerLink=\"/events\"><i class=\"fa fa-calendar fa-lg\"></i></a><br/>\r\n    <a href=\"\"><i class=\"fa fa-envelope-o fa-lg\"></i></a><br/>\r\n    <a href=\"\" class=\"iconactive\" routerLink=\"/settings\"><i class=\"fa fa-cogs fa-lg\"></i></a><br/>\r\n    <a href=\"\" routerLink=\"/profile\"><i class=\"fa fa-user fa-lg\"></i></a><br/>\r\n  </div>\r\n  <div class=\"col-11\">\r\n      <div class=\"row\">\r\n        <div class=\"container\">\r\n          <p>&nbsp;</p>\r\n          <!-- <div class=\"col-md-5\">\r\n            <h6>Login using your twitter account to start getting feeds</h6>\r\n            <p>\r\n                <a class=\"btn btn-social btn-twitter\">\r\n                  <i class=\"fa fa-twitter\"></i> Sign in with Twitter\r\n                </a>\r\n            </p>\r\n          </div> -->\r\n\r\n          <div class=\"col-md-5 col-md-offset-3\">\r\n            <h5>Preferred Crypto currencies</h5>\r\n            \r\n            <div>\r\n                <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">1.</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input auto-complete type=\"text\" placeholder=\"1\" name=\"cryptopreference1\" [(ngModel)]=\"data.cryptopreference1\" [source]=\"arrayOfCoins\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">2.</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input auto-complete type=\"text\" placeholder=\"2\" name=\"cryptopreference2\" [(ngModel)]=\"data.cryptopreference2\" [source]=\"arrayOfCoins\"> \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">3.</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input auto-complete type=\"text\" placeholder=\"3\" name=\"cryptopreference3\" [(ngModel)]=\"data.cryptopreference3\" [source]=\"arrayOfCoins\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">4.</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input auto-complete type=\"text\" placeholder=\"4\" name=\"cryptopreference4\" [(ngModel)]=\"data.cryptopreference4\" [source]=\"arrayOfCoins\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">5.</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input auto-complete type=\"text\" placeholder=\"5\" name=\"cryptopreference5\" [(ngModel)]=\"data.cryptopreference5\" [source]=\"arrayOfCoins\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"exampleSelect1\" class=\"col-sm-2 col-form-label\">6.</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input auto-complete type=\"text\" placeholder=\"6\" name=\"cryptopreference6\" [(ngModel)]=\"data.cryptopreference6\" [source]=\"arrayOfCoins\">\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">Save preference</button>\r\n                </form>\r\n\r\n            </div>\r\n            <p><a [routerLink]=\"['/login']\">Logout</a></p>\r\n        </div>\r\n        <div class=\"col-md-6 col-md-offset-3\">\r\n            \r\n        </div>\r\n\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-form-container\">\r\n  <h3 class=\"text-center jumbotron-heading\">Register</h3>\r\n  <form>\r\n    <div class=\"form-group row\">\r\n      <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Email</label>\r\n      <div class=\"col-sm-10\">\r\n        <input [(ngModel)]=\"user.email\" type=\"email\" name=\"email\" class=\"form-control\"  id=\"email\" placeholder=\"Email\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\r\n      <div class=\"col-sm-10\">\r\n        <input [(ngModel)]=\"user.password\" type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group row\">\r\n      <div class=\"offset-sm-2 col-sm-10 text-center\">\r\n        <button (click)=\"register()\" type=\"submit\" class=\"btn btn-primary\">Signup</button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n  </form>\r\n  </div>"

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  terms-of-service works!\r\n</p>\r\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  twittercallback !\r\n</p>\r\n\r\n<p>Loading ....    Please wait ...</p>"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Twitter Wall !\r\n</p>\r\n<div class=\"wall-container\" id=\"twitter-feed\">\r\n  <div *ngFor=\"let message of messages\">\r\n    <span><img src=\"{{message.user.profile_image_url_https}}\" alt=\"photo\"/></span>\r\n    <span class=\"t_screen_name\">{{message.user.screen_name}}<i class=\"t_name\">({{message.user.name}})</i></span>\r\n    <span class=\"t_text\" [innerHTML]=\"message.text\"></span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(123);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamtweetsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StreamtweetsService = (function () {
    function StreamtweetsService() {
        this.url = 'https://tweetblock.tk/'; //'http://localhost:8080';  
    }
    StreamtweetsService.prototype.getTweets = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
                console.log(data);
                //console.log('reached till ng client');   
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    return StreamtweetsService;
}());
StreamtweetsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], StreamtweetsService);

//# sourceMappingURL=streamtweets.service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(11);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ })

},[302]);
//# sourceMappingURL=main.bundle.js.map