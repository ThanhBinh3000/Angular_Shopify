import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user/user.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  listUser: User[] = [];
  id: number;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getAllUser();
  }

  getUserId(id: number) {
    this.id = id;
  }

  deleteUser() {
    this.userService.deleteUser(this.id).subscribe(() => {
      this.userService.getAllUser().subscribe(listCategory => {
        this.listUser = listCategory;
      });
      $(function() {
        $('#modal-delete').modal('hide');
      });
      $(function() {
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
      $(function() {
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
      $(function() {
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
}
