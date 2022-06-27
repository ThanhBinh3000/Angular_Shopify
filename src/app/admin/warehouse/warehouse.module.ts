import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WarehouseRoutingModule} from "./warehouse-routing.module";
import {ListWarehouseComponent} from "./list-warehouse/list-warehouse.component";
import {CreateWarehouseComponent} from "./create-warehouse/create-warehouse.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EditWarehouseComponent} from "./edit-warehouse/edit-warehouse.component";
import { InfoWarehouseComponent } from './info-warehouse/info-warehouse.component';



@NgModule({
  declarations: [
    ListWarehouseComponent,
    CreateWarehouseComponent,
    EditWarehouseComponent,
    InfoWarehouseComponent,
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    ReactiveFormsModule
  ]
})
export class WarehouseModule { }
