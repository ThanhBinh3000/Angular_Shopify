import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category/category.service';
import {Item} from '../../model/item';
import {Router} from '@angular/router';
import {CustomerInfoService} from '../../service/customer-info/customer-info.service';
import {CustomerInfo} from '../../model/customer-info';
import {UserToken} from '../../model/user-token';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {ShoppingCartService} from '../../service/shopping-cart/shopping-cart.service';
import {ItemService} from '../../service/item/item.service';
import {ShoppingCart} from '../../model/shopping-cart';
import {OrdersService} from '../../service/order/orders.service';
import {Orders} from '../../model/orders';
import {OrdersDetail} from '../../model/orders-detail';
import {OrderDetailService} from '../../service/order-detail/order-detail.service';
import {SocketService} from '../../service/socket/socket.service';
import {UserService} from '../../service/user/user.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  customerInfoForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });
  selectAddressForm: FormGroup = new FormGroup({
    selectedAddressControl: new FormControl()
  });
  createCustomerInfoForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });
  items: Item[] = [];
  total: number = 0;
  currentUser: UserToken;
  shoppingCart: ShoppingCart;
  isSubmitted: boolean = false;
  customerInfos: CustomerInfo[] = [];

  constructor(private categoryService: CategoryService,
              private customerInfoService: CustomerInfoService,
              private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private itemService: ItemService,
              private ordersService: OrdersService,
              private orderDetailService: OrderDetailService,
              private socketService: SocketService,
              private router: Router,
              private userService: UserService) {
    this.socketService.connectToOrders();
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
      this.getShoppingCartByUser(this.currentUser.id);
      this.getAllCustomerInfoByUser(this.currentUser.id);
    });
  }

  get selectedAddressControl() {
    return this.selectAddressForm.get('selectedAddressControl');
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.hero__categories__all').on('click', function() {
        $('.hero__categories ul').slideToggle(400);
      });
    });
    this.getAllCategories();
    if (this.currentUser == null) {
      this.loadCart();
    }
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  getAllCustomerInfoByUser(id: number) {
    this.userService.getAllAddressByUser(id).subscribe(addresses => this.customerInfos = addresses);
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    });
  }

  getShoppingCartByUser(id: number) {
    this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
      this.getAllItemInShoppingCart(this.shoppingCart.id);
    });
  }

  getAllItemInShoppingCart(id: number) {
    this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
      this.items = items;
      this.sumTotalPrice();
    });
  }

  deleteAllItemInShoppingCart(id: number) {
    this.shoppingCartService.getAllItemByShoppingCart(id).subscribe(items => {
      this.items = items;
      this.items.map(item => {
        this.itemService.deleteItem(item.id).subscribe();
      });
    });
  }

  async createOrder() {
    const orders: Orders = {
      user: {
        id: this.currentUser.id,
        email: this.currentUser.email
      },
      status: 0,
      customerInfo: {
        id: this.selectedAddressControl.value
      }
    };
    let orderPromise = await this.ordersService.createOrders(orders).toPromise();
    orders.id = orderPromise.id;
    this.socketService.sendOrders(orders);
    return orders;
  }

  createOrderDetail(item: Item, orders: Orders) {
    const orderDetail: OrdersDetail = {
      orders: {
        id: orders.id
      },
      amount: item.quantity,
      product: {
        id: item.product.id
      }
    };
    return this.orderDetailService.createOrderDetail(orderDetail).toPromise();
  }

  async submitCheckoutForm(items: Item[], shoppingCartId: number) {
    if (this.customerInfoForm.valid) {
      this.deleteAllItemInShoppingCart(shoppingCartId);
      this.getAllItemInShoppingCart(shoppingCartId);
      const orders = await this.createOrder();
      let listOrderDetail = items.map(item => {
        this.createOrderDetail(item, orders);
      });
      Promise.all(listOrderDetail).then(() => {
        $(function() {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Đơn hàng đã tạo, vui lòng chờ xác nhận'
          });
        });
        this.customerInfoForm.reset();
        this.router.navigateByUrl('/');
      }).catch(() => {
        $(function() {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'error',
            title: 'Xảy ra lỗi khi tạo đơn hàng'
          });
        });
      });
    } else {
      $(function() {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Điền đủ thông tin để nhận hàng'
        });
      });
    }
  }

  createCustomerInfo() {
    if (this.createCustomerInfoForm.valid) {
      let customerInfo = this.createCustomerInfoForm.value;
      customerInfo.user = {
        id: this.currentUser.id
      };
      this.customerInfoService.createCustomerInfo(customerInfo).subscribe(address => {
        $(function() {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Địa chỉ mới đã được thêm vào trong danh sách'
          });
        });
        $(function() {
          $('#modal-create-address').modal('hide');
        });
        this.customerInfos.push(address);
        this.selectedAddressControl.setValue(address.id + '');
        this.customerInfoForm.get('name').setValue(customerInfo.name);
        this.customerInfoForm.get('email').setValue(customerInfo.email);
        this.customerInfoForm.get('address').setValue(customerInfo.address);
        this.customerInfoForm.get('phoneNumber').setValue(customerInfo.phoneNumber);
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
    } else {
      $(function() {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Hãy điền đầy đủ thông tin!'
        });
      });
    }
  }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart != null) {
      for (var i = 0; i < cart.length; i++) {
        let item = JSON.parse(cart[i]);
        this.items.push({
          product: item.product,
          quantity: item.quantity
        });
        this.sumTotalPrice();
      }
    }
  }

  sumTotalPrice(): number {
    this.total = 0;
    for (let item of this.items) {
      this.total += (item.product.price * (1 - item.product.saleOff / 100)) * item.quantity;
    }
    return this.total;
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../shop'], {queryParams: {name: name}});
  }

  chooseAddress(id: number) {
    this.customerInfoService.getCustomerInfo(id).subscribe(customerInfo => {
      this.customerInfoForm = new FormGroup({
        name: new FormControl(customerInfo.name),
        address: new FormControl(customerInfo.address),
        phoneNumber: new FormControl(customerInfo.phoneNumber),
        email: new FormControl(customerInfo.email)
      });
      $(function() {
        $('#modal-address').modal('hide');
      });
    });
  }
}
