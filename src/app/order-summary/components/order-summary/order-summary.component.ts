import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDTO } from '../../model/OrderDTO';
import { OrderService } from '../../service/OrderService';
import { CommonModule, NgIf } from '@angular/common';
import { OrderSummary } from '../../model/FoodItem';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
  imports: [CommonModule],

})
export class OrderSummaryComponent {
closeDialog() {
throw new Error('Method not implemented.');
}
 orderData!: OrderDTO;
  orderSummary?: OrderDTO;
  obj: any;
  total?: any;
  showDialog: boolean = false;
  foodItemCart: never[] = [];
  foodItemResponse: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }
  
ngOnInit() {

    this.http.get<OrderDTO>('assets/order.json').subscribe(data => {
      this.orderData = data;
      console.log(this.orderData);
    });

  const dataString = this.route.snapshot.queryParamMap.get('data');

  if (dataString) {

   console.log("dataString is "+dataString)
    this.orderSummary = JSON.parse(dataString);
  } else {
    console.error("No data found in query params");
  }
}

  saveOrder() {
    this.orderService.saveOrder(this.orderData)
      .subscribe(
        response => {
            this.showDialog = true;
        },
        error => {
          console.error('Failed to save data:', error);
        }
      );
  }
onCheckOut() {
          this.saveOrder();

  this.orderSummary = {
    foodItemsList: this.foodItemCart ?? [],
    restaurant: this.foodItemResponse?.restaurant ?? null
  };

  this.router.navigate(['/order'], {
    queryParams: { data: JSON.stringify(this.order) }
  });
}
order: OrderSummary = {
  foodItemsList: [
    { foodId: 1, foodName: 'Paneer Butter Masala', quantity: 2, price: 12.99 },
    { foodId: 2, foodName: 'Garlic Naan', quantity: 3, price: 3.49 }
  ],
  userId: 2002,
  restaurant: {
    id: 2002,
    name: 'Restaurant 5',
    address: 'Address Line 1',
    city: 'Richmond',
    restaurantDescription: 'restaurantDescription'
  }
};

}