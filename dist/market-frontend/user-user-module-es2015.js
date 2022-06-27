(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/create-user/create-user.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/create-user/create-user.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thêm mới người dùng</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Thêm người dùng</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"createUser()\" id=\"user-form\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin người dùngc</h3>\n\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Tên người dùng</label>\n          <input type=\"text\" id=\"inputName\" class=\"form-control\" formControlName=\"fullName\" name=\"fullName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Mật khẩu</label>\n          <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" name=\"password\">\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Tạo mới\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/edit-user/edit-user.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/edit-user/edit-user.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Cập nhật người dùng</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Cập nhật người dùng</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"userForm\" (ngSubmit)=\"updateUser(id)\" *ngIf=\"currentUser != null\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin người dùng</h3>\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Tên người dùng</label>\n          <input type=\"text\" id=\"inputName\" class=\"form-control\" formControlName=\"fullName\" name=\"fullName\"\n                 [value]=\"currentUser.fullName\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" name=\"email\"\n                 [value]=\"currentUser.email\">\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Cập nhật\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/list-user/list-user.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/list-user/list-user.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Danh sách người dùng</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Danh sách người dùng</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<section class=\"content\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\"></h3>\n      <div class=\"card-tools\">\n        <a routerLink=\"create\" class=\"btn btn-primary float-lg-right\">\n          Tạo mới\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-user\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Tên người dùng</th>\n          <th>Email</th>\n          <th>Quyền</th>\n          <th style=\"width: 160px\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let user of listUser; index as i\">\n          <td>{{i + 1}}</td>\n          <td>\n            {{user.fullName}}\n          </td>\n          <td>{{user.email}}</td>\n          <td>\n            <ng-container *ngFor=\"let role of user.roles; index as i\">\n              <span>{{role.name}}</span>\n              <span *ngIf=\"user.roles.length -1 != i\">,</span>\n            </ng-container>\n          </td>\n          <td>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <a [routerLink]=\"['edit',user.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\n                  <i class=\"fas fa-edit\"></i>\n                </a>\n              </div>\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                        data-target=\"#modal-delete\" (click)=\"getUserId(user.id)\">\n                  <i class=\"fas fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"modal-delete\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Xóa người dùng</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bạn có chắc muốn xóa người dùng này</p>\n        </div>\n        <div class=\"modal-footer justify-content-between\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteUser()\">Xóa</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/category-detail/category-detail.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/category-detail/category-detail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\" *ngIf=\"currentCategory != null\">\n          <h2>{{currentCategory.name}}</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>{{currentCategory.name}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"product spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-5\">\n        <div class=\"sidebar\">\n          <div class=\"sidebar__item\">\n            <h4>Danh mục sản phẩm</h4>\n            <ul *ngFor=\"let category of listCategory\">\n              <li><a [routerLink]=\"['../../category',category.id]\">{{category.name}}</a></li>\n            </ul>\n          </div>\n          <div class=\"sidebar__item\">\n          </div>\n          <div class=\"sidebar__item\">\n            <div class=\"latest-product__text\">\n              <h4>Sản phẩm mới</h4>\n              <div class=\"latest-product__slider owl-carousel\">\n                <div class=\"latest-prdouct__slider__item\">\n                  <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\n                     *ngFor=\"let product of listProductLatest\">\n                    <div class=\"latest-product__item__pic\">\n                      <img [src]=\"product.url\"\n                           style=\"width: 110px; height: 110px\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>{{product.name}}</h6>\n                      <span>{{product.price}}đ</span>\n                    </div>\n                  </a>\n                </div>\n                <div class=\"latest-prdouct__slider__item\">\n                  <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\n                    <div class=\"latest-product__item__pic\">\n                      <img [src]=\"product.url\"\n                           style=\"width: 110px; height: 110px\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>{{product.name}}</h6>\n                      <span>{{product.price}}đ</span>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-9 col-md-7\">\n        <div class=\"filter__item\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-md-5\">\n            </div>\n            <div class=\"col-lg-4 col-md-4\">\n              <div class=\"filter__found\">\n                <h6><span>{{listProduct.length}}</span> sản phẩm</h6>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-3\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let product of listProduct\">\n            <div class=\"product__item\">\n              <div class=\"product__item__pic set-bg\" *ngIf=\"product.image!=null\"\n                   [style.background-image]=\"'url('+ product.image[0].url+')'\">\n                <ul class=\"product__item__pic__hover\">\n                  <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\n                  <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\n                    class=\"fa fa-shopping-cart\"></i></a></li>\n                  <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id, shoppingCart.id)\"><i\n                    class=\"fa fa-shopping-cart\"></i></a></li>\n                </ul>\n              </div>\n              <div class=\"product__item__text\">\n                <h6><a [routerLink]=\"['/product',product.id]\">{{product.name}}</a></h6>\n                <h5>{{product.price * (1 - product.saleOff / 100)}}đ</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"product__pagination\">\n          <a (click)=\"previous(currentCategory)\" *ngIf=\"hasPrevious()\"><i class=\"fas fa-long-arrow-alt-left\"></i></a>\n          <ng-container *ngFor=\"let page of totalPage\">\n            <a (click)=\"choosePage(currentCategory,page)\">{{page}}</a>\n          </ng-container>\n          <a (click)=\"next(currentCategory)\" *ngIf=\"hasNext(totalPage.length)\"><i\n            class=\"fas fa-long-arrow-alt-right\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/checkout/checkout.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/checkout/checkout.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>Thanh toán</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>Thanh toán</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"checkout spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h6><span class=\"icon_tag_alt\"></span>Bạn có mã giảm giá? <a routerLink=\"/cart\">Ấn vào đây</a> và nhập mã của\n          bạn\n        </h6>\n      </div>\n    </div>\n    <div class=\"checkout__form\">\n      <h4>Chi tiết hóa đơn</h4>\n      <form [formGroup]=\"customerInfoForm\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-md-6\">\n            <div class=\"checkout__input\">\n              <p>Họ và tên:<span>*</span></p>\n              <input type=\"text\" formControlName=\"name\"\n                     placeholder=\"Họ tên người nhận\">\n            </div>\n            <div class=\"checkout__input\">\n              <p>Địa chỉ<span>*</span></p>\n              <input type=\"text\" placeholder=\"Địa chỉ nhận hàng\" formControlName=\"address\"\n                     class=\"checkout__input__add\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <div class=\"checkout__input\">\n                  <p>Số điện thoại<span>*</span></p>\n                  <input type=\"text\" placeholder=\"Số điện thoại người nhận\"\n                         formControlName=\"phoneNumber\">\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"checkout__input\">\n                  <p>Email<span>*</span></p>\n                  <input type=\"text\" placeholder=\"Địa chỉ email\" formControlName=\"email\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4 col-md-6\">\n            <div class=\"checkout__order\">\n              <h4>Đơn hàng của bạn</h4>\n              <div class=\"checkout__order__products\">Sản phẩm <span>Giá</span></div>\n              <ul *ngFor=\"let item of items\">\n                <li>{{item.product.name}} x {{item.quantity}}\n                  <span>{{item.quantity * (item.product.price * (1 - item.product.saleOff / 100))}}đ</span></li>\n              </ul>\n              <div class=\"checkout__order__subtotal\">Tổng phụ thu <span>{{total}}đ</span></div>\n              <div class=\"checkout__order__total\">Tổng tiền <span>{{total}}đ</span></div>\n              <div class=\"checkout__input__checkbox\">\n                <label for=\"paypal\">\n                  Thanh toán khi nhận hàng\n                  <input type=\"checkbox\" id=\"paypal\" checked disabled>\n                  <span class=\"checkmark\"></span>\n                </label>\n              </div>\n              <button type=\"submit\" class=\"site-btn\" (click)=\"submitCheckoutForm(items,shoppingCart.id)\">Đặt hàng\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/contact/contact.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/contact/contact.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>Liên hệ</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>Liên hệ</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"contact spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\n        <div class=\"contact__widget\">\n          <span class=\"icon_phone\"></span>\n          <h4>Điện thoại</h4>\n          <p>0382546945</p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\n        <div class=\"contact__widget\">\n          <span class=\"icon_pin_alt\"></span>\n          <h4>Địa chỉ</h4>\n          <p>10 Xã Đàn, Đống Đa, Hà Nội</p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\n        <div class=\"contact__widget\">\n          <span class=\"icon_clock_alt\"></span>\n          <h4>Thời gian mở cửa</h4>\n          <p>8 giờ tới 22 giờ</p>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-md-3 col-sm-6 text-center\">\n        <div class=\"contact__widget\">\n          <span class=\"icon_mail_alt\"></span>\n          <h4>Email</h4>\n          <p>help@gmail.com</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"map\">\n  <iframe\n    src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd\"\n    height=\"500\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n  <div class=\"map-inside\">\n    <i class=\"icon_pin\"></i>\n    <div class=\"inside-widget\">\n      <h4>Hà Nội</h4>\n      <ul>\n        <li>Điện thoại: 0382546945</li>\n        <li>Địa chỉ: 10 Xã Đàn, Đống Đa, Hà Nội</li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"contact-form spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"contact__form__title\">\n          <h2>Để lại lời nhắn</h2>\n        </div>\n      </div>\n    </div>\n    <form [formGroup]=\"messageForm\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <input type=\"text\" placeholder=\"Tện bạn\">\n        </div>\n        <div class=\"col-lg-6 col-md-6\">\n          <input type=\"text\" placeholder=\"Địa chỉ email\">\n        </div>\n        <div class=\"col-lg-12 text-center\">\n          <textarea placeholder=\"Tin nhắn\"></textarea>\n          <button type=\"submit\" class=\"site-btn\">Gửi tin nhắn</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favorite/favorite.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/favorite/favorite.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>Sản phẩm yêu thích</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>Sản phẩm yêu thích</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th class=\"shoping__product\">Sản phẩm</th>\n              <th>Giá</th>\n              <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of items; index as i\">\n              <td class=\"shoping__cart__item\">\n                <img *ngIf=\"item.product.image != null\" [src]=\"item.product.image[0].url\" alt=\"\" width=\"100\" height=\"100\">\n                <h5 style=\"font-size: 16px\">{{item.product.name}}</h5>\n              </td>\n              <td class=\"shoping__cart__price\">\n                {{item.product.price * (1 - item.product.saleOff / 100)}}đ\n              </td>\n              <td class=\"shoping__cart__item__close\">\n                <span class=\"icon_close\" (click)=\"remove(item.product.id)\"></span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__btns\">\n          <a routerLink=\"/\" class=\"primary-btn cart-btn\">Tiếp tục mua sắm</a>\n          <a routerLink=\"/favorite\" class=\"primary-btn cart-btn cart-btn-right\"><span class=\"icon_loading\"></span>\n            Cập nhật</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/homepage/homepage.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/homepage/homepage.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul *ngFor=\"let category of listCategory\">\n            <li><a [routerLink]=\"['category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"hero__item set-bg\" [style.background]=\"'url(../../../assets/static/img/hero/banner.jpg)'\">\n          <div class=\"hero__text\">\n            <span>THỰC PHẨM SẠCH</span>\n            <h2>Rau củ <br/>100% tự nhiên</h2>\n            <p>Miễn phí vẫn chuyển trong 5km</p>\n            <a routerLink=\"/shop\" class=\"primary-btn\">MUA NGAY</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"categories\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"categories__slider owl-carousel\">\n        <div class=\"col-lg-3\">\n          <div class=\"categories__item set-bg\"\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-1.jpg)'\">\n            <h5><a routerLink=\"\">Hoa quả sạch</a></h5>\n          </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"categories__item set-bg\"\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-2.jpg)'\">\n            <h5><a href=\"#\">Thực phẩm dinh dưỡng</a></h5>\n          </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"categories__item set-bg\"\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-3.jpg)'\">\n            <h5><a href=\"#\">Rau củ</a></h5>\n          </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"categories__item set-bg\"\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-4.jpg)'\">\n            <h5><a href=\"#\">Nước hoa quả</a></h5>\n          </div>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"categories__item set-bg\"\n               [style.background]=\"'url(../../../assets/static/img/categories/cat-5.jpg)'\">\n            <h5><a href=\"#\">Thịt</a></h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"featured spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"section-title\">\n          <h2>Sản phẩm nổi bật</h2>\n        </div>\n        <!--        <div class=\"featured__controls\">-->\n        <!--          <ul>-->\n        <!--            <li class=\"active\" data-filter=\"*\">Tất cả</li>-->\n        <!--            <li data-filter=\".fresh-meat\">Thịt</li>-->\n        <!--            <li data-filter=\".fresh-meat\">Đồ uống</li>-->\n        <!--            <li data-filter=\".vegetables\">Rau củ</li>-->\n        <!--            <li data-filter=\".fastfood\">Sản phẩm khác</li>-->\n        <!--          </ul>-->\n        <!--        </div>-->\n      </div>\n    </div>\n    <div class=\"row featured__filter\">\n      <div class=\"col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat\" *ngFor=\"let product of listProduct\">\n        <div class=\"featured__item\">\n          <div class=\"featured__item__pic set-bg\" *ngIf=\"product.image!=null\"\n               [ngStyle]=\"{'background-image':'url('+product.image[0].url+')'}\">\n            <ul class=\"featured__item__pic__hover\">\n              <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\n              <li *ngIf=\"currentUser==null\">\n                <a [routerLink]=\"['/cart', { id:product.id }]\"><i class=\"fa fa-shopping-cart\"></i></a>\n              </li>\n              <li *ngIf=\"currentUser!=null\">\n                <a (click)=\"addItemToShoppingCart(product.id, shoppingCart.id)\"><i class=\"fa fa-shopping-cart\"></i></a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"featured__item__text\">\n            <h6><a [routerLink]=\"['product',product.id]\">{{product.name}}</a></h6>\n            <h5>{{product.price * (1 - product.saleOff / 100)}}đ</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"latest-product spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"latest-product__text\">\n          <h4>Sản phẩm mới nhất</h4>\n          <div class=\"latest-product__slider owl-carousel\">\n            <div class=\"latest-prdouct__slider__item\">\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\n                 *ngFor=\"let product of listProductLatest\">\n                <div class=\"latest-product__item__pic\">\n                  <img [src]=\"product.url\"\n                       style=\"width: 110px; height: 110px\" alt=\"\">\n                </div>\n                <div class=\"latest-product__item__text\">\n                  <h6>{{product.name}}</h6>\n                  <span>{{product.price}}đ</span>\n                </div>\n              </a>\n            </div>\n            <div class=\"latest-prdouct__slider__item\">\n              <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\n                <div class=\"latest-product__item__pic\">\n                  <img [src]=\"product.url\"\n                       style=\"width: 110px; height: 110px\" alt=\"\">\n                </div>\n                <div class=\"latest-product__item__text\">\n                  <h6>{{product.name}}</h6>\n                  <span>{{product.price}}đ</span>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"latest-product__text\">\n          <h4>Sản phẩm mua nhiều</h4>\n          <div class=\"latest-product__slider owl-carousel\">\n            <div class=\"latest-prdouct__slider__item\">\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\n                 *ngFor=\"let product of listProductBestSell\">\n                <div class=\"latest-product__item__pic\">\n                  <img [src]=\"product.url\"\n                       style=\"width: 110px; height: 110px\" alt=\"\">\n                </div>\n                <div class=\"latest-product__item__text\">\n                  <h6>{{product.name}}</h6>\n                  <span>{{product.price}}đ</span>\n                </div>\n              </a>\n            </div>\n            <div class=\"latest-prdouct__slider__item\">\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\n                 *ngFor=\"let product of listProductBestSell\">\n                <div class=\"latest-product__item__pic\">\n                  <img [src]=\"product.url\"\n                       style=\"width: 110px; height: 110px\" alt=\"\">\n                </div>\n                <div class=\"latest-product__item__text\">\n                  <h6>{{product.name}}</h6>\n                  <span>{{product.price}}đ</span>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"latest-product__text\">\n          <h4>Đánh giá sản phẩm</h4>\n          <div class=\"latest-product__slider owl-carousel\">\n            <div class=\"latest-prdouct__slider__item\">\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\n                 *ngFor=\"let product of listProductMostLiked\">\n                <div class=\"latest-product__item__pic\">\n                  <img [src]=\"product.url\"\n                       style=\"width: 110px; height: 110px\" alt=\"\">\n                </div>\n                <div class=\"latest-product__item__text\">\n                  <h6>{{product.name}}</h6>\n                  <span>{{product.price}}đ</span>\n                </div>\n              </a>\n            </div>\n            <div class=\"latest-prdouct__slider__item\">\n              <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\" *ngFor=\"let product of listProductMostLiked\">\n                <div class=\"latest-product__item__pic\">\n                  <img [src]=\"product.url\"\n                       style=\"width: 110px; height: 110px\" alt=\"\">\n                </div>\n                <div class=\"latest-product__item__text\">\n                  <h6>{{product.name}}</h6>\n                  <span>{{product.price}}đ</span>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/order-detail/order-detail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/order-detail/order-detail.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>Chi tiết đơn hàng</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>Chi tiết đơn hàng</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th>#</th>\n              <th></th>\n              <th class=\"shoping__product\">Sản phẩm</th>\n              <th>Giá</th>\n              <th style=\"width: 160px\"></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let product of listProduct; index as i\">\n              <td>{{i + 1}}</td>\n              <td>\n                <img [src]=\"product.url\" alt=\"img\" width=\"100\" height=\"100\">\n              </td>\n              <td class=\"shoping__cart__item\">\n                <a [routerLink]=\"['../product',product.id]\" style=\"font-size: 16px\"><h5>{{product.name}}  </h5></a>\n              </td>\n              <td class=\"shoping__cart__price\">\n                {{product.price}}đ\n              </td>\n              <td>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                  </div>\n                  <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-block btn-primary\" style=\"color: white\" data-toggle=\"modal\"\n                            data-target=\"#modal-review\" (click)=\"getProductId(currentUser.id,product.id)\">\n                      <i class=\"fas fa-edit\"></i>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"modal fade\" id=\"modal-review\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Đánh giá sản phẩm {{currentReview == null ? \"\" : \" (Đã đánh giá)\"}}</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"rating text-center\" *ngIf=\"currentReview== null\">\n          <span><i class=\"fas fa-star mr-2 {{star>=1?'rated':'unrated'}}\" id=\"one\" (click)=\"rate(1)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star>=2?'rated':'unrated'}}\" id=\"tưo\" (click)=\"rate(2)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star>=3?'rated':'unrated'}}\" id=\"three\" (click)=\"rate(3)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star>=4?'rated':'unrated'}}\" id=\"four\" (click)=\"rate(4)\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{star==5?'rated':'unrated'}}\" id=\"five\" (click)=\"rate(5)\"></i></span>\n          <span>({{star}} sao)</span>\n        </div>\n        <div class=\"rating text-center\" *ngIf=\"currentReview!= null\">\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=1?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=2?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=3?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate>=4?'rated':'unrated'}}\"></i></span>\n          <span><i class=\"fas fa-star mr-2 {{currentReview.evaluate==5?'rated':'unrated'}}\"></i></span>\n          <span>({{currentReview.evaluate}} sao)</span>\n        </div>\n        <br>\n        <div class=\"form-group\">\n          <label for=\"comment\">Bình luận</label>\n          <textarea class=\"textarea\" name=\"comment\" id=\"comment\"\n                    style=\"width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\n        </div>\n      </div>\n      <div class=\"modal-footer justify-content-between\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"createReview(star, productId)\">Xác nhận</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/product-detail/product-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/product-detail/product-detail.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\" *ngIf=\"currentProduct != null\">\n          <h2>{{currentProduct.name}}</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <a routerLink=\"/\">{{currentProduct.category.name}}</a>\n            <span>{{currentProduct.name}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"product-details spad\" *ngIf=\"currentProduct != null\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6\">\n        <div class=\"product__details__pic\">\n          <div class=\"product__details__pic__item\">\n            <img class=\"product__details__pic__item--large\" *ngIf=\"currentProduct.image!=null\"\n                 [src]=\"currentProduct.image[0].url\" alt=\"\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-6\">\n        <div class=\"product__details__text\">\n          <h3>{{currentProduct.name}}</h3>\n          <div class=\"rating\">\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=1?'rated':'unrated'}}\"></i></span>\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=2?'rated':'unrated'}}\"></i></span>\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=3?'rated':'unrated'}}\"></i></span>\n            <span><i class=\"fas fa-star mr-2 {{starAverage>=4?'rated':'unrated'}}\"></i></span>\n            <span><i class=\"fas fa-star mr-2 {{starAverage==5?'rated':'unrated'}}\"></i></span>\n            <span>({{listReview.length}} reviews)</span>\n          </div>\n          <div class=\"product__details__price\">{{currentProduct.price * (1 - currentProduct.saleOff / 100)}} đồng</div>\n          <p><b>Hướng dẫn sử dụng:</b> {{currentProduct.instructional}}</p>\n          <div class=\"product__details__quantity\">\n            <div class=\"quantity\">\n              <div class=\"pro-qty\">\n                <input type=\"text\" value=\"1\">\n              </div>\n            </div>\n          </div>\n          <a *ngIf=\"currentUser==null\" [routerLink]=\"['/cart', { id:currentProduct.id }]\" class=\"primary-btn\">Thêm vào\n            giỏ hàng</a>\n          <a *ngIf=\"currentUser!=null\" (click)=\"addItemToShoppingCart(currentProduct.id, shoppingCart.id)\"\n             class=\"primary-btn\">Thêm vào giỏ hàng</a>\n          <a [routerLink]=\"['/favorite', { id:currentProduct.id }]\" class=\"heart-icon\"><span\n            class=\"icon_heart_alt\"></span></a>\n          <ul>\n            <li><b>Trạng thái</b> <span>{{currentProduct.status == true ? \"Còn hàng\" : \"Hết hàng\"}}</span></li>\n            <li><b>Vận chuyển</b><span>Giao hàng nhanh 2h trong nội thành (đặt trước 17:00)</span></li>\n            <li><b>Khối lượng</b> <span>{{currentProduct.mass}}g</span></li>\n            <li><b>Thành phần chính</b> <span>{{currentProduct.ingredient}}</span></li>\n            <li><b>Bảo quản</b> <span>{{currentProduct.preservation}}</span></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-12\">\n        <div class=\"product__details__tab\">\n          <ul class=\"nav nav-tabs\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tabs-1\" role=\"tab\"\n                 aria-selected=\"true\">Mô tả</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tabs-2\" role=\"tab\"\n                 aria-selected=\"false\">Thông tin</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tabs-3\" role=\"tab\"\n                 aria-selected=\"false\">Đánh giá <span>({{listReview.length}})</span></a>\n            </li>\n          </ul>\n          <div class=\"tab-content\">\n            <div class=\"tab-pane active\" id=\"tabs-1\" role=\"tabpanel\">\n              <div class=\"product__details__tab__desc\">\n                <h6><b>Giới thiệu {{currentProduct.name}} ({{currentProduct.mass}}g)</b></h6>\n                <p [innerHTML]=\"currentProduct.description\"></p>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"tabs-2\" role=\"tabpanel\">\n              <div class=\"product__details__tab__desc\">\n                <h6>Thông tin sản phẩm</h6>\n                <p><b>Khối lượng:</b> {{currentProduct.mass}}g</p>\n                <p><b>Thành phần:</b> {{currentProduct.ingredient}}</p>\n                <p><b>Bảo quản:</b> {{currentProduct.preservation}}</p>\n                <p><b>Hướng dẫn sử dụng:</b> {{currentProduct.instructional}}</p>\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"tabs-3\" role=\"tabpanel\">\n              <h5>Đánh giá sản phẩm</h5>\n              <div class=\"product__details__tab__desc\" *ngIf=\"listReview.length!=0\">\n                <div class=\"post\" *ngFor=\"let review of listReview\">\n                  <div class=\"user-block\">\n                    <img class=\"img-circle img-bordered-sm\" src=\"assets/static/img/user.png\" alt=\"user\">\n                    <span class=\"username\" *ngIf=\"review.user != null\">\n                          {{review.user.email}}\n                        </span>\n                    <span class=\"description\">{{review.createDate.getDay() + 1}}/ {{review.createDate.getMonth() + 1}}\n                      / {{review.createDate.getFullYear()}}</span>\n                  </div>\n                  <div class=\"rating\">\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=1?'rated':'unrated'}}\"></i></span>\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=2?'rated':'unrated'}}\"></i></span>\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=3?'rated':'unrated'}}\"></i></span>\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate>=4?'rated':'unrated'}}\"></i></span>\n                    <span><i class=\"fas fa-star mr-2 {{review.evaluate==5?'rated':'unrated'}}\"></i></span>\n                  </div>\n                  <br>\n                  <!-- /.user-block -->\n                  <p [innerHTML]=\"review.comment\"></p>\n                </div>\n              </div>\n              <div class=\"product__details__tab__desc\" *ngIf=\"listReview.length==0\">\n                <p>Chưa có đánh giá nào</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"related-product\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"section-title related__product__title\">\n          <h2>SẢN PHẨM LIÊN QUAN</h2>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-4 col-sm-6\" *ngFor=\"let product of relatedProducts\">\n        <div class=\"product__item\">\n          <div class=\"product__item__pic set-bg\" *ngIf=\"product.image != null\"\n               [style.background-image]=\"'url('+product.image[0].url+')'\">\n            <ul class=\"product__item__pic__hover\">\n              <li><a [routerLink]=\"['/favorite', { id:currentProduct.id }]\"><i class=\"fa fa-heart\"></i></a></li>\n              <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\n              <li><a [routerLink]=\"['/cart', { id:currentProduct.id }]\"><i class=\"fa fa-shopping-cart\"></i></a></li>\n            </ul>\n          </div>\n          <div class=\"product__item__text\">\n            <h6><a [routerLink]=\"['../../product',product.id]\">{{product.name}}</a></h6>\n            <h5>{{product.price * (1 - product.saleOff / 100)}}</h5>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shop/shop.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/shop/shop.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\" [value]=\"query==null?'':query\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>Cửa hàng</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>Cửa hàng</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"product spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-5\">\n        <div class=\"sidebar\">\n          <div class=\"sidebar__item\">\n            <h4>Danh mục sản phẩm</h4>\n            <ul *ngFor=\"let category of listCategory\">\n              <li><a [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n            </ul>\n          </div>\n          <div class=\"sidebar__item\">\n          </div>\n          <div class=\"sidebar__item\">\n            <div class=\"latest-product__text\">\n              <h4>Sản phẩm mới</h4>\n              <div class=\"latest-product__slider owl-carousel\">\n                <div class=\"latest-prdouct__slider__item\">\n                  <a [routerLink]=\"['../product',product.id]\" class=\"latest-product__item\"\n                     *ngFor=\"let product of listProductLatest\">\n                    <div class=\"latest-product__item__pic\">\n                      <img [src]=\"product.url\"\n                           style=\"width: 110px; height: 110px\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>{{product.name}}</h6>\n                      <span>{{product.price}}đ</span>\n                    </div>\n                  </a>\n                </div>\n                <div class=\"latest-prdouct__slider__item\">\n                  <a href=\"#\" class=\"latest-product__item\" *ngFor=\"let product of listProductLatest\">\n                    <div class=\"latest-product__item__pic\">\n                      <img [src]=\"product.url\"\n                           style=\"width: 110px; height: 110px\" alt=\"\">\n                    </div>\n                    <div class=\"latest-product__item__text\">\n                      <h6>{{product.name}}</h6>\n                      <span>{{product.price}}đ</span>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-9 col-md-7\">\n        <div class=\"filter__item\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-md-5\">\n            </div>\n            <div class=\"col-lg-4 col-md-4\">\n              <div class=\"filter__found\">\n                <h6><span>{{totalProduct}}</span> sản phẩm</h6>\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-3\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 col-sm-6\" *ngFor=\"let product of listProduct\">\n            <div class=\"product__item\">\n              <div class=\"product__item__pic set-bg\" *ngIf=\"product.image!=null\"\n                   [style.background-image]=\"'url('+ product.image[0].url+')'\">\n                <ul class=\"product__item__pic__hover\">\n                  <li><a [routerLink]=\"['/favorite', { id:product.id }]\"><i class=\"fa fa-heart\"></i></a></li>\n                  <li><a href=\"#\"><i class=\"fa fa-retweet\"></i></a></li>\n                  <li *ngIf=\"currentUser==null\"><a [routerLink]=\"['/cart', { id:product.id }]\"><i\n                    class=\"fa fa-shopping-cart\"></i></a></li>\n                  <li *ngIf=\"currentUser!=null\"><a (click)=\"addItemToShoppingCart(product.id,shoppingCart.id)\"><i\n                    class=\"fa fa-shopping-cart\"></i></a></li>\n                </ul>\n              </div>\n              <div class=\"product__item__text\">\n                <h6><a [routerLink]=\"['../product',product.id]\">{{product.name}}</a></h6>\n                <h5>{{product.price * (1 - product.saleOff / 100)}}đ</h5>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"product__pagination\">\n          <a (click)=\"previous()\" *ngIf=\"hasPrevious()\"><i class=\"fas fa-long-arrow-alt-left\"></i></a>\n          <ng-container *ngFor=\"let page of totalPage\">\n            <a (click)=\"choosePage(page)\">{{page + 1}}</a>\n          </ng-container>\n          <a (click)=\"next()\" *ngIf=\"hasNext(totalPage.length)\"><i class=\"fas fa-long-arrow-alt-right\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shopping-cart/shopping-cart.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/shopping-cart/shopping-cart.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>Giỏ hàng</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>Giỏ hàng</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th class=\"shoping__product\">Sản phẩm</th>\n              <th>Giá</th>\n              <th>Số lượng</th>\n              <th>Tổng tiền</th>\n              <th></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let item of items; index as i\">\n              <td class=\"shoping__cart__item\">\n                <img *ngIf=\"item.product.image != null\" [src]=\"item.product.image[0].url\" alt=\"\" width=\"100\" height=\"100\">\n                <h5 style=\"font-size: 16px\">{{item.product.name}}</h5>\n              </td>\n              <td class=\"shoping__cart__price\">\n                {{item.product.price * (1 - item.product.saleOff / 100)}}đ\n              </td>\n              <td class=\"shoping__cart__quantity\">\n                <div class=\"quantity\">\n                  <div class=\"pro-qty\">\n                    <span *ngIf=\"currentUser==null\" class=\"dec qtybtn\"\n                          (click)=\"decreaseProduct(item.product.id, i)\">-</span>\n                    <span *ngIf=\"currentUser!=null\" class=\"dec qtybtn\"\n                          (click)=\"decreaseItemToShoppingCart(item.product.id, shoppingCart.id)\">-</span>\n                    <input type=\"text\" value=\"{{item.quantity}}\">\n                    <span *ngIf=\"currentUser==null\" class=\"inc qtybtn\"\n                          (click)=\"addProductToCart(item.product.id, item)\">+</span>\n                    <span *ngIf=\"currentUser!=null\" class=\"inc qtybtn\"\n                          (click)=\"addItemToShoppingCart(item.product.id, shoppingCart.id)\">+</span>\n                  </div>\n                </div>\n              </td>\n              <td class=\"shoping__cart__total\">\n                {{item.quantity * item.product.price * (1 - item.product.saleOff / 100)}}đ\n              </td>\n              <td class=\"shoping__cart__item__close\">\n                <span *ngIf=\"currentUser==null\" class=\"icon_close\" (click)=\"remove(item.product.id)\"></span>\n                <span *ngIf=\"currentUser!=null\" class=\"icon_close\" (click)=\"removeItemFromCart(item.id)\"></span>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__btns\">\n          <a routerLink=\"/\" class=\"primary-btn cart-btn\">Tiếp tục mua sắm</a>\n          <a href=\"/cart\" class=\"primary-btn cart-btn cart-btn-right\"><span class=\"icon_loading\"></span>\n            Cập nhật giở hàng</a>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n<!--        <div class=\"shoping__continue\">-->\n<!--          <div class=\"shoping__discount\">-->\n<!--            <h5>Mã giảm giá</h5>-->\n<!--            <form [formGroup]=\"discountForm\">-->\n<!--              <input type=\"text\" placeholder=\"Nhập mã giảm gái\">-->\n<!--              <button type=\"submit\" class=\"site-btn\">Xác nhận</button>-->\n<!--            </form>-->\n<!--          </div>-->\n<!--        </div>-->\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"shoping__checkout\">\n          <h5>Tổng tiền</h5>\n          <ul>\n            <li>Phụ thu <span>{{total}} đồng</span></li>\n            <li>Tổng tiền <span>{{total}} đồng</span></li>\n          </ul>\n          <a routerLink=\"/checkout\" class=\"primary-btn\">Thanh toán</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-order/user-order.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-order/user-order.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"hero hero-normal\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"hero__categories\">\n          <div class=\"hero__categories__all\">\n            <i class=\"fa fa-bars\"></i>\n            <span>Danh mục sản phẩm</span>\n          </div>\n          <ul>\n            <li *ngFor=\"let category of listCategory\"><a\n              [routerLink]=\"['../category',category.id]\">{{category.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <div class=\"hero__search\">\n          <div class=\"hero__search__form\">\n            <form [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\n              <div class=\"hero__search__categories\">\n                Tất cả\n                <span class=\"arrow_carrot-down\"></span>\n              </div>\n              <input type=\"text\" placeholder=\"Bạn cần tìm gì?\" formControlName=\"name\">\n              <button type=\"submit\" class=\"site-btn\">TÌM KIẾM</button>\n            </form>\n          </div>\n          <div class=\"hero__search__phone\">\n            <div class=\"hero__search__phone__icon\">\n              <i class=\"fa fa-phone\"></i>\n            </div>\n            <div class=\"hero__search__phone__text\">\n              <h5>038115225</h5>\n              <span>Hỗ trợ 24/7</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"breadcrumb-section set-bg\" [style.background]=\"'url(../../../assets/static/img/breadcrumb.jpg)'\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center\">\n        <div class=\"breadcrumb__text\">\n          <h2>{{status ? \"Đơn hàng đã mua\" : \"Đơn hàng chờ xác nhận\"}}</h2>\n          <div class=\"breadcrumb__option\">\n            <a routerLink=\"/\">Trang chủ</a>\n            <span>{{status ? \"Đã mua\" : \"Chờ xác nhận\"}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section *ngIf=\"status\" class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th>#</th>\n              <th>Mã đơn hàng</th>\n              <th>Ngày đặt</th>\n              <th>Trạng thái</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let orders of listOrders; index as i\">\n              <td>{{i + 1}}</td>\n              <td>\n                <a routerLink=\"/order/{{orders.id}}/product\">\n                  {{orders.id}}\n                </a>\n              </td>\n              <td>\n                {{dateService.convertDate(orders.createDate)}}\n              </td>\n              <td>\n                {{orders.status ? \"Đã xác nhận\" : \"Chưa xác nhận\"}}\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section *ngIf=\"!status\" class=\"shoping-cart spad\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"shoping__cart__table\">\n          <table>\n            <thead>\n            <tr>\n              <th>#</th>\n              <th>Mã đơn hàng</th>\n              <th>Ngày đặt</th>\n              <th>Trạng thái</th>\n              <th style=\"width: 160px\"></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let orders of listOrders; index as i\">\n              <td>{{i + 1}}</td>\n              <td>\n                {{orders.id}}\n              </td>\n              <td>\n                {{dateService.convertDate(orders.createDate)}}\n              </td>\n              <td>\n                {{orders.status ? \"Đã xác nhận\" : \"Chưa xác nhận\"}}\n              </td>\n              <td>\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                  </div>\n                  <div class=\"col-6\">\n                    <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                            data-target=\"#modal-delete\" (click)=\"getOrderId(orders.id)\">\n                      <i class=\"fas fa-trash\"></i>\n                    </button>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"modal fade\" id=\"modal-delete\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Hủy đơn hàng</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Bạn có muốn hủy đơn hàng này không ?</p>\n      </div>\n      <div class=\"modal-footer justify-content-between\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteOrder(id)\">Xóa</button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./src/app/admin/user/create-user/create-user.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/admin/user/create-user/create-user.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXIvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/user/create-user/create-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/user/create-user/create-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user/user.service */ "./src/app/service/user/user.service.ts");




let CreateUserComponent = class CreateUserComponent {
    constructor(userService) {
        this.userService = userService;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#user-form').validate({
                rules: {
                    email: {
                        required: true
                    },
                    password: {
                        required: true
                    },
                    fullName: {
                        required: true
                    }
                },
                messages: {
                    email: {
                        required: 'Hãy nhập email'
                    },
                    password: {
                        required: 'Hãy nhập mật khẩu'
                    },
                    fullName: {
                        required: 'Hãy nhập tên'
                    },
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });
    }
    createUser() {
        const user = {
            email: this.userForm.value.email,
            password: this.userForm.value.password,
            fullName: this.userForm.value.fullName
        };
        if (user.email !== '' && user.password !== '' && user.fullName !== '') {
            return this.userService.createUser(user).subscribe(() => {
                this.userForm.reset();
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'success',
                        title: 'Tạo mới thành công'
                    });
                });
            }, () => {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'error',
                        title: 'Tạo mới thất bại'
                    });
                });
            });
        }
    }
};
CreateUserComponent.ctorParameters = () => [
    { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/create-user/create-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-user.component.scss */ "./src/app/admin/user/create-user/create-user.component.scss")).default]
    })
], CreateUserComponent);



/***/ }),

/***/ "./src/app/admin/user/edit-user/edit-user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/user/edit-user/edit-user.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXIvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/user/edit-user/edit-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/user/edit-user/edit-user.component.ts ***!
  \*************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/user/user.service */ "./src/app/service/user/user.service.ts");





let EditUserComponent = class EditUserComponent {
    constructor(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#user-form').validate({
                rules: {
                    email: {
                        required: true
                    },
                    fullName: {
                        required: true
                    }
                },
                messages: {
                    email: {
                        required: 'Hãy nhập email'
                    },
                    fullName: {
                        required: 'Hãy nhập tên'
                    },
                },
                errorElement: 'span',
                errorPlacement: function (error, element) {
                    error.addClass('invalid-feedback');
                    element.closest('.form-group').append(error);
                },
                highlight: function (element, errorClass, validClass) {
                    $(element).addClass('is-invalid');
                },
                unhighlight: function (element, errorClass, validClass) {
                    $(element).removeClass('is-invalid');
                }
            });
        });
        this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.currentUser = yield this.getUser(this.id);
        }));
    }
    getUser(id) {
        return this.userService.getUser(id).toPromise();
    }
    updateUser(id) {
        const user = {
            fullName: this.userForm.value.fullName === "" ? this.currentUser.fullName : this.userForm.value.fullName,
            email: this.userForm.value.email === "" ? this.currentUser.email : this.userForm.value.email,
            password: this.currentUser.password,
            roles: this.currentUser.roles
        };
        this.userService.updateUser(id, user).subscribe(() => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Cập nhật thành công'
                });
            });
        }, () => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Cập nhật thất bại'
                });
            });
        });
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/edit-user/edit-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/admin/user/edit-user/edit-user.component.scss")).default]
    })
], EditUserComponent);



/***/ }),

/***/ "./src/app/admin/user/list-user/list-user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/user/list-user/list-user.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXIvbGlzdC11c2VyL2xpc3QtdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/user/list-user/list-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/user/list-user/list-user.component.ts ***!
  \*************************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user/user.service */ "./src/app/service/user/user.service.ts");



let ListUserComponent = class ListUserComponent {
    constructor(userService) {
        this.userService = userService;
        this.listUser = [];
    }
    ngOnInit() {
        this.getAllUser();
    }
    getUserId(id) {
        this.id = id;
    }
    deleteUser() {
        this.userService.deleteUser(this.id).subscribe(() => {
            this.userService.getAllUser().subscribe(listCategory => {
                this.listUser = listCategory;
            });
            $(function () {
                $('#modal-delete').modal('hide');
            });
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Xóa thành công'
                });
            });
        }, () => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Xóa thất bại'
                });
            });
        });
    }
    getAllUser() {
        this.userService.getAllUser().subscribe(listUser => {
            this.listUser = listUser;
            $(function () {
                $('#table-user').DataTable({
                    'paging': true,
                    'lengthChange': false,
                    'searching': false,
                    'ordering': true,
                    'info': true,
                    'autoWidth': false,
                });
            });
        });
    }
};
ListUserComponent.ctorParameters = () => [
    { type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
ListUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/user/list-user/list-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-user.component.scss */ "./src/app/admin/user/list-user/list-user.component.scss")).default]
    })
], ListUserComponent);



/***/ }),

/***/ "./src/app/admin/user/user-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/user/user-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-user/list-user.component */ "./src/app/admin/user/list-user/list-user.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/admin/user/create-user/create-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/admin/user/edit-user/edit-user.component.ts");






const routes = [
    {
        path: '',
        component: _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__["ListUserComponent"]
    },
    {
        path: 'create',
        component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__["CreateUserComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/admin/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/admin/user/user-routing.module.ts");
/* harmony import */ var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-user/list-user.component */ "./src/app/admin/user/list-user/list-user.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/admin/user/create-user/create-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/admin/user/edit-user/edit-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_4__["ListUserComponent"], _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__["CreateUserComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["EditUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]
    })
], UserModule);



/***/ }),

/***/ "./src/app/helper/auth-guard.ts":
/*!**************************************!*\
  !*** ./src/app/helper/auth-guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.authService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    canActivate(next, state) {
        if (this.currentUser) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', 'login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
    canActivateChild(next, state) {
        if (this.currentUser) {
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/', '', 'login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
    canLoad(route, segments) {
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/service/customer-info/customer-info.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/customer-info/customer-info.service.ts ***!
  \****************************************************************/
/*! exports provided: CustomerInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerInfoService", function() { return CustomerInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let CustomerInfoService = class CustomerInfoService {
    constructor(http) {
        this.http = http;
    }
    getAllCustomerInfo() {
        return this.http.get(API_URL + '/customer-infos');
    }
    createCustomerInfo(customerInfo) {
        return this.http.post(API_URL + '/customer-infos', customerInfo);
    }
    updateCustomerInfo(id, customerInfo) {
        return this.http.put(API_URL + `/customer-infos/${id}`, customerInfo);
    }
    deleteCustomerInfo(id) {
        return this.http.delete(API_URL + `/customer-infos/${id}`);
    }
    getCustomerInfo(id) {
        return this.http.get(API_URL + `/customer-infos/${id}`);
    }
};
CustomerInfoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CustomerInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerInfoService);



/***/ }),

/***/ "./src/app/service/item/item.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/item/item.service.ts ***!
  \**********************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../warehouse-bill-detail/warehouse-bill-detail.service */ "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts");
/* harmony import */ var _order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order-detail/order-detail.service */ "./src/app/service/order-detail/order-detail.service.ts");






const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let ItemService = class ItemService {
    constructor(http, warehouseBillDetailService, orderDetailService) {
        this.http = http;
        this.warehouseBillDetailService = warehouseBillDetailService;
        this.orderDetailService = orderDetailService;
    }
    getAllItem() {
        return this.http.get(API_URL + '/items');
    }
    createItem(item) {
        return this.http.post(API_URL + '/items', item);
    }
    getItem(id) {
        return this.http.get(API_URL + `/items/${id}`);
    }
    updateItem(id, item) {
        return this.http.put(API_URL + `/items/${id}`, item);
    }
    deleteItem(id) {
        return this.http.delete(API_URL + `/items/${id}`);
    }
    addItemToShoppingCart(items, productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let sumInput = yield this.warehouseBillDetailService.sumAmount(productId).toPromise();
            let sumOutput = yield this.orderDetailService.sumAmount(productId).toPromise();
            if (sumInput - sumOutput <= 0) {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'error',
                        title: 'Sản phẩm này hiện đã hết!\nHãy chon mua sản phẩm khác'
                    });
                });
            }
            else {
                if (items.length == 0) {
                    let item = {
                        product: {
                            id: productId
                        },
                        quantity: 1,
                        shoppingCart: {
                            id: shoppingCartId
                        }
                    };
                    this.createItem(item).subscribe(() => {
                        $(function () {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000
                            });
                            Toast.fire({
                                type: 'success',
                                title: 'Đã thêm vào giỏ hàng'
                            });
                        });
                    });
                }
                else {
                    let index = -1;
                    for (let i = 0; i < items.length; i++) {
                        if (items[i].product.id == productId) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        let item1 = {
                            product: {
                                id: productId
                            },
                            quantity: 1,
                            shoppingCart: {
                                id: shoppingCartId
                            }
                        };
                        this.createItem(item1).subscribe(() => {
                            $(function () {
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000
                                });
                                Toast.fire({
                                    type: 'success',
                                    title: 'Đã thêm vào giỏ hàng'
                                });
                            });
                        });
                    }
                    else {
                        items[index].quantity += 1;
                        this.updateItem(items[index].id, items[index]).subscribe(() => {
                            $(function () {
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 3000
                                });
                                Toast.fire({
                                    type: 'success',
                                    title: 'Đã thêm vào giỏ hàng'
                                });
                            });
                        });
                    }
                }
            }
        });
    }
    decreaseItemToShoppingCart(items, productId) {
        let index = -1;
        for (let i = 0; i < items.length; i++) {
            if (items[i].product.id == productId) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            if (items[index].quantity == 1) {
                this.deleteItem(items[index].id).subscribe(() => {
                    $(function () {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });
                        Toast.fire({
                            type: 'success',
                            title: 'Đã xóa 1 sản phẩm trong giỏ hàng'
                        });
                    });
                });
            }
            else {
                items[index].quantity -= 1;
                this.updateItem(items[index].id, items[index]).subscribe(() => {
                    $(function () {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });
                        Toast.fire({
                            type: 'success',
                            title: 'Đã giảm số lượng 1 sản phẩm trong giỏ hàng'
                        });
                    });
                });
            }
        }
    }
};
ItemService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseBillDetailService"] },
    { type: _order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_5__["OrderDetailService"] }
];
ItemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ItemService);



/***/ }),

/***/ "./src/app/service/order-detail/order-detail.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/service/order-detail/order-detail.service.ts ***!
  \**************************************************************/
/*! exports provided: OrderDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return OrderDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let OrderDetailService = class OrderDetailService {
    constructor(http) {
        this.http = http;
    }
    getAllOrderDetail() {
        return this.http.get(API_URL + '/order-details');
    }
    createOrderDetail(orderDetail) {
        return this.http.post(API_URL + '/order-details', orderDetail);
    }
    getOrderDetail(id) {
        return this.http.get(API_URL + `/order-details/${id}`);
    }
    updateOrderDetail(id, orderDetail) {
        return this.http.put(API_URL + `/order-details/${id}`, orderDetail);
    }
    deleteOrderDetail(id) {
        return this.http.delete(API_URL + `/order-details/${id}`);
    }
    sumAmount(id) {
        return this.http.get(API_URL + `/order-details/${id}/sum`);
    }
};
OrderDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OrderDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrderDetailService);



/***/ }),

/***/ "./src/app/service/review/review.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/review/review.service.ts ***!
  \**************************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let ReviewService = class ReviewService {
    constructor(http) {
        this.http = http;
    }
    getAllReview() {
        return this.http.get(API_URL + '/reviews');
    }
    createReview(review) {
        return this.http.post(API_URL + '/reviews', review);
    }
    updateReview(id, review) {
        return this.http.put(API_URL + `/reviews/${id}`, review);
    }
    deleteReview(id) {
        return this.http.delete(API_URL + `/reviews/${id}`);
    }
    getReview(id) {
        return this.http.get(API_URL + `/reviews/${id}`);
    }
    getReviewByUserAndProduct(userId, productId) {
        return this.http.get(API_URL + `/reviews/users/${userId}/products/${productId}`);
    }
};
ReviewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReviewService);



/***/ }),

/***/ "./src/app/user/category-detail/category-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/user/category-detail/category-detail.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2F0ZWdvcnktZGV0YWlsL2NhdGVnb3J5LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/user/category-detail/category-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/category-detail/category-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");









let CategoryDetailComponent = class CategoryDetailComponent {
    constructor(categoryService, productService, activatedRoute, authenticationService, shoppingCartService, itemService, router) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.listProduct = [];
        this.listProductSaleOff = [];
        this.listProductLatest = [];
        this.page = 0;
        this.size = 9;
        this.totalPage = [];
        this.totalProduct = 0;
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = +paramMap.get('id');
            this.currentCategory = yield this.getCategory(id);
            this.getAllProductByCategoryUsingPagination(this.currentCategory, this.page, this.size);
            this.getAllProductByCategory(this.currentCategory);
        }));
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.latest-product__slider').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: true,
                navText: ['<span class=\'fa fa-angle-left\'><span/>', '<span class=\'fa fa-angle-right\'><span/>'],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            var rangeSlider = $('.price-range'), minamount = $('#minamount'), maxamount = $('#maxamount'), minPrice = rangeSlider.data('min'), maxPrice = rangeSlider.data('max');
            rangeSlider.slider({
                range: true,
                min: minPrice,
                max: maxPrice,
                values: [minPrice, maxPrice],
                slide: function (event, ui) {
                    minamount.val('$' + ui.values[0]);
                    maxamount.val('$' + ui.values[1]);
                }
            });
            minamount.val('$' + rangeSlider.slider('values', 0));
            maxamount.val('$' + rangeSlider.slider('values', 1));
        });
        this.getAllCategories();
        this.getAllProductSaleOff();
        this.getAllProductLatest();
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllProductByCategory(category) {
        this.categoryService.getAllProductByCategory(category.id).subscribe(listProduct => {
            this.totalProduct = listProduct.length;
            let total = Math.ceil(listProduct.length / 9);
            if (listProduct.length < 9) {
                total = 1;
            }
            for (let i = 1; i <= total; i++) {
                if (!this.totalPage.includes(i)) {
                    this.totalPage.push(i);
                }
            }
        });
    }
    getAllProductByCategoryUsingPagination(category, page, size) {
        this.categoryService.getAllProductByCategoryUsingPagination(category.id, page, size).subscribe(listProduct => {
            this.listProduct = listProduct;
            this.addImageToProduct(this.listProduct);
        });
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    getCategory(id) {
        return this.categoryService.getCategory(id).toPromise();
    }
    getAllProductSaleOff() {
        this.productService.getAllProductHasSaleOffGreaterThanZero().subscribe(listProduct => {
            this.listProductSaleOff = listProduct;
            this.listProductSaleOff.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                product.image = yield this.getAllImageByProduct(product);
            }));
            $(document).ready(function () {
                $('.product__discount__slider').owlCarousel({
                    // loop: true,
                    margin: 0,
                    items: 3,
                    dots: true,
                    smartSpeed: 1200,
                    autoHeight: false,
                    // autoplay: true,
                    responsive: {
                        320: {
                            items: 1,
                        },
                        480: {
                            items: 2,
                        },
                        768: {
                            items: 3,
                        }
                    }
                });
            });
        });
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
    getAllProductLatest() {
        this.productService.getAllProductLatest().subscribe(listProduct => {
            this.listProductLatest = listProduct;
        });
    }
    addImageToProduct(listProduct) {
        listProduct.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            product.image = yield this.getAllImageByProduct(product);
        }));
    }
    previous(category) {
        this.page--;
        this.getAllProductByCategoryUsingPagination(category, this.page, this.size);
    }
    hasPrevious() {
        return this.page > 0;
    }
    hasNext(totalPage) {
        return this.page < totalPage - 1;
    }
    next(category) {
        this.page++;
        this.getAllProductByCategoryUsingPagination(category, this.page, this.size);
    }
    choosePage(category, page) {
        this.page = page;
        this.getAllProductByCategoryUsingPagination(category, this.page, this.size);
    }
};
CategoryDetailComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CategoryDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/category-detail/category-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-detail.component.scss */ "./src/app/user/category-detail/category-detail.component.scss")).default]
    })
], CategoryDetailComponent);



/***/ }),

/***/ "./src/app/user/checkout/checkout.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/checkout/checkout.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/checkout/checkout.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/checkout/checkout.component.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_customer_info_customer_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/customer-info/customer-info.service */ "./src/app/service/customer-info/customer-info.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");
/* harmony import */ var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/order/orders.service */ "./src/app/service/order/orders.service.ts");
/* harmony import */ var _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/order-detail/order-detail.service */ "./src/app/service/order-detail/order-detail.service.ts");
/* harmony import */ var _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../service/socket/socket.service */ "./src/app/service/socket/socket.service.ts");












let CheckoutComponent = class CheckoutComponent {
    constructor(categoryService, customerInfoService, authenticationService, shoppingCartService, itemService, ordersService, orderDetailService, socketService, router) {
        this.categoryService = categoryService;
        this.customerInfoService = customerInfoService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.ordersService = ordersService;
        this.orderDetailService = orderDetailService;
        this.socketService = socketService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.customerInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.items = [];
        this.total = 0;
        this.isSubmitted = false;
        this.socketService.connectToOrders();
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
        });
        this.getAllCategories();
        if (this.currentUser == null) {
            this.loadCart();
        }
    }
    ngOnDestroy() {
        this.socketService.disconnect();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
            this.getAllItemInShoppingCart(this.shoppingCart.id);
        });
    }
    getAllItemInShoppingCart(id) {
        this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
            this.items = items;
            this.sumTotalPrice();
        });
    }
    deleteAllItemInShoppingCart(id) {
        this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
            this.items = items;
            this.items.map(item => {
                this.itemService.deleteItem(item.id).subscribe();
            });
        });
    }
    createOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const orders = {
                user: {
                    id: this.currentUser.id,
                    email: this.currentUser.email
                },
                status: false
            };
            let orderPromise = yield this.ordersService.createOrders(orders).toPromise();
            orders.id = orderPromise.id;
            this.socketService.sendOrders(orders);
            return orders;
        });
    }
    createOrderDetail(item, orders) {
        const orderDetail = {
            orders: {
                id: orders.id
            },
            amount: item.quantity,
            product: {
                id: item.product.id
            }
        };
        return this.orderDetailService.createOrderDetail(orderDetail).toPromise();
    }
    submitCheckoutForm(items, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const customerInfo = yield this.createCustomerInfo();
            if (customerInfo.address != "" && customerInfo.email != "" && customerInfo.name != "" && customerInfo.phoneNumber != "") {
                this.isSubmitted = true;
            }
            if (this.isSubmitted) {
                this.deleteAllItemInShoppingCart(shoppingCartId);
                this.getAllItemInShoppingCart(shoppingCartId);
                const orders = yield this.createOrder();
                let listOrderDetail = items.map(item => {
                    this.createOrderDetail(item, orders);
                });
                Promise.all(listOrderDetail).then(() => {
                    $(function () {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });
                        Toast.fire({
                            type: 'success',
                            title: 'Đơn hàng đã tạo, vui lòng chờ xác nhận'
                        });
                    });
                    this.customerInfoForm.reset();
                }).catch(() => {
                    $(function () {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000
                        });
                        Toast.fire({
                            type: 'error',
                            title: 'Xảy ra lỗi khi tạo đơn hàng'
                        });
                    });
                });
            }
            else {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'error',
                        title: 'Điền đủ thông tin để nhận hàng'
                    });
                });
            }
        });
    }
    createCustomerInfo() {
        const customerInfo = {
            name: this.customerInfoForm.value.name,
            address: this.customerInfoForm.value.address,
            phoneNumber: this.customerInfoForm.value.phoneNumber,
            email: this.customerInfoForm.value.email,
            user: {
                id: this.currentUser.id
            }
        };
        return this.customerInfoService.createCustomerInfo(customerInfo).toPromise();
    }
    loadCart() {
        this.total = 0;
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart != null) {
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                this.items.push({
                    product: item.product,
                    quantity: item.quantity
                });
                this.sumTotalPrice();
            }
        }
    }
    sumTotalPrice() {
        this.total = 0;
        for (let item of this.items) {
            this.total += (item.product.price * (1 - item.product.saleOff / 100)) * item.quantity;
        }
        return this.total;
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _service_customer_info_customer_info_service__WEBPACK_IMPORTED_MODULE_5__["CustomerInfoService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_9__["OrdersService"] },
    { type: _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__["OrderDetailService"] },
    { type: _service_socket_socket_service__WEBPACK_IMPORTED_MODULE_11__["SocketService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.scss */ "./src/app/user/checkout/checkout.component.scss")).default]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/user/contact/contact.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/contact/contact.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ContactComponent = class ContactComponent {
    constructor(categoryService, router) {
        this.categoryService = categoryService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    ngOnInit() {
        $('.hero__categories__all').on('click', function () {
            $('.hero__categories ul').slideToggle(400);
        });
        this.getAllCategories();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
ContactComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/user/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/user/favorite/favorite.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user/favorite/favorite.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/user/favorite/favorite.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/favorite/favorite.component.ts ***!
  \*****************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let FavoriteComponent = class FavoriteComponent {
    constructor(categoryService, activatedRoute, productService, router) {
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
        this.items = [];
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            var proQty = $('.pro-qty');
            proQty.on('click', '.qtybtn', function () {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                }
                else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    }
                    else {
                        newVal = 0;
                    }
                }
                $button.parent().find('input').val(newVal);
            });
        });
        this.getAllCategories();
        this.loadFavorite();
        this.activatedRoute.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var id = params['id'];
            if (id) {
                const product = yield this.getProduct(id);
                product.image = yield this.getAllImageByProduct(product);
                var item = {
                    product: product,
                    quantity: 1
                };
                if (localStorage.getItem('heart') == null) {
                    let heart = [];
                    heart.push(JSON.stringify(item));
                    localStorage.setItem('heart', JSON.stringify(heart));
                }
                else {
                    this.addProductToFavorite(id, item);
                }
                this.loadFavorite();
            }
            else {
                this.loadFavorite();
            }
        }));
    }
    remove(id) {
        let heart = JSON.parse(localStorage.getItem('heart'));
        let index = -1;
        for (var i = 0; i < heart.length; i++) {
            let item = JSON.parse(heart[i]);
            if (item.product.id == id) {
                heart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('heart', JSON.stringify(heart));
        this.loadFavorite();
    }
    addProductToFavorite(id, item) {
        let heart = JSON.parse(localStorage.getItem('heart'));
        let index = -1;
        for (var i = 0; i < heart.length; i++) {
            let item = JSON.parse(heart[i]);
            if (item.product.id == id) {
                index = i;
                break;
            }
        }
        if (index == -1) {
            heart.push(JSON.stringify(item));
            localStorage.setItem('heart', JSON.stringify(heart));
            this.loadFavorite();
        }
    }
    getProduct(id) {
        return this.productService.getProduct(id).toPromise();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    loadFavorite() {
        this.items = [];
        let heart = JSON.parse(localStorage.getItem('heart'));
        if (heart != null) {
            for (var i = 0; i < heart.length; i++) {
                let item = JSON.parse(heart[i]);
                this.items.push({
                    product: item.product,
                    quantity: item.quantity
                });
            }
        }
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
FavoriteComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorite',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/favorite/favorite.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorite.component.scss */ "./src/app/user/favorite/favorite.component.scss")).default]
    })
], FavoriteComponent);



/***/ }),

/***/ "./src/app/user/homepage/homepage.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/homepage/homepage.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/user/homepage/homepage.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/homepage/homepage.component.ts ***!
  \*****************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");









let HomepageComponent = class HomepageComponent {
    constructor(productService, categoryService, authenticationService, shoppingCartService, itemService, router) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listProduct = [];
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.listProductLatest = [];
        this.listProductBestSell = [];
        this.listProductMostLiked = [];
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            if (this.currentUser) {
                this.getShoppingCartByUser(this.currentUser.id);
            }
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.latest-product__slider').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: true,
                navText: ['<span class=\'fa fa-angle-left\'><span/>', '<span class=\'fa fa-angle-right\'><span/>'],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            $('.categories__slider').owlCarousel({
                loop: true,
                margin: 0,
                items: 4,
                dots: false,
                nav: true,
                navText: ['<span class=\'fa fa-angle-left\'><span/>', '<span class=\'fa fa-angle-right\'><span/>'],
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 4,
                    }
                }
            });
        });
        this.getAllProductLatest();
        this.getAllProduct();
        this.getAllCategories();
        this.getAllProductBestSell();
        this.getAllProductMostLiked();
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
        });
    }
    getAllProduct() {
        this.productService.getAllProductUsingPagination(0, 8).subscribe(listProduct => {
            this.listProduct = listProduct;
            this.addImageToProduct(this.listProduct);
        });
    }
    addImageToProduct(listProduct) {
        listProduct.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            product.image = yield this.getAllImageByProduct(product);
        }));
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllProductLatest() {
        this.productService.getAllProductLatest().subscribe(listProduct => {
            this.listProductLatest = listProduct;
        });
    }
    getAllProductBestSell() {
        this.productService.getAllProductBestSell().subscribe(listProduct => {
            this.listProductBestSell = listProduct;
        });
    }
    getAllProductMostLiked() {
        this.productService.getAllProductMostLiked().subscribe(listProduct => {
            this.listProductMostLiked = listProduct;
        });
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
HomepageComponent.ctorParameters = () => [
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/user/homepage/homepage.component.css")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/user/order-detail/order-detail.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/order-detail/order-detail.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rated {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFuL0FuZ3VsYXIvQW5ndWxhcl9TaG9waWZ5L3NyYy9hcHAvdXNlci9vcmRlci1kZXRhaWwvb3JkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0ZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuIiwiLnJhdGVkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/order-detail/order-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/order-detail/order-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/order/orders.service */ "./src/app/service/order/orders.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_review_review_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/review/review.service */ "./src/app/service/review/review.service.ts");
/* harmony import */ var _service_date_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/date/date.service */ "./src/app/service/date/date.service.ts");










let OrderDetailComponent = class OrderDetailComponent {
    constructor(categoryService, router, ordersService, authenticationService, productService, reviewService, dateService, activatedRoute) {
        this.categoryService = categoryService;
        this.router = router;
        this.ordersService = ordersService;
        this.authenticationService = authenticationService;
        this.productService = productService;
        this.reviewService = reviewService;
        this.dateService = dateService;
        this.activatedRoute = activatedRoute;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.listProduct = [];
        this.star = 0;
        this.getAllCategories();
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
        });
        this.activatedRoute.paramMap.subscribe(paramMap => {
            const id = +paramMap.get('id');
            this.getAllProductByOrder(id);
        });
    }
    ngOnInit() {
        let self = this;
        $(function () {
            $('.textarea').summernote();
            $('#modal-review').on('hidden.bs.modal', function () {
                $('.textarea').summernote('reset');
                self.star = 0;
            });
        });
    }
    getAllProductByOrder(id) {
        this.ordersService.getAllProductByOrder(id).subscribe(products => {
            this.listProduct = products;
        });
    }
    rate(star) {
        if (this.star == star) {
            this.star = 0;
        }
        else {
            this.star = star;
        }
    }
    getProductId(userId, productId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.productId = productId;
            this.currentReview = yield this.getReview(userId, productId);
            if (this.currentReview != null) {
                $('#comment').summernote('pasteHTML', this.currentReview.comment);
                $('.textarea').summernote('disable');
            }
            else {
                $('#comment').summernote('reset');
                $('.textarea').summernote('enable');
            }
        });
    }
    getReview(userId, productId) {
        return this.reviewService.getReviewByUserAndProduct(userId, productId).toPromise();
    }
    createReview(star, productId) {
        const review = {
            comment: $('.textarea').val(),
            user: {
                id: this.currentUser.id
            },
            evaluate: star,
            product: {
                id: productId
            }
        };
        this.reviewService.createReview(review).subscribe(() => {
            $(function () {
                $('#modal-review').modal('hide');
            });
            this.star = 0;
            $('.textarea').summernote('reset');
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Đánh giá thành công'
                });
            });
        }, () => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Xảy ra lỗi khi đánh giá'
                });
            });
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
OrderDetailComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _service_review_review_service__WEBPACK_IMPORTED_MODULE_8__["ReviewService"] },
    { type: _service_date_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
OrderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/order-detail/order-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-detail.component.scss */ "./src/app/user/order-detail/order-detail.component.scss")).default]
    })
], OrderDetailComponent);



/***/ }),

/***/ "./src/app/user/product-detail/product-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/user/product-detail/product-detail.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rated {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWFuL0FuZ3VsYXIvQW5ndWxhcl9TaG9waWZ5L3NyYy9hcHAvdXNlci9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0ZWQge1xuICBjb2xvcjogb3JhbmdlO1xufVxuIiwiLnJhdGVkIHtcbiAgY29sb3I6IG9yYW5nZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user/product-detail/product-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/product-detail/product-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");
/* harmony import */ var _service_review_review_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/review/review.service */ "./src/app/service/review/review.service.ts");










let ProductDetailComponent = class ProductDetailComponent {
    constructor(categoryService, productService, reviewService, activatedRoute, authenticationService, shoppingCartService, itemService, router) {
        this.categoryService = categoryService;
        this.productService = productService;
        this.reviewService = reviewService;
        this.activatedRoute = activatedRoute;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.relatedProducts = [];
        this.listReview = [];
        this.starAverage = 0;
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = +paramMap.get('id');
            this.currentProduct = yield this.getProduct(id);
            this.currentProduct.image = yield this.getAllImageByProduct(this.currentProduct);
            this.getAllReview(id);
            this.getAllProductRelated(this.currentProduct.category);
        }));
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $(".product__details__pic__slider").owlCarousel({
                loop: true,
                margin: 20,
                items: 4,
                dots: true,
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $('.product__details__pic__slider img').on('click', function () {
                var imgurl = $(this).data('imgbigurl');
                var bigImg = $('.product__details__pic__item--large').attr('src');
                if (imgurl != bigImg) {
                    $('.product__details__pic__item--large').attr({
                        src: imgurl
                    });
                }
            });
            var proQty = $('.pro-qty');
            proQty.prepend('<span class="dec qtybtn">-</span>');
            proQty.append('<span class="inc qtybtn">+</span>');
            proQty.on('click', '.qtybtn', function () {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                }
                else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    }
                    else {
                        newVal = 0;
                    }
                }
                $button.parent().find('input').val(newVal);
            });
        });
        this.getAllCategories();
    }
    getAllReview(productId) {
        this.productService.getAllReviewByProduct(productId).subscribe(listReview => {
            let sum = 0;
            this.listReview = listReview;
            this.listReview.map(review => {
                review.createDate = new Date(review.createDate);
                sum += review.evaluate;
            });
            this.starAverage = sum / this.listReview.length;
        });
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getProduct(id) {
        return this.productService.getProduct(id).toPromise();
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    getAllProductRelated(category) {
        this.categoryService.getAllProductByCategory(category.id).subscribe(listProduct => {
            if (listProduct.length > 4) {
                for (let i = 0; i < 4; i++) {
                    this.relatedProducts.push(listProduct[i]);
                }
            }
            else {
                this.relatedProducts = listProduct;
            }
            this.relatedProducts.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                product.image = yield this.getAllImageByProduct(product);
            }));
        });
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _service_review_review_service__WEBPACK_IMPORTED_MODULE_9__["ReviewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/product-detail/product-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/user/product-detail/product-detail.component.scss")).default]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/user/shop/shop.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/shop/shop.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/user/shop/shop.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/shop/shop.component.ts ***!
  \*********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");









let ShopComponent = class ShopComponent {
    constructor(categoryService, activatedRoute, productService, authenticationService, shoppingCartService, itemService, router) {
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listCategory = [];
        this.listProduct = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.page = 0;
        this.size = 9;
        this.totalPage = [];
        this.totalProduct = 0;
        this.listProductSaleOff = [];
        this.listProductLatest = [];
        this.query = '';
        this.sub = this.activatedRoute.queryParams.subscribe(params => {
            this.query = params.name;
            this.getAllProduct();
            if (this.query != null) {
                this.searchForm.value.name = this.query;
                this.search();
            }
            else {
                this.getAllProductUsingPagination(this.page, this.size);
            }
        });
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.latest-product__slider').owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                dots: false,
                nav: true,
                navText: ['<span class=\'fa fa-angle-left\'><span/>', '<span class=\'fa fa-angle-right\'><span/>'],
                smartSpeed: 1200,
                autoHeight: false,
                autoplay: true
            });
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            var rangeSlider = $('.price-range'), minamount = $('#minamount'), maxamount = $('#maxamount'), minPrice = rangeSlider.data('min'), maxPrice = rangeSlider.data('max');
            rangeSlider.slider({
                range: true,
                min: minPrice,
                max: maxPrice,
                values: [minPrice, maxPrice],
                slide: function (event, ui) {
                    minamount.val(ui.values[0] + 'đ');
                    maxamount.val(ui.values[1] + 'đ');
                }
            });
            minamount.val(rangeSlider.slider('values', 0) + 'đ');
            maxamount.val(rangeSlider.slider('values', 1) + 'đ');
        });
        this.getAllCategories();
        this.getAllProductSaleOff();
        this.getAllProductLatest();
    }
    getShoppingCartByUser(id) {
        this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
            this.shoppingCart = shoppingCart;
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
        });
    }
    getAllProductUsingPagination(page, size) {
        this.productService.getAllProductUsingPagination(page, size).subscribe(listProduct => {
            this.listProduct = listProduct;
            this.addImageToProduct(this.listProduct);
        });
    }
    getAllProduct() {
        this.productService.getAllProduct().subscribe(listProduct => {
            this.totalProduct = listProduct.length;
            let total = Math.ceil(listProduct.length / 9);
            if (listProduct.length < 9) {
                total = 1;
            }
            for (let i = 0; i < total; i++) {
                if (!this.isExistedInArray(i, this.totalPage)) {
                    this.totalPage.push(i);
                }
            }
        });
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllProductSaleOff() {
        this.productService.getAllProductHasSaleOffGreaterThanZero().subscribe(listProduct => {
            this.listProductSaleOff = listProduct;
            this.listProductSaleOff.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                product.image = yield this.getAllImageByProduct(product);
                $(document).ready(function () {
                    $('.product__discount__slider').owlCarousel({
                        loop: true,
                        margin: 0,
                        items: 3,
                        dots: true,
                        smartSpeed: 1500,
                        autoHeight: false,
                        autoplay: true,
                        responsive: {
                            320: {
                                items: 1,
                            },
                            480: {
                                items: 2,
                            },
                            768: {
                                items: 3,
                            }
                        }
                    });
                });
            }));
        });
    }
    getAllProductLatest() {
        this.productService.getAllProductLatest().subscribe(listProduct => {
            this.listProductLatest = listProduct;
        });
    }
    addImageToProduct(listProduct) {
        listProduct.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            product.image = yield this.getAllImageByProduct(product);
        }));
    }
    search() {
        const name = this.searchForm.value.name;
        if (name != null) {
            if (name == '') {
                this.router.navigate(['/shop']);
            }
            else {
                this.productService.getAllProductByName(name).subscribe(listProduct => {
                    this.listProduct = listProduct;
                    this.addImageToProduct(this.listProduct);
                    this.totalProduct = listProduct.length;
                    this.router.navigate(['/shop'], { queryParams: { name: name } });
                });
            }
        }
    }
    previous() {
        this.page--;
        this.getAllProductUsingPagination(this.page, this.size);
    }
    hasPrevious() {
        return this.page > 0;
    }
    hasNext(totalPage) {
        return this.page < totalPage - 1;
    }
    next() {
        this.page++;
        this.getAllProductUsingPagination(this.page, this.size);
    }
    choosePage(page) {
        this.page = page;
        this.getAllProductUsingPagination(this.page, this.size);
    }
    isExistedInArray(find, arr) {
        let isExisted = false;
        for (let element of arr) {
            if (element == find) {
                isExisted = true;
            }
        }
        return isExisted;
    }
};
ShopComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_8__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.css */ "./src/app/user/shop/shop.component.css")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/user/shopping-cart/shopping-cart.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/user/shopping-cart/shopping-cart.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/shopping-cart/shopping-cart.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/user/shopping-cart/shopping-cart.component.ts ***!
  \***************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/warehouse-bill-detail/warehouse-bill-detail.service */ "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/shopping-cart/shopping-cart.service */ "./src/app/service/shopping-cart/shopping-cart.service.ts");
/* harmony import */ var _service_item_item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/item/item.service */ "./src/app/service/item/item.service.ts");
/* harmony import */ var _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/order-detail/order-detail.service */ "./src/app/service/order-detail/order-detail.service.ts");











let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(categoryService, activatedRoute, productService, warehouseBillDetailService, orderDetailService, authenticationService, shoppingCartService, itemService, router) {
        this.categoryService = categoryService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.warehouseBillDetailService = warehouseBillDetailService;
        this.orderDetailService = orderDetailService;
        this.authenticationService = authenticationService;
        this.shoppingCartService = shoppingCartService;
        this.itemService = itemService;
        this.router = router;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.discountForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.items = [];
        this.total = 0;
        this.getAllCategories();
        this.loadCart();
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
            this.getShoppingCartByUser(this.currentUser.id);
        });
        if (this.currentUser == null) {
            this.activatedRoute.params.subscribe((params) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var id = params['id'];
                if (id) {
                    const product = yield this.getProduct(id);
                    product.image = yield this.getAllImageByProduct(product);
                    var item = {
                        product: product,
                        quantity: 1
                    };
                    const sum = yield this.sumAmountInput(product.id);
                    if (sum == null) {
                        $(function () {
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000
                            });
                            Toast.fire({
                                type: 'error',
                                title: 'Mặt hàng này không còn vui lòng chọn mua sản phẩm khác'
                            });
                        });
                    }
                    else {
                        if (localStorage.getItem('cart') == null) {
                            let cart = [];
                            cart.push(JSON.stringify(item));
                            localStorage.setItem('cart', JSON.stringify(cart));
                        }
                        else {
                            this.addProductToCart(id, item);
                        }
                    }
                    this.loadCart();
                }
                else {
                    this.loadCart();
                }
            }));
        }
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.hero__categories__all').on('click', function () {
                $('.hero__categories ul').slideToggle(400);
            });
            var proQty = $('.pro-qty');
            proQty.on('click', '.qtybtn', function () {
                var $button = $(this);
                var oldValue = $button.parent().find('input').val();
                if ($button.hasClass('inc')) {
                    var newVal = parseFloat(oldValue) + 1;
                }
                else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    }
                    else {
                        newVal = 0;
                    }
                }
                $button.parent().find('input').val(newVal);
            });
        });
    }
    getShoppingCartByUser(id) {
        if (id == null) {
            this.loadCart();
        }
        else {
            this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
                this.shoppingCart = shoppingCart;
                this.shoppingCartService.getAllItemByShoppingCart(this.shoppingCart.id).subscribe(items => {
                    this.items = items;
                    items.map((item) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        item.product.image = yield this.getAllImageByProduct(item.product);
                    }));
                    this.sumTotalPrice();
                });
            });
        }
    }
    addItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    decreaseItemToShoppingCart(productId, shoppingCartId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let items = yield this.getAllItemInShoppingCart(shoppingCartId);
            this.itemService.decreaseItemToShoppingCart(items, productId);
            this.getShoppingCartByUser(this.currentUser.id);
        });
    }
    getAllItemInShoppingCart(id) {
        return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
    }
    sumAmountInput(id) {
        return this.warehouseBillDetailService.sumAmount(id).toPromise();
    }
    sumAmountOutput(id) {
        return this.orderDetailService.sumAmount(id).toPromise();
    }
    addProductToCart(id, item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let index = -1;
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                if (item.product.id == id) {
                    index = i;
                    break;
                }
            }
            let sumInput = yield this.sumAmountInput(item.product.id);
            let sumOutput = yield this.sumAmountOutput(item.product.id);
            if (sumOutput == null) {
                sumOutput = 0;
            }
            if (sumInput == null) {
                sumInput = 0;
            }
            if (sumInput - sumOutput <= 0) {
                $(function () {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    Toast.fire({
                        type: 'error',
                        title: 'Mặt hàng này không còn vui lòng chọn mua sản phẩm khác'
                    });
                });
            }
            else {
                if (index == -1) {
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    let item = JSON.parse(cart[index]);
                    item.quantity += 1;
                    cart[index] = JSON.stringify(item);
                    localStorage.setItem("cart", JSON.stringify(cart));
                }
                this.loadCart();
            }
        });
    }
    decreaseProduct(id, index) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let item = JSON.parse(cart[index]);
        item.quantity -= 1;
        if (item.quantity == 0) {
            this.remove(id);
        }
        else {
            cart[index] = JSON.stringify(item);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        this.loadCart();
    }
    getProduct(id) {
        return this.productService.getProduct(id).toPromise();
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    loadCart() {
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart != null) {
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                this.items.push({
                    product: item.product,
                    quantity: item.quantity
                });
            }
            this.sumTotalPrice();
        }
    }
    sumTotalPrice() {
        this.total = 0;
        for (let item of this.items) {
            this.total += (item.product.price * (1 - item.product.saleOff / 100)) * item.quantity;
        }
        return this.total;
    }
    remove(productId) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            if (item.product.id == productId) {
                cart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        this.loadCart();
    }
    removeItemFromCart(itemId) {
        this.itemService.deleteItem(itemId).subscribe(() => {
            this.getShoppingCartByUser(this.currentUser.id);
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Đã xóa 1 sản phẩm trong giỏ hàng'
                });
            });
        });
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
    { type: _service_warehouse_bill_detail_warehouse_bill_detail_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseBillDetailService"] },
    { type: _service_order_detail_order_detail_service__WEBPACK_IMPORTED_MODULE_10__["OrderDetailService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: _service_shopping_cart_shopping_cart_service__WEBPACK_IMPORTED_MODULE_8__["ShoppingCartService"] },
    { type: _service_item_item_service__WEBPACK_IMPORTED_MODULE_9__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/shopping-cart/shopping-cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/user/shopping-cart/shopping-cart.component.scss")).default]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/app/user/user-order/user-order.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/user/user-order/user-order.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1vcmRlci91c2VyLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/user-order/user-order.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/user/user-order/user-order.component.ts ***!
  \*********************************************************/
/*! exports provided: UserOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrderComponent", function() { return UserOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/category/category.service */ "./src/app/service/category/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_order_orders_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/order/orders.service */ "./src/app/service/order/orders.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_review_review_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/review/review.service */ "./src/app/service/review/review.service.ts");
/* harmony import */ var _service_date_date_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/date/date.service */ "./src/app/service/date/date.service.ts");










let UserOrderComponent = class UserOrderComponent {
    constructor(categoryService, router, ordersService, authenticationService, productService, reviewService, dateService, activatedRoute) {
        this.categoryService = categoryService;
        this.router = router;
        this.ordersService = ordersService;
        this.authenticationService = authenticationService;
        this.productService = productService;
        this.reviewService = reviewService;
        this.dateService = dateService;
        this.activatedRoute = activatedRoute;
        this.listCategory = [];
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        this.listProduct = [];
        this.listOrders = [];
        this.star = 0;
        this.getAllCategories();
        this.authenticationService.currentUser.subscribe(value => {
            this.currentUser = value;
        });
        this.activatedRoute.params.subscribe(params => {
            this.status = (/true/i).test(params['status']);
            this.getAllOrderByUserAndStatus(this.currentUser.id, this.status);
            if (this.status == true) {
                this.getAllProductUserBought(this.currentUser.id);
            }
        });
    }
    ngOnInit() {
    }
    getAllProductUserBought(id) {
        this.ordersService.getAllProductUserBought(id).subscribe(listProduct => {
            this.listProduct = listProduct;
            this.listProduct.map((product) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                product.image = yield this.getAllImageByProduct(product);
            }));
        });
    }
    getOrderId(id) {
        this.id = id;
    }
    deleteOrder(id) {
        this.ordersService.deleteOrders(id).subscribe(() => {
            this.ordersService.getAllOrder(false).subscribe(listOrder => {
                this.listOrders = listOrder;
                this.listOrders.map(order => order.createDate = new Date(order.createDate));
            });
            $(function () {
                $('#modal-delete').modal('hide');
            });
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'success',
                    title: 'Hủy đơn hàng thành công'
                });
            });
        }, () => {
            $(function () {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000
                });
                Toast.fire({
                    type: 'error',
                    title: 'Hủy đơn hàng thất bại'
                });
            });
        });
    }
    getAllOrderByUserAndStatus(id, status) {
        this.ordersService.getAllOrderByUserAndStatus(id, status).subscribe(listOrder => {
            this.listOrders = listOrder;
            this.listOrders.map(order => order.createDate = new Date(order.createDate));
        });
    }
    getAllCategories() {
        this.categoryService.getAllCategory().subscribe(listCategory => {
            this.listCategory = listCategory;
        });
    }
    getAllImageByProduct(product) {
        return this.productService.getAllImageByProduct(product.id).toPromise();
    }
    search() {
        const name = this.searchForm.value.name;
        this.router.navigate(['../shop'], { queryParams: { name: name } });
    }
};
UserOrderComponent.ctorParameters = () => [
    { type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_order_orders_service__WEBPACK_IMPORTED_MODULE_5__["OrdersService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _service_review_review_service__WEBPACK_IMPORTED_MODULE_8__["ReviewService"] },
    { type: _service_date_date_service__WEBPACK_IMPORTED_MODULE_9__["DateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
UserOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-order/user-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-order.component.scss */ "./src/app/user/user-order/user-order.component.scss")).default]
    })
], UserOrderComponent);



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/user/shop/shop.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/user/contact/contact.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/user/product-detail/product-detail.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/user/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/user/favorite/favorite.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/user/checkout/checkout.component.ts");
/* harmony import */ var _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-detail/category-detail.component */ "./src/app/user/category-detail/category-detail.component.ts");
/* harmony import */ var _user_order_user_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-order/user-order.component */ "./src/app/user/user-order/user-order.component.ts");
/* harmony import */ var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper/auth-guard */ "./src/app/helper/auth-guard.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/user/homepage/homepage.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/user/order-detail/order-detail.component.ts");














const routes = [
    {
        path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"]
    },
    {
        path: 'shop',
        component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    },
    {
        path: 'product/:id',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"]
    },
    {
        path: 'cart',
        component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"]
    },
    {
        path: 'favorite',
        component: _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_7__["FavoriteComponent"]
    },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]
    },
    {
        path: 'category/:id',
        component: _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_9__["CategoryDetailComponent"]
    },
    {
        path: 'order',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _user_order_user_order_component__WEBPACK_IMPORTED_MODULE_10__["UserOrderComponent"]
    },
    {
        path: 'order/:id/product',
        canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]],
        component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_13__["OrderDetailComponent"]
    }
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/user/shop/shop.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/user/product-detail/product-detail.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/user/contact/contact.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/user/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category-detail/category-detail.component */ "./src/app/user/category-detail/category-detail.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/user/checkout/checkout.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/user/favorite/favorite.component.ts");
/* harmony import */ var _user_order_user_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-order/user-order.component */ "./src/app/user/user-order/user-order.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/user/homepage/homepage.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/user/order-detail/order-detail.component.ts");
















let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _shop_shop_component__WEBPACK_IMPORTED_MODULE_4__["ShopComponent"],
            _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
            _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCartComponent"],
            _category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_8__["CategoryDetailComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"],
            _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_10__["FavoriteComponent"],
            _user_order_user_order_component__WEBPACK_IMPORTED_MODULE_11__["UserOrderComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_14__["HomepageComponent"],
            _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_15__["OrderDetailComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
        ],
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=user-user-module-es2015.js.map