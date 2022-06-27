import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../../model/category';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {CategoryService} from '../../../service/category/category.service';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user/user.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    fullName: new FormControl(''),
  });
  currentUser: User;
  id: number;
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    $(document).ready(function() {
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
        errorPlacement: function(error, element) {
          error.addClass('invalid-feedback');
          element.closest('.form-group').append(error);
        },
        highlight: function(element, errorClass, validClass) {
          $(element).addClass('is-invalid');
        },
        unhighlight: function(element, errorClass, validClass) {
          $(element).removeClass('is-invalid');
        }
      });
    });
    this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentUser = await this.getUser(this.id);
    })
  }

  getUser(id: number) {
    return this.userService.getUser(id).toPromise();
  }

  updateUser(id: number) {
    const user: User = {
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
}
