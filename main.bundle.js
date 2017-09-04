webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-welcome></app-welcome>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/kstedman/Desktop/portfolio3/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__welcome_welcome_component__["a" /* WelcomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/kstedman/Desktop/portfolio3/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-expand-lg navbar-light navbar-fixed-top\">\n      <div class=\"container\">\n        <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> -->\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#projects\">Projects</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"#experience\">Experience</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n  </nav>\n  <div class=\"profile-info row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-3\">\n      <div class=\"profile-image\">\n        <img src=\"assets/images/Keith-Stedman.jpg\">\n      </div>\n    </div>\n    <div class=\"profile-about col-xs-12 col-sm-12 col-md-12 col-lg-8\">\n      <h1 class=\"profile-title col-xs-12\">\n        Keith Stedman\n        <span class=\"col-xs-12\">Front-End UI/UX Developer</span>\n      </h1>\n      <div class=\"profile-contact col-xs-12 col-sm-12 col-md-4 col-lg-12 col-xl-4\">\n        <h3 class=\"hidden-xs\">Contact</h3>\n        <div class=\"contact-icon profile-phone\">\n          <a href=\"tel:503-504-5709\">\n            <i class=\"fa fa-phone\"></i>\n            <span class=\"hidden-xs\">503.504.5709</span>\n          </a>\n        </div>\n        <div class=\"contact-icon\">\n          <a href=\"mail:keithstedman@gmail.com\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"hidden-xs\">keithstedman@gmail.com</span>\n          </a>\n        </div>\n        <div class=\"contact-icon\">\n          <a href=\"https://github.com/bitgrind\" target=\"_blank\">\n            <i class=\"fa fa-github\" aria-hidden=\"true\"></i>\n            <span class=\"hidden-xs\">Github</span>\n          </a>\n        </div>\n        <div class=\"contact-icon\">\n          <a href=\"https://www.linkedin.com/in/keith-stedman/\" target=\"_blank\">\n            <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n            <span class=\"hidden-xs\">Linked In</span>\n          </a>\n        </div>\n      </div>\n      <div class=\"profile-skills col-xs-12 col-sm-12 col-md-8 col-xl-8\">\n        <h3 class=\"hidden-xs\">Languages</h3>\n        <div class=\"col-xs-12 col-md-12\">\n          <span class=\"tech-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/html5.png\">\n              <span>HTML5</span>\n            </a>\n          </span>\n          <span class=\"tech-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/js-logo.png\">\n              <span>JavaScript ES6</span>\n            </a>\n          </span>\n          <span class=\"tech-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"https://developer.mozilla.org/en-US/docs/Web/CSS\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/css-logo.png\">\n              <span>CSS3</span>\n            </a>\n          </span>\n          <span class=\"tech-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"https://gulpjs.com/\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/gulp-logo.png\">\n              <span>Gulp</span>\n            </a>\n          </span>\n          <span class=\"tech-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"https://gruntjs.com/\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/grunt-logo.png\">\n              <span>Grunt</span>\n            </a>\n          </span>\n        </div>\n        <div class=\"col-xs-12 col-md-12\">\n          <span class=\"tech-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"https://cli.angular.io/\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/angular-icon.png\">\n              <span>Angular2 Cli</span>\n            </a>\n          </span>\n          <span class=\"tech-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"https://reactjs.net/\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/react-icon.png\">\n              <span>React</span>\n            </a>\n          </span>\n          <span class=\"tech-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"https://nodejs.org/en/\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/node-logo.png\">\n              <span>Node</span>\n            </a>\n          </span>\n          <span class=\"tech-icon firebase-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"https://firebase.google.com/\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/firebase-logo.png\">\n              <span>Firebase</span>\n            </a>\n          </span>\n          <span class=\"tech-icon col-xs-2 col-md-2\">\n            <a class=\"lang-icon-links\" href=\"http://sass-lang.com/\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/sass-logo.png\">\n              <span>SASS</span>\n            </a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <h1 id=\"projects\">Projects</h1>\n  <div class=\"card-body col-xs-12 col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <a href=\"https://github.com/bitgrind/HackOregon-HomelessProject\" target=\"_blank\">\n        <img class=\"card-img-top\" src=\"assets/images/Hack-Oregon-Home.jpg\" alt=\"Card image cap\">\n      </a>\n      <div class=\"card-body\">\n        <a href=\"https://github.com/bitgrind/HackOregon-HomelessProject\" target=\"_blank\">\n          <h2 class=\"card-title\">Hack Oregon - Homeless Civic Project</h2>\n        </a>\n        <p class=\"card-text\">Built in <a href=\"https://reactjs.net/\" target=\"_blank\">React</a> with Hack Oregon homeless civic population API. Using Restful API end points and JavaScript AJAX calls to recieve JSON packets, then using <a href=\"http://recharts.org/#/en-US/\" target=\"_blank\">Re-Charts</a>, I would graph the data points.</p>\n        <div>\n          <span class=\"tech-icon col-xs-3 col-md-3\">\n            <a class=\"lang-icon-links\" href=\"https://reactjs.net/\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/react-icon.png\">\n              <span>React</span>\n            </a>\n          </span>\n          <span class=\"tech-icon col-xs-3 col-md-3\">\n            <a class=\"lang-icon-links\" href=\"https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started\" target=\"_blank\">\n              <img class=\"lang-icon\" src=\"assets/images/ajax.png\">\n              <span>AJAX</span>\n            </a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body col-xs-12 col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <a href=\"https://github.com/bitgrind/reupfarms\" target=\"_blank\">\n        <img class=\"card-img-top\" src=\"assets/images/Reup-Logo.png\" alt=\"Card image cap\">\n      </a>\n      <div class=\"card-body\">\n        <a href=\"https://github.com/bitgrind/reupfarms\" target=\"_blank\">\n          <h2 class=\"card-title\">Reup</h2>\n        </a>\n        <p class=\"card-text\">Reup is a Web-App that is positioned for the Marijuana Industry, particularlly Cultivation, Dispensaries and Consumers. I plan to use Ionic to port the App to both Andriod and IOS phones. Right now the App is in Beta Developement and should be ready for Beta Testing in a month. Using knowledge from the industry I want to make an app that solves origzational issues with convience.</p>\n        <span class=\"tech-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"https://cli.angular.io/\" target=\"_blank\">\n          <img class=\"lang-icon\" src=\"assets/images/angular-icon.png\">\n          <span>Angular2 Cli</span>\n          </a>\n        </span>\n        <span class=\"tech-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"https://nodejs.org/en/\" target=\"_blank\">\n          <img class=\"lang-icon\" src=\"assets/images/node-logo.png\"></a>\n          <span>Node</span>\n        </span>\n        <span class=\"tech-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"https://go.java/index.html?intcmp=gojava-banner-java-com\" target=\"_blank\">\n            <img class=\"lang-icon\" src=\"assets/images/materialize-css.png\">\n            <span>Materialize</span>\n          </a>\n        </span>\n        <span class=\"tech-icon firebase-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"https://firebase.google.com/\" target=\"_blank\">\n            <img class=\"lang-icon\" src=\"assets/images/firebase-logo.png\">\n            <span>Firebase</span>\n          </a>\n        </span>\n        <span class=\"tech-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"http://sass-lang.com/\" target=\"_blank\">\n          <img class=\"lang-icon\" src=\"assets/images/sass-logo.png\">\n          <span>SASS</span>\n          </a>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body col-xs-12 col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <a href=\"https://github.com/bitgrind/Wolftannica\" target=\"_blank\">\n        <img class=\"card-img-top\" src=\"assets/images/Wolftanica-Header.jpg\" alt=\"Card image cap\">\n      </a>\n      <div class=\"card-body\">\n        <a href=\"https://github.com/bitgrind/Wolftannica\" target=\"_blank\">\n          <h2 class=\"card-title\">Wolftannica</h2>\n        </a>\n        <p class=\"card-text\">Wolftannica is an Android App built in Android Studio with a Firebase backend.</p>\n        <span class=\"tech-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"https://developer.android.com/studio/index.html\" target=\"_blank\">\n            <img class=\"lang-icon\" src=\"assets/images/andriod-studios.png\">\n            <span>Andriod<br>Studios</span>\n          </a>\n        </span>\n        <span class=\"tech-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"https://go.java/index.html?intcmp=gojava-banner-java-com\" target=\"_blank\">\n            <img class=\"lang-icon\" src=\"assets/images/java.png\">\n            <span>Java</span>\n          </a>\n        </span>\n        <span class=\"tech-icon firebase-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"https://firebase.google.com/\" target=\"_blank\">\n            <img class=\"lang-icon\" src=\"assets/images/firebase-logo.png\">\n            <span>Firebase</span>\n          </a>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body col-xs-12 col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <a href=\"https://github.com/bitgrind/java-wildlife-tracker\" target=\"_blank\">\n        <img class=\"card-img-top\" src=\"assets/images/Wild-Life-Tracker.png\" alt=\"Card image cap\">\n      </a>\n      <div class=\"card-body\">\n        <a href=\"https://github.com/bitgrind/java-wildlife-tracker\" target=\"_blank\">\n          <h2 class=\"card-title\">Wild Life Tracker</h2>\n        </a>\n        <p class=\"card-text\">Wild Life Tracker is a Application writen in Java that uses Postgres SQL databases to keep track of animals sighted by Wild-life Rangers as well as add new wild to be tracked, Time Stamped Data, .</p>\n        <span class=\"tech-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"https://go.java/index.html?intcmp=gojava-banner-java-com\" target=\"_blank\">\n            <img class=\"lang-icon\" src=\"assets/images/java.png\">\n            <span>Java</span>\n          </a>\n        </span>\n        <span class=\"tech-icon firebase-icon col-xs-3 col-md-3\">\n          <a class=\"lang-icon-links\" href=\"https://firebase.google.com/\" target=\"_blank\">\n            <img class=\"lang-icon\" src=\"assets/images/postgresql-logo.png\">\n            <span>Postgres</span>\n          </a>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div id=\"experience\" class=\"col-xs-12 col-sm-12\">\n    <h1>Past Experience</h1>\n  <div>\n      <!-- <div class=\"past-experience well col-md-12\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"past-experience-logo\">\n              <img src=\"assets/images/epicodus-logo.png\">\n            </div>\n            <h2>Epicodus</h2>\n            <h3>2017</h3>\n          </div>\n          <div class=\"projects row col-md-12\">\n            <div class=\"epicodus-project col-md-6\">\n              <h3>Vacation Desination</h3>\n              <a href=\"https://github.com/bitgrind/vacay\" target=\"_blank\"></a>\n              <p>This is a small experimental site using Bootstrap to get familiar with the platform. Languages: HTML, CSS &amp; Bootstrap.</p>\n            </div>\n            <div class=\"epicodus-project col-md-6\">\n              <h3>Wiki Mock</h3>\n              <a href=\"https://github.com/bitgrind/wiki\" target=\"_blank\"></a>\n              <p>A short exercise is mimicking web pages, using Bootstrap to imitate a partiular sites design. Languages: HTML, CSS &amp; Bootstrap</p>\n            </div>\n          </div>\n        </div>\n      </div> -->\n  <div class=\"past-experience col-md-12 col-lg-6\">\n    <div class=\"well\">\n      <div class=\"past-experience-logo\">\n        <img class=\"logo\" src=\"assets/images/rose-city-vinyl.png\">\n      </div>\n      <h2>Rose City Vinyl</h2>\n      <h3>2015-2017</h3>\n    </div>\n  </div>\n  <div class=\"past-experience col-md-12 col-lg-6\">\n    <div class=\"well\">\n      <div class=\"past-experience-logo\">\n        <img class=\"logo\" src=\"assets/images/ds-logo-blog.png\">\n      </div>\n      <h2>Dealer Spike</h2>\n      <h3>2014-2015</h3>\n    </div>\n  </div>\n  <div class=\"past-experience col-md-12 col-lg-6\">\n    <div class=\"well\">\n      <div class=\"past-experience-logo\">\n        <img class=\"logo\" src=\"assets/images/stedman-for-senate-logo.png\">\n      </div>\n      <h2>Stedman for Senate</h2>\n      <h3>2012, 2016</h3>\n    </div>\n  </div>\n  <div class=\"past-experience col-md-12 col-lg-6\">\n    <div class=\"well\">\n      <div class=\"past-experience-logo\">\n        <img class=\"logo\" src=\"assets/images/digital-arts.png\">\n      </div>\n      <h2>University of Oregon BFA Program at White Stag</h2>\n      <h3>2012</h3>\n    </div>\n  </div>\n  <div class=\"past-experience col-md-12 col-lg-6\">\n    <div class=\"well\">\n      <div class=\"past-experience-logo\">\n        <img class=\"logo\" src=\"assets/images/HiveLogo.gif\">\n      </div>\n      <h2>Hive Interactive</h2>\n      <h3>2011</h3>\n    </div>\n  </div>\n  <div id=\"CMET\" class=\"past-experience col-md-12 col-lg-6\">\n    <div class=\"well\">\n      <div class=\"past-experience-logo\">\n        <img class=\"logo\" src=\"assets/images/uo-long-logo.png\">\n      </div>\n      <h2>University of Oregon Library Center for Media and Education Techonogly</h2>\n      <h3>2010-2011</h3>\n    </div>\n  </div>\n  <div class=\"past-experience col-md-12 col-lg-6\">\n    <div class=\"well\">\n      <div class=\"past-experience-logo\">\n        <img class=\"logo\" src=\"assets/images/uo-logo.png\">\n      </div>\n      <h2>University of Oregon Althletic Department</h2>\n      <h3>2009-2010</h3>\n    </div>\n  </div>\n</div>\n<!-- <main class=\"container\">\n  <div class=\"row\">\n    <div id=\"resume\" class=\"col-12 row\">\n      <h1 class=\"col-12\">Resume</h1>\n      <div class=\"col-8\">\n        <h2>Experience</h2>\n      </div>\n      <div class=\"col-4\">\n        <h2>Education</h2>\n        <ul>\n          <li></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</main> -->\n<footer class=\"container col-lg-12\">\n  <h1>Footer</h1>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.scss")]
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
//# sourceMappingURL=/Users/kstedman/Desktop/portfolio3/src/welcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/kstedman/Desktop/portfolio3/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/kstedman/Desktop/portfolio3/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map