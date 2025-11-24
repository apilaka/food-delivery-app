import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  private base_url = "http://localhost:8083/food-catelogue";

  constructor(private http: HttpClient) { }

getFoodItemsByRestaurantId(id: number): Observable<any> {
  return this.http
    .get<any>(`${this.base_url}/fetchRestaurantAndFoodItemsById/${id}`)
    .pipe(
      catchError(this.handleError.bind(this))  // <-- Best practice
    );
}


 handleError(error: any) {
  console.error('API Error:', error);
  return throwError(() => error);
}
}

