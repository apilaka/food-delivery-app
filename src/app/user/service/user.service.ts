import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AwsUser } from '../model/User';
 

@Injectable({
  providedIn: 'root'
})
export class UserService{
    private user_url = 'http://localhost:8082/user/';

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'text/plain',
      'Access-Control-Allow-Origin': 'http://localhost:4200' // Replace with your Angular app URL
    })
  };
    constructor(private http: HttpClient){  }

    findUserById(id: Number):Observable<AwsUser>  {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<any>(this.user_url+"fetchUserById/2002");
  }
    private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  } 
}