import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodCatelogueComponent } from './components/food-catelogue.component';

const routes: Routes = [ { path: 'catelogue/:id', component: FoodCatelogueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodCatelogueRoutingModule { }
