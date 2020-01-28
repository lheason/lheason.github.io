webpackJsonp([1,4],{

/***/ 348:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 348;


/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(458);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/eason/workspace/NodeJs/lheason.github.io/src/main.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Email 產生器';
        this.originalContent = "致立法會議員及區議員：\n" +
            "您好！本信懇請您聯合民主派立法會議員和十八區區議員籌組臨時政府，由一眾議員籌組委員會建立臨時政府，接管現時行政部門。由反修例風波引發的時代革命抗爭已逾半年，我們提出的五大訴求，政府仍然未有回應。更甚者，企圖以警暴鎮壓我們，以濫捕造成白色恐怖，強壓民憤。現屆政府已然失去領導能力，武漢新型肺炎爆發，政府再次漠視民意，重蹈零三沙士覆轍，淡化病毒於社區的傳染，企圖粉飾太平。現時疫情在港大規模爆發，全民陷於恐慌搶購口罩，政府不但沒有即時回應民意，只封鎖人流稀疏的關口，未有斷絕來往嚴重疫區的一切交通，禁止內地人進入香港，陷我們安危於不顧。如斯政府，如何能夠再讓市民信服。即使今屆區議會民主派獲得過八成議席，當舊有制度已完全失效，轉換班子而不革新制度，只是換湯不換藥。\n" +
            " \n" +
            "基於民意授權基礎，眾議員的領導下建設臨時政府方具認受性，建構臨時政府方案才不會流於民眾想像，而是能夠落實的方案。本人XXX，為香港特別行政區政府選民，曾於立法會/區議會選舉投票給閣下。站在分叉口，本人深信設立新政府，改革現有制度才能保障香港人利益。\n" +
            " \n" +
            "民間已發起一連串行動表達民意，然而單靠我們三罷抗爭成效不大，只是螳臂擋車。再於腐朽不堪的政府尋求出路，只會換來一次又一次的失望，惟全港市民上下一心協力投入建立臨時政府自救，香港方會有轉機。\n" +
            " \n" +
            "基於以上論點，本人敦促閣下履行當選之時市民的期許，爭取建立新政府為我們謀求出路。\n" +
            "\n" +
            "\n" +
            "煩請回覆。謝謝。\n" +
            "\n" +
            "順祝新年快樂！\n" +
            "\n" +
            "XXX 謹啟\n" +
            "二零一九年一月廿十九日";
        this.content = "";
    }
    AppComponent.prototype.onClickMe = function (name) {
        this.content = this.originalContent.split("XXX").join(name);
        console.log(this.originalContent.split("XXX").join(name));
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(616),
            styles: [__webpack_require__(615)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/eason/workspace/NodeJs/lheason.github.io/src/app.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(457);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
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
//# sourceMappingURL=/Users/eason/workspace/NodeJs/lheason.github.io/src/app.module.js.map

/***/ }),

/***/ 459:
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
//# sourceMappingURL=/Users/eason/workspace/NodeJs/lheason.github.io/src/environment.js.map

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = ".text-style{\n    white-space: pre-wrap\n}\n\n.input {\n    border: 2px solid red;\n    border-radius: 4px;\n}"

/***/ }),

/***/ 616:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<input class=\"input\"\n       placeholder=\"姓名\"\n       #name\n       (keyup.enter)=\"onClickMe(name.value)\">\n<button (click)=\"onClickMe(name.value)\">產生</button>\n<p class=\"text-style\">\n  {{content}}\n</p>\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(349);


/***/ })

},[631]);
//# sourceMappingURL=main.bundle.map