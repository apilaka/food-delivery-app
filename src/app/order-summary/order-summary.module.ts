import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderSummaryRoutingModule } from './order-summary-routing.module';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
 

 


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    OrderSummaryRoutingModule,
    OrderSummaryComponent
  ],
  exports: [
    OrderSummaryComponent
  ]
})
export class RestaurantListingModule { }
