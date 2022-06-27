import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {UserToken} from '../../model/user-token';
import {Product} from '../../model/product';
import {Orders} from '../../model/orders';
import {Review} from '../../model/review';
import {CategoryService} from '../../service/category/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrdersService} from '../../service/order/orders.service';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {ProductService} from '../../service/product/product.service';
import {ReviewService} from '../../service/review/review.service';
import {DateService} from '../../service/date/date.service';
import {ProductImage} from '../../model/product-image';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  listCategory: Category[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  currentUser: UserToken;
  listProduct: ProductImage[] = [];
  productId: number;
  star: number = 0;
  currentReview: Review;
  order: Orders = {};

  constructor(private categoryService: CategoryService,
              private router: Router,
              private ordersService: OrdersService,
              private authenticationService: AuthenticationService,
              private productService: ProductService,
              private reviewService: ReviewService,
              private dateService: DateService,
              private activatedRoute: ActivatedRoute) {
    this.getAllCategories();
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
    });
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.getAllProductByOrder(id);
      this.getOrderById(id);
    })
  }

  ngOnInit() {
    let self = this;
    $(function() {
      $('.textarea').summernote();
      $('#modal-review').on('hidden.bs.modal', function() {
        $('.textarea').summernote('reset');
        self.star = 0;
      });
    });
  }

  getOrderById(id){
    this.ordersService.getOrders(id).subscribe(order => this.order = order);
  }

  getAllProductByOrder(id) {
    this.ordersService.getAllProductByOrder(id).subscribe(products => {
      this.listProduct = products;
    })
  }

  rate(star: number) {
    if (this.star == star) {
      this.star = 0;
    } else {
      this.star = star;
    }
  }

  async getProductId(userId: number, productId: number) {
    this.productId = productId;
    this.currentReview = await this.getReview(userId, productId);
    if (this.currentReview != null) {
      $('#comment').summernote('pasteHTML', this.currentReview.comment);
      $('.textarea').summernote('disable');
    } else {
      $('#comment').summernote('reset');
      $('.textarea').summernote('enable');
    }
  }

  getReview(userId: number, productId: number) {
    return this.reviewService.getReviewByUserAndProduct(userId, productId).toPromise();
  }

  createReview(star: number, productId: number) {
    const review: Review = {
      comment: $('.textarea').val(),
      user: {
        id: this.currentUser.id
      },
      evaluate: star,
      product: {
        id: productId
      }
    };
    this.reviewService.createReview(review).subscribe(() => {
      $(function() {
        $('#modal-review').modal('hide');
      });
      this.star = 0;
      $('.textarea').summernote('reset');
      $(function() {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'success',
          title: 'Đánh giá thành công'
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
          title: 'Xảy ra lỗi khi đánh giá'
        });
      });
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    });
  }

  search() {
    const name = this.searchForm.value.name;
    this.router.navigate(['../shop'], {queryParams: {name: name}});
  }
}
