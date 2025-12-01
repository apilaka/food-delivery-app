import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCatelogueComponent } from './food-catelogue/components/food-catelogue.component';
import { OrderSummaryComponent } from './order-summary/components/order-summary/order-summary.component';
import { RestaurantListingComponent } from './restaurant-listing/components/restaurant-listing.component';
import { LoginComponent } from './user/components/user.component';

const routes: Routes = 
   [{path: '', component: LoginComponent, pathMatch: 'full'},
    
    {path: 'restaurant', redirectTo: 'restaurant-listing', pathMatch: 'full'}
  , {path: 'restaurant/:id', component: RestaurantListingComponent, pathMatch: 'full'}
  , { path: 'catalogue', component: FoodCatelogueComponent }
 ,{ path: 'order', component: OrderSummaryComponent }
  ,{ path: 'user', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
