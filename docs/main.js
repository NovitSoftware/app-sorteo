"use strict";
(self["webpackChunksorteo_wen"] = self["webpackChunksorteo_wen"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent),
/* harmony export */   Version: () => (/* binding */ Version)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _svg_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg.service */ 8157);


const _c0 = ["headBar"];
const _c1 = ["version2023"];
function AppComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle-group", 8, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Conditional_3_Template_mat_button_toggle_group_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const toggleGroup_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.changeVersionDisplaying(toggleGroup_r3.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-button-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "2023");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.displayVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.version._2023);
  }
}
var Version;
(function (Version) {
  Version[Version["_2023"] = 0] = "_2023";
})(Version || (Version = {}));
class AppComponent {
  constructor(svgService) {
    this.svgService = svgService;
    this.showVersionControl = false;
    this.displayVersion = Version._2023;
    this.version = Version;
    this.status = {
      start: false,
      finish: false
    };
    this.svgService.init();
  }
  resetearSorteo() {
    switch (this.displayVersion) {
      case Version._2023:
        this.version2023.resetearSorteo();
        break;
    }
  }
  changeVersionDisplaying(version) {
    this.headBar.resetearSorteo(true);
    this.displayVersion = version;
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_svg_service__WEBPACK_IMPORTED_MODULE_0__.SvgService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.headBar = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.version2023 = _t.first);
        }
      },
      decls: 7,
      vars: 4,
      consts: [["headBar", ""], ["version2023", ""], ["toggleGroup", "matButtonToggleGroup"], ["id", "app"], [3, "fireResetearSorteo", "displayVersion", "status"], ["id", "toggleVersion", 3, "value"], ["id", "appBody"], [1, "fullWidth", "fullHeight", "centerContainer", 3, "status"], ["id", "toggleVersion", 3, "change", "value"], [3, "value"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "app-head-bar", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fireResetearSorteo", function AppComponent_Template_app_head_bar_fireResetearSorteo_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.resetearSorteo());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_Conditional_3_Template, 4, 2, "mat-button-toggle-group", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-version2023", 7, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("displayVersion", ctx.displayVersion)("status", ctx.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.showVersionControl ? 3 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("status", ctx.status);
        }
      },
      styles: ["app-head-bar[_ngcontent-%COMP%] {\n  background: #0A0089;\n}\n\n#app[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #0A0089;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n}\n#app[_ngcontent-%COMP%]   #appBody[_ngcontent-%COMP%] {\n  height: -webkit-fill-available;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: inherit;\n}\n#app[_ngcontent-%COMP%]   #toggleVersion[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6em;\n  left: 1em;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.fullWidth[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n}\n\n.fullHeight[_ngcontent-%COMP%] {\n  height: -webkit-fill-available !important;\n}\n\n.centerContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3RoZW1lcy9hcHAtY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkNGaUI7QURFckI7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQ1BpQjtFRFFqQixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFBUjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFJQTtFQUNJLDZCQUFBO0FBREo7O0FBR0E7RUFDSSx5Q0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYXBwLWNvbG9ycy5zY3NzXCI7XHJcbmFwcC1oZWFkLWJhcntcclxuICAgIGJhY2tncm91bmQ6ICRjb2xvci1wcmltYXJ5LWJsdWU7ICBcclxufVxyXG4jYXBwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXByaW1hcnktYmx1ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAjYXBwQm9keSB7XHJcbiAgICAgICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgICN0b2dnbGVWZXJzaW9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA2ZW07XHJcbiAgICAgICAgbGVmdDogMWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5mdWxsV2lkdGgge1xyXG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbn1cclxuLmZ1bGxIZWlnaHQge1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZW50ZXJDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59IiwiJGNvbG9yLXByaW1hcnktYmx1ZTogIzBBMDA4OTtcclxuJGNvbG9yLXNlY29uZGFyeS1ibHVlOiAjM0RCMEU0O1xyXG4kY29sb3ItcHJpbWFyeS1ibGFjazogIzIyMUUxRTtcclxuJGNvbG9yLWVycm9yOiAjQkEwOEE4O1xyXG4kY29sb3ItZXhpdG86ICRjb2xvci1zZWNvbmRhcnktYmx1ZTtcclxuJGNvbG9yLWdyYXk6ICNjNWM1YzU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _svg_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg.service */ 8157);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ 9864);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/resultados/resultados.component */ 7307);
/* harmony import */ var _components_head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/head-bar/head-bar.component */ 9167);
/* harmony import */ var _components_version2023_version2023_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/version2023/version2023.component */ 2833);
/* harmony import */ var _components_version2023_carga_listado_carga_listado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/version2023/carga-listado/carga-listado.component */ 439);
/* harmony import */ var _components_version2023_slots_sorteo2023_slots_sorteo2023_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/version2023/slots-sorteo2023/slots-sorteo2023.component */ 6191);
/* harmony import */ var _components_aviso_snack_aviso_snack_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/aviso-snack/aviso-snack.component */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);






// MATERIAL ANGULAR





// COMPONENTES









class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [_svg_service__WEBPACK_IMPORTED_MODULE_0__.SvgService],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_resultados_resultados_component__WEBPACK_IMPORTED_MODULE_2__.ResultadosComponent, _components_head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_3__.HeadBarComponent, _components_version2023_version2023_component__WEBPACK_IMPORTED_MODULE_4__.Version2023Component, _components_version2023_carga_listado_carga_listado_component__WEBPACK_IMPORTED_MODULE_5__.CargaListadoComponent, _components_aviso_snack_aviso_snack_component__WEBPACK_IMPORTED_MODULE_7__.AvisoSnackComponent, _components_version2023_slots_sorteo2023_slots_sorteo2023_component__WEBPACK_IMPORTED_MODULE_6__.SlotsSorteo2023Component],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggle, _components_head_bar_head_bar_component__WEBPACK_IMPORTED_MODULE_3__.HeadBarComponent, _components_version2023_version2023_component__WEBPACK_IMPORTED_MODULE_4__.Version2023Component], []);

/***/ }),

/***/ 3713:
/*!*****************************************************************!*\
  !*** ./src/app/components/aviso-snack/aviso-snack.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisoSnackComponent: () => (/* binding */ AvisoSnackComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class AvisoSnackComponent {
  constructor(snackBarRef, data) {
    this.snackBarRef = snackBarRef;
    this.data = data;
  }
  ngOnInit() {}
  dismiss() {
    this.snackBarRef.dismiss();
  }
  static {
    this.ɵfac = function AvisoSnackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AvisoSnackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AvisoSnackComponent,
      selectors: [["app-aviso-snack"]],
      decls: 5,
      vars: 4,
      consts: [["id", "container", 3, "click"], [1, "title"], [1, "text"]],
      template: function AvisoSnackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AvisoSnackComponent_Template_div_click_0_listener() {
            return ctx.dismiss();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.data.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.text);
        }
      },
      styles: [".cdk-overlay-pane:has(.mat-snack-bar-container):has(app-aviso-snack) #container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n  padding: 0.5em 1em;\n  cursor: pointer;\n}\n  .cdk-overlay-pane:has(.mat-snack-bar-container):has(app-aviso-snack) #container span {\n  color: white;\n}\n  .cdk-overlay-pane:has(.mat-snack-bar-container):has(app-aviso-snack) #container .title {\n  font-size: 19px;\n  font-weight: bold;\n}\n  .cdk-overlay-pane:has(.mat-snack-bar-container):has(app-aviso-snack) #container .text {\n  font-size: 17px;\n}\n\n  .cdk-overlay-pane:has(.mat-snack-bar-container):has(app-aviso-snack):has(#container.error) .mat-snack-bar-container {\n  background-color: #BA08A8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdmlzby1zbmFjay9hdmlzby1zbmFjay5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy90aGVtZXMvYXBwLWNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS1E7RUFDSSxZQUFBO0FBSFo7QUFNUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUpaO0FBT1E7RUFDSSxlQUFBO0FBTFo7O0FBV0k7RUFDSSx5QkN6Qk07QURpQmQiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYXBwLWNvbG9ycy5zY3NzXCI7XHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmU6aGFzKC5tYXQtc25hY2stYmFyLWNvbnRhaW5lcik6aGFzKGFwcC1hdmlzby1zbmFjaykge1xyXG5cclxuICAgICNjb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lOmhhcygubWF0LXNuYWNrLWJhci1jb250YWluZXIpOmhhcyhhcHAtYXZpc28tc25hY2spOmhhcygjY29udGFpbmVyLmVycm9yKXtcclxuICAgIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWVycm9yO1xyXG4gICAgfVxyXG59IiwiJGNvbG9yLXByaW1hcnktYmx1ZTogIzBBMDA4OTtcclxuJGNvbG9yLXNlY29uZGFyeS1ibHVlOiAjM0RCMEU0O1xyXG4kY29sb3ItcHJpbWFyeS1ibGFjazogIzIyMUUxRTtcclxuJGNvbG9yLWVycm9yOiAjQkEwOEE4O1xyXG4kY29sb3ItZXhpdG86ICRjb2xvci1zZWNvbmRhcnktYmx1ZTtcclxuJGNvbG9yLWdyYXk6ICNjNWM1YzU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9509:
/*!***************************************************************!*\
  !*** ./src/app/components/aviso-snack/aviso-snack.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AvisoSnackService: () => (/* binding */ AvisoSnackService)
/* harmony export */ });
/* harmony import */ var _aviso_snack_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aviso-snack.component */ 3713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);



class AvisoSnackService {
  constructor(_snackBar) {
    this._snackBar = _snackBar;
  }
  displayMsg(type, title, text) {
    this._snackBar.openFromComponent(_aviso_snack_component__WEBPACK_IMPORTED_MODULE_0__.AvisoSnackComponent, {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      data: {
        type: type,
        title: title,
        text: text
      }
    });
  }
  static {
    this.ɵfac = function AvisoSnackService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AvisoSnackService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AvisoSnackService,
      factory: AvisoSnackService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9167:
/*!***********************************************************!*\
  !*** ./src/app/components/head-bar/head-bar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeadBarComponent: () => (/* binding */ HeadBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = a0 => ({
  "clickable": a0
});
class HeadBarComponent {
  constructor() {
    this.fireResetearSorteo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit() {}
  resetearSorteo(force = false) {
    if (this.status.finish || force) {
      this.status.finish = false;
      this.status.start = false;
      this.fireResetearSorteo.emit();
    }
  }
  getVersion() {
    return "2023";
  }
  static {
    this.ɵfac = function HeadBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeadBarComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeadBarComponent,
      selectors: [["app-head-bar"]],
      inputs: {
        displayVersion: "displayVersion",
        status: "status"
      },
      outputs: {
        fireResetearSorteo: "fireResetearSorteo"
      },
      decls: 5,
      vars: 4,
      consts: [["id", "headBar"], [1, "sorteo", 3, "click", "ngClass"], [2, "display", "flex", "align-items", "center"], ["id", "iconGroup"]],
      template: function HeadBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeadBarComponent_Template_h1_click_1_listener() {
            return ctx.resetearSorteo();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.status.finish));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sorteo ", ctx.currentYear, "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
      styles: ["#headBar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  margin: 0px 150px;\n  background-color: #0A0089;\n}\n#headBar[_ngcontent-%COMP%]   .sorteo[_ngcontent-%COMP%] {\n  font-family: \"LatinxText-Bold\";\n}\n#headBar[_ngcontent-%COMP%]   #iconGroup[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n  right: -140px;\n}\n#headBar[_ngcontent-%COMP%]   #iconGroup[_ngcontent-%COMP%]   .svgIcon[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 100%;\n}\n#headBar[_ngcontent-%COMP%]   #iconGroup[_ngcontent-%COMP%]   .svgIcon.scndIcon[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 100%;\n}\n#headBar[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 43px;\n  margin: 0 19px;\n  opacity: 0.36;\n  background-color: #979797;\n}\n#headBar[_ngcontent-%COMP%]   .clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkLWJhci9oZWFkLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUFJO0VBQ0ksOEJBQUE7QUFFUjtBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ1I7QUFDUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ1o7QUFFUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQVo7QUFLSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUhSO0FBTUk7RUFDSSxlQUFBO0FBSlIiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZEJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogMHB4IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBBMDA4OTsgLy8gQWN0dWFsaXphIGVsIGNvbG9yIGRlIGZvbmRvXHJcbiAgICAuc29ydGVvIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0xhdGlueFRleHQtQm9sZCc7XHJcbiAgICB9XHJcblxyXG4gICAgI2ljb25Hcm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogLTE0MHB4O1xyXG5cclxuICAgICAgICAuc3ZnSWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc3ZnSWNvbi5zY25kSWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuc2VwYXJhdG9yIHtcclxuICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgIGhlaWdodDogNDNweDtcclxuICAgICAgICBtYXJnaW46IDAgMTlweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjM2OyAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNsaWNrYWJsZSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7307:
/*!***************************************************************!*\
  !*** ./src/app/components/resultados/resultados.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultadosComponent: () => (/* binding */ ResultadosComponent)
/* harmony export */ });
/* harmony import */ var C_Users_S_RHV_OneDrive_Documentos_GitRepos_Novit_app_sorteo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);





const _c0 = ["resultadosContainer"];
const _c1 = a0 => ({
  "noMargin version2023": a0
});
function ResultadosComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const result_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@zoomInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r1.premio);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r1.texto);
  }
}
class ResultadosComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.classEmpresa = '';
    this.sgvIconEmpresa = '';
    this.visibleResults = [];
  }
  scrollToBottom() {
    setTimeout(() => {
      const appContainer = document.querySelector('#app');
      const scrollContainer = appContainer || this.resultadosContainer.nativeElement;
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
      // if (this.resultadosContainer) {
      //   const nativeElement = this.resultadosContainer.nativeElement;
      //   if (nativeElement.scrollHeight > nativeElement.clientHeight) {
      //     nativeElement.scrollTop = nativeElement.scrollHeight;
      //   }
      // }
    }, 0);
  }
  showResults() {
    var _this = this;
    return (0,C_Users_S_RHV_OneDrive_Documentos_GitRepos_Novit_app_sorteo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (let i = 0; i < _this.results.length; i++) {
        _this.visibleResults.push(_this.results[i]); // Agrega el resultado a la lista visible
        _this.cdr.detectChanges(); // Asegura que el DOM esté actualizado
        _this.scrollToBottom(); // Realiza el scroll al final
        yield new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
      }
    })();
  }
  ngOnInit() {
    this.showResults();
  }
  static {
    this.ɵfac = function ResultadosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ResultadosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResultadosComponent,
      selectors: [["app-resultados"]],
      viewQuery: function ResultadosComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.resultadosContainer = _t.first);
        }
      },
      inputs: {
        results: "results",
        columnaDerecha: "columnaDerecha",
        empresa: "empresa",
        classEmpresa: "classEmpresa",
        sgvIconEmpresa: "sgvIconEmpresa"
      },
      decls: 12,
      vars: 8,
      consts: [["resultadosContainer", ""], ["id", "resultados", 3, "ngClass"], [1, "empresaTittle"], [3, "svgIcon"], [1, "resultadoContainer", "cabeceraTabla"], [1, "resultadoContainer", "itemsTabla"]],
      template: function ResultadosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1, 0)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br")(4, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4)(6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Premio");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](10, ResultadosComponent_For_11_Template, 5, 3, "div", 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, ctx.columnaDerecha === "Participante"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.classEmpresa);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("svgIcon", ctx.sgvIconEmpresa);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.columnaDerecha);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.visibleResults);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
      styles: ["#resultados[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n  position: relative;\n  overflow-anchor: auto;\n  margin-left: 40px;\n  margin-right: 40px;\n}\n#resultados[_ngcontent-%COMP%]   .empresaTittle[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 48px;\n  color: #0A0089;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n#resultados[_ngcontent-%COMP%]   .resultadoContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-top: 1px solid #f3f3f3;\n  color: #221E1E;\n}\n#resultados[_ngcontent-%COMP%]   .resultadoContainer.cabeceraTabla[_ngcontent-%COMP%] {\n  font-size: 38px;\n}\n#resultados[_ngcontent-%COMP%]   .resultadoContainer.cabeceraTabla[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"LatinxText-Bold\";\n}\n#resultados[_ngcontent-%COMP%]   .resultadoContainer.itemsTabla[_ngcontent-%COMP%] {\n  font-size: 34px;\n  transition: transform 0.3s ease-in-out;\n}\n#resultados[_ngcontent-%COMP%]   .resultadoContainer.itemsTabla[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#resultados[_ngcontent-%COMP%]   .resultadoContainer.itemsTabla[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.empresaTittle[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.empresaTittle[_ngcontent-%COMP%]   .svgIcon[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 100%;\n  padding-bottom: 22px;\n}\n.empresaTittle[_ngcontent-%COMP%]   .scndIcon[_ngcontent-%COMP%] {\n  width: auto;\n  height: 70px;\n}\n\n#resultados.noMargin[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n#resultados.version2023[_ngcontent-%COMP%]   .resultadoContainer.cabeceraTabla[_ngcontent-%COMP%] {\n  border-top-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRhZG9zL3Jlc3VsdGFkb3MuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdGhlbWVzL2FwcC1jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0NaYTtFRGFiLGdCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0NyQmM7QURtQnRCO0FBS0k7RUFDSSxlQUFBO0FBSFI7QUFLUTtFQUNJLDhCQUFBO0FBSFo7QUFNSTtFQUNJLGVBQUE7RUFDQSxzQ0FBQTtBQUpSO0FBTUk7RUFDSSxnQkFBQTtBQUpSO0FBT0k7RUFDQSxpQkFBQTtBQUxKOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQUxKO0FBTUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBSlI7QUFPSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTFI7O0FBU0E7RUFDSSxXQUFBO0FBTko7O0FBVUk7RUFDSSxxQkFBQTtBQVBSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFwcC1jb2xvcnMuc2Nzc1wiO1xyXG5cclxuI3Jlc3VsdGFkb3N7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LWFuY2hvcjogYXV0bzsgXHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIFxyXG4gICAgLmVtcHJlc2FUaXR0bGUgaDF7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktYmx1ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3VsdGFkb0NvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YzZjNmMztcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnktYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlc3VsdGFkb0NvbnRhaW5lci5jYWJlY2VyYVRhYmxhIHtcclxuICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0aW54VGV4dC1Cb2xkXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJlc3VsdGFkb0NvbnRhaW5lci5pdGVtc1RhYmxhIHtcclxuICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAucmVzdWx0YWRvQ29udGFpbmVyLml0ZW1zVGFibGEgc3BhbiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIC5yZXN1bHRhZG9Db250YWluZXIuaXRlbXNUYWJsYSBkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuLmVtcHJlc2FUaXR0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC5zdmdJY29uIHtcclxuICAgICAgICB3aWR0aDogMzQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2NuZEljb24ge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxufVxyXG5cclxuI3Jlc3VsdGFkb3Mubm9NYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbiNyZXN1bHRhZG9zLnZlcnNpb24yMDIzIHtcclxuICAgIC5yZXN1bHRhZG9Db250YWluZXIuY2FiZWNlcmFUYWJsYSB7XHJcbiAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMHB4O1xyXG4gICAgfVxyXG59IiwiJGNvbG9yLXByaW1hcnktYmx1ZTogIzBBMDA4OTtcclxuJGNvbG9yLXNlY29uZGFyeS1ibHVlOiAjM0RCMEU0O1xyXG4kY29sb3ItcHJpbWFyeS1ibGFjazogIzIyMUUxRTtcclxuJGNvbG9yLWVycm9yOiAjQkEwOEE4O1xyXG4kY29sb3ItZXhpdG86ICRjb2xvci1zZWNvbmRhcnktYmx1ZTtcclxuJGNvbG9yLWdyYXk6ICNjNWM1YzU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      data: {
        animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('zoomInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('1s ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'scale(0.5)',
          offset: 0
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'scale(1.2)',
          offset: 0.5
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          transform: 'scale(1)',
          offset: 1
        })]))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 0,
          transform: 'translateY(10px)'
        }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
          opacity: 1,
          transform: 'translateY(0)'
        }))])])]
      }
    });
  }
}

/***/ }),

/***/ 439:
/*!*********************************************************************************!*\
  !*** ./src/app/components/version2023/carga-listado/carga-listado.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CargaListadoComponent: () => (/* binding */ CargaListadoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 6227);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aviso_snack_aviso_snack_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aviso-snack/aviso-snack.service */ 9509);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ 640);







function CargaListadoComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const participante_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](participante_r3);
  }
}
function CargaListadoComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](1, CargaListadoComponent_Conditional_16_For_2_Template, 3, 1, "div", 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r3.participantes);
  }
}
function CargaListadoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "La cantidad de premios es superior a la de participantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CargaListadoComponent_Conditional_27_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const premio_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](premio_r6.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](premio_r6.cantidad);
  }
}
function CargaListadoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "div", 18)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](7, CargaListadoComponent_Conditional_27_For_8_Template, 5, 2, "div", 17, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r3.premios);
  }
}
class CargaListadoComponent {
  constructor(_avisoSnackService, cdr) {
    this._avisoSnackService = _avisoSnackService;
    this.cdr = cdr;
    this.participantesOriginal = [];
    this.participantes = [];
    this.premios = [];
    this.cantidadTotalPremios = 0;
    this.fireStartSorteo = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  ngOnInit() {}
  resetearSorteo() {
    this.participantes = [...this.participantesOriginal];
  }
  cargarArchivo(event, tipo) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      event.target.value = '';
      if (file.type === "text/plain") {
        let fileReader = new FileReader();
        let output = [];
        let self = this;
        fileReader.onload = function (e) {
          let lines = e.target.result.split(/[\r\n]+/g); // linebreaks
          for (var i = 0; i < lines.length; i++) {
            output.push(lines[i].toString().trim());
          }
          if (tipo === 'participantes') self.cargarParticipantes(output);else self.cargarPremios(output);
        };
        fileReader.readAsText(file);
      }
    }
  }
  cargarParticipantes(output) {
    let lowerCase = lodash__WEBPACK_IMPORTED_MODULE_0__.map(output, x => x.toLowerCase());
    this.participantesOriginal = output.filter((value, index) => {
      return lowerCase.indexOf(value.toLowerCase()) === index && value.trim() !== "";
    });
    this.participantes = [...this.participantesOriginal];
  }
  cargarPremios(output) {
    let premios = [];
    let error = "";
    this.cantidadTotalPremios = 0;
    output.forEach(x => {
      if (!error) {
        let pair = x.split(",");
        error = this.validarPremios(pair);
        if (error !== "") {
          this._avisoSnackService.displayMsg("error", "FORMATO INCORRECTO", error);
          premios = [];
        } else {
          let nombre = pair[0].trim();
          let cantidad = parseInt(pair[1].trim());
          premios.push({
            nombre: nombre,
            cantidad: cantidad
          });
          this.cantidadTotalPremios += cantidad;
        }
      }
    });
    this.premios = premios;
    this.cdr.detectChanges();
  }
  validarPremios(pair) {
    if (pair.length !== 2) return `El formato de texto de premio debe ser: "premio,cantidad"`;
    try {
      let cantidad = parseInt(pair[1].trim());
      if (isNaN(cantidad)) return `No se ingresó un número para indicar la cantidad de premios`;
      if (cantidad === 0) return `Un premio tiene cantidad cero`;
    } catch {
      return `No se ingresó un número para indicar la cantidad de premios`;
    }
    return "";
  }
  masPremiosQueParticipantes() {
    return this.participantes.length > 0 && this.cantidadTotalPremios > 0 && this.participantes.length < this.cantidadTotalPremios;
  }
  isInvalid() {
    return !this.participantes.length || !this.premios.length || this.masPremiosQueParticipantes();
  }
  getListados() {
    let premios = [];
    lodash__WEBPACK_IMPORTED_MODULE_0__.forEach(this.premios, x => {
      premios = [...premios, ...Array(x.cantidad).fill(x.nombre)];
    });
    return {
      participantes: this.participantes,
      premios: premios
    };
  }
  static {
    this.ɵfac = function CargaListadoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CargaListadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_aviso_snack_aviso_snack_service__WEBPACK_IMPORTED_MODULE_1__.AvisoSnackService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CargaListadoComponent,
      selectors: [["app-carga-listado"]],
      outputs: {
        fireStartSorteo: "fireStartSorteo"
      },
      decls: 28,
      vars: 3,
      consts: [["inputParticipantes", ""], ["inputPremios", ""], ["tooltip", "matTooltip"], ["id", "cargaListadosContainer"], ["type", "file", "accept", ".txt", 2, "display", "none", 3, "change"], ["id", "listadosContainer"], ["id", "participantesContainer"], [1, "headerContainer"], [2, "text-decoration", "underline"], [1, "rightHeaderSection"], ["mat-raised-button", "", 1, "primaryBtn", 3, "click"], ["matTooltip", "El archivo .txt debe tener un participante por l\u00EDnea", "matTooltipPosition", "right"], [1, "listadoContainer", "listadoScroleable"], ["id", "premiosContainer"], ["matTooltip", "El archivo .txt debe tener un premio por l\u00EDnea (nombre y cantidad separados por una coma - ej: \"Monopat\u00EDn,3\" )", "matTooltipPosition", "right"], [1, "alert"], [1, "listadoContainer"], [1, "filaTabla"], [1, "cabeceraTabla"], [1, "cuerpoTabla"]],
      template: function CargaListadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "input", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CargaListadoComponent_Template_input_change_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.cargarArchivo($event, "participantes"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 4, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CargaListadoComponent_Template_input_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.cargarArchivo($event, "premios"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "PARTICIPANTES");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CargaListadoComponent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            const inputParticipantes_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](inputParticipantes_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Cargar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon", 11, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CargaListadoComponent_Conditional_16_Template, 3, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13)(18, "div", 7)(19, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "PREMIOS");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CargaListadoComponent_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            const inputPremios_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](inputPremios_r5.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Cargar");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, CargaListadoComponent_Conditional_26_Template, 2, 0, "span", 15)(27, CargaListadoComponent_Conditional_27_Template, 9, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.participantes.length ? 16 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.masPremiosQueParticipantes() ? 26 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.premios.length ? 27 : -1);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__.MatTooltip],
      styles: ["#cargaListadosContainer[_ngcontent-%COMP%]   #listadosContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   #listadosContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   #listadosContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .rightHeaderSection[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1em;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   #premiosContainer[_ngcontent-%COMP%]   .listadoContainer[_ngcontent-%COMP%] {\n  width: 50%;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   #participantesContainer[_ngcontent-%COMP%]   .listadoContainer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  row-gap: 1em;\n  max-height: 250px;\n  overflow: auto;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #221E1E;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   .listadoContainer[_ngcontent-%COMP%]   .cabeceraTabla[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"LatinxText-Bold\";\n  color: #3DB0E4;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   .listadoContainer[_ngcontent-%COMP%]   .cuerpoTabla[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 34px;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   .listadoContainer[_ngcontent-%COMP%]   .filaTabla[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   .listadoContainer[_ngcontent-%COMP%]   .filaTabla[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n#cargaListadosContainer[_ngcontent-%COMP%]   .listadoContainer[_ngcontent-%COMP%]   .cabeceraTabla[_ngcontent-%COMP%], \n#cargaListadosContainer[_ngcontent-%COMP%]   .listadoContainer[_ngcontent-%COMP%]   .filaTabla[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n[_nghost-%COMP%]     #cargaListadosContainer .rightHeaderSection mat-icon {\n  color: #3DB0E4;\n}\n\n.alert[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  display: inline-block;\n  color: #BA08A8 !important;\n}\n\n.listadoScroleable[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n  height: 8px;\n}\n\n.listadoScroleable[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 20px #c5c5c5;\n  border-radius: 7px;\n}\n\n.listadoScroleable[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #3DB0E4;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92ZXJzaW9uMjAyMy9jYXJnYS1saXN0YWRvL2NhcmdhLWxpc3RhZG8uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvdGhlbWVzL2FwcC1jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFQUjtBQVVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFSWjtBQVVZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQVJoQjtBQWNRO0VBQ0ksVUFBQTtBQVpaO0FBaUJRO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQWZaO0FBbUJJO0VBQ0ksbUJBQUE7QUFqQlI7QUFvQkk7RUFDSSxjQzlDYztBRDRCdEI7QUFzQlE7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQ3REVztBRGtDdkI7QUFzQlE7RUFDSSxlQUFBO0FBcEJaO0FBdUJRO0VBQ0ksaUJBQUE7QUFyQlo7QUFzQlk7RUFDRyxlQUFBO0FBcEJmO0FBd0JROztFQUVJLGFBQUE7RUFDQSw4QkFBQTtBQXRCWjs7QUE4QlE7RUFDSSxjQy9FVztBRG9EdkI7O0FBZ0NBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBN0JKOztBQW1DQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBaENKOztBQW1DQTtFQUNJLGtDQUFBO0VBQ0Esa0JBQUE7QUFoQ0o7O0FBbUNBO0VBQ0ksbUJDeEdtQjtFRHlHbkIsbUJBQUE7QUFoQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYXBwLWNvbG9ycy5zY3NzXCI7XHJcblxyXG4jY2FyZ2FMaXN0YWRvc0NvbnRhaW5lciB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLy8gd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcblxyXG4gICAgI2xpc3RhZG9zQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAxZW07XHJcbiAgICAgICAgLy8gd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgLmhlYWRlckNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIC5yaWdodEhlYWRlclNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAxZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3ByZW1pb3NDb250YWluZXIge1xyXG4gICAgICAgIC5saXN0YWRvQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3BhcnRpY2lwYW50ZXNDb250YWluZXIge1xyXG4gICAgICAgIC5saXN0YWRvQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgICAgICAgcm93LWdhcDogMWVtO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1ibGFjaztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxpc3RhZG9Db250YWluZXIge1xyXG4gICAgICAgIC5jYWJlY2VyYVRhYmxhID4gc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0aW54VGV4dC1Cb2xkXCI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LWJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jdWVycG9UYWJsYSA+IHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZmlsYVRhYmxhIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICAgICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FiZWNlcmFUYWJsYSxcclxuICAgICAgICAuZmlsYVRhYmxhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgI2NhcmdhTGlzdGFkb3NDb250YWluZXIge1xyXG4gICAgLnJpZ2h0SGVhZGVyU2VjdGlvbiB7XHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeS1ibHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAkY29sb3ItZXJyb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8qXHJcbi8vIEJBUlJBIFNDUk9MTFxyXG4vLyBcclxuLmxpc3RhZG9TY3JvbGVhYmxlOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogN3B4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5saXN0YWRvU2Nyb2xlYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggJGNvbG9yLWdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbn1cclxuXHJcbi5saXN0YWRvU2Nyb2xlYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXNlY29uZGFyeS1ibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSIsIiRjb2xvci1wcmltYXJ5LWJsdWU6ICMwQTAwODk7XHJcbiRjb2xvci1zZWNvbmRhcnktYmx1ZTogIzNEQjBFNDtcclxuJGNvbG9yLXByaW1hcnktYmxhY2s6ICMyMjFFMUU7XHJcbiRjb2xvci1lcnJvcjogI0JBMDhBODtcclxuJGNvbG9yLWV4aXRvOiAkY29sb3Itc2Vjb25kYXJ5LWJsdWU7XHJcbiRjb2xvci1ncmF5OiAjYzVjNWM1O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6191:
/*!***************************************************************************************!*\
  !*** ./src/app/components/version2023/slots-sorteo2023/slots-sorteo2023.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfiguracionRuleta: () => (/* binding */ ConfiguracionRuleta),
/* harmony export */   SlotsSorteo2023Component: () => (/* binding */ SlotsSorteo2023Component)
/* harmony export */ });
/* harmony import */ var C_Users_S_RHV_OneDrive_Documentos_GitRepos_Novit_app_sorteo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _resultados_resultados_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resultados/resultados.component */ 7307);







const _c0 = (a0, a1) => ({
  "darkBlue": a0,
  "clearBlue": a1
});
const _c1 = a0 => ({
  "shuffleBtn": a0
});
function SlotsSorteo2023Component_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br")(2, "mat-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SlotsSorteo2023Component_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SlotsSorteo2023Component_Conditional_2_Conditional_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.generateWinner());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 9)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Iniciar");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c1, !ctx_r1.disableShuffleBtn()));
  }
}
function SlotsSorteo2023Component_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SlotsSorteo2023Component_Conditional_2_Conditional_1_Template, 6, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br")(3, "br")(4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6)(6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx_r1.disableShuffleBtn() ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c0, !ctx_r1.sorteando, ctx_r1.sorteando));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.countDown, " ");
  }
}
function SlotsSorteo2023Component_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-resultados", 10)(2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("results", ctx_r1.wenResults);
  }
}
class SlotsSorteo2023Component {
  constructor(renderer, el) {
    this.renderer = renderer;
    this.el = el;
    this.empresaSorteando = "wen";
    this.indexPremio = 0;
    // RESULTADOS SORTEO
    this.sorteando = false;
    this.sorteoHasStarted = false;
    this.showParticipante = "- - - -";
    this.countDown = "";
    this.winnerIndex = 0;
    this.winner = null;
    this.results = [];
    // CONFIGURACION DE "RULETA"
    this.config = new ConfiguracionRuleta();
    // 
    this.TESTEANDO_RULETA = false;
    this.TESTEO_CONFIG = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      microSeg: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('50', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      microSeg_agregar: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('50', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      microSeg_suspenso: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('85', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      repetir_N_veces: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('27', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      restarRepeticiones: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('9', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      restarRepeticiones_suspenso: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl('3', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
    });
  }
  ngOnInit() {}
  startSorteo(data) {
    this.sorteos = data;
    this.setDefaultIntervalValues();
    this.status.start = true;
  }
  disableShuffleBtn() {
    // return this.sorteando || this.winner !== null
    return this.sorteoHasStarted;
  }
  disableOkBtn() {
    return this.sorteando || this.winner === null;
  }
  setDefaultIntervalValues() {
    this.config = new ConfiguracionRuleta();
    this.configureTestInterval();
  }
  configureTestInterval() {
    if (this.TESTEANDO_RULETA) {
      let test = this.TESTEO_CONFIG.getRawValue();
      this.config.microSeg = parseInt(test.microSeg);
      this.config.microSeg_agregar = parseInt(test.microSeg_agregar);
      this.config.microSeg_suspenso = parseInt(test.microSeg_suspenso);
      this.config.repetir_N_veces = parseInt(test.repetir_N_veces);
      this.config.restarRepeticiones = parseInt(test.restarRepeticiones);
      this.config.restarRepeticiones_suspenso = parseInt(test.restarRepeticiones_suspenso);
    }
  }
  get wenResults() {
    return this.results?.filter(result => result.empresa === 'wen') || [];
  }
  generateWinner() {
    var _this = this;
    return (0,C_Users_S_RHV_OneDrive_Documentos_GitRepos_Novit_app_sorteo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.sorteoHasStarted = true;
      yield _this.runProcess();
    })();
  }
  runProcess() {
    var _this2 = this;
    return (0,C_Users_S_RHV_OneDrive_Documentos_GitRepos_Novit_app_sorteo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const countDownElement = _this2.el.nativeElement.querySelector('#randomGeneratorStrings span');
      _this2.countDown = "10"; // Inicializa el countdown
      _this2.sorteando = true;
      // Inicia las tareas en paralelo
      const intervalPromise = _this2.generateInterval(); // Calcula los ganadores
      const countdownPromise = _this2.runCountdown(countDownElement); // Maneja el countdown visual
      // Esperar a que ambas tareas terminen
      yield Promise.all([intervalPromise, countdownPromise]);
      // Cambiar el estado del sorteo
      _this2.status.finish = true;
      // Reiniciar estados
      _this2.sorteando = false;
      console.log('Sorteo finalizado.');
    })();
  }
  runCountdown(countDownElement) {
    var _this3 = this;
    return (0,C_Users_S_RHV_OneDrive_Documentos_GitRepos_Novit_app_sorteo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (let i = 10; i >= 0; i--) {
        _this3.countDown = i.toString(); // Actualiza el countdown visual
        _this3.renderer.removeClass(countDownElement, 'animate');
        void countDownElement.offsetWidth; // Forzar reflujo para reiniciar la animación
        _this3.renderer.addClass(countDownElement, 'animate');
        // Espera para que la animación del countdown se reproduzca
        yield new Promise(resolve => setTimeout(resolve, 1000)); // 1 segundo por iteración
      }
      console.log('Countdown completado.');
    })();
  }
  generateInterval() {
    var _this4 = this;
    return (0,C_Users_S_RHV_OneDrive_Documentos_GitRepos_Novit_app_sorteo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const empresas = ["wen"];
      for (const empresa of empresas) {
        _this4.empresaSorteando = empresa;
        while (_this4.sorteos[_this4.empresaSorteando].premios.length > 0) {
          const participantes = _this4.sorteos[_this4.empresaSorteando].participantes;
          const premios = _this4.sorteos[_this4.empresaSorteando].premios;
          // Validación: Participantes y Premios no deben estar vacíos
          if (!participantes || participantes.length === 0) {
            console.error(`No hay participantes disponibles para ${empresa}.`);
            break;
          }
          if (!premios || premios.length === 0) {
            console.error(`No hay premios disponibles para ${empresa}.`);
            break;
          }
          // Genera un índice aleatorio para elegir al ganador
          let posibleWinnerIndex = Math.floor(Math.random() * participantes.length);
          // Evita repetir el mismo ganador consecutivamente
          while (_this4.winnerIndex === posibleWinnerIndex && participantes.length > 1) {
            posibleWinnerIndex = Math.floor(Math.random() * participantes.length);
          }
          _this4.winnerIndex = posibleWinnerIndex;
          _this4.showParticipante = participantes[_this4.winnerIndex];
          console.log(`Seleccionado en ${empresa}: ${_this4.showParticipante}`);
          // Establece al ganador y guarda el resultado
          _this4.setWinner();
          _this4.saveResult();
          // Pausa breve para liberar el hilo y permitir actualizaciones de renderizado
          yield new Promise(resolve => setTimeout(resolve, 0));
        }
        console.log(`Finalizado el sorteo para ${empresa}.`);
      }
      console.log('Sorteo completado para todas las empresas.');
    })();
  }
  setWinner() {
    const premios = this.sorteos[this.empresaSorteando].premios;
    if (premios.length === 0) {
      console.error(`No hay premios disponibles para ${this.empresaSorteando}`);
      return;
    }
    this.winner = {
      texto: this.showParticipante,
      premio: premios[this.indexPremio],
      // Asignar premio correctamente
      empresa: this.empresaSorteando
    };
  }
  saveResult() {
    if (!this.winner) {
      console.error('No se puede guardar un ganador porque no se ha seleccionado uno.');
      return;
    }
    // Guarda el ganador en los resultados
    this.results.push(this.winner);
    // Elimina al participante seleccionado
    this.sorteos[this.empresaSorteando].participantes.splice(this.winnerIndex, 1);
    // Elimina el premio asignado
    this.sorteos[this.empresaSorteando].premios.shift();
    // Limpia los datos temporales del ganador
    this.showParticipante = "";
    this.winner = null;
    console.log(`Resultado guardado: ${JSON.stringify(this.results[this.results.length - 1])}`);
  }
  resetearSorteo() {
    this.results = [];
    this.winner = null;
    this.sorteando = false;
    this.sorteoHasStarted = false;
    this.setDefaultIntervalValues();
    this.indexPremio = 0;
    this.empresaSorteando = "wen";
  }
  static {
    this.ɵfac = function SlotsSorteo2023Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SlotsSorteo2023Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SlotsSorteo2023Component,
      selectors: [["app-slots-sorteo2023"]],
      inputs: {
        status: "status"
      },
      decls: 4,
      vars: 3,
      consts: [["id", "sorteoContainer", 1, "fullWidth", "fullHeight"], [1, "finDeSorteo"], ["id", "tablaResultadosContainer", 1, "twoColumns"], ["svgIcon", "novitLogo", 1, "svgIcon"], ["id", "buttons"], ["id", "leftContainer", 1, "clickableContainer"], ["id", "randomGeneratorStrings"], [1, "animate", "numberFormat", 3, "ngClass"], ["id", "leftContainer", 1, "clickableContainer", 3, "click"], ["mat-fab", "", 3, "ngClass"], ["classEmpresa", "svgIcon", "sgvIconEmpresa", "wenGrisOscuro", "columnaDerecha", "Ganador", 1, "fullWidth", 3, "results"], [1, "sorteoSeparator"]],
      template: function SlotsSorteo2023Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SlotsSorteo2023Component_Conditional_1_Template, 3, 0, "div", 1)(2, SlotsSorteo2023Component_Conditional_2_Template, 8, 6)(3, SlotsSorteo2023Component_Conditional_3_Template, 3, 1, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.status.finish ? 1 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!ctx.status.finish ? 2 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.status.finish ? 3 : -1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatFabButton, _resultados_resultados_component__WEBPACK_IMPORTED_MODULE_1__.ResultadosComponent],
      styles: ["@charset \"UTF-8\";\n.fullWidth[_ngcontent-%COMP%] {\n  width: -webkit-fill-available !important;\n}\n\n.fullHeight[_ngcontent-%COMP%] {\n  height: -webkit-fill-available !important;\n}\n\n.clickableContainer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n#sorteoContainer[_ngcontent-%COMP%]   #buttons[_ngcontent-%COMP%] {\n  width: 60%;\n  margin-top: 39px;\n  margin-bottom: 0px;\n  padding-bottom: 2.5em;\n}\n\n.svgIcon[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 100%;\n}\n\n.oneColumn[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.twoColumns[_ngcontent-%COMP%] {\n  width: 84%;\n}\n\n.sorteoSeparator[_ngcontent-%COMP%] {\n  border-right: 1px solid #c5c5c5;\n  margin-top: 1.5em;\n}\n\n#tablaResultadosContainer[_ngcontent-%COMP%] {\n  gap: 9em;\n}\n\n.numberFormat[_ngcontent-%COMP%] {\n  font-size: 200px !important;\n  font-family: \"LatinxText-Bold\";\n}\n\n@keyframes _ngcontent-%COMP%_excitingCountDown {\n  0% {\n    opacity: 0;\n    transform: scale(0.5) rotate(0deg);\n    text-shadow: 0 0 5px #fff, 0 0 10px #ff5733, 0 0 20px #ff5733, 0 0 30px #ffbd33, 0 0 40px #fff;\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2) rotate(360deg);\n    text-shadow: 0 0 10px #fff, 0 0 20px #ffbd33, 0 0 30px #ffc300, 0 0 40px #ff5733, 0 0 50px #ffbd33;\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.5) rotate(720deg);\n    text-shadow: 0 0 5px #fff, 0 0 10px #ff5733, 0 0 15px #ff5733, 0 0 20px #ffc300, 0 0 25px #ffbd33;\n  }\n}\n#randomGeneratorStrings[_ngcontent-%COMP%]   span.animate[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_excitingCountDown 1s ease-in-out;\n  font-size: 5rem;\n  \n\n  font-weight: bold;\n  color: #fff;\n  text-shadow: 0 0 5px #fff, 0 0 10px #ff5733, 0 0 20px #ffc300, 0 0 30px #ffbd33, 0 0 40px #fff;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92ZXJzaW9uMjAyMy9zbG90cy1zb3J0ZW8yMDIzL3Nsb3RzLXNvcnRlbzIwMjMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0ksd0NBQUE7QUFBSjs7QUFFQTtFQUNJLHlDQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksVUFBQTtBQUdKOztBQUFBO0VBQ0ksVUFBQTtBQUdKOztBQURBO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBRUksUUFBQTtBQUdKOztBQUFBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtBQUdKOztBQUFBO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esa0NBQUE7SUFDQSw4RkFBQTtFQUdOO0VBQUU7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7SUFDQSxrR0FBQTtFQUVOO0VBQ0U7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7SUFDQSxpR0FBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSw4RkFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFwcC1jb2xvcnMuc2Nzc1wiO1xyXG5cclxuLmZ1bGxXaWR0aCB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xyXG59XHJcbi5mdWxsSGVpZ2h0IHtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xpY2thYmxlQ29udGFpbmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI3NvcnRlb0NvbnRhaW5lciAjYnV0dG9ucyB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyLjVlbTtcclxufVxyXG4uc3ZnSWNvbiB7XHJcbiAgICB3aWR0aDogMzQwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4ub25lQ29sdW1uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi50d29Db2x1bW5zIHtcclxuICAgIHdpZHRoOiA4NCU7XHJcbn1cclxuLnNvcnRlb1NlcGFyYXRvciB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY29sb3ItZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG59XHJcblxyXG4jdGFibGFSZXN1bHRhZG9zQ29udGFpbmVyIHtcclxuICAgIC8vZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogOWVtO1xyXG59XHJcblxyXG4ubnVtYmVyRm9ybWF0IHtcclxuICAgIGZvbnQtc2l6ZTogMjAwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdGlueFRleHQtQm9sZFwiO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV4Y2l0aW5nQ291bnREb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZiwgMCAwIDEwcHggI2ZmNTczMywgMCAwIDIwcHggI2ZmNTczMywgMCAwIDMwcHggI2ZmYmQzMywgMCAwIDQwcHggI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZiZDMzLCAwIDAgMzBweCAjZmZjMzAwLCAwIDAgNDBweCAjZmY1NzMzLCAwIDAgNTBweCAjZmZiZDMzO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmYsIDAgMCAxMHB4ICNmZjU3MzMsIDAgMCAxNXB4ICNmZjU3MzMsIDAgMCAyMHB4ICNmZmMzMDAsIDAgMCAyNXB4ICNmZmJkMzM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNyYW5kb21HZW5lcmF0b3JTdHJpbmdzIHNwYW4uYW5pbWF0ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBhbmltYXRpb246IGV4Y2l0aW5nQ291bnREb3duIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgLyogTcODwqFzIGdyYW5kZSBwYXJhIGRhciBpbXBhY3RvICovXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZiwgMCAwIDEwcHggI2ZmNTczMywgMCAwIDIwcHggI2ZmYzMwMCwgMCAwIDMwcHggI2ZmYmQzMywgMCAwIDQwcHggI2ZmZjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}
class ConfiguracionRuleta {
  constructor() {
    this.microSeg = 50;
    this.microSeg_agregar = 50;
    this.microSeg_suspenso = 85;
    this.intervalInstance = 1;
    this.repetir_N_veces = 9;
    this.restarRepeticiones = 9;
    this.restarRepeticiones_suspenso = 3;
  }
}

/***/ }),

/***/ 2833:
/*!*****************************************************************!*\
  !*** ./src/app/components/version2023/version2023.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Version2023Component: () => (/* binding */ Version2023Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _carga_listado_carga_listado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carga-listado/carga-listado.component */ 439);
/* harmony import */ var _slots_sorteo2023_slots_sorteo2023_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slots-sorteo2023/slots-sorteo2023.component */ 6191);






const _c0 = ["listadoswen"];
const _c1 = ["slotsSorteo"];
const _c2 = a0 => ({
  "hidden": a0
});
class Version2023Component {
  constructor() {
    this.initValue = false;
  }
  ngOnInit() {}
  resetearSorteo() {
    this.listadoswen.resetearSorteo();
    this.slotsSorteo.resetearSorteo();
    this.initValue = false;
  }
  disableStart() {
    return !this.listadoswen || this.listadoswen.isInvalid();
  }
  comenzarSorteo() {
    let sorteos = {
      wen: this.listadoswen.getListados()
    };
    this.slotsSorteo.startSorteo(sorteos);
  }
  static {
    this.ɵfac = function Version2023Component_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Version2023Component)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: Version2023Component,
      selectors: [["app-version2023"]],
      viewQuery: function Version2023Component_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.listadoswen = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slotsSorteo = _t.first);
        }
      },
      inputs: {
        status: "status"
      },
      decls: 13,
      vars: 14,
      consts: [["listadoswen", ""], ["slotsSorteo", ""], ["id", "initContainer", 3, "ngClass"], ["id", "empresasContainer"], [1, "sorteoContainer"], [2, "text-align", "center"], ["svgIcon", "novitLogo", 1, "svgIcon"], [1, "fullWidth"], ["id", "actionsContainer", 3, "ngClass"], ["mat-raised-button", "", 1, "okBtn", 3, "click", "disabled"], [1, "widthSlots", 3, "ngClass", "status"]],
      template: function Version2023Component_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "h1", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-carga-listado", 7, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Version2023Component_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.comenzarSorteo());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "PREPARAR SORTEO");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-slots-sorteo2023", 10, 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, ctx.status.start));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c2, ctx.status.start));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c2, ctx.status.start));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.disableStart());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c2, !ctx.status.start))("status", ctx.status);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _carga_listado_carga_listado_component__WEBPACK_IMPORTED_MODULE_0__.CargaListadoComponent, _slots_sorteo2023_slots_sorteo2023_component__WEBPACK_IMPORTED_MODULE_1__.SlotsSorteo2023Component],
      styles: [".hidden[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.fullWidth[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n}\n\n.fullHeight[_ngcontent-%COMP%] {\n  height: -webkit-fill-available !important;\n}\n\n.widthSlots[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n\n.sorteoContainer[_ngcontent-%COMP%]   .svgIcon[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 100%;\n}\n.sorteoContainer[_ngcontent-%COMP%]   .scndIcon[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 100%;\n}\n\n#initContainer[_ngcontent-%COMP%] {\n  gap: 4em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: -webkit-fill-available;\n}\n#initContainer[_ngcontent-%COMP%]   .sorteoSeparator[_ngcontent-%COMP%] {\n  border-right: 1px solid #c5c5c5;\n  margin-top: 1.5em;\n}\n#initContainer[_ngcontent-%COMP%]   #empresasContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  width: -webkit-fill-available;\n}\n#initContainer[_ngcontent-%COMP%]   #empresasContainer[_ngcontent-%COMP%]   .sorteoContainer[_ngcontent-%COMP%] {\n  width: 25%;\n}\n#initContainer[_ngcontent-%COMP%]   #actionsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n#initContainer[_ngcontent-%COMP%]   #actionsContainer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 5px 3em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy92ZXJzaW9uMjAyMy92ZXJzaW9uMjAyMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdCQUFBO0FBREo7O0FBSUE7RUFDSSw2QkFBQTtBQURKOztBQUlBO0VBQ0kseUNBQUE7QUFESjs7QUFJQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtBQURKOztBQUtJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFGUjtBQUtJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFIUjs7QUFPQTtFQUNJLFFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSko7QUFNSTtFQUNJLCtCQUFBO0VBQ0EsaUJBQUE7QUFKUjtBQU9JO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QUFMUjtBQU9RO0VBQ0ksVUFBQTtBQUxaO0FBU0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFQUjtBQVNRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBUFoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiYXBwLWNvbG9ycy5zY3NzXCI7XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ1bGxXaWR0aCB7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxufVxyXG5cclxuLmZ1bGxIZWlnaHQge1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi53aWR0aFNsb3RzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zb3J0ZW9Db250YWluZXIge1xyXG4gICAgLnN2Z0ljb24ge1xyXG4gICAgICAgIHdpZHRoOiAzNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zY25kSWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuI2luaXRDb250YWluZXIge1xyXG4gICAgZ2FwOiA0ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuXHJcbiAgICAuc29ydGVvU2VwYXJhdG9yIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkY29sb3ItZ3JheTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICAjZW1wcmVzYXNDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcblxyXG4gICAgICAgIC5zb3J0ZW9Db250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjYWN0aW9uc0NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggM2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 8157:
/*!********************************!*\
  !*** ./src/app/svg.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SvgService: () => (/* binding */ SvgService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);



class SvgService {
  constructor(matIconRegistry, domSanitizer) {
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
  }
  init() {
    this.matIconRegistry.addSvgIcon("novitLogo", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo-azul.svg"));
    this.matIconRegistry.addSvgIcon("novitLogoBlanco", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/logo-blanco.svg"));
  }
  static {
    this.ɵfac = function SvgService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SvgService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SvgService,
      factory: SvgService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map