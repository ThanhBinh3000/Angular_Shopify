import {Component, OnInit} from '@angular/core';
import {BillService} from "../../../service/bill/bill.service";
import {Bill} from "../../../model/bill";
import {UserToken} from "../../../model/user-token";
import {AuthenticationService} from "../../../service/auth/authentication.service";
import {DateService} from "../../../service/date/date.service";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-bill',
  templateUrl: './list-bill.component.html',
  styleUrls: ['./list-bill.component.scss']
})
export class ListBillComponent implements OnInit {
  bills: Bill[] = [];
  currentUser: UserToken;
  hasRoleAdmin = false;
  id: number;

  constructor(private billService: BillService,
              public dateService: DateService,
              private authenticationService: AuthenticationService) {
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

  getBillId(id: number) {
    this.id = id;
  }

  deleteBill() {
    this.billService.deleteBill(this.id).subscribe(() => {
      this.billService.getAllBill().subscribe(bills => {
        this.bills = bills;
        this.bills.map(bill => bill.createDate = new Date(bill.createDate));
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
}
