import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBillComponent} from "./list-bill/list-bill.component";
import {AdminAuthGuard} from "../../helper/admin-auth-guard";
import {CreateBillComponent} from "./create-bill/create-bill.component";
import {EditBillComponent} from "./edit-bill/edit-bill.component";
import {InfoBillComponent} from "./info-bill/info-bill.component";
import {CreateBillDetailComponent} from "./create-bill-detail/create-bill-detail.component";
import {EditBillDetailComponent} from "./edit-bill-detail/edit-bill-detail.component";


const routes: Routes = [
  {
    path: '',
    component: ListBillComponent,
  },
  {
    path: 'create',
    component: CreateBillComponent,
  },
  {
    path: 'edit/:id',
    component: EditBillComponent,
  },
  {
    path: 'info/:id',
    component: InfoBillComponent,
  },
  {
    path: 'info/:id/create',
    component: CreateBillDetailComponent,
  },
  {
    path: 'info/:id/edit/:detailId',
    component: EditBillDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule {
}
