webpackJsonp([0],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalservices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotp_forgotp__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignInPage = (function () {
    function SignInPage(navCtrl, http, gb, events) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.gb = gb;
        this.events = events;
    }
    SignInPage.prototype.ngOnInit = function () {
        var _this = this;
        var response = this.http.post(this.gb.checkSessionUrl, {}).map(function (res) { return res.json(); })
            .subscribe(function (r) {
            _this.gb.presentToast(r.message);
            if (r.IsSuccess) {
                _this.gb.setUserInstance(JSON.stringify(r.user));
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                _this.gb.setUserInstance('');
            }
        });
    };
    SignInPage.prototype.SignIn = function () {
        var _this = this;
        if (!this.phone) {
            this.gb.presentToast('Please enter Mobile Number');
            return;
        }
        if (!this.password) {
            this.gb.presentToast('Please enter Password');
            return;
        }
        var response = this.http.post(this.gb.signinUrl, {
            mobileNo: this.phone,
            password: this.password
        }).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.gb.presentToast(response.message);
            if (response.IsSuccess) {
                setTimeout(function () {
                    localStorage.setItem('currentUser', JSON.stringify(response.user));
                    _this.events.publish('user:login');
                }, 2000);
            }
        });
    };
    SignInPage.prototype.RedirectSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignUpPage */]);
    };
    SignInPage.prototype.RedirectForgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__forgotp_forgotp__["a" /* ForgotPassPage */]);
    };
    return SignInPage;
}());
SignInPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\signin\signin.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (submit)="SignIn()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Mobile Number</ion-label>\n        <ion-input type="phone" name="phone" [(ngModel)]="phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" name="phone" [(ngModel)]="password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button ion-button color="primary" block>Sign In</button>\n    </div>\n    <a (click)="RedirectSignUp()" float-left>Sign Up ?</a>\n    <a (click)="RedirectForgotPassword()" float-right>Forgot Password ?</a>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\signin\signin.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], SignInPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalservices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignUpPage = (function () {
    function SignUpPage(navCtrl, http, gb) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.gb = gb;
    }
    SignUpPage.prototype.registerUser = function (formInstance) {
        var _this = this;
        if (!this.firstName) {
            this.gb.presentToast('Please enter First Name');
            return;
        }
        if (!this.email) {
            this.gb.presentToast('Please enter Email');
            return;
        }
        if (!this.phone) {
            this.gb.presentToast('Please enter Mobile Number');
            return;
        }
        if (!this.password) {
            this.gb.presentToast('Please enter Password');
            return;
        }
        if (!this.confirmPassword) {
            this.gb.presentToast('Please enter Confirm Password');
            return;
        }
        if (this.password != this.confirmPassword) {
            this.gb.presentToast('Password not matched with Confirm Password');
            return;
        }
        this.http.post(this.gb.registerUserUrl, {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            mobileNo: this.phone,
            password: this.password
        }).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.gb.presentToast(response.message);
            if (response.IsSuccess) {
                setTimeout(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SignInPage */]);
                }, 2000);
            }
        });
    };
    return SignUpPage;
}());
SignUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form (submit)="registerUser()">\n  <ion-list>\n    <ion-item>\n      <ion-label floating>First Name</ion-label>\n      <ion-input type="text" [(ngModel)]="firstName" name="firstName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Last Name</ion-label>\n      <ion-input type="text" [(ngModel)]="lastName" name="lastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email" name="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Mobile Number</ion-label>\n      <ion-input type="phone" [(ngModel)]="phone" name="phone"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Confirm Password</ion-label>\n      <ion-input type="password" [(ngModel)]="confirmPassword" name="confirmPassword"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block type="submit">Sign Up</button>\n  </div>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\signup\signup.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */]])
], SignUpPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPassPage = (function () {
    function ForgotPassPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ForgotPassPage;
}());
ForgotPassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgotp',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\forgotp\forgotp.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Mobile Number</ion-label>\n      <ion-input type="phone"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block>Reset Password</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\forgotp\forgotp.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], ForgotPassPage);

//# sourceMappingURL=forgotp.js.map

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 188:
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
webpackEmptyAsyncContext.id = 188;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_globalservices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetPassPage = (function () {
    function ResetPassPage(navCtrl, http, gb) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.gb = gb;
    }
    ResetPassPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.oldPassword) {
            this.gb.presentToast('Please enter Password');
            return;
        }
        if (!this.confirmPassword) {
            this.gb.presentToast('Please enter Confirm Password');
            return;
        }
        if (this.newpassword != this.confirmPassword) {
            this.gb.presentToast('Password not matched with Confirm Password');
            return;
        }
        var loggedInUser = JSON.parse(this.gb.getUserInstance());
        var response = this.http.post(this.gb.updatePasswordUrl, {
            mobileNo: loggedInUser.mobileNo,
            oldPassword: this.oldPassword,
            password: this.newpassword,
        }).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.gb.presentToast(response.message);
            if (response.IsSuccess) {
                setTimeout(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
                }, 2000);
            }
        });
    };
    return ResetPassPage;
}());
ResetPassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resetp',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\resetp\resetp.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reset Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (submit)="resetPassword()">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Old Password</ion-label>\n        <ion-input type="password" name="oldpassword" [(ngModel)]="oldPassword"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>New Password</ion-label>\n        <ion-input type="password" name="newpassword" [(ngModel)]="newPassword"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Confirm Password</ion-label>\n        <ion-input type="password" name="confirmpassword" [(ngModel)]="confirmPassword"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button ion-button color="primary" block>Reset Password</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\resetp\resetp.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_globalservices__["a" /* GlobalServices */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__services_globalservices__["a" /* GlobalServices */]])
], ResetPassPage);

//# sourceMappingURL=resetp.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentSchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalservices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_request__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppointmentSchedulePage = (function () {
    function AppointmentSchedulePage(navCtrl, http, gb) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.gb = gb;
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) {
                    return date.getDate().toString();
                },
                formatMonthViewDayHeader: function (date) {
                    return 'MonMH';
                },
                formatMonthViewTitle: function (date) {
                    return 'testMT';
                },
                formatWeekViewDayHeader: function (date) {
                    return 'MonWH';
                },
                formatWeekViewTitle: function (date) {
                    return 'testWT';
                },
                formatWeekViewHourColumn: function (date) {
                    return 'testWH';
                },
                formatDayViewHourColumn: function (date) {
                    return 'testDH';
                },
                formatDayViewTitle: function (date) {
                    return 'testDT';
                }
            }
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        this.requestedUser = new Object();
        this.requestedUser.mobileNo = '';
        this.loggedInUser = JSON.parse(this.gb.getUserInstance());
    }
    AppointmentSchedulePage.prototype.loadEvents = function () {
        this.eventSource = this.createRandomEvents();
    };
    AppointmentSchedulePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    AppointmentSchedulePage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    AppointmentSchedulePage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    AppointmentSchedulePage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    AppointmentSchedulePage.prototype.onTimeSelected = function (ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    };
    AppointmentSchedulePage.prototype.onCurrentDateChanged = function (event) {
        this.selectedMonth = event;
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
        this.loadAppointments();
    };
    AppointmentSchedulePage.prototype.compareMonth = function () {
        var monthVal = this.calendar.currentDate.getMonth() + '-' + this.calendar.currentDate.getFullYear();
        if (!this.manipulatedMonth || this.manipulatedMonth != monthVal) {
            this.manipulatedMonth = monthVal;
            return true;
        }
        else {
            return false;
        }
    };
    AppointmentSchedulePage.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        console.log(events);
        return events;
    };
    AppointmentSchedulePage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    AppointmentSchedulePage.prototype.previousMonth = function () {
        this.calendar.currentDate = new Date(this.calendar.currentDate.setMonth(this.calendar.currentDate.getMonth() - 1));
    };
    AppointmentSchedulePage.prototype.nextMonth = function () {
        this.calendar.currentDate = new Date(this.calendar.currentDate.setMonth(this.calendar.currentDate.getMonth() + 1));
    };
    AppointmentSchedulePage.prototype.requestAppointment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__request_request__["a" /* AppointmentRequestPage */], {
            requestDate: this.calendar.currentDate,
            requestedUser: this.requestedUser
        });
    };
    AppointmentSchedulePage.prototype.loadUser = function () {
        var _this = this;
        this.http.post(this.gb.fetchUserByMobileUrl, {
            mobileNo: this.requestedMobile,
        }).map(function (res) { return res.json(); }).subscribe(function (response) {
            _this.gb.presentToast(response.message);
            if (response.IsSuccess) {
                _this.requestedUser = response.user;
                _this.loadAppointments();
            }
        });
    };
    AppointmentSchedulePage.prototype.loadAppointments = function () {
        var _this = this;
        if (!this.compareMonth()) {
            return;
        }
        var currDate = this.calendar.currentDate;
        var dateFrom = new Date(currDate.getFullYear() + '-' + currDate.getMonth() + '-01');
        var dateFromTime = dateFrom.getTime();
        var dateTo = new Date(currDate.getFullYear(), (currDate.getMonth() + 2), 0);
        var dateToTime = dateTo.getTime();
        this.http.post(this.gb.appointmentAllUrl, {
            requestedFrom: this.requestedUser._id,
            startFromTime: dateFromTime,
            endToTime: dateToTime
        }).map(function (res) { return res.json(); }).subscribe(function (response) {
            if (response.IsSuccess) {
                console.log(response.appointments);
            }
            var events = [], singleRow, personName;
            for (var a in response.appointments) {
                singleRow = response.appointments[a];
                if (singleRow.requested_by._id == _this.requestedUser._id && singleRow.requested_from._id == _this.loggedInUser._id) {
                    personName = 'You';
                }
                else if (singleRow.requested_from._id == _this.requestedUser._id && singleRow.requested_by._id == _this.loggedInUser._id) {
                    personName = 'You';
                }
                else if (singleRow.privacy != 'public') {
                    personName = 'Hidden';
                }
                else if (singleRow.requested_by._id == _this.requestedUser._id) {
                    personName = (singleRow.requested_from.firstName + ' ' + singleRow.requested_from.lastName).trim();
                }
                else if (singleRow.requested_from._id == _this.requestedUser._id) {
                    personName = (singleRow.requested_by.firstName + ' ' + singleRow.requested_by.lastName).trim();
                }
                else {
                    personName = 'Unknown';
                }
                events.push({
                    title: 'Appointment with ' + personName,
                    startTime: new Date(singleRow.startTime),
                    endTime: new Date(singleRow.endTime),
                    allDay: false
                });
            }
            _this.eventSource = events;
        });
    };
    return AppointmentSchedulePage;
}());
AppointmentSchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-schedule',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\appointment\schedule\schedule.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Schedule</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n            <!-- <button ion-button (click)="changeMode(\'month\')">M</button>\n\n            <button ion-button (click)="changeMode(\'week\')">W</button> -->\n\n            <!-- <button ion-button (click)="changeMode(\'day\')">D</button> -->\n\n            <!-- <button ion-button (click)="loadEvents()">Load Appointments</button> -->\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-8>\n\n                <ion-item>\n\n                    <ion-input type="tel" value="" placeholder="Contact Number" [(ngModel)]="requestedMobile"></ion-input>\n\n                </ion-item>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <button ion-button icon-left (click)="loadUser()">\n\n                    <ion-icon name="eye"></ion-icon>\n\n                    Appointments                    \n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n    <!-- <div [hidden]="!requestedUser.mobileNo"> -->\n\n        <ion-item>\n\n            <ion-icon name="contact" item-left large></ion-icon>\n\n            <h1><strong>{{ requestedUser.firstName + \' \' + requestedUser.lastName }}</strong></h1>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-icon name="arrow-back" item-left (click)="previousMonth()"></ion-icon>\n\n            <span text-center>{{ selectedMonth | date: "MMM, y" }}</span>\n\n            <ion-icon name="arrow-forward" item-right (click)="nextMonth()"></ion-icon>\n\n        </ion-item>\n\n        <calendar [eventSource]="eventSource" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onCurrentDateChanged)="onCurrentDateChanged($event)"\n\n            (onEventSelected)="onEventSelected($event)" (onTitleChanged)="onViewTitleChanged($event)" (onTimeSelected)="onTimeSelected($event)"\n\n            step="30">\n\n        </calendar>\n\n        <ion-fab right bottom>\n\n            <button ion-fab (click)="requestAppointment()"><ion-icon name="md-watch"></ion-icon></button>\n\n        </ion-fab>\n\n    <!-- </div> -->\n\n</ion-content>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\appointment\schedule\schedule.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */]])
], AppointmentSchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalservices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppointmentRequestPage = (function () {
    function AppointmentRequestPage(navCtrl, params, dtPipe, http, gb) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.dtPipe = dtPipe;
        this.http = http;
        this.gb = gb;
        var paramDate = new Date(params.get('requestDate'));
        this.requestedDate = this.dtPipe.transform(paramDate, "yyyy-MM-dd");
        this.requestedUser = params.get('requestedUser');
        this.loggedInUser = JSON.parse(this.gb.getUserInstance());
    }
    AppointmentRequestPage.prototype.requestAppointment = function () {
        var _this = this;
        var response = this.http.post(this.gb.requestAppointmentUrl, {
            requestedBy: this.loggedInUser._id,
            requestedFrom: this.requestedUser._id,
            requestDate: this.requestedDate,
            startTime: this.startFrom,
            endTime: this.endsOn,
            privacy: this.privacy
        }).map(function (res) { return res.json(); })
            .subscribe(function (response) {
            _this.gb.presentToast(response.message);
            if (response.IsSuccess) {
                _this.navCtrl.pop();
            }
        });
    };
    return AppointmentRequestPage;
}());
AppointmentRequestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-request',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\appointment\request\request.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Request Appointment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-icon name="contact" item-left large></ion-icon>\n      <h1><strong>{{ requestedUser.firstName + \' \' + requestedUser.lastName }}</strong></h1>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Requested Date</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" pickerFormat="MMM DD YYYY" [(ngModel)]="requestedDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Start From</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="startFrom"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Ends On</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="endsOn"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-textarea [(ngModel)]="description"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Privacy</ion-label>\n      <ion-select [(ngModel)]="privacy">\n        <ion-option value="public">Public</ion-option>\n        <ion-option value="private">Private</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="requestAppointment()">Request</button>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\appointment\request\request.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */]])
], AppointmentRequestPage);

//# sourceMappingURL=request.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_globalservices__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppointmentContactPage = (function () {
    function AppointmentContactPage(navCtrl, contact, platform, gb) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.contact = contact;
        this.platform = platform;
        this.gb = gb;
        /* this.allContacts = [{
            name: 'Sonu'
        },{
            name: 'Ali'
        },{
            name: 'Ram'
        },{
            name: 'Ravi'
        }]; */
        this.platform.ready().then(function () {
            var opts = {
                filter: "M",
                multiple: true,
                hasPhoneNumber: true,
                fields: ['displayName', 'name']
            };
            _this.contact.find(['displayName', 'name'], opts).then(function (contacts) {
                _this.allContacts = contacts;
                _this.gb.presentToast('Please enter Mobile Number');
            }, function (error) {
                _this.gb.presentToast(error);
            });
        });
    }
    return AppointmentContactPage;
}());
AppointmentContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contacts',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\appointment\contacts\contacts.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Contacts</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item *ngFor="let contact of allContacts">\n\n            <ion-icon name="person" item-start></ion-icon>\n\n            {{contact.name}}\n\n            <ion-note item-right>+918878220874</ion-note>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\appointment\contacts\contacts.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */], __WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_contacts__["a" /* Contacts */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_globalservices__["a" /* GlobalServices */]) === "function" && _d || Object])
], AppointmentContactPage);

var _a, _b, _c, _d;
//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_calendar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgotp_forgotp__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_resetp_resetp__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_appointment_request_request__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_appointment_schedule_schedule__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_appointment_contacts_contacts__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SignInPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_forgotp_forgotp__["a" /* ForgotPassPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_resetp_resetp__["a" /* ResetPassPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_appointment_request_request__["a" /* AppointmentRequestPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_appointment_schedule_schedule__["a" /* AppointmentSchedulePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_appointment_contacts_contacts__["a" /* AppointmentContactPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_signin_signin__["a" /* SignInPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignUpPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_forgotp_forgotp__["a" /* ForgotPassPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_resetp_resetp__["a" /* ResetPassPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_appointment_request_request__["a" /* AppointmentRequestPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_appointment_schedule_schedule__["a" /* AppointmentSchedulePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_appointment_contacts_contacts__["a" /* AppointmentContactPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_globalservices__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_forgotp_forgotp__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_resetp_resetp__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_appointment_schedule_schedule__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_appointment_contacts_contacts__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/* import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list'; */







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, http, gb, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.http = http;
        this.gb = gb;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SignInPage */];
        this.initializeApp();
        this.afterLoginPages = [
            /* { title: 'Home', component: HomePage },
            { title: 'List', component: ListPage }, */
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */] },
            { title: 'Forgot Password', component: __WEBPACK_IMPORTED_MODULE_8__pages_forgotp_forgotp__["a" /* ForgotPassPage */] },
            { title: 'Reset Password', component: __WEBPACK_IMPORTED_MODULE_9__pages_resetp_resetp__["a" /* ResetPassPage */] },
            /* { title: 'Request Appointment', component: AppointmentRequestPage }, */
            { title: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_12__pages_appointment_contacts_contacts__["a" /* AppointmentContactPage */] },
            { title: 'Schedule', component: __WEBPACK_IMPORTED_MODULE_11__pages_appointment_schedule_schedule__["a" /* AppointmentSchedulePage */] },
        ];
        this.beforeLoginPages = [
            { title: 'Sign In', component: __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SignInPage */] },
            { title: 'Sign Up', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignUpPage */] },
        ];
        events.subscribe('user:login', function () {
            _this.loggedInUser = localStorage.getItem('currentUser');
            if (_this.loggedInUser) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SignInPage */]);
            }
        });
        this.loggedInUser = localStorage.getItem('currentUser');
        // used for an example of ngFor and navigation
        if (this.loggedInUser) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SignInPage */];
        }
        //this.rootPage = AppointmentSchedulePage;
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        var response = this.http.post(this.gb.checkSessionUrl, {}).map(function (res) { return res.json(); })
            .subscribe(function (r) {
            _this.gb.presentToast(r.message);
            console.log(r.user);
            if (r.IsSuccess) {
                _this.gb.setUserInstance(JSON.stringify(r.user));
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else {
                _this.gb.setUserInstance('');
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SignInPage */]);
            }
        });
        //this.rootPage = AppointmentSchedulePage;
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        var response = this.http.post(this.gb.signOutUrl, {}).map(function (res) { return res.json(); })
            .subscribe(function (r) {
            _this.gb.presentToast(r.message);
            if (r.IsSuccess) {
                _this.gb.setUserInstance('');
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SignInPage */]);
            }
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n        <button menuClose ion-item *ngFor="let p of afterLoginPages" (click)="openPage(p)" [hidden]="!loggedInUser">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item *ngFor="let p of beforeLoginPages" (click)="openPage(p)" [hidden]="loggedInUser">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="signOut()" *ngIf="loggedInUser">Sign Out</button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\app\app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_globalservices__["a" /* GlobalServices */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__services_globalservices__["a" /* GlobalServices */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalServices = (function () {
    function GlobalServices(toastCtrl) {
        this.toastCtrl = toastCtrl;
        //public baseUrl = 'http://localhost:4200/';
        this.baseUrl = 'http://appntscheduler.herokuapp.com/';
        this.registerUserUrl = this.baseUrl + 'users/register';
        this.signinUrl = this.baseUrl + 'users/signin';
        this.checkSessionUrl = this.baseUrl + 'users/checkSession';
        this.signOutUrl = this.baseUrl + 'users/signout';
        this.updatePasswordUrl = this.baseUrl + 'users/updatepassword';
        this.fetchUserByMobileUrl = this.baseUrl + 'users/fetchByMobile';
        this.requestAppointmentUrl = this.baseUrl + 'appointments/request';
        this.appointmentAllUrl = this.baseUrl + 'appointments/all';
    }
    GlobalServices.prototype.presentToast = function (message, duration, position) {
        if (duration === void 0) { duration = 4000; }
        if (position === void 0) { position = 'bottom'; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position,
        });
        toast.present();
    };
    GlobalServices.prototype.getUserInstance = function () {
        return localStorage.getItem('currentUser');
    };
    GlobalServices.prototype.setUserInstance = function (userVal) {
        localStorage.setItem('currentUser', userVal);
    };
    return GlobalServices;
}());
GlobalServices = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], GlobalServices);

//# sourceMappingURL=globalservices.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\list\list.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>List</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n    </ion-list>\n    <div *ngIf="selectedItem" padding>\n        You navigated here from <b>{{selectedItem.title}}</b>\n    </div>\n</ion-content>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardPage = (function () {
    function DashboardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"D:\sonu-work\appointmentscheduler-ion\src\pages\dashboard\dashboard.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-icon name="person" item-start></ion-icon>\n      Gourav\n      <ion-note item-right>09:00 AM</ion-note>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="person" item-start></ion-icon>\n      Manish\n      <ion-note item-right>10:00 AM</ion-note>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\sonu-work\appointmentscheduler-ion\src\pages\dashboard\dashboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.js.map