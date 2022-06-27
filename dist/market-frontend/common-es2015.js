(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/service/date/date.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/date/date.service.ts ***!
  \**********************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateService = class DateService {
    constructor() {
    }
    convertDate(date) {
        let dateToString = '';
        let day = date.getUTCDate();
        let month = date.getUTCMonth() + 1;
        if (day > 0 && day < 10) {
            dateToString = '0' + day + '/';
        }
        else {
            dateToString = day + '/';
        }
        if (month > 0 && month < 10) {
            dateToString += '0' + month + '/';
        }
        else {
            dateToString += month + '/';
        }
        dateToString += date.getUTCFullYear();
        return dateToString;
    }
};
DateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DateService);



/***/ }),

/***/ "./src/app/service/product/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/product/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    getAllProduct() {
        return this.http.get(API_URL + '/products');
    }
    getAllProductInventory() {
        return this.http.get(API_URL + '/products/inventory');
    }
    getAllProductUsingPagination(page, size) {
        return this.http.get(`${API_URL}/products/pagination?page=${page}&size=${size}`);
    }
    createProduct(product) {
        return this.http.post(API_URL + '/products', product);
    }
    getProduct(id) {
        return this.http.get(API_URL + `/products/${id}`);
    }
    updateProduct(id, product) {
        return this.http.put(API_URL + `/products/${id}`, product);
    }
    deleteProduct(id) {
        return this.http.delete(API_URL + `/products/${id}`);
    }
    getAllImageByProduct(id) {
        return this.http.get(API_URL + `/products/${id}/images`);
    }
    getAllProductHasSaleOffGreaterThanZero() {
        return this.http.get(API_URL + `/products/sale-off`);
    }
    getAllProductLatest() {
        return this.http.get(API_URL + `/products/latest`);
    }
    getAllProductByName(name) {
        return this.http.get(API_URL + '/products/search?name=' + name);
    }
    getAllReviewByProduct(id) {
        return this.http.get(API_URL + `/products/${id}/reviews`);
    }
    getAllProductBestSell() {
        return this.http.get(API_URL + `/products/best-sell`);
    }
    getAllProductMostLiked() {
        return this.http.get(API_URL + `/products/most-liked`);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/service/warehouse-bill-detail/warehouse-bill-detail.service.ts ***!
  \********************************************************************************/
/*! exports provided: WarehouseBillDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseBillDetailService", function() { return WarehouseBillDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let WarehouseBillDetailService = class WarehouseBillDetailService {
    constructor(http) {
        this.http = http;
    }
    getAllWarehouseBillDetail() {
        return this.http.get(API_URL + '/warehouse-bill-details');
    }
    createWarehouseBillDetail(warehouseBillDetail) {
        return this.http.post(API_URL + '/warehouse-bill-details', warehouseBillDetail);
    }
    getWarehouseBillDetail(id) {
        return this.http.get(API_URL + `/warehouse-bill-details/${id}`);
    }
    updateWarehouseBillDetail(id, warehouseBillDetail) {
        return this.http.put(API_URL + `/warehouse-bill-details/${id}`, warehouseBillDetail);
    }
    deleteWarehouseBillDetail(id) {
        return this.http.delete(API_URL + `/warehouse-bill-details/${id}`);
    }
    sumAmount(id) {
        return this.http.get(API_URL + `/warehouse-bill-details/${id}/sum`);
    }
};
WarehouseBillDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
WarehouseBillDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WarehouseBillDetailService);



/***/ }),

/***/ "./src/app/service/warehouse/warehouse.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/warehouse/warehouse.service.ts ***!
  \********************************************************/
/*! exports provided: WarehouseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseService", function() { return WarehouseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}`;
let WarehouseService = class WarehouseService {
    constructor(http) {
        this.http = http;
    }
    getAllWarehouse() {
        return this.http.get(API_URL + '/warehouses');
    }
    createWarehouse(warehouse) {
        return this.http.post(API_URL + '/warehouses', warehouse);
    }
    getWarehouse(id) {
        return this.http.get(API_URL + `/warehouses/${id}`);
    }
    updateWarehouse(id, warehouse) {
        return this.http.put(API_URL + `/warehouses/${id}`, warehouse);
    }
    deleteWarehouse(id) {
        return this.http.delete(API_URL + `/warehouses/${id}`);
    }
    getAllProductInventoryByWarehouse(id) {
        return this.http.get(API_URL + `/warehouses/${id}/products`);
    }
};
WarehouseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WarehouseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WarehouseService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map