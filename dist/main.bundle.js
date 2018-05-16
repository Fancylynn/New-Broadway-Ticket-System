webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_shows_shows_component__ = __webpack_require__("./src/app/components/shows/shows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ticket_order_ticket_order_component__ = __webpack_require__("./src/app/components/ticket-order/ticket-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/shows', pathMatch: 'full' },
    { path: 'shows', component: __WEBPACK_IMPORTED_MODULE_2__components_shows_shows_component__["a" /* ShowsComponent */] },
    { path: 'order', component: __WEBPACK_IMPORTED_MODULE_3__components_ticket_order_ticket_order_component__["a" /* TicketOrderComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n    font-family: fantasy;\n    text-align: center;\n    font-size: 80px;\n    color: white;\n}\n\na:link {\n    text-decoration: none;\n    color: blueviolet;\n}\n\na:visited {\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\na {\n    font-family: Arial;\n    font-size: 30px;\n    margin-left: 50px;\n    margin-right: 50px;\n    color:aliceblue;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <h1>BROADWAY MUSICAL</h1>\n  <nav>\n    <a routerLink = \"/shows\">Broadway Musicals</a>\n    <a routerLink = \"/order\">Tickets Order</a>\n    <a routerLink = \"/login\">User Login</a>\n  </nav>\n  <hr>\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shows_shows_component__ = __webpack_require__("./src/app/components/shows/shows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_show_detail_show_detail_component__ = __webpack_require__("./src/app/components/show-detail/show-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_ticket_order_ticket_order_component__ = __webpack_require__("./src/app/components/ticket-order/ticket-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_show_service__ = __webpack_require__("./src/app/services/show.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_material_module__ = __webpack_require__("./src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_shows_shows_component__["a" /* ShowsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_show_detail_show_detail_component__["a" /* ShowDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_ticket_order_ticket_order_component__["a" /* TicketOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__components_show_detail_show_detail_component__["a" /* ShowDetailComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_show_service__["a" /* ShowService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Hello</h2>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/show-detail/show-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".header {\n    font-size: 40px;\n}\n\n.close-container {\n    float: right;\n    margin-right: 10px;\n}\n\n.close-button {\n    border:none;\n}\n\n.content-container {\n    overflow: hidden;\n}\n\n.sliders-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: 5%;\n    margin-right: 5%;\n    overflow: hidden;\n}\n\n.sliders-container img{\n    width: 30%;\n    height: 30%;\n    margin-right: 5%;\n}\n\n.button-container {\n    text-align: center;\n    margin-top: 3%;\n    margin-bottom: 3%;\n    width: 100%;\n    height: 40%;\n}\n\n.button-container button {\n    width: 40%;\n    height: 20%;\n    background-color: lightcoral;\n    border-radius: 5px;\n    \n}\n\n.ticket-order {\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 25px;\n    font-weight: bold;\n    color: white;\n\n}\n\n\n"

/***/ }),

/***/ "./src/app/components/show-detail/show-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"close-container\">\n  <button class=\"close-button\" mat-dialog-close>\n    <img src=\"../../../assets/picture/close.png\" alt=\"close-tag\" />\n  </button>\n</div>\n\n<h1 class=\"header\" mat-dialog-title>{{data.header}}</h1>\n<mat-dialog-content>\n  <h3>BRIEF INTRODUCTION</h3>\n  <p>{{data.content}}</p>\n</mat-dialog-content>\n<mat-dialog-content class=\"content-container\">\n    <h3>EXICTING MOMENTS</h3>\n    <div class=\"sliders-container\">\n        <img *ngFor=\"let img of data.moments\" src={{img}} alt=\"close-tag\" />\n    </div>  \n</mat-dialog-content>\n<mat-dialog-actions>\n  <div class=\"button-container\">\n      <button mat-button mat-dialog-close>\n          <a class=\"ticket-order\" routerLink = \"/order\">Tickets Order</a>\n      </button>\n  </div>\n  \n  <!-- <button mat-button mat-dialog-close>Order Tickets</button> -->\n  <!-- <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Install</button> -->\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/show-detail/show-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ShowDetailComponent = /** @class */ (function () {
    function ShowDetailComponent(data) {
        this.data = data;
    }
    ShowDetailComponent.prototype.ngOnInit = function () {
    };
    ShowDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-show-detail',
            template: __webpack_require__("./src/app/components/show-detail/show-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/show-detail/show-detail.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], ShowDetailComponent);
    return ShowDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/shows/shows.component.css":
/***/ (function(module, exports) {

module.exports = "#vis {\n    width: 1500;\n    height: 400;\n    padding: 40px;\n    overflow-y: auto;\n    overflow-x: auto;\n}\n\n#vis1 {\n    width:2000px;\n}\n\n.show-img {\n    height: 390px;\n    width: 300px;\n    margin-right: 10px;\n    cursor: pointer;\n    -webkit-filter: brightness(50%);\n            filter: brightness(50%);\n}\n\n.selected {\n  -webkit-filter: brightness(100%) !important;\n          filter: brightness(100%) !important;\n}"

/***/ }),

/***/ "./src/app/components/shows/shows.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"vis\">\n    <div id=\"vis1\">\n        <img \n            *ngFor=\"let show of shows\"\n            [class.selected]=\"show === hoverShow\"\n            (mouseover)=\"onHover(show)\"\n            (click)=\"openShowDetail()\"\n            class=\"show-img\" \n            src={{show.src}} \n            alt={{show.name}}\n            />\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/shows/shows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_show_service__ = __webpack_require__("./src/app/services/show.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_detail_show_detail_component__ = __webpack_require__("./src/app/components/show-detail/show-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowsComponent = /** @class */ (function () {
    function ShowsComponent(showService, dialog) {
        this.showService = showService;
        this.dialog = dialog;
    }
    ShowsComponent.prototype.ngOnInit = function () {
        this.getShows();
    };
    ShowsComponent.prototype.getShows = function () {
        this.shows = this.showService.getShows();
    };
    ShowsComponent.prototype.onHover = function (show) {
        this.hoverShow = show;
        console.log(show.name);
    };
    ShowsComponent.prototype.openShowDetail = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__show_detail_show_detail_component__["a" /* ShowDetailComponent */], {
            height: '600px',
            data: {
                header: this.hoverShow.name,
                content: this.hoverShow.content,
                moments: this.hoverShow.moments
            }
        });
        // dialogRef.afterClose().subsribe(result = > {console.log('abc');})
    };
    ShowsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shows',
            template: __webpack_require__("./src/app/components/shows/shows.component.html"),
            styles: [__webpack_require__("./src/app/components/shows/shows.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_show_service__["a" /* ShowService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], ShowsComponent);
    return ShowsComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-order/ticket-order.component.css":
/***/ (function(module, exports) {

module.exports = "body {\n    background-image: '../../../assets/picture/background1.jpg'；\n}\n\n.input-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.input-label {\n    color: white;\n\n}"

/***/ }),

/***/ "./src/app/components/ticket-order/ticket-order.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"input-container\">\n    <label class=\"input-label\">name</label>\n    <input type=\"text\" />\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/ticket-order/ticket-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TicketOrderComponent = /** @class */ (function () {
    function TicketOrderComponent() {
    }
    TicketOrderComponent.prototype.ngOnInit = function () {
    };
    TicketOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ticket-order',
            template: __webpack_require__("./src/app/components/ticket-order/ticket-order.component.html"),
            styles: [__webpack_require__("./src/app/components/ticket-order/ticket-order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TicketOrderComponent);
    return TicketOrderComponent;
}());



/***/ }),

/***/ "./src/app/mock-shows.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SHOWS; });
var SHOWS = [
    { id: 1,
        name: 'The Lion King',
        src: '../../assets/picture/Lion_king.jpg',
        content: 'A lively stage adaptation of the Academy Award-winning 1994 Disney film. The Lion King is the story of a young lion prince living in the flourishing African Pride Lands. Born into the royal family, precocious cub Simba spends his days exploring the sprawling savanna grasslands and idolizing his kingly father, Mufasa, while youthfully shirking the responsibility his position in life requires. When an unthinkable tragedy, orchestrated by Simba’s wicked uncle, Scar, takes his father’s life, Simba flees the Pride Lands, leaving his loss and the life he knew behind. Eventually companioned by two hilarious and unlikely friends, Simba starts anew. But when weight of responsibility and a desperate plea from the now ravaged Pride Lands come to find the adult prince, Simba must take on a formidable enemy, and fulfill his destiny to be king. A vibrant and exciting tale from the great creatives at Disney, The Lion King is a story of love and redemption that nobody should miss.',
        moments: [
            '../../assets/picture/lion-king-1.jpg',
            '../../assets/picture/lion-king-2.jpg',
            '../../assets/picture/lion-king-3.jpg'
        ]
    },
    { id: 2,
        name: 'Wicked',
        src: '../../assets/picture/wicked.jpg',
        content: 'Wicked, the Broadway sensation, looks at what happened in the Land of Oz…but from a different angle. Long before Dorothy arrives, there is another girl, born with emerald-green skin—smart, fiery, misunderstood, and possessing an extraordinary talent. When she meets a bubbly blonde who is exceptionally popular, their initial rivalry turns into the unlikeliest of friendships…until the world decides to call one “good,” and the other one “wicked.” With a thrilling score that includes the hits “Defying Gravity,” “Popular” and “For Good,” Wicked has been hailed by The New York Times as “the defining musical of the decade.” Time Magazine cheers, “if every musical had the brain, the heart, and the courage of Wicked, Broadway really would be a magical place.” The Gershwin Theatre on 50th Street and Broadway is that magical place. From the first electrifying note to the final breathtaking moment, Wicked—the untold true story of the Witches of Oz—transfixes audiences with its wildly inventive story. It will send your spirits soaring to heights you’ll never forget.',
        moments: [
            '../../assets/picture/wicked-1.jpg',
            '../../assets/picture/wicked-2.jpg',
            '../../assets/picture/wicked-3.jpg'
        ]
    },
    { id: 3,
        name: 'The Phantom of the Opera',
        src: '../../assets/picture/The_Phantom_of_the_opera.jpg',
        content: 'Based on the 1910 horror novel by Gaston Leroux, which has been adapted into countless films, The Phantom of the Opera follows a deformed composer who haunts the grand Paris Opera House. Sheltered from the outside world in an underground cavern, the lonely, romantic man tutors and composes operas for Christine, a gorgeous young soprano star-to-be. As Christine’s star rises, and a handsome suitor from her past enters the picture, the Phantom grows mad, terrorizing the opera house owners and company with his murderous ways. Still, Christine finds herself drawn to the mystery man. Audiences agree—The Phantom of the Opera is Broadway’s longest-running hit. Ever.',
        moments: ['../']
    },
    { id: 4,
        name: 'The Book of Morman',
        src: '../../assets/picture/The-Book-of-Morman.jpg',
        content: 'The Book of Mormon follows two young missionaries who are sent to Uganda to try to convert citizens to the Mormon religion. One missionary, Elder Price, is an enthusiastic go-getter with a strong dedication to his faith, while his partner, Elder Cunningham, is a socially awkward but well meaning nerd whose tendency to embroider the truth soon lands him in trouble. Upon their arrival in Africa, Elders Price and Cunningham learn that in a society plagued by AIDS, poverty and violence, a successful mission may not be as easy as they expected.',
        moments: ['../', '..']
    },
    { id: 5,
        name: 'Aladdin',
        src: '../../assets/picture/Aladdin.jpg',
        content: 'In the middle-eastern town of Agrabah, Princess Jasmine is feeling hemmed in by her father’s desire to find her a royal groom. Meanwhile, the Sultan’s right-hand man, Jafar, is plotting to take over the throne. When Jasmine sneaks out of the palace incognito, she forms an instant connection with Aladdin, a charming street urchin and reformed thief. After being discovered together, Aladdin is sentenced to death, but Jafar saves him by ordering him to fetch a lamp from the Cave of Wonders. Where there’s a lamp, there’s a Genie, and once Aladdin unwittingly lets this one out, anything can happen! Will Aladdin’s new identity as “Prince Ali” help him win Jasmine’s heart and thwart Jafar’s evil plans? Will the Genie’s wish for freedom ever come true?',
        moments: ['../']
    },
    { id: 6,
        name: 'Cats',
        src: '../../assets/picture/cats.jpg',
        content: "Based on T.S. Eliot's Old Possum's Book of Practical Cats, Andrew Lloyd Webber's classic musical tells the story of the Jellicle cats and each cat's individual quest to be selected as the lucky one who will ascend to 'the Heaviside Layer.'",
        moments: ['../']
    }
];


/***/ }),

/***/ "./src/app/services/show.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_shows__ = __webpack_require__("./src/app/mock-shows.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowService = /** @class */ (function () {
    function ShowService() {
    }
    ShowService.prototype.getShows = function () {
        return __WEBPACK_IMPORTED_MODULE_1__mock_shows__["a" /* SHOWS */];
    };
    ShowService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShowService);
    return ShowService;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map