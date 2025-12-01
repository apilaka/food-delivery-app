import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { API_URL_RL } from '../../constants/url';
import { Restaurant } from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService{
    private baseUrl = 'http://localhost:8081/restaurant/';
    constructor(private http: HttpClient){  }
    getAllRestaurants():Observable<any>{
        return this.http.get<any>(this.baseUrl+"listAllRestaurants")
    }
      private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
  findRestaurantById(id:number):Observable<any>{
    return this.http.get<any>(this.baseUrl+"fetchById/id?id="+id);
  }

    fetchRestaurantById(id:number):Restaurant{
    return this.fetchRestaurantById(id);
  }
  
  
}