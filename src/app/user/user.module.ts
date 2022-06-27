import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {ShopComponent} from './shop/shop.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ContactComponent} from './contact/contact.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {UserOrderComponent} from './user-order/user-order.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {HomepageComponent} from './homepage/homepage.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductDetailComponent,
    ContactComponent,
    ShoppingCartComponent,
    CategoryDetailComponent,
    CheckoutComponent,
    FavoriteComponent,
    UserOrderComponent,
    HomepageComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class UserModule {
}
