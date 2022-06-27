import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Warehouse} from "../../../model/warehouse";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {WarehouseService} from "../../../service/warehouse/warehouse.service";
import {Bill} from "../../../model/bill";
import {BillService} from "../../../service/bill/bill.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {
  billForm: FormGroup = new FormGroup({
    warehouse: new FormControl(),
    code: new FormControl()
  });
  currentBill: Bill;
  id: number;
  sub: Subscription
  listWarehouse: Warehouse[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private billService: BillService,
              private warehouseService: WarehouseService) {
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
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentBill = await this.getBill(this.id);
    });
    this.getAllWarehouse();
  }

  getAllWarehouse() {
    this.warehouseService.getAllWarehouse().subscribe(listWarehouse => {
      this.listWarehouse = listWarehouse;
    })
  }

  getBill(id: number) {
    return this.billService.getBill(id).toPromise();
  }

  updateBill(id: number) {
    const bill: Bill = {
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

}
