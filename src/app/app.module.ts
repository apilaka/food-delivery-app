import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { RestaurantListingModule } from './restaurant-listing/restaurant-listing.module';
import { FoodCatelogueModule } from './food-catelogue/food-catelogue.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared-module';
import { JwtInterceptor } from './shared/service/jwt-inerceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,          // MUST be first
    AppRoutingModule,
    FormsModule,
    SharedModule,           // ONLY import here
    FoodCatelogueModule,
    HeaderModule,
    RestaurantListingModule,
    UserModule
  ],
  providers: [
    provideHttpClient(),     // provides HttpClient to DI tree
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
