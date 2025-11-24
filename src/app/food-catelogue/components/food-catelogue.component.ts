import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodCataloguePage } from '../../shared/model/FoodCataloguePage';
import { FoodItem } from '../../shared/model/FoodItem';
import { FoodItemService } from '../service/food-item.service';

@Component({
  selector: 'app-food-catelogue',
  standalone: false,
  templateUrl: './food-catelogue.component.html',
  styleUrl: './food-catelogue.component.css'
})
export class FoodCatelogueComponent {
   restaurantId!: number;
  foodItemResponse!: FoodCataloguePage;
  foodItemCart: FoodItem[] = [];
  orderSummary!: FoodCataloguePage;

  constructor(private route: ActivatedRoute, private foodItemService: FoodItemService, private router: Router)
   { }
ngOnInit(){
  console.log("Hello India");
}
increment(food: any) {
    food.quantity++;

    const index = this.foodItemCart.findIndex(i => i.id === food.id);
    if (index === -1) {
      this.foodItemCart.push(food);
    } else {
      this.foodItemCart[index] = food;
    }
  }

decrement(food: any) {
  if (food.quantity > 0) {
    food.quantity--;

    const index = this.foodItemCart.findIndex(item => item.id === food.id);

    if (index !== -1) {
      if (food.quantity === 0) {
        this.foodItemCart.splice(index, 1);
      } else {
        this.foodItemCart[index] = food;
      }
    }
  }
}

  getFoodItemsByRestaurant(id: number) {
    this.foodItemService.getFoodItemsByRestaurantId(id).subscribe(
      data => this.foodItemResponse = data
    );
  }

onCheckOut() {
    this.orderSummary = {
      foodItemsList: [...this.foodItemCart],
      restaurant: this.foodItemResponse?.restaurant || null
    };

    this.router.navigate(
      ['/orderSummary'],
      { queryParams: { data: JSON.stringify(this.orderSummary) } }
    );
  }

}
