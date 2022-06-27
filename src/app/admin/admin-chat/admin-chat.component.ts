import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatService} from "../../service/chat/chat.service";
import {UserToken} from "../../model/user-token";
import {Chat} from "../../model/chat";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {UserService} from "../../service/user/user.service";
import {UserChat} from "../../model/user-chat";
import {DateService} from "../../service/date/date.service";
import {Router} from "@angular/router";
import {SocketService} from '../../service/socket/socket.service';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrls: ['./admin-chat.component.scss']
})
export class AdminChatComponent implements OnInit {
  @ViewChild('message', {static: false, read: ElementRef}) public message: ElementRef<any>;
  isOpened = false;
  content = '';
  currentUser: UserToken = {};
  size = 10;
  listUser: UserChat[] = [];
  currentIndex = 0;

  constructor(private chatService: ChatService,
              private socketService: SocketService,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              public dateService: DateService,
              private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value;
    });
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUser('user').subscribe(listUser => {
      this.listUser = listUser;
      this.listUser.map(user => user.time = new Date(user.time));
      this.router.navigate(['/admin/messenger/' + this.listUser[0].id]);
    });
  }

  scrollBottom() {
    setTimeout(() => {
      this.message.nativeElement.scrollTop = this.message.nativeElement.scrollHeight;
    }, 1);
  }

  async openMessage(index) {
    this.currentIndex = index;
    this.scrollBottom();
  }

  async sentMessage(user) {
    let chat: Chat = {
      content: this.content,
      sender: {
        id: this.currentUser.id
      },
      status: false,
      receiver: {
        id: user.id
      }
    }
    this.socketService.sendMessage(chat);
    this.content = '';
    this.socketService.drawNewChatMessage(chat, this.currentUser);
    this.scrollBottom();
  }
}
