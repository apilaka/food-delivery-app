import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing.module';
import { provideHttpClient } from '@angular/common/http';
import { FoodCatelogueModule } from './food-catelogue/food-catelogue.module';
 



 
@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HeaderModule,
    RestaurantListingModule,
    FoodCatelogueModule,
   
 
    
 
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
