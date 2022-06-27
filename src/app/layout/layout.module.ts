import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {LayoutWithBubbleChatComponent} from './layout-with-bubble-chat/layout-with-bubble-chat.component';
import {LayoutWithSharedComponent} from './layout-with-shared/layout-with-shared.component';
import {ChatModule} from './chat/chat.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutWithBubbleChatComponent,
    LayoutWithSharedComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ChatModule,
    SharedModule,
  ]
})
export class LayoutModule { }
