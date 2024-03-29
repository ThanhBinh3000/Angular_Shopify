import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product";
import {UserToken} from "../../../model/user-token";
import {ProductService} from "../../../service/product/product.service";
import {AuthenticationService} from "../../../service/auth/authentication.service";
import {ProductWarehouse} from "../../../model/product-warehouse";

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  listProduct: ProductWarehouse[];
  currentUser: UserToken;
  hasRoleAdmin = false;
  id: number;

  constructor(private productService: ProductService,
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
    this.getAllProduct();
  }

  getProductId(id: number) {
    this.id = id;
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.productService.getAllProductInventory().subscribe(listProduct => {
        this.listProduct = listProduct;
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

  getAllProduct() {
    this.productService.getAllProductInventory().subscribe(listProduct => {
      this.listProduct = listProduct;
      $(function () {
        $('#table-product').DataTable({
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
