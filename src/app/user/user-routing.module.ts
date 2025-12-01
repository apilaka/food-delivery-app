import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user.component';
import { RestaurantListingComponent } from '../restaurant-listing/components/restaurant-listing.component';
 

const routes: Routes = [{path: 'restaurant', component: RestaurantListingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }
