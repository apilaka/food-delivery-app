import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCatelogueComponent } from './food-catelogue/components/food-catelogue.component';
import { OrderSummaryComponent } from './order-summary/components/order-summary/order-summary.component';

const routes: Routes = [{path: '', redirectTo: 'restaurant-listing', pathMatch: 'full'}
 , {path: 'restaurant/:id', redirectTo: 'restaurant-listing', pathMatch: 'full'}
  , { path: 'catalogue', component: FoodCatelogueComponent }
  , { path: 'order', component: OrderSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
