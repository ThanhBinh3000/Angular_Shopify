import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminChatRoutingModule } from './admin-chat-routing.module';
import { AdminChatComponent } from './admin-chat.component';
import {FormsModule} from "@angular/forms";
import { AdminChatDetailComponent } from './admin-chat-detail/admin-chat-detail.component';


@NgModule({
  declarations: [AdminChatComponent, AdminChatDetailComponent],
  imports: [
    CommonModule,
    AdminChatRoutingModule,
    FormsModule
  ]
})
export class AdminChatModule { }
