import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './components/header.component';
import { UserModule } from '../user/user.module';
 


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    UserModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
