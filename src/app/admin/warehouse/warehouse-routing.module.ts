import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ListWarehouseComponent} from "./list-warehouse/list-warehouse.component";
import {CreateWarehouseComponent} from "./create-warehouse/create-warehouse.component";
import {AdminAuthGuard} from "../../helper/admin-auth-guard";
import {EditWarehouseComponent} from "./edit-warehouse/edit-warehouse.component";
import {InfoWarehouseComponent} from "./info-warehouse/info-warehouse.component";

const routes: Routes = [
  {
    path: '',
    component: ListWarehouseComponent
  },
  {
    path: 'create',
    component: CreateWarehouseComponent,
  },
  {
    path: 'edit/:id',
    component: EditWarehouseComponent,
  },
  {
    path: 'info/:id',
    component: InfoWarehouseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule {
}
