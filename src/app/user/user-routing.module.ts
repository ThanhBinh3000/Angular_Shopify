import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from './shop/shop.component';
import {ContactComponent} from './contact/contact.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {UserOrderComponent} from './user-order/user-order.component';
import {AuthGuard} from '../helper/auth-guard';
import {HomepageComponent} from './homepage/homepage.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'category/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'order',
    canActivate: [AuthGuard],
    component: UserOrderComponent
  },
  {
    path: 'order/:id/product',
    canActivate: [AuthGuard],
    component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
