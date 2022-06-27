import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { ListBillComponent } from './list-bill/list-bill.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditBillComponent } from './edit-bill/edit-bill.component';
import { InfoBillComponent } from './info-bill/info-bill.component';
import { CreateBillDetailComponent } from './create-bill-detail/create-bill-detail.component';
import { EditBillDetailComponent } from './edit-bill-detail/edit-bill-detail.component';


@NgModule({
  declarations: [ListBillComponent, CreateBillComponent, EditBillComponent, InfoBillComponent, CreateBillDetailComponent, EditBillDetailComponent],
  imports: [
    CommonModule,
    BillRoutingModule,
    ReactiveFormsModule
  ]
})
export class BillModule { }
