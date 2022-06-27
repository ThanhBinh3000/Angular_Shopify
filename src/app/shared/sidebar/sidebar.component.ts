import { Component } from '@angular/core';
import {UserToken} from "../../model/user-token";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/auth/authentication.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  currentUser: UserToken;
  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(value => this.currentUser = value);
  }

}
