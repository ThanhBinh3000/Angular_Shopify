import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../service/user/user.service';
import {User} from '../../../model/user';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
  });

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    $(document).ready(function() {
      $('#user-form').validate({
        rules: {
          email: {
            required: true
          },
          password: {
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
          password: {
            required: 'Hãy nhập mật khẩu'
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
  }

  createUser() {
    const user: User = {
      email: this.userForm.value.email,
      password: this.userForm.value.password,
      fullName: this.userForm.value.fullName
    };
    if (user.email !== '' && user.password !== '' && user.fullName !== '') {
      return this.userService.createUser(user).subscribe(() => {
        this.userForm.reset();
        $(function() {
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
        $(function() {
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
  }
}
