(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bill-bill-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/create-bill-detail/create-bill-detail.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/create-bill-detail/create-bill-detail.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thêm mới chi tiết phiếu xuất</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Thêm mới chi tiết phiếu xuất</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"billDetailForm\" (ngSubmit)=\"createBillDetail()\" id=\"bill-detail-form\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin chi tiết phiếu xuất</h3>\n\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"product\">Sản phẩm</label>\n          <select class=\"form-control select2 select2-primary\" id=\"product\" name=\"product\"\n                  data-dropdown-css-class=\"select2-primary\"\n                  style=\"width: 100%;\">\n            <option [ngValue]=\"null\">Chọn sản phẩm</option>\n            <option *ngFor=\"let product of listProduct\" [value]=\"product.id\">{{product.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Số lượng</label>\n          <input type=\"number\" id=\"inputName\" class=\"form-control\" formControlName=\"amount\" name=\"amount\">\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/admin/bills/info/{{id}}\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Tạo mới\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/create-bill/create-bill.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/create-bill/create-bill.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thêm phiếu xuất</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Thêm phiếu xuất</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"billForm\" (ngSubmit)=\"createBill()\" id=\"bill-form\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin phiếu xuất</h3>\n\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"code\">Mã phiếu xuất</label>\n          <input type=\"text\" id=\"code\" class=\"form-control\" formControlName=\"code\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"warehouse\">Nhà kho</label>\n          <select class=\"form-control\" id=\"warehouse\" name=\"warehouse\" formControlName=\"warehouse\">\n            <option [ngValue]=\"null\">Nhà kho</option>\n            <option *ngFor=\"let warehouse of listWarehouse\" [value]=\"warehouse.id\">{{warehouse.name}}</option>\n          </select>\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/admin/bills\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Tạo mới\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Cập nhật chi tiết phiếu xuất kho</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Cập nhật chi tiết phiếu xuất kho</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"billDetailForm\" (ngSubmit)=\"updateBillDetail(detailId)\" id=\"bill-detail-form\"\n        *ngIf=\"currentBillDetail != null\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin chi tiết phiếu xuất kho</h3>\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"product\">Sản phẩm</label>\n          <select class=\"form-control select2 select2-primary\" id=\"product\" name=\"product\"\n                  data-dropdown-css-class=\"select2-primary\" *ngIf=\"currentBillDetail.product!=null\"\n                  style=\"width: 100%;\">\n            <option [ngValue]=\"null\">Chọn sản phẩm</option>\n            <option *ngFor=\"let product of listProduct\" [value]=\"product.id\"\n                    [selected]=\"currentBillDetail.product.id == product.id\">{{product.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Số lượng</label>\n          <input type=\"number\" id=\"inputName\" class=\"form-control\" [value]=\"currentBillDetail.amount\"\n                 formControlName=\"amount\" name=\"amount\">\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/admin/bills/info/{{id}}\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Cập nhật\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/edit-bill/edit-bill.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/edit-bill/edit-bill.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Content Header (Page header) -->\n<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Cập nhật phiếu xuất kho</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Cập nhật phiếu xuất kho</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n  <form [formGroup]=\"billForm\" (ngSubmit)=\"updateBill(id)\" *ngIf=\"currentBill != null\">\n    <div class=\"card card-secondary\">\n      <div class=\"card-header\">\n        <h3 class=\"card-title\">Thông tin phiếu xuất kho</h3>\n        <div class=\"card-tools\">\n          <button type=\"button\" class=\"btn btn-tool\" data-card-widget=\"collapse\" data-toggle=\"tooltip\"\n                  title=\"Collapse\">\n            <i class=\"fas fa-minus\"></i></button>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"code\">Mã phiếu xuất</label>\n          <input type=\"text\" id=\"code\" [value]=\"currentBill.code\"\n                 disabled class=\"form-control\" formControlName=\"code\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"warehouse\">Nhà kho</label>\n          <select class=\"form-control\" id=\"warehouse\" name=\"warehouse\" formControlName=\"warehouse\"\n                  *ngIf=\"currentBill.warehouse!=null\">\n            <option [ngValue]=\"null\">Nhà kho</option>\n            <option *ngFor=\"let warehouse of listWarehouse\" [value]=\"warehouse.id\"\n                    [selected]=\"warehouse.id == currentBill.warehouse.id\">{{warehouse.name}}</option>\n          </select>\n        </div>\n      </div>\n      <!-- /.card-body -->\n    </div>\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <a routerLink=\"/admin/bills\" class=\"btn btn-secondary\">Hủy</a>\n        <input type=\"submit\" value=\"Cập nhật\" class=\"btn btn-success float-right\">\n      </div>\n    </div>\n  </form>\n</section>\n<!-- /.content -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/info-bill/info-bill.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/info-bill/info-bill.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Thông tin chi tiết hóa đơn xuất</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Chi tiết hóa đơn xuất</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\" *ngIf=\"currentBill != null\">\n\n  <!-- Default box -->\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\">Phiếu xuất {{currentBill.code}}</h3>\n\n      <div class=\"card-tools\">\n        <a routerLink=\"create\" class=\"btn btn-primary float-lg-right\">\n          Tạo mới\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-bill-detail\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Tên sản phẩm</th>\n          <th>Số lượng</th>\n          <th style=\"width: 160px\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let billDetail of listBillDetail; index as i\">\n          <td>{{i + 1}}</td>\n          <td *ngIf=\"billDetail.product!=null\">{{billDetail.product.name}}</td>\n          <td>{{billDetail.amount}}</td>\n          <td>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <a [routerLink]=\"['edit',billDetail.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\n                  <i class=\"fas fa-edit\"></i>\n                </a>\n              </div>\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                        data-target=\"#modal-delete\" (click)=\"getBillDetailId(billDetail.id)\">\n                  <i class=\"fas fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n    <!-- /.card-body -->\n  </div>\n  <!-- /.card -->\n  <div class=\"modal fade\" id=\"modal-delete\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Xóa chi tiết phiếu xuất</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bạn có chắc muốn xóa chi tiết phiếu nhập này</p>\n        </div>\n        <div class=\"modal-footer justify-content-between\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteBillDetail()\">Xóa</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/list-bill/list-bill.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/list-bill/list-bill.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\n  <div class=\"container-fluid\">\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-6\">\n        <h1>Danh sách phiếu xuất kho</h1>\n      </div>\n      <div class=\"col-sm-6\">\n        <ol class=\"breadcrumb float-sm-right\">\n          <li class=\"breadcrumb-item\"><a routerLink=\"/admin\">Trang chủ</a></li>\n          <li class=\"breadcrumb-item active\">Danh sách phiếu xuất kho</li>\n        </ol>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</section>\n\n<section class=\"content\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <h3 class=\"card-title\"></h3>\n      <div class=\"card-tools\">\n        <a routerLink=\"create\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-primary float-lg-right\">\n          Tạo mới\n        </a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <table class=\"table table-bordered\" id=\"table-bill\">\n        <thead>\n        <tr>\n          <th style=\"width: 10px\">#</th>\n          <th>Mã phiếu xuất</th>\n          <th>Ngày tạo</th>\n          <th>Kho</th>\n          <th style=\"width: 160px\" *ngIf=\"hasRoleAdmin\"></th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let bill of bills; index as i\">\n          <td>{{i + 1}}</td>\n          <td>\n            <a [routerLink]=\"['info',bill.id]\">{{bill.code}}</a>\n          </td>\n          <td>{{dateService.convertDate(bill.createDate)}}</td>\n          <td *ngIf=\"bill.warehouse!=null\">{{bill.warehouse.name}}</td>\n          <td *ngIf=\"hasRoleAdmin\">\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <a [routerLink]=\"['edit',bill.id]\" class=\"btn btn-block btn-primary\" style=\"color: white\">\n                  <i class=\"fas fa-edit\"></i>\n                </a>\n              </div>\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\n                        data-target=\"#modal-delete\" (click)=\"getBillId(bill.id)\">\n                  <i class=\"fas fa-trash\"></i>\n                </button>\n              </div>\n            </div>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"modal-delete\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Xóa phiếu xuất kho</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Bạn có chắc muốn xóa phiếu xuất kho này</p>\n        </div>\n        <div class=\"modal-footer justify-content-between\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteBill()\">Xóa</button>\n        </div>\n      </div>\n      <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/admin/bill/bill-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/bill/bill-routing.module.ts ***!
  \***************************************************/
/*! exports provided: BillRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillRoutingModule", function() { return BillRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_bill_list_bill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-bill/list-bill.component */ "./src/app/admin/bill/list-bill/list-bill.component.ts");
/* harmony import */ var _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-bill/create-bill.component */ "./src/app/admin/bill/create-bill/create-bill.component.ts");
/* harmony import */ var _edit_bill_edit_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-bill/edit-bill.component */ "./src/app/admin/bill/edit-bill/edit-bill.component.ts");
/* harmony import */ var _info_bill_info_bill_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-bill/info-bill.component */ "./src/app/admin/bill/info-bill/info-bill.component.ts");
/* harmony import */ var _create_bill_detail_create_bill_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-bill-detail/create-bill-detail.component */ "./src/app/admin/bill/create-bill-detail/create-bill-detail.component.ts");
/* harmony import */ var _edit_bill_detail_edit_bill_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-bill-detail/edit-bill-detail.component */ "./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.ts");









const routes = [
    {
        path: '',
        component: _list_bill_list_bill_component__WEBPACK_IMPORTED_MODULE_3__["ListBillComponent"],
    },
    {
        path: 'create',
        component: _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_4__["CreateBillComponent"],
    },
    {
        path: 'edit/:id',
        component: _edit_bill_edit_bill_component__WEBPACK_IMPORTED_MODULE_5__["EditBillComponent"],
    },
    {
        path: 'info/:id',
        component: _info_bill_info_bill_component__WEBPACK_IMPORTED_MODULE_6__["InfoBillComponent"],
    },
    {
        path: 'info/:id/create',
        component: _create_bill_detail_create_bill_detail_component__WEBPACK_IMPORTED_MODULE_7__["CreateBillDetailComponent"],
    },
    {
        path: 'info/:id/edit/:detailId',
        component: _edit_bill_detail_edit_bill_detail_component__WEBPACK_IMPORTED_MODULE_8__["EditBillDetailComponent"],
    },
];
let BillRoutingModule = class BillRoutingModule {
};
BillRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BillRoutingModule);



/***/ }),

/***/ "./src/app/admin/bill/bill.module.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/bill/bill.module.ts ***!
  \*******************************************/
/*! exports provided: BillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillModule", function() { return BillModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bill_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-routing.module */ "./src/app/admin/bill/bill-routing.module.ts");
/* harmony import */ var _list_bill_list_bill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-bill/list-bill.component */ "./src/app/admin/bill/list-bill/list-bill.component.ts");
/* harmony import */ var _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-bill/create-bill.component */ "./src/app/admin/bill/create-bill/create-bill.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _edit_bill_edit_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-bill/edit-bill.component */ "./src/app/admin/bill/edit-bill/edit-bill.component.ts");
/* harmony import */ var _info_bill_info_bill_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./info-bill/info-bill.component */ "./src/app/admin/bill/info-bill/info-bill.component.ts");
/* harmony import */ var _create_bill_detail_create_bill_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-bill-detail/create-bill-detail.component */ "./src/app/admin/bill/create-bill-detail/create-bill-detail.component.ts");
/* harmony import */ var _edit_bill_detail_edit_bill_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./edit-bill-detail/edit-bill-detail.component */ "./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.ts");











let BillModule = class BillModule {
};
BillModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_bill_list_bill_component__WEBPACK_IMPORTED_MODULE_4__["ListBillComponent"], _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_5__["CreateBillComponent"], _edit_bill_edit_bill_component__WEBPACK_IMPORTED_MODULE_7__["EditBillComponent"], _info_bill_info_bill_component__WEBPACK_IMPORTED_MODULE_8__["InfoBillComponent"], _create_bill_detail_create_bill_detail_component__WEBPACK_IMPORTED_MODULE_9__["CreateBillDetailComponent"], _edit_bill_detail_edit_bill_detail_component__WEBPACK_IMPORTED_MODULE_10__["EditBillDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _bill_routing_module__WEBPACK_IMPORTED_MODULE_3__["BillRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], BillModule);



/***/ }),

/***/ "./src/app/admin/bill/create-bill-detail/create-bill-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/bill/create-bill-detail/create-bill-detail.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JpbGwvY3JlYXRlLWJpbGwtZGV0YWlsL2NyZWF0ZS1iaWxsLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/bill/create-bill-detail/create-bill-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/bill/create-bill-detail/create-bill-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateBillDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBillDetailComponent", function() { return CreateBillDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_bill_detail_bill_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/bill-detail/bill-detail.service */ "./src/app/service/bill-detail/bill-detail.service.ts");






let productId = null;
let CreateBillDetailComponent = class CreateBillDetailComponent {
    constructor(billDetailService, activatedRoute, productService) {
        this.billDetailService = billDetailService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.billDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0)
        });
        this.listProduct = [];
        this.id = -1;
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.id = +paramMap.get('id');
        });
    }
    ngOnInit() {
        this.getAllProduct();
        $(document).ready(function () {
            $('.select2').select2();
            $('#product').on('select2:select', function (e, source) {
                productId = $(e.currentTarget).val();
            });
            $('#bill-detail-form').validate({
                rules: {
                    product: {
                        required: true
                    },
                    amount: {
                        required: true
                    }
                },
                messages: {
                    product: {
                        required: 'Hãy chọn sản phẩm',
                        amount: 'nhập số lượng'
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
    getAllProduct() {
        this.productService.getAllProduct().subscribe(listProduct => {
            this.listProduct = listProduct;
        });
    }
    createBillDetail() {
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.id = +paramMap.get('id');
            const billDetail = {
                product: {
                    id: productId
                },
                amount: this.billDetailForm.value.amount,
                bill: {
                    id: this.id
                }
            };
            if (billDetail.amount !== 0) {
                return this.billDetailService.createBillDetail(billDetail).subscribe(() => {
                    this.billDetailForm.reset();
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
                        title: 'Tạo mới thất bại'
                    });
                });
            }
        });
    }
};
CreateBillDetailComponent.ctorParameters = () => [
    { type: _service_bill_detail_bill_detail_service__WEBPACK_IMPORTED_MODULE_5__["BillDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
CreateBillDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-bill-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-bill-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/create-bill-detail/create-bill-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-bill-detail.component.scss */ "./src/app/admin/bill/create-bill-detail/create-bill-detail.component.scss")).default]
    })
], CreateBillDetailComponent);



/***/ }),

/***/ "./src/app/admin/bill/create-bill/create-bill.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/admin/bill/create-bill/create-bill.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JpbGwvY3JlYXRlLWJpbGwvY3JlYXRlLWJpbGwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/bill/create-bill/create-bill.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/bill/create-bill/create-bill.component.ts ***!
  \*****************************************************************/
/*! exports provided: CreateBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBillComponent", function() { return CreateBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/bill/bill.service */ "./src/app/service/bill/bill.service.ts");
/* harmony import */ var _service_warehouse_warehouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/warehouse/warehouse.service */ "./src/app/service/warehouse/warehouse.service.ts");





let CreateBillComponent = class CreateBillComponent {
    constructor(billService, warehouseService) {
        this.billService = billService;
        this.warehouseService = warehouseService;
        this.billForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            warehouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.listWarehouse = [];
    }
    ngOnInit() {
        this.getAllWarehouse();
        $(document).ready(function () {
            $('#bill-form').validate({
                rules: {
                    warehouse: {
                        required: true
                    },
                    code: {
                        required: true
                    }
                },
                messages: {
                    warehouse: {
                        required: 'Hãy chọn kho'
                    },
                    code: {
                        required: 'Hãy nhập mã phiếu xuất'
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
    getAllWarehouse() {
        this.warehouseService.getAllWarehouse().subscribe(listWarehouse => {
            this.listWarehouse = listWarehouse;
        });
    }
    createBill() {
        const bill = {
            warehouse: {
                id: this.billForm.value.warehouse
            },
            code: this.billForm.value.code
        };
        if (bill.warehouse !== null && bill.code !== null) {
            return this.billService.createBill(bill).subscribe(() => {
                this.billForm.reset();
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
                    title: 'Tạo mới thất bại'
                });
            });
        }
    }
};
CreateBillComponent.ctorParameters = () => [
    { type: _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_3__["BillService"] },
    { type: _service_warehouse_warehouse_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseService"] }
];
CreateBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/create-bill/create-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-bill.component.scss */ "./src/app/admin/bill/create-bill/create-bill.component.scss")).default]
    })
], CreateBillComponent);



/***/ }),

/***/ "./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JpbGwvZWRpdC1iaWxsLWRldGFpbC9lZGl0LWJpbGwtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditBillDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBillDetailComponent", function() { return EditBillDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/product/product.service */ "./src/app/service/product/product.service.ts");
/* harmony import */ var _service_bill_detail_bill_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/bill-detail/bill-detail.service */ "./src/app/service/bill-detail/bill-detail.service.ts");






let productId = null;
let EditBillDetailComponent = class EditBillDetailComponent {
    constructor(activatedRoute, billDetailService, productService) {
        this.activatedRoute = activatedRoute;
        this.billDetailService = billDetailService;
        this.productService = productService;
        this.billDetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0)
        });
        this.listProduct = [];
        this.activatedRoute.paramMap.subscribe((paramMap) => {
            this.id = +paramMap.get('id');
        });
    }
    ngOnInit() {
        $(document).ready(function () {
            $('.select2').select2();
            $('#product').on('select2:select', function (e, source) {
                productId = $(e.currentTarget).val();
            });
            $('#bill-detail-form').validate({
                rules: {
                    amount: {
                        required: true
                    },
                },
                messages: {
                    amount: {
                        required: 'Hãy nhập số lượng'
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
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.detailId = +paramMap.get('detailId');
            this.currentBillDetail = yield this.getBillDetail(this.detailId);
        }));
        this.getAllProduct();
    }
    getAllProduct() {
        this.productService.getAllProduct().subscribe(listProduct => {
            this.listProduct = listProduct;
        });
    }
    getBillDetail(id) {
        return this.billDetailService.getBillDetail(id).toPromise();
    }
    updateBillDetail(id) {
        const billDetail = {
            bill: {
                id: this.id
            },
            product: {
                id: productId === null ? this.currentBillDetail.product.id : productId,
            },
            amount: this.billDetailForm.value.amount
        };
        this.billDetailService.updateBillDetail(id, billDetail).subscribe(() => {
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
EditBillDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_bill_detail_bill_detail_service__WEBPACK_IMPORTED_MODULE_5__["BillDetailService"] },
    { type: _service_product_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
EditBillDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-bill-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-bill-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-bill-detail.component.scss */ "./src/app/admin/bill/edit-bill-detail/edit-bill-detail.component.scss")).default]
    })
], EditBillDetailComponent);



/***/ }),

/***/ "./src/app/admin/bill/edit-bill/edit-bill.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/bill/edit-bill/edit-bill.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JpbGwvZWRpdC1iaWxsL2VkaXQtYmlsbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/bill/edit-bill/edit-bill.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/bill/edit-bill/edit-bill.component.ts ***!
  \*************************************************************/
/*! exports provided: EditBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBillComponent", function() { return EditBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_warehouse_warehouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/warehouse/warehouse.service */ "./src/app/service/warehouse/warehouse.service.ts");
/* harmony import */ var _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/bill/bill.service */ "./src/app/service/bill/bill.service.ts");






let EditBillComponent = class EditBillComponent {
    constructor(activatedRoute, billService, warehouseService) {
        this.activatedRoute = activatedRoute;
        this.billService = billService;
        this.warehouseService = warehouseService;
        this.billForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            warehouse: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.listWarehouse = [];
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#bill-form').validate({
                rules: {
                    warehouse: {
                        required: true
                    },
                    code: {
                        required: true
                    }
                },
                messages: {
                    warehouse: {
                        required: 'Hãy chọn kho'
                    },
                    code: {
                        required: 'Hãy nhập mã phiếu xuất'
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
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.currentBill = yield this.getBill(this.id);
        }));
        this.getAllWarehouse();
    }
    getAllWarehouse() {
        this.warehouseService.getAllWarehouse().subscribe(listWarehouse => {
            this.listWarehouse = listWarehouse;
        });
    }
    getBill(id) {
        return this.billService.getBill(id).toPromise();
    }
    updateBill(id) {
        const bill = {
            createDate: this.currentBill.createDate,
            warehouse: {
                id: this.billForm.value.warehouse === null ? this.currentBill.warehouse.id : this.billForm.value.warehouse,
            },
            code: this.currentBill.code
        };
        this.billService.updateBill(id, bill).subscribe(() => {
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
EditBillComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_5__["BillService"] },
    { type: _service_warehouse_warehouse_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseService"] }
];
EditBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/edit-bill/edit-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-bill.component.scss */ "./src/app/admin/bill/edit-bill/edit-bill.component.scss")).default]
    })
], EditBillComponent);



/***/ }),

/***/ "./src/app/admin/bill/info-bill/info-bill.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/bill/info-bill/info-bill.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JpbGwvaW5mby1iaWxsL2luZm8tYmlsbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/bill/info-bill/info-bill.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/bill/info-bill/info-bill.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBillComponent", function() { return InfoBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/bill/bill.service */ "./src/app/service/bill/bill.service.ts");
/* harmony import */ var _service_bill_detail_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/bill-detail/bill-detail.service */ "./src/app/service/bill-detail/bill-detail.service.ts");





let InfoBillComponent = class InfoBillComponent {
    constructor(activatedRoute, billService, billDetailService) {
        this.activatedRoute = activatedRoute;
        this.billService = billService;
        this.billDetailService = billDetailService;
        this.sub = this.activatedRoute.paramMap.subscribe((paramMap) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.id = +paramMap.get('id');
            this.currentBill = yield this.getBill(this.id);
            this.getAllBillDetailByBill(this.currentBill);
        }));
    }
    ngOnInit() {
    }
    getBill(id) {
        return this.billService.getBill(id).toPromise();
    }
    getBillDetailId(id) {
        this.detailId = id;
    }
    deleteBillDetail() {
        this.billDetailService.deleteBillDetail(this.detailId).subscribe(() => {
            this.billService.getAllBillDetail(this.id).subscribe(listBillDetail => {
                this.listBillDetail = listBillDetail;
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
    getAllBillDetailByBill(bill) {
        this.billService.getAllBillDetail(bill.id).subscribe(listBillDetail => {
            this.listBillDetail = listBillDetail;
            $(function () {
                $('#table-bill-detail').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                });
            });
        });
    }
};
InfoBillComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_3__["BillService"] },
    { type: _service_bill_detail_bill_detail_service__WEBPACK_IMPORTED_MODULE_4__["BillDetailService"] }
];
InfoBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/info-bill/info-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-bill.component.scss */ "./src/app/admin/bill/info-bill/info-bill.component.scss")).default]
    })
], InfoBillComponent);



/***/ }),

/***/ "./src/app/admin/bill/list-bill/list-bill.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/admin/bill/list-bill/list-bill.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2JpbGwvbGlzdC1iaWxsL2xpc3QtYmlsbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/bill/list-bill/list-bill.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/bill/list-bill/list-bill.component.ts ***!
  \*************************************************************/
/*! exports provided: ListBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBillComponent", function() { return ListBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/bill/bill.service */ "./src/app/service/bill/bill.service.ts");
/* harmony import */ var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/auth/authentication.service */ "./src/app/service/auth/authentication.service.ts");
/* harmony import */ var _service_date_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/date/date.service */ "./src/app/service/date/date.service.ts");





let ListBillComponent = class ListBillComponent {
    constructor(billService, dateService, authenticationService) {
        this.billService = billService;
        this.dateService = dateService;
        this.authenticationService = authenticationService;
        this.bills = [];
        this.hasRoleAdmin = false;
        this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
        if (this.currentUser) {
            const roleList = this.currentUser.roles;
            for (const role of roleList) {
                if (role.authority === 'ROLE_ADMIN') {
                    this.hasRoleAdmin = true;
                }
            }
        }
    }
    ngOnInit() {
        this.getAllBill();
    }
    getBillId(id) {
        this.id = id;
    }
    deleteBill() {
        this.billService.deleteBill(this.id).subscribe(() => {
            this.billService.getAllBill().subscribe(bills => {
                this.bills = bills;
                this.bills.map(bill => bill.createDate = new Date(bill.createDate));
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
    getAllBill() {
        this.billService.getAllBill().subscribe(bills => {
            this.bills = bills;
            this.bills.map(bill => bill.createDate = new Date(bill.createDate));
            $(function () {
                $('#table-bill').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                });
            });
        });
    }
};
ListBillComponent.ctorParameters = () => [
    { type: _service_bill_bill_service__WEBPACK_IMPORTED_MODULE_2__["BillService"] },
    { type: _service_date_date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"] },
    { type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ListBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/bill/list-bill/list-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-bill.component.scss */ "./src/app/admin/bill/list-bill/list-bill.component.scss")).default]
    })
], ListBillComponent);



/***/ }),

/***/ "./src/app/service/bill-detail/bill-detail.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/bill-detail/bill-detail.service.ts ***!
  \************************************************************/
/*! exports provided: BillDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillDetailService", function() { return BillDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let BillDetailService = class BillDetailService {
    constructor(http) {
        this.http = http;
    }
    getAllBillDetail() {
        return this.http.get(API_URL + '/bill-details');
    }
    createBillDetail(billDetail) {
        return this.http.post(API_URL + '/bill-details', billDetail);
    }
    getBillDetail(id) {
        return this.http.get(API_URL + `/bill-details/${id}`);
    }
    updateBillDetail(id, billDetail) {
        return this.http.put(API_URL + `/bill-details/${id}`, billDetail);
    }
    deleteBillDetail(id) {
        return this.http.delete(API_URL + `/bill-details/${id}`);
    }
};
BillDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BillDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BillDetailService);



/***/ }),

/***/ "./src/app/service/bill/bill.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/bill/bill.service.ts ***!
  \**********************************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let BillService = class BillService {
    constructor(http) {
        this.http = http;
    }
    getAllBill() {
        return this.http.get(API_URL + '/bills');
    }
    createBill(bill) {
        return this.http.post(API_URL + '/bills', bill);
    }
    getBill(id) {
        return this.http.get(API_URL + `/bills/${id}`);
    }
    updateBill(id, bill) {
        return this.http.put(API_URL + `/bills/${id}`, bill);
    }
    deleteBill(id) {
        return this.http.delete(API_URL + `/bills/${id}`);
    }
    getAllBillDetail(id) {
        return this.http.get(API_URL + `/bills/${id}` + `/bill-details`);
    }
};
BillService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BillService);



/***/ })

}]);
//# sourceMappingURL=bill-bill-module-es2015.js.map