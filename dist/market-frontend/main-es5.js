function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hold-transition login-page\">\n  <div class=\"login-box\">\n    <div class=\"login-logo\">\n      <a routerLink=\"/\"><b>Siêu thị online</b></a>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body login-card-body\">\n        <p class=\"login-box-msg\">Đăng nhập</p>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <div class=\"input-group mb-3\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-envelope\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"input-group mb-3\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-lock\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-8\">\n              <div class=\"icheck-primary\">\n                <input type=\"checkbox\" id=\"remember\">\n                <label for=\"remember\">\n                  Remember Me\n                </label>\n              </div>\n            </div>\n            <!-- /.col -->\n            <div class=\"col-4\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Sign in</button>\n            </div>\n            <!-- /.col -->\n          </div>\n        </form>\n\n        <div class=\"social-auth-links text-center mb-3\">\n          <p>- OR -</p>\n          <a href=\"#\" class=\"btn btn-block btn-primary\">\n            <i class=\"fab fa-facebook mr-2\"></i> Sign in using Facebook\n          </a>\n          <a href=\"#\" class=\"btn btn-block btn-danger\">\n            <i class=\"fab fa-google-plus mr-2\"></i> Sign in using Google+\n          </a>\n        </div>\n        <!-- /.social-auth-links -->\n\n        <p class=\"mb-1\">\n          <a href=\"#\">Quên mật khẩu</a>\n        </p>\n        <p class=\"mb-0\">\n          <a [routerLink]=\"['/register']\" class=\"text-center\">Đăng ký tài khoản mới</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hold-transition register-page\">\n  <div class=\"register-box\">\n    <div class=\"register-logo\">\n      <a routerLink=\"/\"><b>Siêu thị online</b></a>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body register-card-body\">\n        <p class=\"login-box-msg\">Đăng ký tài khoản</p>\n        <form role=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" id=\"register\">\n          <div class=\"input-group mb-3\">\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Email\" formControlName=\"email\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-envelope\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"input-group mb-3\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" formControlName=\"password\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-lock\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"input-group mb-3\">\n            <input type=\"text\" class=\"form-control\" name=\"fullName\" placeholder=\"Họ và tên\" formControlName=\"fullName\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\">\n                <span class=\"fas fa-user\"></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-8\">\n            </div>\n            <!-- /.col -->\n            <div class=\"col-4\">\n              <button type=\"submit\" class=\"btn btn-primary btn-block\">Đăng ký</button>\n            </div>\n            <!-- /.col -->\n          </div>\n        </form>\n\n        <div class=\"social-auth-links text-center\">\n          <p>- OR -</p>\n          <a href=\"#\" class=\"btn btn-block btn-primary\">\n            <i class=\"fab fa-facebook mr-2\"></i>\n            Sign up using Facebook\n          </a>\n          <a href=\"#\" class=\"btn btn-block btn-danger\">\n            <i class=\"fab fa-google-plus mr-2\"></i>\n            Sign up using Google+\n          </a>\n        </div>\n\n        <a [routerLink]=\"['/login']\" class=\"text-center\">Tôi đã có tài khoản</a>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chat/chat.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chat/chat.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"openForm()\" class=\"open-button\">\n  <i class=\"fab fa-facebook-messenger fa-2x\"></i>\n</button>\n<div [style.display]=\"isOpened == true ? 'block' : 'none'\" class=\"chat-popup\" id=\"myForm\">\n  <form (ngSubmit)=\"sentMessage(currentUser)\"\n        class=\"form-container\">\n    <div class=\"row chat-header\">\n      <div class=\"col-10\">\n        <p>Admin</p>\n      </div>\n      <div class=\"col-2\">\n        <button (click)=\"closeForm()\" class=\"btn btn-tool\" type=\"button\">\n          <i class=\"fas fa-times\" style=\"color: #7fad39\"></i>\n        </button>\n      </div>\n    </div>\n    <div #message (scroll)=\"loadNewData(currentUser)\" *ngIf=\"currentUser\"\n         class=\"chat-history row\" id=\"chat-message\">\n      <ul id=\"history\">\n        <ng-container *ngFor=\"let message of listMessage\">\n          <li [className]=\"currentUser.id == message.sender.id ? 'me' : 'you'\">\n            {{message.content}}\n          </li>\n        </ng-container>\n      </ul>\n    </div>\n    <div *ngIf=\"!currentUser\" class=\"d-flex justify-content-center align-items-center\"\n         style=\"height: 200px\">\n      <p>\n        Bạn cần phải đăng nhập để sử dụng tính năng này!\n      </p>\n    </div>\n    <div class=\"chat-footer row\">\n      <input [(ngModel)]=\"content\" class=\"form-control col-10\" id=\"msg\" name=\"content\"\n             required style=\"background: #f1f1f1;\"/>\n      <button class=\"btn col-2\" type=\"submit\">\n        <i class=\"fas fa-paper-plane\" style=\"color: #7fad39\"></i>\n      </button>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutWithBubbleChatLayoutWithBubbleChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n<app-chat *ngIf=\"!hasRoleAdmin\"></app-chat>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-shared/layout-with-shared.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-shared/layout-with-shared.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutWithSharedLayoutWithSharedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hold-transition sidebar-mini\">\n  <div class=\"wrapper\">\n    <app-navbar></app-navbar>\n    <app-sidebar></app-sidebar>\n    <div class=\"content-wrapper\">\n      <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 col-sm-6\">\n        <div class=\"footer__about\">\n          <div class=\"footer__about__logo\">\n            <a routerLink=\"/\"><img src=\"../../../assets/static/img/logo.png\" alt=\"\"></a>\n          </div>\n          <ul>\n            <li>Địa chỉ: 10 Xã Đàn, Đống Đa, Hà Nội</li>\n            <li>Điện thoại: 84382546945</li>\n            <li>Email: help@gmail.com</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-6 offset-lg-1\">\n        <div class=\"footer__widget\">\n          <h6>Useful Links</h6>\n          <ul>\n            <li><a href=\"#\">About Us</a></li>\n            <li><a href=\"#\">About Our Shop</a></li>\n            <li><a href=\"#\">Secure Shopping</a></li>\n            <li><a href=\"#\">Delivery infomation</a></li>\n            <li><a href=\"#\">Privacy Policy</a></li>\n            <li><a href=\"#\">Our Sitemap</a></li>\n          </ul>\n          <ul>\n            <li><a href=\"#\">Who We Are</a></li>\n            <li><a href=\"#\">Our Services</a></li>\n            <li><a href=\"#\">Projects</a></li>\n            <li><a href=\"#\">Contact</a></li>\n            <li><a href=\"#\">Innovation</a></li>\n            <li><a href=\"#\">Testimonials</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-12\">\n        <div class=\"footer__widget\">\n          <h6>Join Our Newsletter Now</h6>\n          <p>Get E-mail updates about our latest shop and special offers.</p>\n          <div class=\"footer__widget__social\">\n            <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\n            <a href=\"#\"><i class=\"fab fa-instagram\"></i></a>\n            <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n            <a href=\"#\"><i class=\"fab fa-pinterest\"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"footer__copyright\">\n          <div class=\"footer__copyright__payment\"><img src=\"../../../assets/static/img/payment-item.png\" alt=\"\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"humberger__menu__overlay\"></div>\n<div class=\"humberger__menu__wrapper\">\n  <div class=\"humberger__menu__logo\">\n    <a href=\"#\"><img src=\"../../../assets/static/img/logo.png\" alt=\"\"></a>\n  </div>\n  <div class=\"humberger__menu__cart\">\n    <ul>\n      <li><a href=\"#\"><i class=\"fa fa-shopping-bag\"></i> <span>3</span></a></li>\n    </ul>\n  </div>\n  <div class=\"humberger__menu__widget\">\n    <div class=\"header__top__right__language\">\n      <img src=\"../../../assets/static/img/language.png\" alt=\"\">\n      <div>English</div>\n      <ul>\n        <li><a href=\"#\">Vietnamese</a></li>\n        <li><a href=\"#\">English</a></li>\n      </ul>\n    </div>\n    <div class=\"header__top__right__auth\">\n      <a href=\"#\"><i class=\"fa fa-user\"></i> Login</a>\n    </div>\n  </div>\n  <nav class=\"humberger__menu__nav mobile-menu\">\n    <ul>\n      <li class=\"active\"><a routerLink=\"/\">Trang chủ</a></li>\n      <li><a routerLink=\"/shop\">Cừa hàng</a></li>\n      <li><a routerLink=\"/contact\">Liên hệ</a></li>\n    </ul>\n  </nav>\n  <div id=\"mobile-menu-wrap\"></div>\n  <div class=\"header__top__right__social\">\n    <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\n    <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n    <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a>\n    <a href=\"#\"><i class=\"fab fa-pinterest-p\"></i></a>\n  </div>\n  <div class=\"humberger__menu__contact\">\n    <ul>\n      <li><i class=\"fa fa-envelope\"></i>help@gmail.com</li>\n      <li>Miễn phí vận chuyển trong vòng 5km</li>\n    </ul>\n  </div>\n</div>\n<header class=\"header\">\n  <div class=\"header__top\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <div class=\"header__top__left\">\n            <ul>\n              <li><i class=\"fa fa-envelope\"></i>help@gmail.com</li>\n              <li>Miễn phí vận chuyển trong vòng 5km</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-6\">\n          <div class=\"header__top__right\">\n            <div class=\"header__top__right__social\">\n              <a href=\"#\"><i class=\"fab fa-facebook\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-twitter\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-linkedin\"></i></a>\n              <a href=\"#\"><i class=\"fab fa-pinterest-p\"></i></a>\n            </div>\n            <div class=\"header__top__right__language\">\n              <div>Theo dõi đơn hàng</div>\n              <ul>\n                <li><a [routerLink]=\"['/order', { status:true }]\" style=\"font-size: 12px\">Đã mua</a></li>\n                <li><a [routerLink]=\"['/order', { status:false }]\" style=\"font-size: 12px\">Chờ xác nhận</a></li>\n              </ul>\n            </div>\n            <div class=\"dropdown header__top__right__auth\">\n              <a class=\"btn dropdown-toggle\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\"\n                 aria-haspopup=\"false\" aria-expanded=\"false\">\n                <i class=\"fa fa-bell\"></i><span\n                *ngIf=\"socketService.listNotificationUnRead.length==0\">{{socketService.listNotificationUnRead.length}}</span>\n                <span *ngIf=\"socketService.listNotificationUnRead.length>0\"\n                      style=\"color: red\">{{socketService.listNotificationUnRead.length}}</span>\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\" *ngIf=\"currentUser==null\">\n                <div class=\"dropdown-item disabled\">\n                  <h5>Thông báo</h5>\n                  <p></p>\n                </div>\n                <div class=\"dropdown-item disabled\">\n                  <p>Bạn chưa đăng nhập</p>\n                  <p></p>\n                </div>\n              </div>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\" *ngIf=\"currentUser!=null\">\n                <div class=\"dropdown-item disabled\">\n                  <h5>Thông báo</h5>\n                  <p></p>\n                </div>\n                <div class=\"dropdown-item disabled\" *ngIf=\"socketService.listNotification.length==0\">\n                  <p>Chưa có thông báo</p>\n                  <p></p>\n                </div>\n                <div id=\"notifications\">\n                  <div class=\"dropdown-item\"\n                       *ngFor=\"let notification of socketService.listNotification\">\n                    <div *ngIf=\"notification.status == true\" (click)=\"updateStatus(notification.id, currentUser.id)\">\n                      {{notification.message}}\n                      <p style=\"font-size: 12px\">\n                        {{notification.createDate.getHours()}}:{{notification.createDate.getMinutes()}}\n                        {{notification.createDate.getDay() < 10 ? \"0\" + notification.createDate.getDay() : notification.createDate.getDay()}}-{{notification.createDate.getMonth() < 10 ? \"0\" + notification.createDate.getMonth() : notification.createDate.getMonth()}}-{{notification.createDate.getFullYear()}}\n                      </p>\n                    </div>\n                    <div *ngIf=\"notification.status == false\"\n                         (click)=\"updateStatus(notification.id, currentUser.id)\">\n                      {{notification.message}}\n                      <p style=\"font-size: 12px; color: #4b93f7\">\n                        {{notification.createDate.getHours()}}:{{notification.createDate.getMinutes()}}\n                        {{notification.createDate.getDay() < 10 ? \"0\" + notification.createDate.getDay() : notification.createDate.getDay()}}-{{notification.createDate.getMonth() < 10 ? \"0\" + notification.createDate.getMonth() : notification.createDate.getMonth()}}-{{notification.createDate.getFullYear()}}\n                        <span class=\"fas fa-circle float-right\" style=\"color: #4b93f7\"></span>\n                      </p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"header__top__right__auth\" *ngIf=\"!currentUser\">\n              <a routerLink=\"../login\"><i class=\"fa fa-user\"></i> Đăng nhập</a>\n            </div>\n            <div class=\"header__top__right__auth\" *ngIf=\"currentUser\">\n              <a routerLink=\"#\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Đăng xuất</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"header__logo\">\n          <a routerLink=\"/\"><img src=\"../../../assets/static/img/logo.png\" alt=\"\"></a>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <nav class=\"header__menu\">\n          <ul>\n            <li class=\"active\"><a routerLink=\"/\">Trang chủ</a></li>\n            <li><a routerLink=\"/shop\">Cửa hàng</a></li>\n            <li><a routerLink=\"/contact\">Liên hệ</a></li>\n          </ul>\n        </nav>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"header__cart\">\n          <ul>\n            <li><a routerLink=\"/favorite\"><i class=\"fa fa-heart\"></i> <span>{{this.favoriteProduct.length}}</span></a>\n            </li>\n            <li><a routerLink=\"/cart\"><i class=\"fa fa-shopping-bag\"></i> <span>{{this.amount}}</span></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"humberger__open\">\n      <i class=\"fa fa-bars\"></i>\n    </div>\n  </div>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"main-header navbar navbar-expand navbar-white navbar-light\">\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fas fa-bars\"></i></a>\n      </li>\n      <li class=\"nav-item active mr-sm-3\">\n        <a class=\"nav-link\" routerLink=\"/admin\">\n          <i class=\"fa fa-home fa-lg\"></i>\n          Trang chủ<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item mr-sm-3\">\n        <a class=\"nav-link\" routerLink=\"/admin/messenger\">\n          <i class=\"fab fa-facebook-messenger fa-lg\"></i>\n          Tin nhắn<span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <div class=\"my-2 my-lg-0\">\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"!currentUser\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"login\"><i class=\"fas fa-sign-in-alt fa-lg\"></i> Đăng nhập</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"register\"><i class=\"fas fa-user-plus fa-lg\"></i> Đăng ký</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"currentUser\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"#\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Đăng xuất</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\n  <!-- Brand Logo -->\n  <a routerLink=\"\" class=\"brand-link\">\n    <span class=\"brand-text font-weight-light\">Shop</span>\n  </a>\n\n<!--   Sidebar-->\n  <div class=\"sidebar\">\n    <!-- Sidebar user (optional) -->\n    <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n      <div class=\"image\">\n        <i class=\"fa fa-user fa-2x\" style=\"color: white\"></i>\n      </div>\n      <div class=\"info\">\n        <a [routerLink]=\"'/chart'\" class=\"d-block\">{{currentUser.email}}</a>\n      </div>\n    </div>\n\n    <!-- Sidebar Menu -->\n    <nav class=\"mt-2\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n        <li class=\"nav-item\">\n          <a routerLink=\"/admin\" class=\"nav-link\">\n            <i class=\"nav-icon fas fa-chart-bar\"></i>\n            <p>\n              Biểu đồ\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/admin/users\" class=\"nav-link\">\n            <i class=\"nav-icon fas fa-user\"></i>\n            <p>\n              Người dùng\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/admin/product\" class=\"nav-link\">\n            <i class=\"nav-icon fab fa-product-hunt\"></i>\n            <p>\n              Sản phẩm\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/admin/category\" class=\"nav-link\">\n            <i class=\"nav-icon fas fa-list\"></i>\n            <p>\n              Danh mục\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/admin/warehouse\" class=\"nav-link\">\n            <i class=\"nav-icon fas fa-home\"></i>\n            <p>\n              Nhà kho\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/admin/warehouse-bill\" class=\"nav-link\">\n            <i class=\"nav-icon fas fa-file-contract\"></i>\n            <p>\n              Phiếu nhập kho\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/admin/bills\" class=\"nav-link\">\n            <i class=\"nav-icon fas fa-file\"></i>\n            <p>\n              Phiếu xuất kho\n            </p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"/admin/orders\" class=\"nav-link\">\n            <i class=\"nav-icon fas fa-money-bill\"></i>\n            <p>\n              Đơn hàng\n            </p>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- /.sidebar-menu -->\n  </div>\n<!--   /.sidebar-->\n</aside>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/layout-with-shared/layout-with-shared.component */
    "./src/app/layout/layout-with-shared/layout-with-shared.component.ts");
    /* harmony import */


    var _helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./helper/admin-auth-guard */
    "./src/app/helper/admin-auth-guard.ts");
    /* harmony import */


    var _layout_layout_with_bubble_chat_layout_with_bubble_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout/layout-with-bubble-chat/layout-with-bubble-chat.component */
    "./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./auth/register/register.component */
    "./src/app/auth/register/register.component.ts");

    var routes = [{
      path: 'admin',
      component: _layout_layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_3__["LayoutWithSharedComponent"],
      canActivate: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
      canActivateChild: [_helper_admin_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AdminAuthGuard"]],
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-admin-module */
        "admin-admin-module").then(__webpack_require__.bind(null,
        /*! ./admin/admin.module */
        "./src/app/admin/admin.module.ts")).then(function (module) {
          return module.AdminModule;
        });
      }
    }, {
      path: '',
      component: _layout_layout_with_bubble_chat_layout_with_bubble_chat_component__WEBPACK_IMPORTED_MODULE_5__["LayoutWithBubbleChatComponent"],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | user-user-module */
        [__webpack_require__.e("common"), __webpack_require__.e("user-user-module")]).then(__webpack_require__.bind(null,
        /*! ./user/user.module */
        "./src/app/user/user.module.ts")).then(function (module) {
          return module.UserModule;
        });
      }
    }, {
      path: 'login',
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    }, {
      path: 'register',
      component: _auth_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/socket/socket.service */
    "./src/app/service/socket/socket.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(socketService) {
        _classCallCheck(this, AppComponent);

        this.socketService = socketService;
        this.title = 'market-frontend';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.socketService.connectToNotification();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.socketService.disconnect();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./helper/jwt-interceptor */
    "./src/app/helper/jwt-interceptor.ts");
    /* harmony import */


    var _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./helper/error-interceptor */
    "./src/app/helper/error-interceptor.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/fesm2015/angular-fire.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./layout/layout.module */
    "./src/app/layout/layout.module.ts");
    /* harmony import */


    var _auth_auth_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./auth/auth.module */
    "./src/app/auth/auth.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig), _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_14__["AuthModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
        useClass: _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_7__["ErrorInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthRoutingModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/auth/register/register.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    })], AuthModule);
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/auth/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(activatedRoute, router, authenticationService) {
        var _this = this;

        _classCallCheck(this, LoginComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.loading = false;
        this.submitted = false;
        this.hasRoleAdmin = false;
        this.authenticationService.currentUser.subscribe(function (value) {
          return _this.currentUser = value;
        });

        if (this.currentUser) {
          var roleList = this.currentUser.roles;

          var _iterator = _createForOfIteratorHelper(roleList),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var role = _step.value;

              if (role.authority === 'ROLE_ADMIN') {
                this.hasRoleAdmin = true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        if (this.authenticationService.currentUserValue) {
          if (this.hasRoleAdmin) {
            this.router.navigate(['/chart']);
          } else {
            this.router.navigate(['/']);
          }
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
        }
      }, {
        key: "login",
        value: function login() {
          var _this2 = this;

          this.submitted = true;
          this.loading = true;
          this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            sessionStorage.setItem('ACCESS_TOKEN', data.accessToken);
            var roleList = data.roles;

            var _iterator2 = _createForOfIteratorHelper(roleList),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var role = _step2.value;

                if (role.authority === 'ROLE_ADMIN') {
                  _this2.returnUrl = "/admin";
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            _this2.router.navigate([_this2.returnUrl])["finally"](function () {});

            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'success',
                title: 'Đăng nhập thành công'
              });
            });
          }, function () {
            _this2.loading = false;
            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'error',
                title: 'Đăng nhập thất bại'
              });
            });
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/auth/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/auth/register/register.component.css":
  /*!******************************************************!*\
    !*** ./src/app/auth/register/register.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/auth/register/register.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/auth/register/register.component.ts ***!
    \*****************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/user/user.service */
    "./src/app/service/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(userService, router) {
        _classCallCheck(this, RegisterComponent);

        this.userService = userService;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          terms: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.isSubmitted = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(document).ready(function () {
            $('#register').validate({
              rules: {
                email: {
                  required: true,
                  email: true
                },
                password: {
                  required: true,
                  minlength: 6
                },
                fullName: {
                  required: true
                },
                terms: {
                  required: true
                }
              },
              messages: {
                email: {
                  required: "Nhập địa chỉ email",
                  email: "Không đúng định dạng"
                },
                password: {
                  required: "Nhập mật khẩu",
                  minlength: "Mật khẩu phải có ít nhất 6 ký tự"
                },
                fullName: "Nhập họ và tên bạn"
              },
              errorElement: 'span',
              errorPlacement: function errorPlacement(error, element) {
                error.addClass('invalid-feedback');
                element.closest('.input-group').append(error);
              },
              highlight: function highlight(element, errorClass, validClass) {
                $(element).addClass('is-invalid');
              },
              unhighlight: function unhighlight(element, errorClass, validClass) {
                $(element).removeClass('is-invalid');
              }
            });
          });
        }
      }, {
        key: "register",
        value: function register() {
          var _this3 = this;

          this.isSubmitted = true;
          var user = {
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
            fullName: this.registerForm.value.fullName
          };

          if (user.email !== "" && user.password !== "" && user.fullName !== "") {
            this.userService.register(user).subscribe(function () {
              _this3.registerForm.reset();

              _this3.router.navigate(['/login'])["finally"](function () {});

              $(function () {
                var Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                });
                Toast.fire({
                  type: 'success',
                  title: 'Đăng ký thành công'
                });
              });
            }, function () {
              $(function () {
                var Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                });
                Toast.fire({
                  type: 'error',
                  title: 'Đăng ký thất bại'
                });
              });
            });
          } else {
            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'error',
                title: 'Đăng ký thất bại'
              });
            });
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/auth/register/register.component.css"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/helper/admin-auth-guard.ts":
  /*!********************************************!*\
    !*** ./src/app/helper/admin-auth-guard.ts ***!
    \********************************************/

  /*! exports provided: AdminAuthGuard */

  /***/
  function srcAppHelperAdminAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function () {
      return AdminAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var AdminAuthGuard = /*#__PURE__*/function () {
      function AdminAuthGuard(router, authService) {
        var _this4 = this;

        _classCallCheck(this, AdminAuthGuard);

        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(function (next) {
          _this4.currentUser = next;
        });
      }

      _createClass(AdminAuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var hasRoleAdmin = false;

          if (this.currentUser) {
            var roleList = this.currentUser.roles;

            var _iterator3 = _createForOfIteratorHelper(roleList),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var role = _step3.value;

                if (role.authority === 'ROLE_ADMIN') {
                  hasRoleAdmin = true;
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (hasRoleAdmin) {
              return true;
            } else {
              this.authService.logout();
              this.router.navigate(['/', 'admin', 'dashboard'], {
                queryParams: {
                  login: true
                },
                queryParamsHandling: 'merge'
              });
              return false;
            }
          } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'admin', 'login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          if (this.currentUser) {
            var roleList = this.currentUser.roles;
            var hasRoleAdmin = false;

            var _iterator4 = _createForOfIteratorHelper(roleList),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var role = _step4.value;

                if (role.authority === 'ROLE_ADMIN') {
                  hasRoleAdmin = true;
                  break;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return hasRoleAdmin;
          } else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'admin', 'login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }
      }, {
        key: "canLoad",
        value: function canLoad(route, segments) {
          return true;
        }
      }]);

      return AdminAuthGuard;
    }();

    AdminAuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], AdminAuthGuard);
    /***/
  },

  /***/
  "./src/app/helper/error-interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/helper/error-interceptor.ts ***!
    \*********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppHelperErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(authenticationService, router) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this5 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {// do stuff with response if you want
            }
          }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              if (err.status === 401) {
                _this5.authenticationService.logout();

                _this5.router.navigate(['/login']);
              } else if (err.status === 403) {
                _this5.router.navigate(['/']);
              }
            }
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/helper/jwt-interceptor.ts":
  /*!*******************************************!*\
    !*** ./src/app/helper/jwt-interceptor.ts ***!
    \*******************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppHelperJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser && currentUser.accessToken) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.accessToken)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/layout/chat/chat.component.scss":
  /*!*************************************************!*\
    !*** ./src/app/layout/chat/chat.component.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutChatChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".open-button {\n  background-color: #7fad39;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 23px;\n  right: 28px;\n  border-radius: 50%;\n}\n\n/* The popup chat - hidden by default */\n\n.chat-popup {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  right: 15px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  box-shadow: 2px 2px 2px 2px #7fad39;\n  z-index: 9;\n}\n\n/* Add styles to the form container */\n\n.form-container {\n  max-width: 400px;\n  min-width: 300px;\n  padding: 10px;\n  border: #FFFFFF;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  background-color: white;\n}\n\n/* When the textarea gets focus, do something */\n\n.form-container input:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Add a red background color to the cancel button */\n\n.form-container .cancel {\n  background-color: red;\n}\n\n/* Add some hover effects to buttons */\n\n.form-container .btn:hover, .open-button:hover {\n  opacity: 1;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.chat-history ul li {\n  display: inline-block;\n  clear: both;\n  padding: 5px;\n  border-radius: 30px;\n  margin-bottom: 5px;\n  font-family: Helvetica, Arial, sans-serif;\n}\n\n.you {\n  background: #eee;\n  float: left;\n}\n\n.me {\n  float: right;\n  background: #7fad39;\n  color: #fff;\n}\n\n.you + .me {\n  border-bottom-right-radius: 5px;\n}\n\n.me + .me {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.me:last-of-type {\n  border-bottom-right-radius: 30px;\n}\n\n.chat-header {\n  border-bottom: 2px solid #f0f0f0;\n}\n\n.chat-footer {\n  border-top: 2px solid #f0f0f0;\n}\n\n.chat-history {\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\n\n#history {\n  width: 100%;\n}\n\n#chat-message {\n  max-height: 300px;\n  min-height: 250px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFuL0FuZ3VsYXIvQW5ndWxhcl9TaG9waWZ5L3NyYy9hcHAvbGF5b3V0L2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQSx1Q0FBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUEscUNBQUE7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURFQSwrQ0FBQTs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBLG9EQUFBOztBQUNBO0VBQ0UscUJBQUE7QUNDRjs7QURFQSxzQ0FBQTs7QUFDQTtFQUNFLFVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wZW4tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdmYWQzOTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyM3B4O1xuICByaWdodDogMjhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vKiBUaGUgcG9wdXAgY2hhdCAtIGhpZGRlbiBieSBkZWZhdWx0ICovXG4uY2hhdC1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMTVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggIzdmYWQzOTtcbiAgei1pbmRleDogOTtcbn1cblxuLyogQWRkIHN0eWxlcyB0byB0aGUgZm9ybSBjb250YWluZXIgKi9cbi5mb3JtLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogI0ZGRkZGRjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLyogV2hlbiB0aGUgdGV4dGFyZWEgZ2V0cyBmb2N1cywgZG8gc29tZXRoaW5nICovXG4uZm9ybS1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgY2FuY2VsIGJ1dHRvbiAqL1xuLmZvcm0tY29udGFpbmVyIC5jYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi8qIEFkZCBzb21lIGhvdmVyIGVmZmVjdHMgdG8gYnV0dG9ucyAqL1xuLmZvcm0tY29udGFpbmVyIC5idG46aG92ZXIsIC5vcGVuLWJ1dHRvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY2hhdC1oaXN0b3J5IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjbGVhcjogYm90aDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4ueW91IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZDogIzdmYWQzOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi55b3UgKyAubWUge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4ubWUgKyAubWUge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG4ubWU6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG59XG5cbi5jaGF0LWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjBmMGYwO1xufVxuXG4uY2hhdC1mb290ZXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2YwZjBmMDtcbn1cblxuLmNoYXQtaGlzdG9yeSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4jaGlzdG9yeSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jY2hhdC1tZXNzYWdlIHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iLCIub3Blbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2ZhZDM5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuODtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDIzcHg7XG4gIHJpZ2h0OiAyOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIFRoZSBwb3B1cCBjaGF0IC0gaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbi5jaGF0LXBvcHVwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjN2ZhZDM5O1xuICB6LWluZGV4OiA5O1xufVxuXG4vKiBBZGQgc3R5bGVzIHRvIHRoZSBmb3JtIGNvbnRhaW5lciAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAjRkZGRkZGO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4vKiBXaGVuIHRoZSB0ZXh0YXJlYSBnZXRzIGZvY3VzLCBkbyBzb21ldGhpbmcgKi9cbi5mb3JtLWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSBjYW5jZWwgYnV0dG9uICovXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLyogQWRkIHNvbWUgaG92ZXIgZWZmZWN0cyB0byBidXR0b25zICovXG4uZm9ybS1jb250YWluZXIgLmJ0bjpob3ZlciwgLm9wZW4tYnV0dG9uOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jaGF0LWhpc3RvcnkgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi55b3Uge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1lIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjN2ZhZDM5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnlvdSArIC5tZSB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi5tZSArIC5tZSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbi5tZTpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbn1cblxuLmNoYXQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMGYwZjA7XG59XG5cbi5jaGF0LWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZjBmMGYwO1xufVxuXG4uY2hhdC1oaXN0b3J5IHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbiNoaXN0b3J5IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjaGF0LW1lc3NhZ2Uge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/chat/chat.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/layout/chat/chat.component.ts ***!
    \***********************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppLayoutChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/chat/chat.service */
    "./src/app/service/chat/chat.service.ts");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/socket/socket.service */
    "./src/app/service/socket/socket.service.ts");

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(chatService, socketService, authenticationService) {
        _classCallCheck(this, ChatComponent);

        this.chatService = chatService;
        this.socketService = socketService;
        this.authenticationService = authenticationService;
        this.isOpened = false;
        this.content = '';
        this.currentUser = {};
        this.listMessage = [];
        this.size = 10;
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.authenticationService.currentUser.subscribe(function (value) {
            _this6.currentUser = value;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.socketService.disconnect();
        }
      }, {
        key: "openForm",
        value: function openForm() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isOpened = true;

                    if (!this.currentUser) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 4;
                    return this.getAllChatHistory(this.currentUser.id, 1, this.size);

                  case 4:
                    this.listMessage = _context.sent;
                    this.socketService.connectToChat(this.currentUser, this.message);
                    this.scrollBottom();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "scrollBottom",
        value: function scrollBottom() {
          var _this7 = this;

          setTimeout(function () {
            _this7.message.nativeElement.scrollTop = _this7.message.nativeElement.scrollHeight;
          }, 1);
        }
      }, {
        key: "closeForm",
        value: function closeForm() {
          this.isOpened = false;
          this.socketService.disconnect();
        }
      }, {
        key: "sentMessage",
        value: function sentMessage(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var roleList, hasRoleAdmin, _iterator5, _step5, role, chat;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    roleList = user.roles;
                    hasRoleAdmin = false;
                    _iterator5 = _createForOfIteratorHelper(roleList);

                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                        role = _step5.value;

                        if (role.authority === 'ROLE_ADMIN') {
                          hasRoleAdmin = true;
                        }
                      }
                    } catch (err) {
                      _iterator5.e(err);
                    } finally {
                      _iterator5.f();
                    }

                    chat = {
                      content: this.content,
                      sender: {
                        id: this.currentUser.id
                      },
                      status: false,
                      receiver: {
                        id: 1
                      }
                    };

                    if (hasRoleAdmin) {
                      chat.receiver.id = user.id;
                    }

                    this.socketService.sendMessage(chat);
                    this.content = '';
                    this.socketService.drawNewChatMessage(chat, user);
                    this.scrollBottom();

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getAllChatHistory",
        value: function getAllChatHistory(user1Id, user2Id, size) {
          return this.chatService.getAllChat(user1Id, user2Id, size).toPromise();
        }
      }, {
        key: "loadNewData",
        value: function loadNewData(user) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var element;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    element = this.message.nativeElement.scrollTop;

                    if (!(element < 10)) {
                      _context3.next = 6;
                      break;
                    }

                    this.size += 5;
                    _context3.next = 5;
                    return this.getAllChatHistory(user.id, 1, this.size);

                  case 5:
                    this.listMessage = _context3.sent;

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ctorParameters = function () {
      return [{
        type: _service_chat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('message', {
      "static": false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], ChatComponent.prototype, "message", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/chat/chat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.scss */
      "./src/app/layout/chat/chat.component.scss"))["default"]]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/layout/chat/chat.module.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/chat/chat.module.ts ***!
    \********************************************/

  /*! exports provided: ChatModule */

  /***/
  function srcAppLayoutChatChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatModule", function () {
      return ChatModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chat.component */
    "./src/app/layout/chat/chat.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ChatModule = function ChatModule() {
      _classCallCheck(this, ChatModule);
    };

    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]],
      exports: [_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
    })], ChatModule);
    /***/
  },

  /***/
  "./src/app/layout/layout-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/layout-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: LayoutRoutingModule */

  /***/
  function srcAppLayoutLayoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function () {
      return LayoutRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var LayoutRoutingModule = function LayoutRoutingModule() {
      _classCallCheck(this, LayoutRoutingModule);
    };

    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LayoutRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLayoutWithBubbleChatLayoutWithBubbleChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQtd2l0aC1idWJibGUtY2hhdC9sYXlvdXQtd2l0aC1idWJibGUtY2hhdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: LayoutWithBubbleChatComponent */

  /***/
  function srcAppLayoutLayoutWithBubbleChatLayoutWithBubbleChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutWithBubbleChatComponent", function () {
      return LayoutWithBubbleChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var LayoutWithBubbleChatComponent = /*#__PURE__*/function () {
      function LayoutWithBubbleChatComponent(authenticationService) {
        var _this8 = this;

        _classCallCheck(this, LayoutWithBubbleChatComponent);

        this.authenticationService = authenticationService;
        this.hasRoleAdmin = false;
        this.authenticationService.currentUser.subscribe(function (value) {
          return _this8.currentUser = value;
        });

        if (this.currentUser) {
          var roleList = this.currentUser.roles;

          var _iterator6 = _createForOfIteratorHelper(roleList),
              _step6;

          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var role = _step6.value;

              if (role.authority === 'ROLE_ADMIN') {
                this.hasRoleAdmin = true;
              }
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
        }
      }

      _createClass(LayoutWithBubbleChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutWithBubbleChatComponent;
    }();

    LayoutWithBubbleChatComponent.ctorParameters = function () {
      return [{
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    LayoutWithBubbleChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout-with-bubble-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout-with-bubble-chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout-with-bubble-chat.component.scss */
      "./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.scss"))["default"]]
    })], LayoutWithBubbleChatComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout-with-shared/layout-with-shared.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/layout-with-shared/layout-with-shared.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLayoutWithSharedLayoutWithSharedComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQtd2l0aC1zaGFyZWQvbGF5b3V0LXdpdGgtc2hhcmVkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/layout-with-shared/layout-with-shared.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/layout-with-shared/layout-with-shared.component.ts ***!
    \***************************************************************************/

  /*! exports provided: LayoutWithSharedComponent */

  /***/
  function srcAppLayoutLayoutWithSharedLayoutWithSharedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutWithSharedComponent", function () {
      return LayoutWithSharedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LayoutWithSharedComponent = /*#__PURE__*/function () {
      function LayoutWithSharedComponent() {
        _classCallCheck(this, LayoutWithSharedComponent);
      }

      _createClass(LayoutWithSharedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutWithSharedComponent;
    }();

    LayoutWithSharedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout-with-shared',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout-with-shared.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout-with-shared/layout-with-shared.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout-with-shared.component.css */
      "./src/app/layout/layout-with-shared/layout-with-shared.component.css"))["default"]]
    })], LayoutWithSharedComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout-routing.module */
    "./src/app/layout/layout-routing.module.ts");
    /* harmony import */


    var _layout_with_bubble_chat_layout_with_bubble_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout-with-bubble-chat/layout-with-bubble-chat.component */
    "./src/app/layout/layout-with-bubble-chat/layout-with-bubble-chat.component.ts");
    /* harmony import */


    var _layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout-with-shared/layout-with-shared.component */
    "./src/app/layout/layout-with-shared/layout-with-shared.component.ts");
    /* harmony import */


    var _chat_chat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat/chat.module */
    "./src/app/layout/chat/chat.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_layout_with_bubble_chat_layout_with_bubble_chat_component__WEBPACK_IMPORTED_MODULE_4__["LayoutWithBubbleChatComponent"], _layout_with_shared_layout_with_shared_component__WEBPACK_IMPORTED_MODULE_5__["LayoutWithSharedComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"], _chat_chat_module__WEBPACK_IMPORTED_MODULE_6__["ChatModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/app/service/auth/authentication.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/service/auth/authentication.service.ts ***!
    \********************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServiceAuthAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('user')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "login",
        value: function login(email, password) {
          var _this9 = this;

          return this.http.post(API_URL + '/login', {
            email: email,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            sessionStorage.setItem('user', JSON.stringify(user));

            _this9.currentUserSubject.next(user);

            _this9.update.emit('login');

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.removeItem('user');
          this.currentUserSubject.next(null);
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/service/category/category.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/service/category/category.service.ts ***!
    \******************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServiceCategoryCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var CategoryService = /*#__PURE__*/function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
      }

      _createClass(CategoryService, [{
        key: "getAllCategory",
        value: function getAllCategory() {
          return this.http.get(API_URL + '/categories');
        }
      }, {
        key: "createCategory",
        value: function createCategory(category) {
          return this.http.post(API_URL + '/categories', category);
        }
      }, {
        key: "getCategory",
        value: function getCategory(id) {
          return this.http.get(API_URL + "/categories/".concat(id));
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(id, category) {
          return this.http.put(API_URL + "/categories/".concat(id), category);
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(id) {
          return this.http["delete"](API_URL + "/categories/".concat(id));
        }
      }, {
        key: "getAllProductByCategory",
        value: function getAllProductByCategory(id) {
          return this.http.get(API_URL + "/categories/".concat(id, "/products"));
        }
      }, {
        key: "getAllProductByCategoryUsingPagination",
        value: function getAllProductByCategoryUsingPagination(id, page, size) {
          return this.http.get(API_URL + "/categories/".concat(id, "/products?page=").concat(page, "&size=").concat(size));
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/service/chat/chat.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/chat/chat.service.ts ***!
    \**********************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServiceChatChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var ChatService = /*#__PURE__*/function () {
      function ChatService(http) {
        _classCallCheck(this, ChatService);

        this.http = http;
      }

      _createClass(ChatService, [{
        key: "getAllChat",
        value: function getAllChat(user1Id, user2Id, size) {
          return this.http.get("".concat(API_URL, "/chats?userId1=").concat(user1Id, "&userId2=").concat(user2Id, "&size=").concat(size));
        }
      }, {
        key: "createChat",
        value: function createChat(chat) {
          return this.http.post(API_URL + '/chats', chat);
        }
      }, {
        key: "getChat",
        value: function getChat(id) {
          return this.http.get(API_URL + "/chats/".concat(id));
        }
      }, {
        key: "updateChat",
        value: function updateChat(id, chat) {
          return this.http.put(API_URL + "/chats/".concat(id), chat);
        }
      }, {
        key: "deleteChat",
        value: function deleteChat(id) {
          return this.http["delete"](API_URL + "/chats/".concat(id));
        }
      }]);

      return ChatService;
    }();

    ChatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChatService);
    /***/
  },

  /***/
  "./src/app/service/notification/notification.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/service/notification/notification.service.ts ***!
    \**************************************************************/

  /*! exports provided: NotificationService */

  /***/
  function srcAppServiceNotificationNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationService", function () {
      return NotificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var NotificationService = /*#__PURE__*/function () {
      function NotificationService(http) {
        _classCallCheck(this, NotificationService);

        this.http = http;
      }

      _createClass(NotificationService, [{
        key: "getAllNotification",
        value: function getAllNotification() {
          return this.http.get(API_URL + '/notifications');
        }
      }, {
        key: "createNotification",
        value: function createNotification(notification) {
          return this.http.post(API_URL + '/notifications', notification);
        }
      }, {
        key: "updateNotification",
        value: function updateNotification(id, notification) {
          return this.http.put(API_URL + "/notifications/".concat(id), notification);
        }
      }, {
        key: "deleteNotification",
        value: function deleteNotification(id) {
          return this.http["delete"](API_URL + "/notifications/".concat(id));
        }
      }, {
        key: "getNotification",
        value: function getNotification(id) {
          return this.http.get(API_URL + "/notifications/".concat(id));
        }
      }]);

      return NotificationService;
    }();

    NotificationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NotificationService);
    /***/
  },

  /***/
  "./src/app/service/order/orders.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/service/order/orders.service.ts ***!
    \*************************************************/

  /*! exports provided: OrdersService */

  /***/
  function srcAppServiceOrderOrdersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
      return OrdersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var OrdersService = /*#__PURE__*/function () {
      function OrdersService(http) {
        _classCallCheck(this, OrdersService);

        this.http = http;
      }

      _createClass(OrdersService, [{
        key: "getAllOrder",
        value: function getAllOrder(status) {
          return this.http.get(API_URL + '/orders?status=' + status);
        }
      }, {
        key: "createOrders",
        value: function createOrders(orders) {
          return this.http.post(API_URL + '/orders', orders);
        }
      }, {
        key: "getOrders",
        value: function getOrders(id) {
          return this.http.get(API_URL + "/orders/".concat(id));
        }
      }, {
        key: "updateOrders",
        value: function updateOrders(id, orders) {
          return this.http.put(API_URL + "/orders/".concat(id), orders);
        }
      }, {
        key: "deleteOrders",
        value: function deleteOrders(id) {
          return this.http["delete"](API_URL + "/orders/".concat(id));
        }
      }, {
        key: "getAllOrderByUserAndStatus",
        value: function getAllOrderByUserAndStatus(id, status) {
          return this.http.get(API_URL + "/orders/users/".concat(id, "?status=") + status);
        }
      }, {
        key: "getAllOrderDetail",
        value: function getAllOrderDetail(id) {
          return this.http.get(API_URL + "/orders/".concat(id, "/order-details"));
        }
      }, {
        key: "getAllProductUserBought",
        value: function getAllProductUserBought(id) {
          return this.http.get(API_URL + "/orders/users/".concat(id, "/products"));
        }
      }, {
        key: "sumTotalPriceGet",
        value: function sumTotalPriceGet(month, year) {
          return this.http.get(API_URL + "/orders/total-price?month=" + month + '&year=' + year);
        }
      }, {
        key: "getAllProductByOrder",
        value: function getAllProductByOrder(id) {
          return this.http.get(API_URL + "/orders/".concat(id, "/products"));
        }
      }]);

      return OrdersService;
    }();

    OrdersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrdersService);
    /***/
  },

  /***/
  "./src/app/service/shopping-cart/shopping-cart.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/service/shopping-cart/shopping-cart.service.ts ***!
    \****************************************************************/

  /*! exports provided: ShoppingCartService */

  /***/
  function srcAppServiceShoppingCartShoppingCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function () {
      return ShoppingCartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var ShoppingCartService = /*#__PURE__*/function () {
      function ShoppingCartService(http) {
        _classCallCheck(this, ShoppingCartService);

        this.http = http;
      }

      _createClass(ShoppingCartService, [{
        key: "getAllCart",
        value: function getAllCart() {
          return this.http.get(API_URL + '/carts');
        }
      }, {
        key: "createCart",
        value: function createCart(shoppingCart) {
          return this.http.post(API_URL + '/carts', shoppingCart);
        }
      }, {
        key: "getCart",
        value: function getCart(id) {
          return this.http.get(API_URL + "/carts/".concat(id));
        }
      }, {
        key: "getCartByUser",
        value: function getCartByUser(id) {
          return this.http.get(API_URL + "/carts/users/".concat(id));
        }
      }, {
        key: "updateCart",
        value: function updateCart(id, shoppingCart) {
          return this.http.put(API_URL + "/carts/".concat(id), shoppingCart);
        }
      }, {
        key: "deleteShoppingCart",
        value: function deleteShoppingCart(id) {
          return this.http["delete"](API_URL + "/carts/".concat(id));
        }
      }, {
        key: "getAllItemByShoppingCart",
        value: function getAllItemByShoppingCart(id) {
          return this.http.get(API_URL + "/carts/".concat(id, "/items"));
        }
      }]);

      return ShoppingCartService;
    }();

    ShoppingCartService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ShoppingCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ShoppingCartService);
    /***/
  },

  /***/
  "./src/app/service/socket/socket.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/service/socket/socket.service.ts ***!
    \**************************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServiceSocketSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! stompjs */
    "./node_modules/stompjs/index.js");
    /* harmony import */


    var stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sockjs-client */
    "./node_modules/sockjs-client/lib/entry.js");
    /* harmony import */


    var sockjs_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user/user.service */
    "./src/app/service/user/user.service.ts");
    /* harmony import */


    var _order_orders_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../order/orders.service */
    "./src/app/service/order/orders.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl);

    var SocketService = /*#__PURE__*/function () {
      function SocketService(authenticationService, ordersService, userService, router) {
        var _this10 = this;

        _classCallCheck(this, SocketService);

        this.authenticationService = authenticationService;
        this.ordersService = ordersService;
        this.userService = userService;
        this.router = router;
        this.currentUser = {};
        this.listNotification = [];
        this.listNotificationUnRead = [];
        this.listOrder = [];
        this.getAllOrdersWithDataTable();
        this.authenticationService.currentUser.subscribe(function (value) {
          _this10.currentUser = value;

          _this10.getAllNotification(_this10.currentUser.id);

          _this10.getAllNotificationUnRead(_this10.currentUser.id);
        });
      }

      _createClass(SocketService, [{
        key: "connectToChat",
        value: function connectToChat(currentUser, message) {
          var _this11 = this;

          var ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__("".concat(API_URL, "/ws"));
          this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](ws);
          this.stompClient.connect({}, function (frame) {
            _this11.stompClient.subscribe('/topic/chats', function (messageOutput) {
              var data = JSON.parse(messageOutput.body);

              _this11.authenticationService.currentUser.subscribe(function (value) {
                _this11.currentUser = value;

                if (_this11.currentUser.id == data.receiver.id) {
                  _this11.drawNewChatMessage(data, _this11.currentUser);

                  setTimeout(function () {
                    message.nativeElement.scrollTop = message.nativeElement.scrollHeight;
                  }, 1);
                }
              });
            });
          });
        }
      }, {
        key: "connectToNotification",
        value: function connectToNotification() {
          var _this12 = this;

          var ws = new sockjs_client__WEBPACK_IMPORTED_MODULE_3__("".concat(API_URL, "/ws"));
          this.stompClient = stompjs__WEBPACK_IMPORTED_MODULE_2__["over"](ws);
          this.stompClient.connect({}, function (frame) {
            _this12.stompClient.subscribe('/topic/notifications', function (messageOutput) {
              var data = JSON.parse(messageOutput.body);

              _this12.authenticationService.currentUser.subscribe(function (value) {
                _this12.currentUser = value;

                if (_this12.currentUser.id == data.user.id) {
                  data.createDate = new Date(data.createDate);

                  _this12.listNotification.unshift(data);

                  _this12.listNotificationUnRead.unshift(data);
                }
              });
            });

            _this12.connectToOrders();
          });
        }
      }, {
        key: "connectToOrders",
        value: function connectToOrders() {
          var _this13 = this;

          this.stompClient.subscribe('/topic/orders', function (output) {
            var data = JSON.parse(output.body);
            data.createDate = new Date(data.createDate);

            _this13.listOrder.push(data);

            var roleList = _this13.currentUser.roles;
            var hasRoleAdmin = false;

            var _iterator7 = _createForOfIteratorHelper(roleList),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var role = _step7.value;

                if (role.authority === 'ROLE_ADMIN') {
                  hasRoleAdmin = true;
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            if (hasRoleAdmin) {
              $(function () {
                var Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  timer: 3000
                });
                Toast.fire({
                  type: 'success',
                  title: 'Bạn có một đơn đặt hàng mới!'
                }).then(function (result) {
                  if (result.value) {
                    _this13.router.navigateByUrl("/chart/orders");
                  }
                });
              });
            }
          });
        }
      }, {
        key: "drawNewChatMessage",
        value: function drawNewChatMessage(messageOutput, currentUser) {
          var ul = document.getElementById('history');
          var firstLi = $('ul#history li:first').get(0);
          var li = firstLi.cloneNode(true);
          li.innerHTML = messageOutput.content;
          var className = currentUser.id == messageOutput.sender.id ? 'me' : 'you';
          li.setAttribute('class', className);
          ul.appendChild(li);
        }
      }, {
        key: "disconnect",
        value: function disconnect() {
          if (this.stompClient !== null) {
            this.stompClient.disconnect();
          }
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(chat) {
          this.stompClient.send('/app/chats', {}, JSON.stringify(chat));
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(notification) {
          this.stompClient.send('/app/notifications', {}, JSON.stringify(notification));
        }
      }, {
        key: "sendOrders",
        value: function sendOrders(orders) {
          return this.stompClient.send('/app/orders', {}, JSON.stringify(orders));
        }
      }, {
        key: "getAllNotification",
        value: function getAllNotification(id) {
          var _this14 = this;

          this.userService.findAllNotificationDateDesc(id).subscribe(function (listNotification) {
            _this14.listNotification = listNotification;

            _this14.listNotification.map(function (notification) {
              notification.createDate = new Date(notification.createDate);
            });
          });
        }
      }, {
        key: "getAllNotificationUnRead",
        value: function getAllNotificationUnRead(id) {
          var _this15 = this;

          this.userService.findAllNotification(id).subscribe(function (listNotificationUnRead) {
            _this15.listNotificationUnRead = listNotificationUnRead;
          });
        }
      }, {
        key: "getAllOrdersWithDataTable",
        value: function getAllOrdersWithDataTable() {
          var _this16 = this;

          this.ordersService.getAllOrder(false).subscribe(function (listOrder) {
            _this16.listOrder = listOrder;

            _this16.listOrder.map(function (order) {
              return order.createDate = new Date(order.createDate);
            });

            $(function () {
              $('#table-orders').DataTable({
                'paging': true,
                'lengthChange': false,
                'searching': false,
                'ordering': true,
                'info': true,
                'autoWidth': false
              });
            });
          });
        }
      }, {
        key: "getAllOrders",
        value: function getAllOrders() {
          var _this17 = this;

          this.ordersService.getAllOrder(false).subscribe(function (listOrder) {
            _this17.listOrder = listOrder;

            _this17.listOrder.map(function (order) {
              return order.createDate = new Date(order.createDate);
            });
          });
        }
      }]);

      return SocketService;
    }();

    SocketService.ctorParameters = function () {
      return [{
        type: _auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _order_orders_service__WEBPACK_IMPORTED_MODULE_7__["OrdersService"]
      }, {
        type: _user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketService);
    /***/
  },

  /***/
  "./src/app/service/user/user.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/service/user/user.service.ts ***!
    \**********************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiceUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "register",
        value: function register(user) {
          return this.http.post(API_URL + '/register', user);
        }
      }, {
        key: "findAllNotification",
        value: function findAllNotification(id) {
          return this.http.get(API_URL + "/users/".concat(id, "/notifications"));
        }
      }, {
        key: "findAllNotificationDateDesc",
        value: function findAllNotificationDateDesc(id) {
          return this.http.get(API_URL + "/users/".concat(id, "/notifications-desc"));
        }
      }, {
        key: "getAllUser",
        value: function getAllUser(role) {
          if (role == undefined) {
            return this.http.get(API_URL + '/users');
          }

          return this.http.get(API_URL + "/users?role=".concat(role));
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get(API_URL + "/users/".concat(id));
        }
      }, {
        key: "createUser",
        value: function createUser(user) {
          return this.http.post(API_URL + '/users', user);
        }
      }, {
        key: "updateUser",
        value: function updateUser(id, user) {
          return this.http.put(API_URL + "/users/".concat(id), user);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http["delete"](API_URL + "/users/".concat(id));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/footer/footer.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/shared/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dropdown-menu {\n  max-height: 350px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFuL0FuZ3VsYXIvQW5ndWxhcl9TaG9waWZ5L3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tbWVudSB7XG4gIG1heC1oZWlnaHQ6IDM1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIiwiLmRyb3Bkb3duLW1lbnUge1xuICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/shopping-cart/shopping-cart.service */
    "./src/app/service/shopping-cart/shopping-cart.service.ts");
    /* harmony import */


    var _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/user/user.service */
    "./src/app/service/user/user.service.ts");
    /* harmony import */


    var _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/notification/notification.service */
    "./src/app/service/notification/notification.service.ts");
    /* harmony import */


    var _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/socket/socket.service */
    "./src/app/service/socket/socket.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(categoryService, authenticationService, shoppingCartService, userService, notificationService, socketService, router) {
        var _this18 = this;

        _classCallCheck(this, HeaderComponent);

        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.socketService = socketService;
        this.router = router;
        this.listCategory = [];
        this.hasRoleAdmin = false;
        this.items = [];
        this.favoriteProduct = [];
        this.amount = 0;
        this.socketService.connectToNotification();
        this.authenticationService.currentUser.subscribe(function (value) {
          _this18.currentUser = value;

          if (_this18.currentUser) {
            _this18.getShoppingCartByUser(_this18.currentUser.id);
          }
        });

        if (this.currentUser) {
          var roleList = this.currentUser.roles;

          var _iterator8 = _createForOfIteratorHelper(roleList),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var role = _step8.value;

              if (role.authority === 'ROLE_ADMIN') {
                this.hasRoleAdmin = true;
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }

        this.loadFavorite();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          $(function () {
            $('.dropdown-menu').click(function (event) {
              event.stopPropagation();
            });
          });
          this.getAllCategories();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.socketService.disconnect();
        }
      }, {
        key: "getShoppingCartByUser",
        value: function getShoppingCartByUser(id) {
          var _this19 = this;

          if (id == null) {
            this.loadCart();
          } else {
            this.shoppingCartService.getCartByUser(id).subscribe(function (shoppingCart) {
              _this19.shoppingCart = shoppingCart;

              _this19.getAllItemInShoppingCart(_this19.shoppingCart.id);
            });
          }
        }
      }, {
        key: "getAllItemInShoppingCart",
        value: function getAllItemInShoppingCart(id) {
          var _this20 = this;

          this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(function (items) {
            _this20.items = items;

            _this20.sumTotalItem();
          });
        }
      }, {
        key: "getAllCategories",
        value: function getAllCategories() {
          var _this21 = this;

          this.categoryService.getAllCategory().subscribe(function (listCategory) {
            _this21.listCategory = listCategory;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "loadCart",
        value: function loadCart() {
          this.items = [];
          var cart = JSON.parse(localStorage.getItem('cart'));

          if (cart != null) {
            for (var i = 0; i < cart.length; i++) {
              var item = JSON.parse(cart[i]);
              this.items.push({
                product: item.product,
                quantity: item.quantity
              });
            }

            this.sumTotalItem();
          }
        }
      }, {
        key: "sumTotalItem",
        value: function sumTotalItem() {
          this.amount = 0;

          var _iterator9 = _createForOfIteratorHelper(this.items),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var item = _step9.value;
              this.amount += item.quantity;
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          return this.amount;
        }
      }, {
        key: "loadFavorite",
        value: function loadFavorite() {
          this.favoriteProduct = [];
          var heart = JSON.parse(localStorage.getItem('heart'));

          if (heart != null) {
            for (var i = 0; i < heart.length; i++) {
              var item = JSON.parse(heart[i]);
              this.favoriteProduct.push({
                product: item.product,
                quantity: item.quantity
              });
            }
          }
        }
      }, {
        key: "getNotification",
        value: function getNotification(id) {
          return this.notificationService.getNotification(id).toPromise();
        }
      }, {
        key: "updateStatus",
        value: function updateStatus(notificationId, userId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this22 = this;

            var notification;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.getNotification(notificationId);

                  case 2:
                    notification = _context4.sent;
                    notification.status = true;
                    this.notificationService.updateNotification(notificationId, notification).subscribe(function () {
                      _this22.socketService.getAllNotificationUnRead(userId);

                      _this22.socketService.getAllNotification(userId);
                    });

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartService"]
      }, {
        type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _service_notification_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]
      }, {
        type: _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/shared/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.css":
  /*!****************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router, authenticationService) {
        var _this23 = this;

        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.hasRoleAdmin = false;
        this.hasRoleUser = false;
        this.authenticationService.currentUser.subscribe(function (value) {
          _this23.currentUser = value;
        });

        if (this.currentUser) {
          var roleList = this.currentUser.roles;

          var _iterator10 = _createForOfIteratorHelper(roleList),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var role = _step10.value;

              if (role.authority === 'ROLE_ADMIN') {
                this.hasRoleAdmin = true;
              } else {
                this.hasRoleUser = true;
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }

      _createClass(NavbarComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/shared/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/shared-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SharedRoutingModule */

  /***/
  function srcAppSharedSharedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function () {
      return SharedRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var SharedRoutingModule = function SharedRoutingModule() {
      _classCallCheck(this, SharedRoutingModule);
    };

    SharedRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SharedRoutingModule);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/shared/sidebar/sidebar.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/shared/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _shared_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared-routing.module */
    "./src/app/shared/shared-routing.module.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_routing_module__WEBPACK_IMPORTED_MODULE_7__["SharedRoutingModule"]],
      exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.css":
  /*!******************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSidebarSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/sidebar/sidebar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
    \*****************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppSharedSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");

    var SidebarComponent = function SidebarComponent(router, authenticationService) {
      var _this24 = this;

      _classCallCheck(this, SidebarComponent);

      this.router = router;
      this.authenticationService = authenticationService;
      this.authenticationService.currentUser.subscribe(function (value) {
        return _this24.currentUser = value;
      });
    };

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/sidebar/sidebar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.css */
      "./src/app/shared/sidebar/sidebar.component.css"))["default"]]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8080',
      firebaseConfig: {
        apiKey: "AIzaSyAdCzcXxyumztLIJ0AjznvUkR5C-HJO_Nw",
        authDomain: "market-8900a.firebaseapp.com",
        databaseURL: "https://market-8900a.firebaseio.com",
        projectId: "market-8900a",
        storageBucket: "market-8900a.appspot.com",
        messagingSenderId: "957866880097",
        appId: "1:957866880097:web:96684d95acdbb43f74ce20",
        measurementId: "G-Q8KG5E6B0H"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/quan/Angular/Angular_Shopify/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map