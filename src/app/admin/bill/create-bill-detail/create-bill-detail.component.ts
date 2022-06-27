import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../../model/product";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../../service/product/product.service";
import {BillDetailService} from "../../../service/bill-detail/bill-detail.service";
import {BillDetail} from "../../../model/bill-detail";

declare var $: any;
declare var Swal: any;
let productId: number = null;

@Component({
  selector: 'app-create-bill-detail',
  templateUrl: './create-bill-detail.component.html',
  styleUrls: ['./create-bill-detail.component.scss']
})
export class CreateBillDetailComponent implements OnInit {
  billDetailForm: FormGroup = new FormGroup({
    amount: new FormControl(0)
  });
  listProduct: Product[] = [];
  sub: Subscription;
  id: number = -1;

  constructor(private billDetailService: BillDetailService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
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
    })
  }

  createBillDetail() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const billDetail: BillDetail = {
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
      } else {
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
    })
  }
}
