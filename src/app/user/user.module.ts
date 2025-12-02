import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/user.component';
import { ReactiveFormsModule } from '@angular/forms';
 
 
 


@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    UserRoutingModule ,
    ReactiveFormsModule,
    LoginComponent
  ]
})
export class UserModule { }
