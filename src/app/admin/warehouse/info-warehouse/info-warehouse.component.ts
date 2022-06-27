import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Warehouse} from "../../../model/warehouse";
import {WarehouseService} from "../../../service/warehouse/warehouse.service";
import {ProductWarehouse} from "../../../model/product-warehouse";

declare var $: any;

@Component({
  selector: 'app-info-warehouse',
  templateUrl: './info-warehouse.component.html',
  styleUrls: ['./info-warehouse.component.scss']
})
export class InfoWarehouseComponent implements OnInit {
  currentWarehouse: Warehouse;
  listProduct: ProductWarehouse[];
  sub: Subscription;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private warehouseService: WarehouseService) {
    this.sub = this.activatedRoute.paramMap.subscribe(async (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.currentWarehouse = await this.getWarehouse(this.id);
      this.getAllProductInventoryByWarehouse(this.currentWarehouse);
    })
  }

  ngOnInit() {
  }

  getWarehouse(id: number) {
    return this.warehouseService.getWarehouse(id).toPromise();
  }

  getAllProductInventoryByWarehouse(warehouse: Warehouse) {
    this.warehouseService.getAllProductInventoryByWarehouse(warehouse.id).subscribe(listProduct => {
      this.listProduct = listProduct;
      $(function () {
        $('#table-product').DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": false,
          "ordering": true,
          "info": true,
          "autoWidth": false,
        });
      });
    })
  }
}
