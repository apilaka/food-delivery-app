import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodCatelogueRoutingModule } from './food-catelogue-routing.module';
import { FoodCatelogueComponent } from './components/food-catelogue.component';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
 

const routes: Routes = [{path: '', component: FoodCatelogueComponent},
   { path: 'catelogue/:id', component: FoodCatelogueComponent }
];

@NgModule({
  declarations: [
   
 
  ],
  imports: [
    CommonModule,
    FoodCatelogueRoutingModule,
    FoodCatelogueComponent,
    BrowserModule
  ]
})
export class FoodCatelogueModule { }
