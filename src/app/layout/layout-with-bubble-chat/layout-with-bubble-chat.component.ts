import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../service/auth/authentication.service";
import {UserToken} from "../../model/user-token";

@Component({
  selector: 'app-layout-with-bubble-chat',
  templateUrl: './layout-with-bubble-chat.component.html',
  styleUrls: ['./layout-with-bubble-chat.component.scss']
})
export class LayoutWithBubbleChatComponent implements OnInit {
  private currentUser: UserToken;
  hasRoleAdmin = false;
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
    if (this.currentUser) {
      const roleList = this.currentUser.roles;
      for (const role of roleList) {
        if (role.authority === 'ROLE_ADMIN') {
          this.hasRoleAdmin = true;
        }
      }
    }
  }

  ngOnInit() {
  }

}
