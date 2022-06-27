import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutWithSharedComponent} from './layout/layout-with-shared/layout-with-shared.component';
import {AdminAuthGuard} from './helper/admin-auth-guard';
import {LayoutWithBubbleChatComponent} from './layout/layout-with-bubble-chat/layout-with-bubble-chat.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';


const routes: Routes = [
  {
    path: 'admin',
    component: LayoutWithSharedComponent,
    canActivate: [AdminAuthGuard],
    canActivateChild: [AdminAuthGuard],
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: '',
    component: LayoutWithBubbleChatComponent,
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
