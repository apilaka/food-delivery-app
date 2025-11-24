import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL_RL } from '../../constants/url';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService{
   //   private apiUrl ='/restaurant/listAllRestaurants'; 

      private baseUrl = 'http://localhost:8081/restaurant/listAllRestaurants';
    constructor(private http: HttpClient){  }

    getAllRestaurants():Observable<any>{
        return this.http.get<any>(`${this.baseUrl}`)
    }
      private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
  
}