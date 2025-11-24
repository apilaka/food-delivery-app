import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatelogueRoutingModule } from './food-catelogue-routing.module';
import { FoodCatelogueComponent } from './components/food-catelogue.component';
import { Routes } from '@angular/router';
 
const routes: Routes = [{path: '', component: FoodCatelogueComponent}];

@NgModule({
  declarations: [
    FoodCatelogueComponent
 
  ],
  imports: [
    CommonModule,
    FoodCatelogueRoutingModule
  ]
})
export class FoodCatelogueModule { }
