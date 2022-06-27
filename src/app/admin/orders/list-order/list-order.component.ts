import {Component, OnDestroy, OnInit} from '@angular/core';
import {Orders} from "../../../model/orders";
import {OrdersService} from "../../../service/order/orders.service";
import {NotificationService} from "../../../service/notification/notification.service";
import {Notification} from "../../../model/notification";
import {DateService} from "../../../service/date/date.service";
import {SocketService} from '../../../service/socket/socket.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnInit, OnDestroy {
  id: number;

  constructor(private ordersService: OrdersService,
              public dateService: DateService,
              private notificationService: NotificationService,
              public socketService: SocketService) {
    this.socketService.connectToNotification();
    this.socketService.getAllOrdersWithDataTable();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  getOrderId(id: number) {
    this.id = id;
  }

  getOrder(id: number) {
    return this.ordersService.getOrders(id).toPromise();
  }

  async deleteOrder(id: number) {
    let orders = await this.getOrder(id);
    const notification: Notification = {
      message: "Đơn hàng " + orders.id + " của bạn đã bị hủy",
      user: {
        id: orders.user.id
      }
    }
    this.ordersService.deleteOrders(id).subscribe(() => {
      this.createNotification(notification);
      this.socketService.getAllOrders();
      $(function () {
        $('#modal-delete').modal('hide');
      })
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'success',
          title: 'Hủy đơn hàng thành công'
        });
      });
    }, () => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Hủy đơn hàng thất bại'
        });
      });
    })
  }

  async confirmOrder(id: number) {
    let orders = await this.getOrder(id);
    const notification: Notification = {
      message: "Đơn hàng " + orders.id + " của bạn đã được xác nhận",
      user: {
        id: orders.user.id
      },
      status: false
    }
    orders.status = 1;
    this.ordersService.updateOrders(id, orders).subscribe(() => {
      this.createNotification(notification);
      this.socketService.getAllOrders();
      $(function () {
        $('#modal-confirm').modal('hide');
      })
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'success',
          title: 'Đơn hàng đã được xác nhận'
        });
      });
    }, () => {
      $(function () {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });

        Toast.fire({
          type: 'error',
          title: 'Xác nhận đơn hàng thất bại'
        });
      });
    })
  }

  createNotification(notification: Notification) {
    this.socketService.sendNotification(notification);
  }
}
