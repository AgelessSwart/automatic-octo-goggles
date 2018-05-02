webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__juankuan_juankuan__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, events, modalCtrl) {
        this.navCtrl = navCtrl;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.tabHome = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tabJk = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tabMy = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage.prototype.backTabs = function (idx) {
        if (idx === void 0) { idx = 0; }
        this.tabRef.select(idx);
    };
    TabsPage.prototype.selectFriend = function () {
        // 声明一个modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__juankuan_juankuan__["a" /* JuankuanPage */]);
        // 弹出modal
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Tabs */])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\tabs\tabs.html"*/'<ion-tabs #myTabs>\n\n  <ion-tab [root]="tabHome" swipeBackEnabled="true" tabsHideOnSubPages="true" tabTitle="首页" tabIcon="ios-home-outline"></ion-tab>\n\n  <ion-tab  (ionSelect)="selectFriend()" swipeBackEnabled="true" tabsHideOnSubPages="true" tabTitle="发起募捐" tabIcon="md-add-circle"></ion-tab>\n\n  <ion-tab [root]="tabMy" swipeBackEnabled="true" tabsHideOnSubPages="true" tabTitle="我的" tabIcon="ios-contact-outline"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuankuanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newproject_newproject__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JuankuanPage = /** @class */ (function () {
    function JuankuanPage(navCtrl, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
    }
    JuankuanPage.prototype.ionViewWillEnter = function () {
        this.storage.ready().then(function () {
            //			this.storage.set('flag', 1);
        });
    };
    JuankuanPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    JuankuanPage.prototype.NewProject = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__newproject_newproject__["a" /* NewprojectPage */]);
        modal.present();
    };
    JuankuanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-juankuan',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\juankuan\juankuan.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n\n        	&nbsp;返回\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            发起爱心募捐\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<div class="bg_content"></div>\n	<div class="content_inner">\n		<div class="text_box">\n			<p class="text_one">大病筹款就用爱心筹</p>\n\n			<p class="text_two">0手续费，已帮超15万患者筹到救命钱</p>\n\n			<p class="text_three">只需三步，简单筹款</p>\n		</div>\n\n		<ul class="fundraising_order">\n\n			<li>\n\n				<p><span>1</span>发起筹款</p>\n\n				<p>1分钟智能填写</p>\n				<p>极速发起筹款项目</p>\n\n			</li>\n\n			<li>\n\n				<p><span>2</span>朋友圈分享+全程指导</p>\n\n				<p>专业筹款顾问1对1指导</p>\n\n				<p>全面提升筹款效果</p>\n\n			</li>\n\n			<li>\n\n				<p><span>3</span>随时提现</p>\n\n				<p>兴业银行专户管理，资金100%安全是</p>\n\n				<p>否筹满，都可提现，不收任何费用</p>\n\n			</li>\n\n		</ul>\n\n		<ul class="searchs">\n\n			<li>\n\n				<svg t="1524194339579" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1519" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n\n					<defs>\n\n						<style type="text/css"></style>\n\n					</defs>\n\n					<path d="M256 653.44h362.666667a21.333333 21.333333 0 0 0 0-42.666667H256a21.333333 21.333333 0 0 0 0 42.666667zM256 376.106667h149.333333a21.333333 21.333333 0 0 0 0-42.666667h-149.333333a21.333333 21.333333 0 0 0 0 42.666667zM454.186667 527.146667a21.333333 21.333333 0 0 0 30.08 0l448-448a21.333333 21.333333 0 0 0-30.08-30.08l-448 448a21.333333 21.333333 0 0 0 0 30.08z" fill="#0dfa18" p-id="1520"></path>\n\n					<path d="M909.44 342.613333a21.333333 21.333333 0 0 0-21.333333 21.333334V874.666667A51.2 51.2 0 0 1 832 930.773333H192c-35.2 0-71.893333-21.333333-71.893333-55.893333V149.333333A78.506667 78.506667 0 0 1 192 77.44h422.613333a21.333333 21.333333 0 0 0 0-42.666667H192A120.96 120.96 0 0 0 77.44 149.333333v725.333334c0 58.88 55.893333 98.773333 114.773333 98.773333H832A93.653333 93.653333 0 0 0 930.773333 874.666667V363.946667a21.333333 21.333333 0 0 0-21.333333-21.333334z" fill="#0dfa18" p-id="1521"></path>\n\n				</svg>\n\n			</li>\n\n			<li>\n\n				<svg t="1524194380320" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2307" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n					<defs>\n						<style type="text/css"></style>\n					</defs>\n					<path d="M284.444444 284.444444C159.288889 284.444444 56.888889 386.844444 56.888889 512s102.4 227.555556 227.555555 227.555556 227.555556-102.4 227.555556-227.555556-102.4-227.555556-227.555556-227.555556m0 398.222223c-96.711111 0-170.666667-73.955556-170.666666-170.666667s73.955556-170.666667 170.666666-170.666667 170.666667 73.955556 170.666667 170.666667-73.955556 170.666667-170.666667 170.666667M824.888889 56.888889C745.244444 56.888889 682.666667 119.466667 682.666667 199.111111S745.244444 341.333333 824.888889 341.333333 967.111111 278.755556 967.111111 199.111111 904.533333 56.888889 824.888889 56.888889m0 227.555555c-45.511111 0-85.333333-39.822222-85.333333-85.333333S779.377778 113.777778 824.888889 113.777778s85.333333 39.822222 85.333333 85.333333S870.4 284.444444 824.888889 284.444444M824.888889 682.666667c-79.644444 0-142.222222 62.577778-142.222222 142.222222s62.577778 142.222222 142.222222 142.222222 142.222222-62.577778 142.222222-142.222222-62.577778-142.222222-142.222222-142.222222m0 227.555555c-45.511111 0-85.333333-39.822222-85.333333-85.333333s39.822222-85.333333 85.333333-85.333333 85.333333 39.822222 85.333333 85.333333-39.822222 85.333333-85.333333 85.333333" fill="#0dfa18" p-id="2308"></path>\n					<path d="M452.380444 578.218667l295.594667 170.666666-28.444444 49.265778-295.594667-170.666667zM749.511111 278.300444l-295.594667 170.666667-28.444444-49.265778 295.594667-170.666666z" fill="#0dfa18" p-id="2309"></path>\n				</svg>\n\n			</li>\n\n			<li>\n\n				<svg t="1524194419015" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3725" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n					<defs>\n						<style type="text/css"></style>\n					</defs>\n					<path d="M1005.239893 321.6832c-12.09344-12.83328-28.16-16.653227-45.226667-16.653227L106.67648 305.029973c-17.099947 0-33.21344-9.496747-45.243307-22.293333-12.123307-12.86656-18.740053-32.35328-18.740053-50.4832 0-18.153387 6.616747-33.58336 18.70336-46.41664 12.06656-12.83328 28.180053-16.653227 45.28-16.653227l170.673493 0c11.77344 0 21.326507-10.143147 21.326507-22.629973 0-12.493227-9.553493-22.666667-21.326507-22.666667L106.67648 123.886933c-28.489813 0-55.286613 9.353387-75.466667 30.760107C11.086507 176.009813 0.003413 202.050133 0.003413 232.25344c0 1.640107 0.366507 3.209813 0.43648 4.84992L0.003413 237.10336l0 650.103467c0 30.280107 11.08352 61.92 31.206827 83.286613 20.180053 21.399893 46.976853 36.38656 75.466667 36.38656l853.336747 0c17.066667 0 33.173333-10.30016 45.226667-23.13344S1024 950.640213 1024 932.466773L1024 366.46016C1024 348.30336 1017.360213 334.480213 1005.239893 321.6832zM981.34656 932.50688c0 6.033493-2.226773 14.94656-6.280107 19.213227-4.040107 4.299947-9.399893 9.85984-15.053227 9.85984L106.67648 961.579947c-17.099947 0-33.21344-10.260053-45.28-23.113387-12.086613-12.8-18.70336-33.099947-18.70336-51.26016L42.69312 324.279893c18.429867 15.556693 40.503467 26.039893 63.98336 26.039893l853.336747 0c5.653333 0 11.013547-0.886613 15.053227 3.380053 4.013227 4.266667 6.280107 6.726827 6.280107 12.759893L981.34656 932.50688zM849.040213 169.14688l4.266667 0c5.719893 0 11.06688-0.8832 15.093333 3.42016 4.02688 4.293547 6.253227 6.716587 6.253227 12.759893l0 33.79328c0 12.486827 9.546667 22.65984 21.360213 22.65984 11.77344 0 21.30688-10.136747 21.30688-22.65984l0-33.79328c0-18.1568-6.62656-31.98336-18.733227-44.779947-12.106667-12.829867-28.18688-16.660053-45.28-16.660053l-4.266667 0c-11.813547 0-21.333333 10.143147-21.333333 22.666667S837.226667 169.14688 849.040213 169.14688zM308.136533 273.21344l320.090027-208.439893c5.320107-2.7968 11.333547-3.10656 16.880213-0.956587 5.573547 2.186667 9.906773 6.62656 12.18688 12.423253l100.86656 185.64352 39.306667-17.579947-100.853333-185.673387c-6.81344-17.16992-20.200107-30.749867-36.693333-37.266773-16.50688-6.52672-35.013547-5.469867-50.74688 2.823253L289.143467 232.599893 308.136533 273.21344zM844.773547 798.580053 640 798.580053c-14.14656 0-25.6 11.666773-25.6 26.066773 0 14.36672 11.45344 26.053547 25.6 26.053547l204.773547 0c14.14656 0 25.613227-11.686827 25.613227-26.053547C870.386773 810.213547 858.920107 798.580053 844.773547 798.580053z" p-id="3726" fill="#0dfa18"></path>\n				</svg>\n\n			</li>\n\n		</ul>\n\n		<div class="phone_number">\n			<p class="number">4006-526-559</p>\n			<p class="text">如有任何疑问，请联系筹款顾问</p>\n\n			<button class="btn" (click)="NewProject()">马上发起大病筹款</button>\n		</div>\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\juankuan\juankuan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], JuankuanPage);
    return JuankuanPage;
}());

//# sourceMappingURL=juankuan.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.flag = 0;
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        this.storage.ready().then(function () {
        });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\about\about.html"*/'<ion-content>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invite_friend_invite_friend__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__problem_problem__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_message__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__personal_center_personal_center__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_fundraising_my_fundraising__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, platform, callNumber, modalCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.callNumber = callNumber;
        this.modalCtrl = modalCtrl;
        this.sqlite = sqlite;
        this.login_type = false;
    }
    ContactPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log("onint");
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: ' fundraising.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql("select * from login_type", {}).then(function (data) {
                    console.log("查询数据库");
                    console.log(data);
                }, function (error) {
                    console.log('查询错误');
                });
                _this.database = db;
            });
        });
    };
    ContactPage.prototype.userlist = function (data) {
        console.log("123");
        if (data == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__invite_friend_invite_friend__["a" /* Invite_friendPage */]);
        }
        else if (data == 2) {
        }
        else if (data == 3) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__problem_problem__["a" /* ProblemPage */]);
        }
    };
    ContactPage.prototype.callnumber = function () {
        var _this = this;
        console.log("callnumber");
        if (!this.platform.ready()) {
            window.location.href = "tel://10086";
        }
        this.platform.ready().then(function () {
            _this.callNumber.callNumber("400-686-1179", true)
                .then(function (res) { return console.log('Launched dialer!', res); })
                .catch(function (err) { return console.log('Error launching dialer', err); });
        });
    };
    ContactPage.prototype.login = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        modal.present();
    };
    ContactPage.prototype.messages = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__message_message__["a" /* MessagePage */]);
        modal.present();
    };
    ContactPage.prototype.personal_center = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__personal_center_personal_center__["a" /* Personal_centerPage */]);
        modal.present();
    };
    ContactPage.prototype.my_fundraising = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__my_fundraising_my_fundraising__["a" /* My_fundraisingPage */]);
        modal.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\contact\contact.html"*/'<ion-content class="main_content">\n\n  	<div class="header_icon">\n  		<p class="btn_class">\n\n  			<ion-icon class="settings" name="ios-settings-outline" style="display: none;"></ion-icon>\n\n  			<ion-icon class="notification" name="ios-mail-outline" (click)="messages()"></ion-icon>\n\n  		</p>\n  	</div>\n\n  	<div class="user_box">\n  		<div class="user_top">\n  			<div class="header_img">\n  				<img src="../../assets/imgs/header_png.png"/>\n  			</div>\n\n  			<p *ngIf="login_type" class="login_name" (click)="personal_center()">小明</p>\n\n  			<button *ngIf="!login_type" class="loging_btn" (click)="login()">登录</button>\n  		</div>\n\n  		<ul class="user_messg">\n\n  			<li (click)="my_fundraising()">\n\n  				<p>我的筹款</p>\n  				<span class="fundraising">0</span>\n\n  			</li>\n\n  			<li>\n\n  				<p>筹款秘籍</p>\n  				<span class="cheats">推荐</span>\n\n  			</li>\n\n  		</ul>\n  	</div>\n\n  	<div class="focus_on_sharing">\n  		<div class="on_list" (click)="userlist(\'1\')">\n\n  			<p>\n\n					<svg t="1524120038064" class="icon" style="" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2743" xmlns:xlink="http://www.w3.org/1999/xlink" width="32.03125" height="32">\n\n						<defs>\n\n							<style type="text/css"></style>\n\n						</defs>\n\n						<path d="M1024 320c6.4-76.8-25.6-147.2-89.6-211.2-185.6-185.6-384 0-390.4 0L505.6 153.6 486.4 128C480 128 396.8 38.4 275.2 38.4c0 0 0 0 0 0C204.8 38.4 140.8 70.4 76.8 128 25.6 179.2 0 243.2 0 307.2c0 128 102.4 236.8 134.4 268.8L115.2 601.6C89.6 633.6 96 684.8 128 716.8c12.8 12.8 32 19.2 51.2 19.2 0 0 6.4 0 6.4 0 0 25.6 12.8 44.8 32 57.6 12.8 12.8 32 19.2 51.2 19.2 0 0 6.4 0 6.4 0 0 0 0 6.4 0 6.4 0 19.2 12.8 38.4 32 51.2 12.8 12.8 32 19.2 51.2 19.2 0 0 6.4 0 6.4 0 0 0 0 0 6.4 0 0 19.2 12.8 38.4 32 51.2 12.8 12.8 32 19.2 51.2 19.2 19.2 0 32-6.4 44.8-12.8L512 966.4c12.8 19.2 38.4 25.6 57.6 25.6 0 0 0 0 0 0 19.2 0 44.8-6.4 57.6-25.6 19.2-12.8 25.6-38.4 25.6-57.6 0 0 0-6.4 0-6.4 0 0 0 0 6.4 0 0 0 0 0 0 0 19.2 0 44.8-6.4 57.6-25.6 19.2-12.8 25.6-38.4 25.6-57.6 0 0 0-6.4 0-6.4 0 0 0 0 0 0 0 0 0 0 0 0 19.2 0 44.8-6.4 57.6-25.6 19.2-12.8 25.6-38.4 25.6-57.6 0 0 0-6.4 0-6.4 0 0 0 0 6.4 0 19.2 0 44.8-6.4 57.6-25.6 19.2-12.8 25.6-38.4 25.6-57.6 0-25.6-6.4-44.8-25.6-64l-12.8-12.8C947.2 518.4 1017.6 428.8 1024 320zM576 140.8c6.4-6.4 172.8-153.6 326.4 0C960 198.4 985.6 256 979.2 320c-6.4 89.6-64 166.4-108.8 211.2l-211.2-217.6-12.8 19.2C640 326.4 537.6 448 422.4 448c0 0 0 0 0 0C384 448 352 435.2 320 403.2L576 140.8zM160 678.4c-12.8-12.8-19.2-38.4-6.4-51.2L243.2 512C249.6 505.6 256 499.2 268.8 499.2c12.8 0 19.2 0 25.6 6.4s12.8 12.8 12.8 25.6c0 6.4 0 12.8-6.4 19.2-6.4 0-6.4 6.4-12.8 12.8l-96 115.2c0 0 0 0 0 0C185.6 691.2 166.4 691.2 160 678.4zM243.2 755.2c-12.8-12.8-19.2-32-6.4-44.8 0 0 6.4-6.4 6.4-6.4l96-115.2c0 0 0 0 0-6.4C339.2 582.4 345.6 576 352 576c12.8 0 19.2 0 25.6 6.4 6.4 6.4 12.8 12.8 12.8 25.6 0 6.4 0 19.2-6.4 25.6C384 633.6 384 640 377.6 640l-96 115.2c0 0 0 0 0 0-6.4 6.4-12.8 6.4-19.2 6.4C256 768 249.6 761.6 243.2 755.2zM352 844.8c-12.8 0-19.2 0-25.6-6.4C320 832 313.6 819.2 313.6 812.8c0-6.4 0-19.2 6.4-25.6 0 0 6.4-6.4 6.4-6.4l96-115.2c0 0 0 0 0 0 6.4-6.4 12.8-6.4 19.2-6.4 0 0 0 0 6.4 0 6.4 0 19.2 0 25.6 6.4 12.8 12.8 19.2 32 6.4 44.8 0 0 0 0 0 0l-96 115.2c0 0 0 6.4-6.4 6.4C364.8 838.4 358.4 844.8 352 844.8zM416 902.4c-6.4-6.4-12.8-12.8-12.8-25.6 0-6.4 0-12.8 6.4-19.2 0 0 0 0 0 0l96-115.2c0 0 0-6.4 6.4-6.4 6.4-6.4 12.8-12.8 25.6-12.8 6.4 0 12.8 0 25.6 6.4 6.4 6.4 12.8 12.8 12.8 25.6 0 12.8 0 19.2-6.4 25.6L467.2 896C454.4 915.2 435.2 915.2 416 902.4zM608 940.8c-6.4 6.4-19.2 12.8-32 12.8-12.8 0-19.2-6.4-32-12.8l-25.6-32 51.2-64 38.4 38.4c6.4 6.4 12.8 19.2 12.8 32C620.8 921.6 614.4 934.4 608 940.8zM876.8 665.6c-12.8 12.8-38.4 12.8-51.2 6.4 0 0 0-6.4-6.4-6.4L678.4 512c0 0-6.4-6.4-12.8-6.4-6.4-6.4-19.2 0-25.6 6.4-6.4 6.4-6.4 19.2 0 32l147.2 153.6c0 0 6.4 6.4 6.4 6.4 12.8 19.2 6.4 38.4-6.4 51.2-12.8 12.8-38.4 12.8-57.6 0 0 0 0 0 0 0L588.8 601.6c0 0-6.4-6.4-6.4-6.4-6.4-6.4-19.2-6.4-25.6 0-6.4 6.4-6.4 19.2 0 32l147.2 153.6c0 0 0 0 6.4 6.4 6.4 6.4 12.8 19.2 12.8 32 0 12.8-6.4 19.2-12.8 32-6.4 6.4-19.2 12.8-32 12.8-12.8 0-19.2-6.4-32-12.8l-38.4-38.4c12.8-12.8 12.8-32 12.8-51.2 0-19.2-12.8-38.4-32-51.2-19.2-12.8-38.4-19.2-64-19.2 0-19.2-12.8-38.4-32-51.2C473.6 614.4 454.4 608 435.2 614.4c0 0 0-6.4 0-6.4 0-19.2-12.8-38.4-32-51.2C390.4 537.6 371.2 531.2 352 531.2c0 0 0-6.4 0-6.4 0-19.2-12.8-38.4-32-51.2S288 454.4 262.4 454.4c-19.2 0-38.4 12.8-51.2 32L160 544C128 512 44.8 416 44.8 307.2c0-57.6 19.2-102.4 64-147.2 51.2-51.2 108.8-76.8 166.4-76.8 102.4 0 172.8 76.8 172.8 76.8l19.2 25.6L256 403.2l12.8 12.8c44.8 51.2 96 76.8 153.6 76.8 0 0 0 0 0 0 102.4 0 198.4-83.2 236.8-121.6L729.6 448c0 0 0 6.4 6.4 6.4l147.2 153.6C889.6 614.4 896 627.2 896 640 889.6 646.4 889.6 659.2 876.8 665.6z" p-id="2744" fill="#666666"></path>\n\n					</svg>  				\n\n					介绍病友来筹款\n\n					<ion-icon class="list_right" name="ios-arrow-forward-outline"></ion-icon>\n\n  			</p>\n\n  		</div>\n\n  		<div class="on_list" (click)="userlist(\'2\')">\n\n  			<p>\n\n					<svg t="1524120697088" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3490" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n\n						<defs>\n\n							<style type="text/css"></style>\n\n						</defs>\n\n						<path d="M947.2 921.6l-563.2 0c-42.3424 0-76.8-34.4576-76.8-76.8 0-2.4576 0.5632-60.928 47.3088-118.528 26.88-33.0752 63.5392-59.2896 108.9536-77.9264 54.8352-22.528 122.88-33.8944 202.1376-33.8944s147.2512 11.4176 202.1376 33.8944c45.4144 18.6368 82.0736 44.8512 108.9536 77.9264 46.7968 57.6 47.3088 116.0704 47.3088 118.528 0 42.3424-34.4576 76.8-76.8 76.8zM358.4 844.9536c0.0512 14.08 11.52 25.4464 25.6 25.4464l563.2 0c14.08 0 25.5488-11.4176 25.6-25.4464-0.0512-1.792-1.6384-45.824-37.8368-88.7808-49.8688-59.2384-143.0016-90.5216-269.3632-90.5216s-219.4944 31.3344-269.3632 90.5216c-36.1984 43.008-37.7856 86.9888-37.8368 88.7808z" p-id="3491" fill="#666666"></path>\n\n						<path d="M665.6 563.2c-112.9472 0-204.8-91.8528-204.8-204.8s91.8528-204.8 204.8-204.8 204.8 91.8528 204.8 204.8c0 112.9472-91.8528 204.8-204.8 204.8zM665.6 204.8c-84.6848 0-153.6 68.9152-153.6 153.6s68.9152 153.6 153.6 153.6 153.6-68.9152 153.6-153.6-68.9152-153.6-153.6-153.6z" p-id="3492" fill="#666666"></path>\n\n						<path d="M230.4 921.6l-153.6 0c-42.3424 0-76.8-34.4576-76.8-76.8 0-1.8944 0.4096-47.4624 33.9456-92.16 19.3536-25.856 45.7728-46.2848 78.4896-60.8256 39.1168-17.408 87.4496-26.2144 143.616-26.2144 9.1648 0 18.2272 0.256 26.9824 0.7168 14.1312 0.768 24.9344 12.8 24.2176 26.9312s-12.8 24.9856-26.9312 24.2176c-7.8336-0.4096-15.9744-0.6144-24.2176-0.6144-199.3728 0-204.6464 121.8048-204.8 128.1536 0.0512 14.0288 11.52 25.4464 25.6 25.4464l153.6 0c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z" p-id="3493" fill="#666666"></path>\n\n						<path d="M256 614.4c-84.6848 0-153.6-68.9152-153.6-153.6s68.9152-153.6 153.6-153.6 153.6 68.9152 153.6 153.6-68.9152 153.6-153.6 153.6zM256 358.4c-56.4736 0-102.4 45.9264-102.4 102.4s45.9264 102.4 102.4 102.4 102.4-45.9264 102.4-102.4c0-56.4736-45.9264-102.4-102.4-102.4z" p-id="3494" fill="#666666"></path>\n\n					</svg>\n\n  				微信关注水滴筹\n\n  				<ion-icon class="list_right" name="ios-arrow-forward-outline"></ion-icon>\n\n  			</p>\n\n  		</div>\n  	</div>\n  	<div class="focus_on_sharing">\n  		<div class="on_list" (click)="userlist(\'3\')">\n\n  			<p>\n\n					<ion-icon class="icon2" name="ios-help-circle-outline"></ion-icon>			\n\n					常见问题\n\n					<ion-icon class="list_right" name="ios-arrow-forward-outline"></ion-icon>\n\n  			</p>\n\n  		</div>\n\n  		<div class="on_list" (click)="callnumber()">\n\n  			<p>\n\n					<ion-icon class="icon2" name="ios-call-outline"></ion-icon>\n\n  				联系客服\n\n  				<span>400-686-1179</span>\n\n  			</p>\n\n  		</div>\n  	</div>\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.countdown = "发送验证码";
        this.count_type = false;
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.storage.ready().then(function () {
            //			this.storage.set('flag', 1);
        });
    };
    LoginPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    LoginPage.prototype.get_countdown = function () {
        var _this = this;
        this.count_type = true;
        this.countdown = 60;
        var countime = setInterval(function () {
            --_this.countdown;
            if (_this.countdown <= 1) {
                clearInterval(countime);
                _this.count_type = false;
                _this.countdown = "发送验证码";
            }
        }, 1000);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n\n        	&nbsp;返回\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            登录\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<h2 class="login_title">你好，请登录/注册</h2>\n\n	<div class="login_input">\n		<ion-input class="phone_number" type="number" placeholder="请输入手机号码"></ion-input>\n\n		<ion-input class="ver_cord" type="text" placeholder="请输入验证码"></ion-input>\n\n		<button class="ver_btn" (click)="get_countdown()" [disabled]="count_type" >{{countdown}}<span *ngIf="count_type">s</span></button>\n\n		<p class="help_text">收不到验证码？</p>\n\n		<button class="sub_btn" ion-button block round>登录</button>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invite_friendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Invite_friendPage = /** @class */ (function () {
    function Invite_friendPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.count_type = false;
    }
    Invite_friendPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    Invite_friendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invite_friend',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\invite_friend\invite_friend.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n\n        	&nbsp;返回\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            邀请好友\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<div class="inner_box">\n		<p class="title_one">推荐身边的</p>\n\n		<p class="title_two">大病患者来筹款</p>\n\n		<p class="title_three">将免费提供1对1筹款指导服务</p>\n\n		<button class="invite_btn" ion-button block round>立即去推荐</button>\n\n		<p class="invite_text">你的简单转发，救人一命，善莫大焉~</p>\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\invite_friend\invite_friend.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Invite_friendPage);
    return Invite_friendPage;
}());

//# sourceMappingURL=invite_friend.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProblemPage = /** @class */ (function () {
    function ProblemPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.listdownup = false;
        this.itemdowup = false;
        this.maindata = [
            {
                listtitle: "1、[发起筹款]相关问题",
                listlist: [
                    {
                        itemtitle: "1.1 、怎么发起筹款？",
                        iteminnertext: "您好，您可以去微信公众号搜索【蚂蚁筹】，进入后，点击“发起筹款”；或者，您可以下载【蚂蚁筹】APP。点击下方“发起筹款”，根据提示填写即可快速发起筹款。"
                    },
                    {
                        itemtitle: "1.2 、筹款文章如何写？",
                        iteminnertext: "您好，请您在【蚂蚁筹】微信公众号或APP里，点击“发起筹款”，点击页面最上方“筹款信息不会写？点击此处帮你填写”，根据提示填写完整后，点击“确认生成”。确认无误后点击提交即可自动生成筹款标题和求助说明。"
                    }
                ]
            },
            {
                listtitle: "2、[审核材料]相关问题",
                listlist: [
                    {
                        itemtitle: "2.1、 发起时需提供哪些材料？",
                        iteminnertext: "您好，发起筹款是需要提供三部分材料：1.患者信息；2.收款人信息；3.诊断证明。您只要在申请提现之前通过审核就可以。"
                    },
                    {
                        itemtitle: "2.2、 手持证件的合照标准？",
                        iteminnertext: "您好，证件合照必须同时满足一下要求：1.患者与患者本人身份证正面合照（请尽量不要自拍）。2.身份证不可以被遮挡，照片要清晰可见姓名、身份证号码和家庭住址。3患者或者收款人脸部不可以遮挡或戴口罩。4.不可以提交合成照片。5.如果患者是未成年人，可以用户口本或出生证明代替。6.如果患者无身份证原件，可以用临时身份证、驾驶证、社保卡、结婚证、护照等证件代替。"
                    },
                    {
                        itemtitle: "2.3、 收款人与患者的户口本的要求？",
                        iteminnertext: "您好，户口本必须同时满足已下要求：1.患者和收款人必须为直系亲属关系，且在同一户口本上。2.患者和收款人户口本页必须有相同户号或者明确写明双方关系（含双方姓名）。3.户口本页完整，字迹清晰可见。4.如果无法满足以上条件请开具患者和收款人的关系证明。"
                    },
                    {
                        itemtitle: "2.4、 收款人填写的要求？",
                        iteminnertext: "您好，收款信息要求如下：1.收款人须是患者本人、患者配偶或者患者直系亲属，未成年人不可以作为收款人。2.须为系统提示的XX银行的银行卡（信用卡、存折、农村商业银行、农村信用社均不可以作为收款卡）3.银行卡号、身份证号姓名、银行名称须与银行预留信息一致。"
                    },
                    {
                        itemtitle: "2.5、 诊断证明的标准？",
                        iteminnertext: "您好，您可以提供以下任意一材料作为争端证明：1.诊断证明。 2.入院病案首页。 3.出院小结。4病情说明书。 蚂蚁筹提示您，所有证明必须是 1.近半年以内 2.加盖医院公章9（公章必须清晰，完整）3.确诊证明（待查、臆断、带问号、占位、考虑为、病变、放疗后等均不属于确诊） 4.原件（复印件重新加盖医院公章同样有效）。5.检查报告单或病理报告单是不可以作为疾病证明的。"
                    },
                    {
                        itemtitle: "2.6 、发起二次筹款的标准？",
                        iteminnertext: "您好，一次筹款结束可以发起二次筹款。二次筹款所需材料：1.一次筹款所有的材料。 2.在求助说明里需注明二次筹款，并且说明上次筹得款项的用途。 3.在展示图片中上传加盖医院收费章的缴费单据（预交费收据是不可以的）。 4.缴费单据金额须大于等于上次筹款金额。"
                    },
                ]
            },
        ];
    }
    ProblemPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    ProblemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-problem',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\problem\problem.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n\n        	&nbsp;返回\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            常见问题\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<div class="header_banner">\n		<img src="../../assets/imgs/consultant_2.png"/>\n\n		<p>在线客服</p>\n\n		<p>工作时间：9:00-20:00</p>\n\n		<p>我们竭诚为您服务，如遇客服排队，请您耐心等待</p>\n	</div>\n\n	<div class="problem_list">\n		<div class="one_list_item" *ngFor="let listdata of maindata; index as i;" data="listdata.data = false">\n\n			<span class="one_list_title" (click)="listdata.data = !listdata.data">{{listdata.listtitle}}<ion-icon class="downup_icon" name="ios-arrow-down-outline" [hidden]="listdata.data"></ion-icon><ion-icon class="downup_icon" name="ios-arrow-up-outline" [hidden]="!listdata.data"></ion-icon></span>\n			<div class="two_list_item" [hidden]="!listdata.data" *ngFor="let itemdata of listdata.listlist; index as i;" data="itemdata.data = false">\n				<span class="two_list_title" (click)="itemdata.data = !itemdata.data" [ngClass]="{border_bottom : !itemdata.data}">{{itemdata.itemtitle}}</span>\n\n				<div class="list_inner_text" [hidden]="!itemdata.data">\n					{{itemdata.iteminnertext}}\n				</div>\n			</div>\n		</div>\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\problem\problem.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ProblemPage);
    return ProblemPage;
}());

//# sourceMappingURL=problem.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.count_type = false;
    }
    MessagePage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\message\message.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n\n        	&nbsp;返回\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            消息\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<ul class="main_list">\n\n		<li class="main_item">\n\n			<div class="icon_box">\n				<svg t="1524721853678" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1173" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n					<path d="M853.333333 512c-6.4 0-14.933333-2.133333-21.333333-2.133333V384c0-177.066667-142.933333-320-320-320S192 206.933333 192 384v125.866667c-6.4 0-14.933333 2.133333-21.333333 2.133333-46.933333 0-85.333333-38.4-85.333334-85.333333 0-40.533333 27.733333-74.666667 66.133334-83.2C172.8 162.133333 326.4 21.333333 512 21.333333s339.2 140.8 360.533333 322.133334c38.4 8.533333 66.133333 42.666667 66.133334 83.2 0 46.933333-38.4 85.333333-85.333334 85.333333zM149.333333 390.4c-12.8 6.4-21.333333 21.333333-21.333333 36.266667s8.533333 29.866667 21.333333 36.266666v-72.533333z m725.333334 0v72.533333c12.8-6.4 21.333333-21.333333 21.333333-36.266666s-8.533333-29.866667-21.333333-36.266667z m-552.533334 196.266667l-19.2-19.2c-6.4-6.4-12.8-14.933333-17.066666-21.333334-4.266667-8.533333-10.666667-14.933333-14.933334-23.466666-4.266667-6.4-8.533333-14.933333-10.666666-23.466667 0 0 0-2.133333-2.133334-2.133333-6.4-14.933333-12.8-32-17.066666-49.066667 0-2.133333 0-4.266667-2.133334-4.266667-2.133333-6.4-2.133333-14.933333-4.266666-21.333333v-6.4c-4.266667-44.8 0-93.866667 27.733333-147.2C309.333333 172.8 405.333333 106.666667 512 106.666667c153.6 0 277.333333 123.733333 277.333333 277.333333 0 12.8 0 23.466667-2.133333 36.266667 0 6.4-2.133333 14.933333-4.266667 21.333333 0 2.133333-2.133333 4.266667-2.133333 6.4-4.266667 17.066667-8.533333 32-17.066667 46.933333 0 2.133333-2.133333 2.133333-2.133333 4.266667-4.266667 6.4-6.4 14.933333-10.666667 21.333333v2.133334c-4.266667 8.533333-8.533333 14.933333-14.933333 23.466666-6.4 6.4-10.666667 14.933333-17.066667 21.333334l-19.2 19.2c81.066667 46.933333 147.2 125.866667 177.066667 219.733333 17.066667 49.066667 23.466667 89.6 19.2 136.533333-2.133333 32-32 57.6-64 57.6L192 1002.666667c-34.133333 0-61.866667-25.6-64-57.6v-25.6c0-145.066667 78.933333-268.8 194.133333-332.8zM512 149.333333c-130.133333 0-234.666667 104.533333-234.666667 234.666667s104.533333 234.666667 234.666667 234.666667 234.666667-104.533333 234.666667-234.666667S642.133333 149.333333 512 149.333333zM170.666667 940.8c0 10.666667 10.666667 19.2 21.333333 19.2h635.733333c10.666667 0 23.466667-10.666667 23.466667-21.333333 2.133333-40.533333-4.266667-78.933333-17.066667-117.333334-29.866667-89.6-93.866667-162.133333-172.8-204.8-10.666667 6.4-21.333333 12.8-32 17.066667-12.8 6.4-23.466667 10.666667-38.4 14.933333-10.666667 4.266667-21.333333 6.4-34.133333 8.533334-2.133333 0-6.4 0-8.533333 2.133333-10.666667 2.133333-23.466667 2.133333-36.266667 2.133333-14.933333 0-29.866667-2.133333-42.666667-4.266666h-4.266666c-12.8-2.133333-23.466667-4.266667-36.266667-8.533334-25.6-8.533333-51.2-19.2-72.533333-34.133333C245.333333 669.866667 170.666667 785.066667 170.666667 917.333333v23.466667z" fill="#64e27e" p-id="1174"></path>\n				</svg>\n\n			</div>\n\n			<div class="text_box">\n				<p>官方客服</p>\n				<p>你的专人客服，欢迎咨询！</p>\n			</div>\n\n		</li>\n		<li class="main_item">\n\n			<div class="icon_box">\n				<svg t="1524723703874" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2060" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n					<path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" p-id="2061" fill="#ff1515"></path>\n					<path d="M744.055658 192.799074c-4.814656-2.889817-9.601682-5.251607-15.442714-5.251607-14.262842 0-25.758664 11.559267-25.758664 25.805736 0 10.285251 6.088672 18.519796 14.6957 23.195282 94.679359 55.247278 158.344355 157.787676 158.344355 275.30416 0 117.424386-63.605643 219.931015-158.159136 275.18034-8.29492 4.538363-15.442714 13.050224-15.442714 23.583115 0 14.261818 11.559267 25.820062 25.791409 25.820062 5.716188 0 10.252505-2.202155 15.22475-5.063319 109.871363-64.133669 183.764304-183.143157 183.764304-319.520197C927.074995 375.785665 853.495186 257.010515 744.055658 192.799074z" p-id="2062" fill="#ff1515"></path>\n					<path d="M773.946432 511.867994c0-79.96524-43.344181-149.739373-107.821681-187.289594-2.920516-1.52268-9.785877-4.520967-14.603603-4.520967-14.325263 0-25.914206 11.589966-25.914206 25.89988 0 9.616008 5.096065 18.176988 12.865006 22.666232 49.839105 28.307719 83.45983 81.829703 83.45983 143.244448 0 62.472843-34.801621 116.817566-86.070284 144.750755-7.457856 4.538363-12.397355 12.803607-12.397355 22.188348 0 14.325263 11.588943 25.943882 25.882484 25.943882 6.090718 0.031722 13.33061-3.542686 13.33061-3.542686C729.048873 664.171772 773.946432 593.294514 773.946432 511.867994z" p-id="2063" fill="#ff1515"></path>\n					<path d="M541.3694 124.672464c-10.846022-5.219885-23.740704-3.790326-33.215496 3.712555-0.435928 0.358157-46.423309 36.914748-97.195669 74.296123-88.308255 65.081251-114.036219 75.925227-119.257128 77.649498l-110.6194 0c-0.63752 0-1.243317 0.062422-1.879813 0.093121l-56.504922 0c-14.231119 0-25.775037 11.543917-25.775037 25.775037l0 411.697573c0 14.261818 11.512195 25.761734 25.775037 25.761734l189.511191 0.027629c5.096065 1.865487 29.395494 13.0799 107.761306 76.999698 45.613874 37.162388 86.505189 73.485665 86.940095 73.829496 5.841032 5.218862 13.298887 7.92039 20.820188 7.92039 4.349051 0 8.729825-0.930185 12.862959-2.764973 11.277858-5.064342 18.517749-16.252149 18.517749-28.619828 0 0 0.031722-97.257068 0.031722-132.212184 0.808412-2.484587 1.213641-5.127787 1.213641-7.863085 0-2.792603-1.245364-578.026786-1.245364-578.026786C559.110459 140.892891 552.214399 129.924071 541.3694 124.672464zM508.308423 726.470653c0 1.494027-0.467651 94.617961-0.467651 94.617961-13.889335-11.745509-29.332049-24.64019-45.240367-37.507242-104.59008-84.702124-130.505309-91.816149-148.030451-91.816149-0.372483 0-0.683569 0.091074-1.025353 0.091074s-0.652869-0.091074-1.025353-0.091074L170.394297 691.765223c-18.037818 0-22.248723-5.128811-22.248723-23.246447L148.145573 352.559685c0-12.32163 1.461281-20.057825 16.298198-20.057825l128.065747 0c17.090237 0 43.315528-6.991228 157.787676-90.839915 20.383236-14.914688 40.330544-29.938869 57.544601-43.113937 0 0 0.373507 445.207781 0.467651 521.368368C507.779374 722.028481 508.308423 724.234729 508.308423 726.470653z" p-id="2064" fill="#ff1515"></path>\n				</svg>\n			</div>\n\n			<div class="text_box">\n				<p>我的通知</p>\n				<p>你的专人客服，欢迎咨询！</p>\n			</div>\n\n		</li>\n		<li class="main_item">\n\n			<div class="icon_box">\n				<svg t="1524723827566" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2662" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n					<path d="M512 212l48.8 12c101.6 24.8 176 117.6 176 220.8v254.4l18.4 18.4 24.8 25.6h-536l24.8-25.6 18.4-18.4V444.8c0-103.2 73.6-196.8 176-220.8l48.8-12M512 64c-36.8 0-64 30.4-64 68v30.4C320.8 192 223.2 307.2 223.2 444.8v228.8L136 763.2v44.8h752v-44.8l-87.2-89.6V444.8c0-137.6-97.6-252.8-224.8-283.2v-28.8c0-32-17.6-60.8-48-67.2-5.6-1.6-11.2-1.6-16-1.6z m88 808H424c0 49.6 38.4 88 88 88s88-38.4 88-88z" p-id="2663" fill="#93c1da"></path>\n				</svg>\n			</div>\n\n			<div class="text_box">\n				<p>系统提醒</p>\n				<p>如正确筹款~帮助......</p>\n			</div>\n\n		</li>\n\n	</ul>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\message\message.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Personal_centerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Personal_centerPage = /** @class */ (function () {
    function Personal_centerPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.count_type = false;
    }
    Personal_centerPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    Personal_centerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-personal_center',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\personal_center\personal_center.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n\n        	&nbsp;返回\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            个人中心\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<dl class="main_list">\n		<dt class="user_header_img">\n\n			<span>头像</span>\n\n			<img src="../../assets/imgs/header_png.png"/>\n\n		</dt>\n		<dd class="msg_list">\n\n			<span>昵称</span>\n\n			<p>卡密萨马</p>\n\n			<ion-icon [hidden]="false" class="right_icon" name="arrow-forward"></ion-icon>\n\n		</dd>\n		<dd class="msg_list">\n\n			<span>手机号</span>\n\n			<p>18617104998</p>\n\n			<ion-icon [hidden]="true" class="right_icon" name="arrow-forward"></ion-icon>\n\n		</dd>\n		<dd class="msg_list">\n\n			<span>设置密码</span>\n\n			<ion-icon [hidden]="false" class="right_icon" name="arrow-forward"></ion-icon>\n\n		</dd>\n		<dd class="msg_list no_border">\n\n			<span>账号绑定</span>\n\n			<ion-icon [hidden]="false" class="right_icon" name="arrow-forward"></ion-icon>\n\n		</dd>\n		<dd class="msg_list top_mg">\n\n			<span>关于我们</span>\n\n			<ion-icon [hidden]="false" class="right_icon" name="arrow-forward"></ion-icon>\n\n		</dd>\n	</dl>\n\n	<button class="exit_btn" ion-button block>退出登录</button>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\personal_center\personal_center.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Personal_centerPage);
    return Personal_centerPage;
}());

//# sourceMappingURL=personal_center.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_fundraisingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var My_fundraisingPage = /** @class */ (function () {
    function My_fundraisingPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.count_type = false;
    }
    My_fundraisingPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    My_fundraisingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my_fundraising',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\my_fundraising\my_fundraising.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n\n        	&nbsp;返回\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            我的筹款\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<div class="top_header">\n		<div class="header_img">\n			<img src="../../assets/imgs/header_png.png"/>\n		</div>\n\n		<span>我的</span>\n\n		<button>咨询在线客服</button>\n	</div>\n\n	<div class="no_fundraising">\n		<svg t="1523529448040" class="icon" style="" viewBox="0 0 1567 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15103" xmlns:xlink="http://www.w3.org/1999/xlink" width="306.0546875" height="200">\n\n			<path d="M156.662278 699.758173h21.097186A10.444152 10.444152 0 0 1 187.994733 710.202325c0 5.765172-4.490985 10.444152-10.235269 10.444152H156.662278v21.097186A10.444152 10.444152 0 0 1 146.218126 751.978932a10.277045 10.277045 0 0 1-10.444152-10.235269V720.646477H114.676787A10.444152 10.444152 0 0 1 104.441518 710.202325c0-5.765172 4.490985-10.444152 10.235269-10.444152H135.773974v-21.097187A10.444152 10.444152 0 0 1 146.218126 668.425717c5.765172 0 10.444152 4.490985 10.444152 10.235269v21.097187z m1378.628042-83.553215v-21.097186A10.277045 10.277045 0 0 0 1524.846168 584.872503a10.444152 10.444152 0 0 0-10.444152 10.235269v21.097186h-21.097186a10.277045 10.277045 0 0 0-10.235269 10.444152c0 5.598065 4.595427 10.444152 10.235269 10.444152h21.097186v21.097187c0 5.744284 4.67898 10.235269 10.444152 10.235268a10.444152 10.444152 0 0 0 10.444152-10.235268V637.093262h21.097187c5.744284 0 10.235269-4.67898 10.235268-10.444152a10.444152 10.444152 0 0 0-10.235268-10.444152H1535.29032zM776.460024 960.861969H250.596979A20.80475 20.80475 0 0 1 229.77134 939.973665c0-11.530344 9.462402-20.888304 20.825639-20.888303h94.728457A83.010119 83.010119 0 0 1 334.212859 877.413196v-605.96969A83.49055 83.49055 0 0 1 417.849627 187.994733H480.430984V167.001988A83.49055 83.49055 0 0 1 564.067752 83.553215h501.152182A83.448773 83.448773 0 0 1 1148.856702 167.001988v605.969689c0 15.185797-4.052331 29.410732-11.133466 41.672166h115.554096c11.551232 0 20.909192 9.274407 20.909192 20.888304 0 11.530344-9.295295 20.888304-20.888304 20.888304H1002.638576v20.992745c0 15.185797-4.052331 29.410732-11.133466 41.672166h11.196131c11.488567 0 20.825639 9.274407 20.825639 20.888303 0 11.530344-9.462402 20.888304-20.825639 20.888304h-109.893365c9.545955 16.000441 7.478013 36.972297-6.41271 50.863019a41.672166 41.672166 0 0 1-59.072122 0L776.460024 960.861969z m76.367638-41.776607h66.424806c22.977134 0 41.609501-18.59059 41.609501-41.881049V270.461756c0-22.559368-18.047494-40.690416-40.314426-40.690416H416.303892c-22.266932 0-40.314426 18.214601-40.314426 40.690416v606.742557c0 23.123352 18.799473 41.881049 41.588613 41.881049h317.084449l-10.736588-10.757477a41.693054 41.693054 0 0 1-10.861918-40.377091l-19.718558-19.739447A146.259902 146.259902 0 0 1 502.363703 627.693525a146.218126 146.218126 0 0 1 220.517822 190.981761l19.739447 19.739447a41.630389 41.630389 0 0 1 40.377091 10.841029L852.827662 919.085362zM1002.638576 814.643843h62.852906A41.797496 41.797496 0 0 0 1107.080095 772.867236V167.106429c0-23.14424-18.632367-41.776607-41.588613-41.776607H563.775316A41.797496 41.797496 0 0 0 522.207592 167.106429v20.888304h396.794216A83.448773 83.448773 0 0 1 1002.638576 271.443506V814.643843zM266.325872 46.998683h31.123572c8.773088 0 15.875111 6.955805 15.875111 15.666228 0 8.647758-7.102023 15.666228-15.875111 15.666228h-31.123572v31.123572c0 8.773088-6.955805 15.875111-15.666228 15.875111a15.770669 15.770669 0 0 1-15.666228-15.875111V78.331139H203.869844A15.728893 15.728893 0 0 1 187.994733 62.664911c0-8.647758 7.102023-15.666228 15.875111-15.666228h31.123572V15.875111c0-8.773088 6.955805-15.875111 15.666228-15.875111 8.647758 0 15.666228 7.102023 15.666228 15.875111v31.123572zM20.888304 939.973665c0-11.530344 9.462402-20.888304 20.825638-20.888303h125.455152c11.488567 0 20.825639 9.274407 20.825639 20.888303 0 11.530344-9.462402 20.888304-20.825639 20.888304H41.713942A20.80475 20.80475 0 0 1 20.888304 939.973665z m658.733544-135.021995a104.441518 104.441518 0 1 0-147.722083-147.722083 104.441518 104.441518 0 0 0 147.722083 147.722083zM459.542681 313.324555a20.888304 20.888304 0 0 1 20.867415-20.888304H710.202325a20.888304 20.888304 0 1 1 0 41.776608H480.430984A20.825639 20.825639 0 0 1 459.542681 313.324555z m0 104.441518c0-11.530344 9.295295-20.888304 20.742085-20.888303h334.505295c11.44679 0 20.742086 9.274407 20.742086 20.888303 0 11.530344-9.295295 20.888304-20.742086 20.888304H480.284766A20.762974 20.762974 0 0 1 459.542681 417.766073z m0 104.441519c0-11.530344 9.316183-20.888304 20.846527-20.888304h146.301679c11.509455 0 20.846527 9.274407 20.846527 20.888304 0 11.530344-9.316183 20.888304-20.846527 20.888303h-146.301679A20.80475 20.80475 0 0 1 459.542681 522.207592zM62.664911 396.87777a62.664911 62.664911 0 1 1 0-125.329822 62.664911 62.664911 0 0 1 0 125.329822z m0-31.332456a31.332456 31.332456 0 1 0 0-62.664911 31.332456 31.332456 0 0 0 0 62.664911zM1357.739739 271.547948a62.664911 62.664911 0 1 1 0-125.329822 62.664911 62.664911 0 0 1 0 125.329822z m0-31.332456a31.332456 31.332456 0 1 0 0-62.664911 31.332456 31.332456 0 0 0 0 62.664911z" fill="#8A96A3" p-id="15104"></path>\n\n		</svg>\n\n		<button class="now_btn" ion-button block>发起筹款</button>\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\my_fundraising\my_fundraising.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], My_fundraisingPage);
    return My_fundraisingPage;
}());

//# sourceMappingURL=my_fundraising.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__juankuan_juankuan__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__consultant_consultant__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, ref, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.showToolbar = false;
        this.headerImgSize = '100%';
        this.headerImgUrl = '';
        this.transition = false;
        this.articles = new Array(10).fill('');
        this.userdata = [
            {
                name: "小明",
                disease: "心脏病",
                head_img: "../../assets/imgs/header_png.png",
                text: "救救我可怜的儿子吧",
                city: "深圳",
                load: "45%",
                amount: "245200",
                count: "12452",
                id: "1"
            },
            {
                name: "小张",
                disease: "白血病",
                head_img: "../../assets/imgs/header_png.png",
                text: "救救我可怜的儿子吧",
                city: "武汉",
                load: "75%",
                amount: "468000",
                count: "28247",
                id: "2"
            }
        ];
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.storage.ready().then(function () {
            //			this.storage.set('flag', 0)
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransparentBarPage');
        this.headerImgUrl = './assets/bg.jpg';
        // this.content.enableScrollListener();
    };
    HomePage.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 120;
        if (scrollTop < 0) {
            this.transition = false;
            this.headerImgSize = Math.abs(scrollTop) / 2 + 100 + "%";
        }
        else {
            this.transition = true;
            this.headerImgSize = '100%';
        }
        this.ref.detectChanges();
    };
    HomePage.prototype.selectFriend = function () {
        // 声明一个modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__juankuan_juankuan__["a" /* JuankuanPage */]);
        // 弹出modal
        modal.present();
    };
    HomePage.prototype.Consultant = function () {
        // 声明一个modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__consultant_consultant__["a" /* ConsultantPage */]);
        // 弹出modal
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\home\home.html"*/'<ion-header>\n\n\n\n  <ion-navbar [class.show-background]="showToolbar">\n\n    <ion-title [hidden]="!showToolbar">云&nbsp;筹</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content  class="content"\n\n              (ionScroll)="onScroll($event)">\n\n  <ion-slides class="slide_box" autoplay="6000" loop="true" pager="true">\n\n	  <ion-slide>\n\n	    <img src="../../assets/imgs/slide_1.jpg"/>\n\n	  </ion-slide>\n\n	  <ion-slide>\n\n	    <img src="../../assets/imgs/slide_2.jpg"/>\n\n	  </ion-slide>\n\n	</ion-slides>\n\n	<div class="inner_content">\n		<div class="registration_box">\n\n			<p class="reg_title">\n\n				<span>\n\n					<ion-icon name="ios-notifications-outline" class="reg_icon"></ion-icon>\n\n				</span>\n\n				&nbsp;1对1免费筹款指导\n\n			</p>\n\n			<p class="reg_text">筹款志愿者电话帮你发起筹款，教你如何快速筹钱</p>\n\n			<button class="reg_btn" (click)="Consultant()">立即筹款</button>\n\n		</div>\n\n		<div class="notice">\n			<p>\n\n				<ion-icon name="md-volume-down" class="notice_icon"></ion-icon>\n\n				&nbsp;曾潇&nbsp;刚刚在水滴筹成功筹集到10000.000元\n\n			</p>\n		</div>\n\n		<div class="advertising_text">\n			17多万患者都在用云筹\n		</div>\n\n		<ion-slides class="slide_regbox" loop="true">\n\n		  <ion-slide *ngFor="let item of userdata; index as i;">\n\n		    <div class="bg_img"></div>\n\n		    <div class="rgbox_innertext">\n\n		    	<p class="rgbox_title">{{item.text}}</p>\n\n		    	<div class="user_msg">\n\n		    		<div class="header_img">\n\n		    			<img src="{{item.head_img}}"/>\n\n			    			{{item.name}}\n\n		    		</div>\n\n		    		<div class="user_disease">\n\n		    			{{item.disease}}\n\n		    		</div>\n\n		    		<div class="user_city">\n\n		    			<ion-icon name="ios-pin-outline"></ion-icon>&nbsp;{{item.city}}\n\n		    		</div>\n\n		    	</div>\n\n					<div class="load_bar">\n\n						<div class="load_bar_inner" [ngStyle]="{\'width\': item.load}"></div>\n\n					</div>\n\n					<div class="now_count">\n\n						<span class="count_amount">已筹金额{{item.amount}}元</span>\n						<span class="count_number">已获捐{{item.count}}次</span>\n\n					</div>\n\n		    </div>\n\n		  </ion-slide>\n		</ion-slides>\n	</div>\n\n	<div class="why_select">\n		<p class="why_title">为什么选择水滴筹</p>\n\n		<ul class="why_list">\n\n			<li class="why_item">已有<span class="list_green">17多万</span>名大病患者筹到治病钱</li>\n			<li class="why_item">共有<span class="list_green">8,500万</span>名爱心人士参与捐款</li>\n			<li class="why_item">累计筹款金额多达<span class="list_green">37亿</span>元</li>\n\n		</ul>\n\n		<ul class="serve_list">\n\n			<li class="serve_item">\n\n				<div>\n\n					<svg t="1524102794001" class="serve_icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="763" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n\n						<defs>\n\n							<style type="text/css"></style>\n\n						</defs>\n\n						<path d="M623.44704 547.21536c88.60672-45.97248 150.03648-143.232 150.03648-255.87712 0-156.74368-118.64064-284.2624-264.46848-284.2624s-264.46848 127.51872-264.46848 284.2624c0 112.64512 61.43488 209.90976 150.03648 255.87712-181.36576 54.12352-314.94656 212.9664-314.94656 425.37472 0 10.40384 0.43008 20.6848 1.06496 30.91968h45.29664a453.96992 453.96992 0 0 1-1.16736-30.91968c0-219.5968 156.87168-379.52 355.22048-395.67872l-57.78432 229.21728a22.58944 22.58944 0 0 0 21.90336 28.12416h128.47104a22.59968 22.59968 0 0 0 21.8624-28.29824l-59.74528-229.31456c199.86432 14.45888 358.43072 175.17056 358.43072 395.95008 0 10.41408-0.47616 20.70016-1.16736 30.91968h45.29152c0.63488-10.23488 1.07008-20.51584 1.07008-30.91968 0.00512-212.40832-133.57056-371.25632-314.93632-425.37472zM289.7408 291.33824c0-131.81952 98.36544-239.06816 219.27424-239.06816s219.27424 107.24864 219.27424 239.06816c0 131.82464-98.36544 239.06816-219.27424 239.06816S289.7408 423.15776 289.7408 291.33824z m183.43424 497.7152l34.53952-136.99072 35.70176 136.99072H473.17504z" fill="#ffb500" p-id="764"></path>\n\n					</svg>\n\n					<p>顾问</p>\n\n					<p>1对1服务</p>\n\n				</div>\n\n			</li>\n			<li class="serve_item">\n\n				<div>\n\n					<svg t="1524103007713" class="serve_icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1740" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n\n						<defs>\n\n							<style type="text/css"></style>\n\n						</defs>\n\n						<path d="M512 120c216.1 0 392 175.9 392 392S728.1 904 512 904 120 728.1 120 512s175.9-392 392-392m0-56C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z" p-id="1741" fill="#34ec08"></path>\n\n						<path d="M777.7 620.3c-14.1-23.5-36.1-23.5-50.2 0l-2 7.8c2.5 56.8-7.7 71.9-12.2 75.7-1.7 1.5-4.5 3.2-13.2 1.6l-102.6 0.2c-5.6 0.6-10.2 0.3-11.9-1.2-1.7-1.5-2.7-5.7-2.7-11.2v-113l55.1-0.1c26.5 2 46.9-3.9 60-17.1 12.4-12.5 17.8-30.9 16.2-53.8l-0.1-60.1c1.7-20.6-2.7-37.2-13.2-49.5-11.2-13.1-28.7-20.7-53.3-22.5h-36.3c7.7-13.6 15.4-29.2 23.2-46.9 6.7-18.5 5.9-33.9-2.4-45.7-10-14.2-29.3-21.2-59-21.2h-124c1.8-3.3 3.6-6.8 5.4-10.4l1.5-6.2c0-14.3-4.3-23.9-12.7-28.7-8.4-4.6-18.5-3.6-30.4 3.6l-5 5.1c-39.6 70.7-91.1 127.9-153.2 170.3l-4.2 4.3c-7.1 11.8-8.3 22-3.5 30.4 4.8 8.5 14.4 12.7 28.7 12.7l7.4-2.1c10.5-6.6 20.9-13.8 31.2-21.7-3 9.2-4.5 19.8-4.5 31.7v65.6c0 22.3 5.9 38.9 17.6 49.7 11 10 26.4 14.3 44.5 12.5h94c-25.6 58.8-93.7 104-202.7 134.4l-5 2.6c-11.6 9.2-16.6 18.9-14.9 28.8 1.8 9.7 9.7 17.1 23.6 21.7l8 0.3c133.7-34.9 218.2-98 251.4-187.7h2.3v117.2c0 20.7 5.9 36.8 17.6 47.5 12.4 11.5 30.6 16.2 53.3 14.6l103.1-0.1c19.6 2.4 35.4-2 48-13.5 21.7-19.6 31.2-58.6 29.1-119.1l-2-6.5zM564.5 317.8c6.7 0 11.2 0.4 14.3 0.9l-0.9 1.4c-7.5 17.7-17.6 36.8-30 57.1H380.8c-6.9 0-13.4 0.6-19.4 1.9 18.1-18.3 35.7-38.8 52.7-61.4h150.4zM660 511.1c0.8 6.2 0.2 10.8-1.7 12.7-0.9 0.9-4.8 3.8-19.4 2.2H536.4c3.9-36.5 6.2-68.2 6.9-94.5h99.9c7.2 0 12.3 1.4 14.6 3.9 2.3 2.6 3.1 8 2 17.1l0.2 58.6z m-295.9-63c0-12.7 3.9-16.6 16.6-16.6h108.4c-0.6 29.5-2.9 61.2-7 94.5l-98.8 0.1c-7.4 1-12.8 0.2-15.3-2.1-2.5-2.3-3.9-7.5-3.9-14.7v-61.2z" p-id="1742" fill="#34ec08"></path>\n\n					</svg>\n\n					<p>筹款</p>\n\n					<p>0手续费</p>\n\n				</div>\n\n			</li>\n			<li class="serve_item">\n\n				<div>\n\n					<svg t="1524103291550" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8661" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">\n\n						<defs>\n\n							<style type="text/css"></style>\n\n						</defs>\n\n						<path d="M387.132235 690.176c10.661647-64.075294 39.604706-119.160471 84.314353-165.978353 31.578353-33.069176 68.261647-58.849882 110.607059-76.438588 2.002824-0.843294 4.080941-2.996706 4.833882-5.029647 3.553882-9.366588 6.490353-18.974118 10.059294-28.310588 0.828235-2.168471 2.966588-4.412235 5.074824-5.391059 8.719059-4.005647 15.691294-9.848471 21.157647-17.694118 9.592471-13.718588 11.610353-29.500235 12.167529-45.507765 0.512-14.817882-3.358118-28.340706-14.607059-38.987294-1.084235-1.024-1.505882-3.147294-1.596235-4.788706-0.707765-12.694588-1.159529-25.419294-1.882353-38.098824-2.063059-35.855059-9.306353-70.671059-22.708706-103.951059-13.281882-32.948706-34.469647-59.602824-65.686588-77.673412-54.528-31.563294-112.941176-41.592471-174.531765-30.087529-57.103059 10.661647-99.855059 42.300235-127.608471 93.515294-13.763765 25.404235-20.163765 53.278118-24.003765 81.483294-3.282824 24.064-3.84 48.504471-5.692235 72.764235-0.165647 2.213647-0.406588 4.848941-1.671529 6.475294-20.224 25.856-18.733176 53.037176-4.427294 80.534588 5.150118 9.908706 12.995765 17.904941 23.883294 22.317176 1.912471 0.783059 3.674353 3.252706 4.472471 5.345882 3.945412 10.360471 7.258353 20.961882 11.339294 31.262118 5.752471 14.561882 14.230588 27.166118 27.181176 36.562824 6.068706 4.397176 11.459765 9.743059 17.016471 14.802824 8.207059 7.499294 13.643294 16.64 14.817882 27.813647 0.993882 9.231059 1.536 18.537412 1.882353 27.843765 0.466824 12.965647-3.448471 24.711529-11.158588 35.132235-14.396235 19.531294-34.017882 32.466824-56.048941 41.095529-21.443765 8.402824-43.730824 14.667294-65.761882 21.534118-20.811294 6.475294-42.194824 11.369412-61.048471 23.085176-21.955765 13.628235-38.128941 31.488-42.014118 58.006588-2.138353 14.697412-3.689412 29.485176-4.894118 44.288-2.063059 24.952471-0.752941 49.679059 6.068706 73.999059 3.087059 10.977882 9.020235 18.612706 20.600471 20.766118 25.313882 4.713412 50.522353 10.285176 76.016941 13.658353 37.255529 4.954353 74.691765 8.643765 112.112941 12.242824 51.380706 4.924235 102.881882 7.860706 154.533647 7.393882 1.867294-0.015059 3.719529-0.316235 6.505412-0.527059-1.596235-3.192471-2.710588-5.556706-3.945412-7.845647C387.463529 831.262118 375.070118 762.714353 387.132235 690.176zM705.566118 466.898824c-149.820235-0.015059-271.465412 121.464471-271.570824 271.149176-0.090353 149.76 121.871059 271.465412 271.962353 271.390118 149.398588-0.060235 271.104-121.615059 271.329882-270.968471C977.513412 588.694588 855.672471 466.898824 705.566118 466.898824zM743.408941 721.573647c14.336 0 28.672 0.180706 42.992941-0.090353 4.562824-0.075294 5.872941 1.460706 5.707294 5.857882-0.316235 8.207059-0.090353 16.444235-0.090353 25.298824l-72.116706 0 0 40.207059 71.664941 0 0 30.960941-71.830588 0c-0.120471 2.605176-0.301176 4.683294-0.316235 6.761412-0.015059 15.947294-0.135529 31.879529 0.075294 47.826824 0.075294 4.487529-1.340235 5.918118-5.797647 5.767529-9.125647-0.316235-18.281412-0.316235-27.407059 0-4.412235 0.150588-5.857882-1.159529-5.782588-5.692235 0.256-15.947294 0.090353-31.879529 0.090353-47.841882l0-6.475294-75.158588 0 0-31.021176 74.827294 0 0-40.282353-75.233882 0c0-9.923765-0.180706-19.184941 0.210824-28.446118 0.060235-1.008941 3.282824-2.695529 5.059765-2.710588 17.212235-0.210824 34.394353-0.135529 51.606588-0.135529l6.987294 0c-26.262588-45.101176-52.043294-89.374118-78.351059-134.550588 2.831059-0.180706 4.668235-0.376471 6.520471-0.391529 10.029176-0.030118 20.073412 0.271059 30.087529-0.135529 4.939294-0.195765 7.634824 1.415529 9.938824 5.842824 20.841412 39.951059 41.908706 79.826824 62.930824 119.687529 0.165647 0.316235 0.421647 0.572235 0.376471 0.496941 21.684706-40.297412 43.459765-80.549647 64.978824-120.907294 2.093176-3.885176 4.457412-5.225412 8.749176-5.089882 9.667765 0.316235 19.335529 0.075294 29.018353 0.105412 1.716706 0 3.448471 0.165647 6.174118 0.316235-26.503529 45.071059-52.555294 89.389176-79.179294 134.625882L743.408941 721.558588z" p-id="8662" fill="#3fbffd"></path>\n\n					</svg>\n\n					<p>最多可筹</p>\n\n					<p>100万元</p>\n\n				</div>\n\n			</li>\n\n		</ul>\n	</div>\n\n	<div class="news">\n		<dl>\n			<dt>新闻资讯</dt>\n			<dd><p>水滴筹创始人沈鹏获年度公益人物</p><span>2018-02-01</span></dd>\n			<dd><p>水滴筹举办弱势群体献爱心活动</p><span>2018-02-01</span></dd>\n			<dd><p>水滴公司获得1.6亿元融资，腾云驾雾飞天</p><span>2018-02-01</span></dd>\n			<dd><p>水滴筹创始人沈鹏获年度公益人物</p><span>2018-02-01</span></dd>\n		</dl>\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewprojectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__expressway_expressway__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subsuc_subsuc__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewprojectPage = /** @class */ (function () {
    function NewprojectPage(navCtrl, storage, platform, callNumber, actionSheetCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.platform = platform;
        this.callNumber = callNumber;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.countdown = "发送验证码";
        this.text_content = false;
        this.instructions_content = false;
        this.img_content = false;
    }
    NewprojectPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    NewprojectPage.prototype.message = function (type) {
        console.log(type);
    };
    NewprojectPage.prototype.Expressway = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__expressway_expressway__["a" /* ExpresswayPage */]);
        modal.present();
    };
    NewprojectPage.prototype.subsuc = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__subsuc_subsuc__["a" /* SubsucPage */]);
        modal.present();
    };
    NewprojectPage.prototype.presentActionSheet = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: '请选择图片或拍照',
            buttons: [
                {
                    text: '拍照',
                    role: 'destructive',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                }, {
                    text: '选择相册',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    NewprojectPage.prototype.callnumber = function () {
        var _this = this;
        console.log("callnumber");
        if (!this.platform.ready()) {
            window.location.href = "tel://4006526559";
        }
        this.platform.ready().then(function () {
            _this.callNumber.callNumber("4006526559", true)
                .then(function (res) { return console.log('Launched dialer!', res); })
                .catch(function (err) { return console.log('Error launching dialer', err); });
        });
    };
    NewprojectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newproject',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\newproject\newproject.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton class="pd">\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="md-close"></ion-icon>\n\n        	&nbsp;关闭\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title class="pd">\n\n            发起项目\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<div class="top_notice" (click)="Expressway()">\n		筹款信息不会写，点击这里帮你写\n\n		<ion-icon class="notice_icon" name="ios-arrow-forward-outline"></ion-icon>\n	</div>\n\n	<div class="form_box">\n		<ion-list no-lines>\n\n		  <ion-item class="item_box">\n\n		  	<ion-label class="item_label" stacked>目标金额</ion-label>\n\n		  	<ion-input class="number_after" type="number" placeholder="请输入目标金额"></ion-input>\n\n		  </ion-item>\n		  <ion-item class="item_box">\n\n		  	<ion-label class="item_label" stacked>筹款标题<span class="why_title" (click)="text_content = !text_content">如何写好标题&nbsp;&nbsp;<ion-icon name="ios-arrow-down-outline" *ngIf="!text_content"></ion-icon><ion-icon name="ios-arrow-up-outline" *ngIf="text_content"></ion-icon></span></ion-label>\n\n		  	<div class="text_content" item-content [ngClass]="{\'topup\': text_content, \'topdow\': !text_content}">\n		  		<p> 标题应突出患者所在地域、工作、学校、年龄等特征属性，也可突出求助事件 严重性、紧急性或罕见性。<br />\n\n							实例：<br />\n\n							18个月溶血尿毒症患儿，爸爸妈妈等你回家\n\n							为了家中年近70的双亲和刚考上重点高中的儿子，我必须战胜癌症。\n\n							救救河北保定的这位人民教师，别让白血病夺走她的笑脸\n\n					</p>\n		  	</div>\n\n		  	<ion-input class="title_after" type="text" placeholder="好的标题筹款效果更好"></ion-input>\n\n		  </ion-item>\n		  <ion-item class="item_box">\n\n		  	<ion-label class="item_label" stacked>求助说明<span class="instructions" (click)="instructions_content = !instructions_content">如何写好说明&nbsp;&nbsp;<ion-icon name="ios-arrow-down-outline" *ngIf="!instructions_content"></ion-icon><ion-icon name="ios-arrow-up-outline" *ngIf="instructions_content"></ion-icon></span></ion-label>\n\n		  	<div class="instructions_content" item-content [ngClass]="{\'topup\': instructions_content, \'topdow\': !instructions_content}">\n		  		<p> \n\n		  				将如下四点进行简单介绍：<br />\n\n							患者信息：姓名、年龄、职业、家庭人员等信息。<br />\n\n							治疗过程：所患疾病、确诊时间、就诊医院、治疗方案和治疗费用。<br />\n\n							筹款原因：家庭真实情况，疾病治疗费用庞大等。<br />\n\n							求生欲望：向好心人寻求帮助，表达渴望渡过难关的心情\n\n\n\n					</p>\n		  	</div>\n\n		  	<ion-textarea class="textarea_content" type="textarea" placeholder="好的说明文章效果更好"></ion-textarea>\n\n		  </ion-item>\n		  <ion-item class="item_box">\n\n		  	<ion-label class="item_label" stacked>添加图片<span class="instructions" (click)="img_content = !img_content">什么样的图片好&nbsp;&nbsp;<ion-icon name="ios-arrow-down-outline" *ngIf="!img_content"></ion-icon><ion-icon name="ios-arrow-up-outline" *ngIf="img_content"></ion-icon></span></ion-label>\n\n		  	<div class="img_content" item-content [ngClass]="{\'topup\': img_content, \'topdow\': !img_content}">\n		  		<p> \n\n		  				建议上传医疗诊断结果、患者患病前的生活照和患病\n\n							后的治疗照，增加筹款项目真实性的同时通过对比给\n\n							人视觉冲击，提升筹款效果！\n\n					</p>\n		  	</div>\n\n		  	<div item-content class="img_content_box">\n		  		<div class="select_btn" (click)="presentActionSheet()">\n		  			<ion-icon class="select_icon" name="md-add"></ion-icon>\n		  		</div>\n\n		  		<span class="img_ht">上传图片（最多8张）</span>\n		  	</div>\n\n		  </ion-item>\n\n		  <ion-item class="item_box lastitem">\n\n	    	<ion-label class="item_label agree">我已经阅读并同意<span class="terms" (click)="message(\'1\')">《项目发起条款》</span><span class="terms" (click)="message(\'2\')">《发起人承诺书》</span></ion-label>\n\n		    <ion-checkbox [(ngModel)]="pepperoni" color="secondary"></ion-checkbox>\n\n		    <p item-content class="bottom_number"> 任何问题请拨打<span (click)="callnumber()">4006526559</span></p>\n\n		  </ion-item>\n\n		</ion-list>\n		<button class="sub_btn" (click)="subsuc()">马上发起大病筹款</button>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\newproject\newproject.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], NewprojectPage);
    return NewprojectPage;
}());

//# sourceMappingURL=newproject.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpresswayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subsuc_subsuc__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpresswayPage = /** @class */ (function () {
    function ExpresswayPage(navCtrl, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.count_type = false;
    }
    ExpresswayPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    ExpresswayPage.prototype.subsuc = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__subsuc_subsuc__["a" /* SubsucPage */]);
        modal.present();
    };
    ExpresswayPage.prototype.datetime = function (time) {
        console.log(time);
    };
    ExpresswayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-expressway',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\expressway\expressway.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n\n        	&nbsp;返回\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            快速发起通道\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<ion-list no-lines>\n\n	  <ion-list-header class="list_header">\n\n	    请填写如下信息\n\n	  </ion-list-header>\n\n	  <ion-item class="item_box">\n\n	  	<ion-label class="item_label">患者姓名</ion-label>\n\n	  	<ion-input class="text_after" type="text" placeholder="输入患者姓名"></ion-input>\n\n	  </ion-item>\n	  <ion-item class="item_box">\n\n	  	<ion-label class="item_label">所在地区</ion-label>\n\n	  	<ion-input class="text_after" type="text" placeholder="如北京市通州区宋庄镇"></ion-input>\n\n	  </ion-item>\n	  <ion-item class="item_box">\n\n	  	<ion-label class="item_label">所患疾病</ion-label>\n\n	  	<ion-input class="text_after" type="text" placeholder="输入患者所患疾病"></ion-input>\n\n	  </ion-item>\n	  <ion-item class="item_box">\n\n	  	<ion-label class="item_label">何时确诊</ion-label>\n\n	  	<ion-datetime displayFormat="YYYY/MM/DD" (ionChange)="datetime(myDate)" [(ngModel)]="myDate" placeholder="选择确诊时间" cancelText="取消" doneText="确定"></ion-datetime>\n\n	  </ion-item>\n\n	  <ion-item class="item_box">\n\n	  	<ion-label class="item_label">花费多少</ion-label>\n\n	  	<ion-input class="number_after" type="number" placeholder="花费多少"></ion-input>\n\n	  </ion-item>\n\n	  <ion-item class="item_box">\n\n	  	<ion-label class="item_label">想筹多少</ion-label>\n\n	  	<ion-input class="number_after" type="number" placeholder="想筹多少"></ion-input>\n\n	  </ion-item>\n\n	</ion-list>\n\n	<button class="btn" (click)="subsuc()">马上发起大病筹款</button>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\expressway\expressway.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ExpresswayPage);
    return ExpresswayPage;
}());

//# sourceMappingURL=expressway.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsultantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subsuc_subsuc__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConsultantPage = /** @class */ (function () {
    function ConsultantPage(navCtrl, storage, fb, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.colorflag = false;
        this.user = {
            skills: [
                {
                    id: 1,
                    name: "怎么发起筹款？",
                    selected: false
                },
                {
                    id: 2,
                    name: "这样转发筹钱多!",
                    selected: false
                },
                {
                    id: 3,
                    name: "这种情况能筹款吗？",
                    selected: false
                },
                {
                    id: 4,
                    name: "标题文章该这样写？",
                    selected: false
                },
                {
                    id: 5,
                    name: "各种疑问,各种技巧",
                    selected: false
                },
            ]
        };
        console.clear();
        this.form = this.fb.group({
            skills: this.buildSkills()
        });
        console.log(this.form.get("skills"));
    }
    Object.defineProperty(ConsultantPage.prototype, "skills", {
        get: function () {
            return this.form.get('skills');
        },
        enumerable: true,
        configurable: true
    });
    ;
    ConsultantPage.prototype.buildSkills = function () {
        var _this = this;
        var arr = this.user.skills.map(function (skill) {
            return _this.fb.control(skill.selected);
        });
        return this.fb.array(arr);
    };
    ConsultantPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.pop();
    };
    ConsultantPage.prototype.alertsb = function (value) {
        var _this = this;
        var formValue = Object.assign({}, value, {
            skills: value.skills.map(function (selected, i) {
                return {
                    id: _this.user.skills[i].id,
                    name: _this.user.skills[i].name,
                    selected: selected
                };
            })
        });
        console.log("formValue_al");
        console.log(formValue);
        this.user = formValue;
    };
    ConsultantPage.prototype.submit = function (value) {
        var _this = this;
        var formValue = Object.assign({}, value, {
            skills: value.skills.map(function (selected, i) {
                return {
                    id: _this.user.skills[i].id,
                    name: _this.user.skills[i].name,
                    selected: selected
                };
            })
        });
        console.log("formValue_cl");
        console.log(formValue);
        this.user = formValue;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__subsuc_subsuc__["a" /* SubsucPage */]);
        modal.present();
    };
    ConsultantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consultant',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\consultant\consultant.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n\n        	&nbsp;返回\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            筹款顾问\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<div class="consultant_img">\n		<img src="../../assets/imgs/consultant_1.png"/>\n\n		<p>筹款顾问1对1服务</p>\n		<p>少走弯路多筹钱</p>\n		<p>耐心解答各种疑问，3分钟掌握筹款技巧</p>\n	</div>\n\n	<div class="phone_number_box">\n		<div class="inner_box">\n			<ion-icon class="inp_icon" name="ios-phone-portrait-outline"></ion-icon>\n\n			<ion-input class="inp" type="number" placeholder="请输入手机号"></ion-input>\n		</div>\n	</div>\n\n	<div class="chick_box">\n		<p>可以告诉我们你需要的帮助（非必填）</p>\n\n		<div class="chicked">\n\n			<form [formGroup]="form">\n\n				<label class="check_list" *ngFor="let skill of skills.controls; index as i;" (click)="alertsb(form.value)" [ngClass]="{\'border\': user.skills[i].selected}" tappable >\n\n					<span>{{user.skills[i].name}}</span>\n\n					<input [formControl]="skill" type="checkbox" name="help" [value]="user.skills[i].id" />\n\n				</label>\n\n				<button class="sub_btn" type="submit" ion-button block round (click)="submit(form.value)">获取筹款指导</button>\n			</form>\n\n		</div>\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\consultant\consultant.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], ConsultantPage);
    return ConsultantPage;
}());

//# sourceMappingURL=consultant.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_juankuan_juankuan__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_consultant_consultant__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_subsuc_subsuc__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_newproject_newproject__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_invite_friend_invite_friend__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_expressway_expressway__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_problem_problem__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_message_message__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_personal_center_personal_center__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_my_fundraising_my_fundraising__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_call_number__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__ = __webpack_require__(103);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_juankuan_juankuan__["a" /* JuankuanPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_consultant_consultant__["a" /* ConsultantPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_subsuc_subsuc__["a" /* SubsucPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_newproject_newproject__["a" /* NewprojectPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_invite_friend_invite_friend__["a" /* Invite_friendPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_expressway_expressway__["a" /* ExpresswayPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_problem_problem__["a" /* ProblemPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_personal_center_personal_center__["a" /* Personal_centerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_my_fundraising_my_fundraising__["a" /* My_fundraisingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: '返回', iconMode: 'ios',
                    mode: 'ios',
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_juankuan_juankuan__["a" /* JuankuanPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_consultant_consultant__["a" /* ConsultantPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_subsuc_subsuc__["a" /* SubsucPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_newproject_newproject__["a" /* NewprojectPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_invite_friend_invite_friend__["a" /* Invite_friendPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_expressway_expressway__["a" /* ExpresswayPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_problem_problem__["a" /* ProblemPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_personal_center_personal_center__["a" /* Personal_centerPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_my_fundraising_my_fundraising__["a" /* My_fundraisingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, sqlite) {
        var _this = this;
        this.platform = platform;
        this.sqlite = sqlite;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            screen.orientation.lock('portrait-primary'); //旋转锁定
            if (_this.platform.is('cordova')) {
                _this.initDB();
            }
        });
    }
    MyApp.prototype.initDB = function () {
        console.log("intdb");
        this.sqlite.create({
            name: ' fundraising.db',
            location: 'default'
        })
            .then(function (db) {
            db.executeSql('create table if not exists login_type (id INTEGER PRIMARY KEY AUTOINCREMENT, login_type BOOLEAN NOT NULL, login_time text)', {}) //信息数据表
                .then(function () { return console.log('login SQLdb ok'); })
                .catch(function (e) { return console.log(e); });
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\wwwroot\shuidi\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite__["a" /* SQLite */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubsucPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubsucPage = /** @class */ (function () {
    function SubsucPage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.countdown = "发送验证码";
    }
    SubsucPage.prototype.backbtn = function () {
        console.log("back");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    SubsucPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subsuc',template:/*ion-inline-start:"F:\wwwroot\shuidi\src\pages\subsuc\subsuc.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n\n  	<ion-buttons left>\n\n      <button ion-button (click)="backbtn()">\n\n        <ion-icon class="customIcon" name="md-close"></ion-icon>\n\n        	&nbsp;关闭\n\n      </button>\n\n   </ion-buttons>\n\n    <ion-title>\n\n            消息\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="content">\n\n	<svg t="1524538557119" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="579" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128">\n\n		<defs>\n\n			<style type="text/css"></style>\n\n		</defs>\n\n		<path d="M740.931441 681.165701c-12.485309 0-22.514491 10.029182-22.514491 22.514491l0 88.522886c0 5.730961-5.014591 10.131521-10.745553 10.131521L268.229462 802.334599c-5.730961 0-10.336198-4.502898-10.336198-10.131521L257.893264 211.431541c0-5.730961 4.707575-10.847891 10.336198-10.847891l439.441935 0c5.730961 0 10.745553 5.11693 10.745553 10.847891l0 208.259045c0 12.485309 10.029182 22.514491 22.514491 22.514491s22.514491-10.029182 22.514491-22.514491L763.445932 211.431541c0-30.59924-25.072956-55.876874-55.774535-55.876874L268.229462 155.554667c-30.59924 0-55.365181 25.277633-55.365181 55.876874l0 580.771537c0 30.59924 24.76594 55.160504 55.365181 55.160504l439.441935 0c30.59924 0 55.774535-24.561263 55.774535-55.160504l0-88.522886C763.445932 691.194883 753.41675 681.165701 740.931441 681.165701z" p-id="580" fill="#8a96a3"></path>\n\n		<path d="M844.395763 434.325005 844.395763 434.325005c-7.163702-7.163702-18.830302-7.163702-26.096342 0L538.915051 713.811713l-98.245053-98.245053c-7.163702-7.163702-18.830302-7.163702-26.096342 0l0 0c-7.163702 7.163702-7.163702 18.830302 0 26.096342L526.020388 753.007396c7.163702 7.163702 18.830302 7.163702 26.096342 0l0 0c0.614032-0.614032 1.228063-1.330402 1.739756-2.046772l290.641615-290.641615C851.661803 453.155307 851.661803 441.488707 844.395763 434.325005z" p-id="581" fill="#8a96a3"></path>\n\n		<path d="M616.078353 302.922247 354.091545 302.922247c-8.494104 0-15.35079 6.856686-15.35079 15.35079s6.856686 15.35079 15.35079 15.35079l261.986808 0c8.494104 0 15.35079-6.856686 15.35079-15.35079S624.572457 302.922247 616.078353 302.922247z" p-id="582" fill="#8a96a3"></path>\n\n		<path d="M629.382371 427.775335c0-8.494104-6.856686-15.35079-15.35079-15.35079L352.044773 412.424545c-8.494104 0-15.35079 6.856686-15.35079 15.35079s6.856686 15.35079 15.35079 15.35079l261.986808 0C622.525685 443.126124 629.382371 436.269438 629.382371 427.775335z" p-id="583" fill="#8a96a3"></path>\n\n		<path d="M354.091545 530.113932c-8.494104 0-15.35079 6.856686-15.35079 15.35079s6.856686 15.35079 15.35079 15.35079l184.209474 0c8.494104 0 15.35079-6.856686 15.35079-15.35079s-6.856686-15.35079-15.35079-15.35079L354.091545 530.113932z" p-id="584" fill="#8a96a3"></path>\n\n	</svg>\n\n	<h2>提交成功</h2>\n\n	<p>筹款顾问将尽快联系您</p>\n\n	<p>请留意以010开头的座机来电</p>\n\n	<p>顾问服务时间：每天10:00-22:00（含周末）</p>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\wwwroot\shuidi\src\pages\subsuc\subsuc.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], SubsucPage);
    return SubsucPage;
}());

//# sourceMappingURL=subsuc.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map