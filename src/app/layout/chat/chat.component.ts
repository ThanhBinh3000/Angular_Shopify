import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChatService} from "../../service/chat/chat.service";
import {Chat} from "../../model/chat";
import {AuthenticationService} from "../../service/auth/authentication.service";
import {UserToken} from "../../model/user-token";
import {SocketService} from '../../service/socket/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild('message', {static: false, read: ElementRef}) public message: ElementRef<any>;
  isOpened = false;
  content = '';
  currentUser: UserToken = {};
  listMessage: Chat[] = [];
  size = 10;

  constructor(private chatService: ChatService,
              private socketService: SocketService,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(value => {
      this.currentUser = value
    });
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  async openForm() {
    this.isOpened = true;
    if (this.currentUser) {
      this.listMessage = await this.getAllChatHistory(this.currentUser.id, 1, this.size);
      this.socketService.connectToChat(this.currentUser, this.message);
      this.scrollBottom();
    }
  }

  scrollBottom() {
    setTimeout(() => {
      this.message.nativeElement.scrollTop = this.message.nativeElement.scrollHeight;
    }, 1)
  }

  closeForm(): void {
    this.isOpened = false;
    this.socketService.disconnect();
  }

  async sentMessage(user: UserToken) {
    const roleList = user.roles;
    let hasRoleAdmin = false;
    for (const role of roleList) {
      if (role.authority === 'ROLE_ADMIN') {
        hasRoleAdmin = true;
      }
    }
    let chat: Chat = {
      content: this.content,
      sender: {
        id: this.currentUser.id
      },
      status: false,
      receiver: {
        id: 1
      }
    }
    if (hasRoleAdmin) {
      chat.receiver.id = user.id;
    }
    this.socketService.sendMessage(chat);
    this.content = '';
    this.socketService.drawNewChatMessage(chat, user);
    this.scrollBottom();
  }

  getAllChatHistory(user1Id, user2Id, size) {
    return this.chatService.getAllChat(user1Id, user2Id, size).toPromise();
  }

  async loadNewData(user) {
    const element = this.message.nativeElement.scrollTop;
    if (element < 10) {
      this.size += 5;
      this.listMessage = await this.getAllChatHistory(user.id, 1, this.size);
    }
  }
}
