import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {OrdersService} from '../../service/order/orders.service';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {UserToken} from '../../model/user-token';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {Orders} from '../../model/orders';
import {Review} from '../../model/review';
import {ReviewService} from '../../service/review/review.service';
import {DateService} from '../../service/date/date.service';
import {Notification} from '../../model/notification';
import {SocketService} from '../../service/socket/socket.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit, OnDestroy {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  currentUser: UserToken;
  listProduct: Product[] = [];
  listOrders: Orders[] = [];
  status: number;
  id: number;
  productId: number;
  star: number = 0;
  currentReview: Review;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private ordersService: OrdersService,
              private authenticationService: AuthenticationService,
              private productService: ProductService,
              private reviewService: ReviewService,
              public dateService: DateService,
              public socketService: SocketService,
              private activatedRoute: ActivatedRoute) {
    this.socketService.connectToNotification();
    this.getAllCategories();
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
    });
    this.activatedRoute.params.subscribe(params => {
      this.status = +params['status'];
      this.getAllOrderByUserAndStatusNotLike(this.currentUser.id, 2);
      if (this.status == 2) {
        this.getAllOrderByUserAndStatus(this.currentUser.id, 2);
        this.getAllProductUserBought(this.currentUser.id);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  getAllProductUserBought(id: number) {
    this.ordersService.getAllProductUserBought(id).subscribe(listProduct => {
      this.listProduct = listProduct;
      this.listProduct.map(async product => {
        product.image = await this.getAllImageByProduct(product);
      });
    });
  }

  getOrderId(id: number) {
    this.id = id;
  }

  deleteOrder(id: number) {
    this.ordersService.deleteOrders(id).subscribe(() => {
      this.ordersService.getAllOrder(0).subscribe(listOrder => {
        this.listOrders = listOrder;
        this.listOrders.map(order => order.createDate = new Date(order.createDate));
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
          title: 'Hủy đơn hàng thành công'
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
          title: 'Hủy đơn hàng thất bại'
        });
      });
    });
  }

  getAllOrderByUserAndStatusNotLike(id: number, status: number) {
    this.ordersService.getAllOrderByUserAndStatusNotLike(id, status).subscribe(listOrder => {
      this.listOrders = listOrder;
      this.listOrders.map(order => order.createDate = new Date(order.createDate));
    });
  }
  getAllOrderByUserAndStatus(id: number, status: number) {
    this.ordersService.getAllOrderByUserAndStatus(id, status).subscribe(listOrder => {
      this.listOrders = listOrder;
      this.listOrders.map(order => order.createDate = new Date(order.createDate));
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    });
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise();
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../shop'], {queryParams: {name: name}});
  }

  async confirmOrder(id: number) {
    let orders = await this.getOrder(id);
    const notification: Notification = {
      message: 'Đơn hàng ' + orders.id + ' của bạn đã được giao thành công',
      user: {
        id: orders.user.id
      },
      status: false
    };
    orders.status = 2;
    this.ordersService.updateOrders(id, orders).subscribe(() => {
      this.createNotification(notification);
      this.getAllOrderByUserAndStatus(this.currentUser.id, 1);
      $(function() {
        $('#modal-confirm').modal('hide');
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
          title: 'Xác nhận thành công'
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
          title: 'Xảy ra lỗi'
        });
      });
    });
  }

  getOrder(id: number) {
    return this.ordersService.getOrders(id).toPromise();
  }

  createNotification(notification: Notification) {
    this.socketService.sendNotification(notification);
  }
}
