import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocketService} from './service/socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'market-frontend';

  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
    this.socketService.connectToNotification();
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }
}
