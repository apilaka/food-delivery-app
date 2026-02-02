import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO } from '../../model/OrderDTO';
import { OrderService } from '../../service/OrderService';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodItemDTO } from '../../../shared/model/FoodItemDTO';
import orderJson from '../../../shared/order.json';
import { SharedDataService } from '../../../shared/service/shared-data.service';
import { FoodCataloguePageClass } from '../../../shared/model/FoodCataloguePageClass ';
import { Restaurant } from '../../../restaurant-listing/model/restaurant';
import { AwsUser } from '../../../user/model/aws-user';
 

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  imports: [],
})

export class OrderSummaryComponent implements OnInit {

  closeDialog() {
 
    this.showDialog=false;
      this.showHideOrderButtons=false;
    
  }

  placeAnotherOrder(){
    this.router.navigate(["/restaurant"])
  }

  orderSummary?: OrderDTO;
  showDialog: Boolean = false;

  restaurant!: Restaurant;
  foodList: FoodItemDTO[] = [];
  selectedFoodItems: FoodItemDTO[] = [];
  orderData: FoodCataloguePageClass | null = null;
  userId: number = 0;
  awsUser!: AwsUser;
  showHideOrderButtons!: Boolean;
  

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private orderService: OrderService, private router: Router,
    private sharedDataService: SharedDataService
  ) { }

  orderForm!: FormGroup;

  ngOnInit() {
    this.saveOrderDataFromInput();
  }

  getSelectedFoodItems() {
    this.sharedDataService.selectedFoodItems.subscribe(
      (items: FoodItemDTO[]) => {
        this.selectedFoodItems = items;
      },
      (error) => {
        console.error('Error fetching selected food items', error);
      }
    );
    return this.selectedFoodItems;
  }

  getTotalPrice(): number {
    return this.selectedFoodItems
      .reduce((sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0), 0);
  }

  saveOrderDataFromInput() {
 
       
    let restaurant = this.sharedDataService.getCurrentValue();
    const selectedItems = this.getSelectedFoodItems();
    let user = this.sharedDataService.getUserData();
     this.orderData = new FoodCataloguePageClass(this.selectedFoodItems, Number(user?.userId), restaurant);
     this.orderService.saveOrder(JSON.stringify(this.awsUser));
this.showHideOrderButtons=true;
     this.upload();

 
  }

  getSampleData() {
    this.sharedDataService.getSampleData((received: string) => {

    });
  }

  findUserById(id: Number): AwsUser {
    this.orderService.findUserById(id).subscribe(user => {
      this.awsUser = this.awsUser;
     })
    return this.awsUser;
  }

  upload() {

      let jsonString = JSON.stringify(this.orderData);


    this.orderService.uploadJson(jsonString).subscribe(res => {
      console.log("Mongo updated", res);
    });
    this.showDialog=true;
  }
}