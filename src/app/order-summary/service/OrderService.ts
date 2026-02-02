import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SharedDataService } from '../../shared/service/shared-data.service';
 
import orderJson from '../../shared/order.json';
import { AwsUser } from '../../user/model/aws-user';
@Injectable({
  providedIn: 'root'
})

export class OrderService {
uploadJson(orderJson: any): Observable<any> {
  const headers = { 'Content-Type': 'application/json' };
  return this.http.post<any>(`${this.base_url}/saveOrder`, orderJson, { headers });
}


  private restaurantURL = 'http://localhost:8081/restaurant/';
 private base_url = "http://localhost:8084/order";
  private user_url = "http://localhost:8082/user";

  constructor(private http: HttpClient, private sharedDataService: SharedDataService) { }

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'text/plain',
      'Access-Control-Allow-Origin': 'http://localhost:4200' // Replace with your Angular app URL
    })
  };
  saveOrder(data: any):Observable<any>  {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.base_url+"/saveNewOrder", data, {headers});
  }
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }

    findUserById(id: Number):Observable<AwsUser>  {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<any>(this.user_url+"/fetchUserById/2002");
  }
 
}