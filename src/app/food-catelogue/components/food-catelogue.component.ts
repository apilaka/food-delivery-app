import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCataloguePage } from '../../shared/model/FoodCataloguePage';
import { FoodItem } from '../../order-summary/model/FoodItem';
import { FoodItemService } from '../service/food-item.service';
import { Restaurant } from '../../restaurant-listing/model/restaurant';

import { SharedDataService } from '../../shared/service/shared-data.service';
import { FoodItemDTO } from '../../shared/model/FoodItemDTO';
import { Form, FormsModule } from '@angular/forms'
import { AwsUser } from '../../user/model/aws-user';
 
 
 

@Component({
  selector: 'app-food-catalogue',
  templateUrl: './food-catelogue.component.html',
  styleUrls: ['./food-catelogue.component.css'],
  standalone: true,   // ✅ important
  imports: [] // ✅ import CommonModule for ngIf/ngFor
})
export class FoodCatelogueComponent {
capturedObject: any = {};
  restaurantId!: number;
  restaurant!: Restaurant;
  awsUser!: AwsUser;
  foodItemResponse!: FoodCataloguePage;
  foodItemsList: FoodItem[] = [];
  foodList: FoodItemDTO[] = [];
  foodItemsListByRestaurant: FoodItem[] = [];
  foodCataloguePage!: FoodCataloguePage;
  total: number = 10;
  address: string = "";
i: any;

  constructor(
    private route: ActivatedRoute,
    private foodItemService: FoodItemService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

 ngOnInit() {

  this.sendSelectedFoods();
let restaurant = this.sharedDataService.getCurrentValue();
console.log("Current Value:", restaurant);
this.restaurant=restaurant.id;
this.restaurantId=restaurant;
this.getFoodItemsByRestaurant(this.restaurantId);

let user =this.sharedDataService.getUserData();
console.log("user Value:", user);

  
 
 }
 captureList() {
    // Convert array into an object if needed
    this.capturedObject = { foods: this.foodList };
    console.log(this.capturedObject);
  }

  getFoodItems() {
    this.foodItemService.listFoodItems().subscribe(
      data => {
        this.foodItemResponse = data;
        this.foodItemsList=data;
        console.log(this.foodItemsList)
      }
    )
  }

   getFoodItemsByRestaurant(restaurantId: number) {
    this.foodItemService.listFoodItemsByRestaurantId(restaurantId).subscribe(
      data => {
        this.foodItemResponse = data;
        this.foodList=data;
        console.log("Restaurant FoodList:", this.foodList);
      }
    )
  }
   increment(food: any) {
    food.quantity++;//
    const index = this.foodItemsList.findIndex(item => item.foodId === food.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodItemsList.push(food);
    } else {
      // If record exists, update it in the array
      this.foodItemsList[index] = food;
    }
  }
  decrement(food: any) {
    if (food.quantity > 0) {
      food.quantity--;
      const index = this.foodItemsList.findIndex(item => item.foodId === food.id);
      if (this.foodItemsList[index].quantity == 0) {
        this.foodItemsList.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodItemsList[index] = food;
      }
    }
  
  }
    reviewOrder() {
    this.foodCataloguePage = {
    foodItemsList: this.foodItemsList,
    restaurant: this.restaurant,
    userId: 2002,


     }

    console.log(this.foodCataloguePage)
  this.router.navigate(['/catalogue'], { queryParams: { data: JSON.stringify(this.foodCataloguePage) } });
  }
  
  placeOrder(){
   this.router.navigate(['/order'], { queryParams: { data: JSON.stringify(this.awsUser) } });
}

    sendSelectedFoods() {
    // Filter only items with quantity > 0
    const selectedFoods = this.foodList.filter(food => food.quantity > 0);
    this.sharedDataService.updateFood(this.foodItemsList);
    console.log('Sent foods:', selectedFoods);
// let user = this.sharedDataService.getUserData();
//     console.log("user value from Food Catalogute listing" +JSON.stringify(user));
  }
}