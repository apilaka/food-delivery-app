import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { OrderSummaryRoutingModule } from './order-summary-routing.module';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { RestaurantListingModule } from '../restaurant-listing/restaurant-listing.module';
import { RestaurantService } from '../restaurant-listing/service/restaurant.service';
 

 


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    OrderSummaryComponent,
    RestaurantListingModule
  ],
  exports: [
    OrderSummaryComponent
  ]
})
export class OrderSummaryRoutingModule { }
