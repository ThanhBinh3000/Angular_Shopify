import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {AuthenticationService} from '../auth/authentication.service';
import {UserToken} from '../../model/user-token';
import {environment} from '../../../environments/environment';
import {Notification} from '../../model/notification';
import {UserService} from '../user/user.service';
import {OrdersService} from '../order/orders.service';
import {Orders} from '../../model/orders';
import {Router} from '@angular/router';

const API_URL = `${environment.apiUrl}`;

declare var $: any;
declare var Swal: any;

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  stompClient: any;
  currentUser: UserToken = {};
  listNotification: Notification[] = [];
  listNotificationUnRead: Notification[] = [];
  listOrder: Orders[] = [];

  constructor(private authenticationService: AuthenticationService,
              private ordersService: OrdersService,
              private userService: UserService,
              private router: Router) {
    this.getAllOrdersWithDataTable();
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
      this.getAllNotification(this.currentUser.id);
      this.getAllNotificationUnRead(this.currentUser.id);
    });
  }

  connectToChat(currentUser, message) {
    let ws = new SockJS(`${API_URL}/ws`);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, frame => {
      this.stompClient.subscribe('/topic/chats', (messageOutput) => {
        let data = JSON.parse(messageOutput.body);
        this.authenticationService.currentUser.subscribe(value => {
          this.currentUser = value;
          if (this.currentUser.id == data.receiver.id) {
            this.drawNewChatMessage(data, this.currentUser);
            setTimeout(() => {
              message.nativeElement.scrollTop = message.nativeElement.scrollHeight;
            }, 1);
          }
        });
      });
    });
  };

  connectToNotification() {
    let ws = new SockJS(`${API_URL}/ws`);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, frame => {
      this.stompClient.subscribe('/topic/notifications', (messageOutput) => {
        let data = JSON.parse(messageOutput.body);
        this.authenticationService.currentUser.subscribe(value => {
          this.currentUser = value;
          if (this.currentUser.id == data.user.id) {
            data.createDate = new Date(data.createDate);
            this.listNotification.unshift(data);
            this.listNotificationUnRead.unshift(data);
          }
        });
      });
      this.connectToOrders();
    });
  };

  connectToOrders() {
    this.stompClient.subscribe('/topic/orders', (output) => {
      let data = JSON.parse(output.body);
      data.createDate = new Date(data.createDate);
      this.listOrder.push(data);
      const roleList = this.currentUser.roles;
      let hasRoleAdmin = false;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          hasRoleAdmin = true;
        }
      }
      if(hasRoleAdmin){
        $(() => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            timer: 3000
          });

          Toast.fire({
            type: 'success',
            title: 'Bạn có một đơn đặt hàng mới!'
          }).then((result) => {
            if (result.value) {
              this.router.navigateByUrl("/admin/orders")
            }
          });
        });
      }
    });
  };

  drawNewChatMessage(messageOutput, currentUser) {
    let ul = document.getElementById('history');
    let firstLi = $('ul#history li:first').get(0);
    let li = firstLi.cloneNode(true);
    li.innerHTML = messageOutput.content;
    let className = currentUser.id == messageOutput.sender.id ? 'me' : 'you';
    li.setAttribute('class', className);
    ul.appendChild(li);
  }

  disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
  }

  sendMessage(chat) {
    this.stompClient.send('/app/chats', {}, JSON.stringify(chat));
  }

  sendNotification(notification) {
    this.stompClient.send('/app/notifications', {}, JSON.stringify(notification));
  }

  sendOrders(orders) {
    return this.stompClient.send('/app/orders', {}, JSON.stringify(orders));
  }

  getAllNotification(id: number) {
    this.userService.findAllNotificationDateDesc(id).subscribe(listNotification => {
      this.listNotification = listNotification;
      this.listNotification.map(notification => {
        notification.createDate = new Date(notification.createDate);
      });
    });
  }

  getAllNotificationUnRead(id: number) {
    this.userService.findAllNotification(id).subscribe(listNotificationUnRead => {
      this.listNotificationUnRead = listNotificationUnRead;
    });
  }

  getAllOrdersWithDataTable() {
    this.ordersService.getAllOrder(0).subscribe(listOrder => {
      this.listOrder = listOrder;
      this.listOrder.map(order => order.createDate = new Date(order.createDate));
      $(function() {
        $('#table-orders').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': false,
          'ordering': true,
          'info': true,
          'autoWidth': false,
        });
      });
    });
  }

  getAllOrders() {
    this.ordersService.getAllOrder(0).subscribe(listOrder => {
      this.listOrder = listOrder;
      this.listOrder.map(order => order.createDate = new Date(order.createDate));
    });
  }
}
