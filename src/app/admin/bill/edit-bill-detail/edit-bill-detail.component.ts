import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Product} from "../../../model/product";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../../service/product/product.service";
import {BillDetail} from "../../../model/bill-detail";
import {BillDetailService} from "../../../service/bill-detail/bill-detail.service";

declare var $: any;
declare var Swal: any;
let productId: number = null;

@Component({
  selector: 'app-edit-bill-detail',
  templateUrl: './edit-bill-detail.component.html',
  styleUrls: ['./edit-bill-detail.component.scss']
})
export class EditBillDetailComponent implements OnInit {
  billDetailForm: FormGroup = new FormGroup({
    amount: new FormControl(0)
  });
  currentBillDetail: BillDetail;
  id: number;
  detailId: number;
  sub: Subscription
  listProduct: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private billDetailService: BillDetailService,
              private productService: ProductService,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
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
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.detailId = +paramMap.get('detailId')
      this.currentBillDetail = await this.getBillDetail(this.detailId);
    })
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(listProduct => {
      this.listProduct = listProduct;
    })
  }

  getBillDetail(id: number) {
    return this.billDetailService.getBillDetail(id).toPromise();
  }

  updateBillDetail(id: number) {
    const billDetail: BillDetail = {
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
}
