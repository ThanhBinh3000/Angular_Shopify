import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {UserToken} from '../../model/user-token';
import {ShoppingCart} from '../../model/shopping-cart';
import {AuthenticationService} from '../../service/auth/authentication.service';
import {ShoppingCartService} from '../../service/shopping-cart/shopping-cart.service';
import {ItemService} from '../../service/item/item.service';
import {ProductImage} from '../../model/product-image';
import {element} from 'protractor';

declare var $: any;

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  listCategory: Category[] = [];
  listProduct: Product[] = [];
  searchForm: FormGroup = new FormGroup({
    name: new FormControl('')
  });
  page = 0;
  size = 9;
  totalPage = [];
  totalProduct = 0;
  listProductSaleOff: Product[] = [];
  listProductLatest: ProductImage[] = [];
  sub: Subscription;
  query: string = '';
  currentUser: UserToken;
  shoppingCart: ShoppingCart;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private authenticationService: AuthenticationService,
              private shoppingCartService: ShoppingCartService,
              private itemService: ItemService,
              private router: Router) {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.query = params.name;
      this.getAllProduct();
      if (this.query != null) {
        this.searchForm.value.name = this.query;
        this.search();
      } else {
        this.getAllProductUsingPagination(this.page, this.size);
      }
    });
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
      this.getShoppingCartByUser(this.currentUser.id);
    });
  }

  ngOnInit() {
    $(document).ready(function() {
      $('.latest-product__slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<span class=\'fa fa-angle-left\'><span/>', '<span class=\'fa fa-angle-right\'><span/>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
      });
      $('.hero__categories__all').on('click', function() {
        $('.hero__categories ul').slideToggle(400);
      });
      var rangeSlider = $('.price-range'),
        minamount = $('#minamount'),
        maxamount = $('#maxamount'),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
      rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function(event, ui) {
          minamount.val(ui.values[0] + 'đ');
          maxamount.val(ui.values[1] + 'đ');
        }
      });
      minamount.val(rangeSlider.slider('values', 0) + 'đ');
      maxamount.val(rangeSlider.slider('values', 1) + 'đ');
    });
    this.getAllCategories();
    this.getAllProductSaleOff();
    this.getAllProductLatest();
  }

  getShoppingCartByUser(id: number) {
    this.shoppingCartService.getCartByUser(id).subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
    });
  }

  getAllItemInShoppingCart(id: number) {
    return this.shoppingCartService.getAllItemByShoppingCart(id).toPromise();
  }

  async addItemToShoppingCart(productId: number, shoppingCartId: number) {
    let items = await this.getAllItemInShoppingCart(shoppingCartId);
    this.itemService.addItemToShoppingCart(items, productId, shoppingCartId);
  }

  getAllProductUsingPagination(page: number, size: number) {
    this.productService.getAllProductUsingPagination(page, size).subscribe(listProduct => {
      this.listProduct = listProduct;
      this.addImageToProduct(this.listProduct);
    });
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(listProduct => {
      this.totalProduct = listProduct.length;
      let total = Math.ceil(listProduct.length / 9);
      if (listProduct.length < 9) {
        total = 1;
      }
      for (let i = 0; i < total; i++) {
        if(!this.isExistedInArray(i, this.totalPage)){
          this.totalPage.push(i);
        }
      }
    });
  }

  getAllImageByProduct(product: Product) {
    return this.productService.getAllImageByProduct(product.id).toPromise();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(listCategory => {
      this.listCategory = listCategory;
    });
  }

  getAllProductSaleOff() {
    this.productService.getAllProductHasSaleOffGreaterThanZero().subscribe(listProduct => {
      this.listProductSaleOff = listProduct;
      this.listProductSaleOff.map(async product => {
        product.image = await this.getAllImageByProduct(product);
        $(document).ready(function() {
          $('.product__discount__slider').owlCarousel({
            loop: true,
            margin: 0,
            items: 3,
            dots: true,
            smartSpeed: 1500,
            autoHeight: false,
            autoplay: true,
            responsive: {
              320: {
                items: 1,
              },

              480: {
                items: 2,
              },
              768: {
                items: 3,
              }
            }
          });
        });
      });
    });
  }

  getAllProductLatest() {
    this.productService.getAllProductLatest().subscribe(listProduct => {
      this.listProductLatest = listProduct;
    });
  }

  addImageToProduct(listProduct: Product[]) {
    listProduct.map(async product => {
      product.image = await this.getAllImageByProduct(product);
    });
  }

  search() {
    const name = this.searchForm.value.name;
    if (name != null) {
      if (name == '') {
        this.router.navigate(['/shop']);
      } else {
        this.productService.getAllProductByName(name).subscribe(listProduct => {
          this.listProduct = listProduct;
          this.addImageToProduct(this.listProduct);
          this.totalProduct = listProduct.length;
          this.router.navigate(['/shop'], {queryParams: {name: name}});
        });
      }
    }
  }

  previous() {
    this.page--;
    this.getAllProductUsingPagination(this.page, this.size);
  }

  hasPrevious() {
    return this.page > 0;
  }

  hasNext(totalPage) {
    return this.page < totalPage - 1;
  }

  next() {
    this.page++;
    this.getAllProductUsingPagination(this.page, this.size);
  }

  choosePage(page) {
    this.page = page;
    this.getAllProductUsingPagination(this.page, this.size);
  }

  isExistedInArray(find, arr) {
    let isExisted = false;
    for (let element of arr) {
      if (element == find) {
        isExisted = true;
      }
    }
    return isExisted;
  }
}
