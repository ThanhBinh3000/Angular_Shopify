import {Component, OnInit} from '@angular/core';
import {WarehouseBill} from "../../../model/warehouse-bill";
import {WarehouseBillDetail} from "../../../model/warehouse-bill-detail";
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {WarehouseBillService} from "../../../service/warehouse-bill/warehouse-bill.service";
import {WarehouseBillDetailService} from "../../../service/warehouse-bill-detail/warehouse-bill-detail.service";
import {Bill} from "../../../model/bill";
import {BillDetail} from "../../../model/bill-detail";
import {BillService} from "../../../service/bill/bill.service";
import {BillDetailService} from "../../../service/bill-detail/bill-detail.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-info-bill',
  templateUrl: './info-bill.component.html',
  styleUrls: ['./info-bill.component.scss']
})
export class InfoBillComponent implements OnInit {
  currentBill: Bill;
  listBillDetail: BillDetail[];
  sub: Subscription;
  id: number;
  detailId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private billService: BillService,
              private billDetailService: BillDetailService) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentBill = await this.getBill(this.id);
      this.getAllBillDetailByBill(this.currentBill);
    })
  }

  ngOnInit() {
  }

  getBill(id: number) {
    return this.billService.getBill(id).toPromise();
  }

  getBillDetailId(id: number) {
    this.detailId = id;
  }

  deleteBillDetail() {
    this.billDetailService.deleteBillDetail(this.detailId).subscribe(() => {
      this.billService.getAllBillDetail(this.id).subscribe(listBillDetail => {
        this.listBillDetail = listBillDetail;
      })
      $(function () {
        $('#modal-delete').modal('hide');
      })
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
    })
  }


  getAllBillDetailByBill(bill: Bill) {
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
    })
  }

}
