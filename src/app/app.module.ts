import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing.module';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { FoodCatelogueModule } from './food-catelogue/food-catelogue.module';
import { SharedDataService } from './shared/service/shared-data.service';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { JwtInterceptor } from './shared/service/jwt-inerceptor.service';
 



 
@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    HeaderModule,
    RestaurantListingModule,
    FormsModule,
    UserModule
  
  ],
  providers: [provideHttpClient(), SharedDataService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
