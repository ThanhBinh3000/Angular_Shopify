import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChatService} from "../../../service/chat/chat.service";
import {Chat} from "../../../model/chat";
import {UserToken} from "../../../model/user-token";
import {AuthenticationService} from "../../../service/auth/authentication.service";
import {UserService} from "../../../service/user/user.service";
import {SocketService} from '../../../service/socket/socket.service';

@Component({
  selector: 'app-admin-chat-detail',
  templateUrl: './admin-chat-detail.component.html',
  styleUrls: ['./admin-chat-detail.component.scss']
})
export class AdminChatDetailComponent implements OnInit, OnDestroy {
  @ViewChild('message', {static: false, read: ElementRef}) public message: ElementRef<any>;
  listMessage: Chat[] = [];
  size = 20;
  currentUser: UserToken = {};
  id: number = -1;

  constructor(private activatedRoute: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private socketService: SocketService,
              private chatService: ChatService) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      this.getAllChatHistory(this.id, this.size);
    })
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value
    });
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  getAllChatHistory(userId, size) {
    this.chatService.getAllChat(1, userId, size).subscribe(listMessage => {
      this.listMessage = listMessage;
      this.listMessage.map(message => message.time = new Date(message.time));
      this.userService.getUser(userId).subscribe(user => {
        this.socketService.connectToChat(user, this.message);
        this.scrollBottom();
      })
    });
  }

  scrollBottom() {
    setTimeout(() => {
      this.message.nativeElement.scrollTop = this.message.nativeElement.scrollHeight;
    }, 1)
  }

  loadNewData(id) {
    const element = this.message.nativeElement.scrollTop;
    if (element < 10) {
      this.size += 5;
      this.chatService.getAllChat(1, id, this.size).subscribe(listMessage => {
        this.listMessage = listMessage;
        this.listMessage.map(message => message.time = new Date(message.time));
      });
    }
  }

  convertTimeToString(time: Date) {
    let dateToString = '';
    let time1 = time.getHours() + ':' + time.getMinutes() + ' | ';
    let day = time.getUTCDate();
    let month = time.getUTCMonth() + 1;
    if (day > 0 && day < 10) {
      dateToString = '0' + day + '/';
    } else {
      dateToString = day + '/'
    }
    if (month > 0 && month < 10) {
      dateToString += '0' + month;
    } else {
      dateToString += month
    }
    return time1 + dateToString;
  }
}
