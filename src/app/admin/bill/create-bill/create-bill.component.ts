import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Warehouse} from "../../../model/warehouse";
import {BillService} from "../../../service/bill/bill.service";
import {WarehouseService} from "../../../service/warehouse/warehouse.service";
import {Bill} from "../../../model/bill";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.scss']
})
export class CreateBillComponent implements OnInit {
  billForm: FormGroup = new FormGroup({
    code: new FormControl(),
    warehouse: new FormControl()
  });
  listWarehouse: Warehouse[] = [];

  constructor(private billService: BillService,
              private warehouseService: WarehouseService) {
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
    })
  }

  createBill() {
    const bill: Bill = {
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
  }

}
