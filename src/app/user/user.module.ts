import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/user.component';
 
 
 


@NgModule({
  declarations: [
   
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
     LoginComponent
  ]
})
export class UserModule { }
