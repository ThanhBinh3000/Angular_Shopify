import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminChatComponent} from "./admin-chat.component";
import {AdminAuthGuard} from "../../helper/admin-auth-guard";
import {AdminChatDetailComponent} from "./admin-chat-detail/admin-chat-detail.component";


const routes: Routes = [
  {
    path: '',
    component: AdminChatComponent,
    canActivate: [AdminAuthGuard],
    canActivateChild: [AdminAuthGuard],
    children: [
      {
        path: ':id',
        component: AdminChatDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminChatRoutingModule {
}
