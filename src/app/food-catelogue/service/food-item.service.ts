import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { FoodItemDTO } from '../../shared/model/FoodItemDTO';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

findRestaurantById(restaurantId: number): Observable<any> {
  return this.http
    .get<any>(" http://localhost:8081/restaurant/fetchById/id?id="+restaurantId)
    .pipe(
      catchError(this.handleError.bind(this))  // <-- Best practice
    );
    
}

  private base_url = "http://localhost:8083/food-catelogue";
  private foodItems: FoodItemDTO[]=[];
  

  constructor(private http: HttpClient) { }
  ngOnInit(){
this.listFoodItems();
this.findRestaurantById(1);
console.log("data is "+this.findRestaurantById(1))
  }

getFoodItemsByRestaurantId(id: number): Observable<any> {
  return this.http
    .get<any>("http://localhost:8081/restaurant/fetchById/id?id=1")
    .pipe(
      catchError(this.handleError.bind(this))  // <-- Best practice
    );
    
}
 handleError(error: any) {
  console.error('API Error :', error);
  return throwError(() => error);
}
listFoodItems(): Observable<any> {
  return this.http
    .get<any>(`${this.base_url}/listFoodItems`)
    .pipe(
      catchError(this.handleError.bind(this))  // Bind ensures `this` refers to the service
    );
}

listFoodItemsByRestaurantId(id:number): Observable<any> {
  return this.http
    .get<any>("http://localhost:8083/food-catelogue/foodItemListByRestaurantId/id?id="+id)
    .pipe(
      catchError(this.handleError.bind(this))  // Bind ensures `this` refers to the service
    );
}
 

}

