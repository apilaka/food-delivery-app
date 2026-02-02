import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user.component';
import { RestaurantListingComponent } from '../restaurant-listing/components/restaurant-listing.component';
import { AuthGuard } from '../shared/service/auth-guard.service';
 

const routes: Routes = [{path: 'restaurant', component: RestaurantListingComponent},
  {
  path: 'dashboard',
  component: LoginComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule,],
  exports: [RouterModule]
})
export class UserRoutingModule { }
