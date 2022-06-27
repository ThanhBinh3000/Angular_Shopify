import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SharedRoutingModule} from './shared-routing.module';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [SidebarComponent, NavbarComponent, FooterComponent, HeaderComponent]
})
export class SharedModule { }
