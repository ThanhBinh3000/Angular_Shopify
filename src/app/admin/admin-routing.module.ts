import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChartComponent} from './chart/chart.component';
import {AdminAuthGuard} from '../helper/admin-auth-guard';


const routes: Routes = [
  {
    path: '',
    component: ChartComponent
  },
  {
    path: 'product',
    canActivateChild: [AdminAuthGuard],
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    canActivateChild: [AdminAuthGuard],
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  },
  {
    path: 'warehouse',
    canActivateChild: [AdminAuthGuard],
    loadChildren: () => import('./warehouse/warehouse.module').then(module => module.WarehouseModule)
  },
  {
    path: 'warehouse-bill',
    canActivateChild: [AdminAuthGuard],
    loadChildren: () => import('./warehouse-bill/warehouse-bill.module').then(module => module.WarehouseBillModule)
  },
  {
    path: 'orders',
    canActivateChild: [AdminAuthGuard],
    loadChildren: () => import('./orders/orders.module').then(module => module.OrdersModule)
  },
  {
    path: 'messenger',
    canActivateChild: [AdminAuthGuard],
    loadChildren: () => import('./admin-chat/admin-chat.module').then(module => module.AdminChatModule)
  },
  {
    path: 'bills',
    canActivateChild: [AdminAuthGuard],
    loadChildren: () => import('./bill/bill.module').then(module => module.BillModule)
  },
  {
    path: 'users',
    canActivateChild: [AdminAuthGuard],
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
