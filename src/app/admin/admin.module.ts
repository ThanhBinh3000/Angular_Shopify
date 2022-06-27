import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {ChartComponent} from './chart/chart.component';


@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
