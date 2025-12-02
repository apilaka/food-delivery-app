import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { FoodItem } from "../../order-summary/model/FoodItem";
import { FoodItemDTO } from "../model/FoodItemDTO";
import { Restaurant } from "../../restaurant-listing/model/restaurant";
import { FoodCataloguePageClass } from "../model/FoodCataloguePageClass ";
import { AwsUser } from "../../user/model/User";

@Injectable({ providedIn: 'root' })
export class SharedDataService {
 
  constructor() { }




 
//sample data
  private sampleData: string = '';
  setSampleData(data: string) {
    console.log("Data set from SharedDataService", data);
    this.sampleData = data;
  }
  getSampleData(callback: (received: string) => void) {
    const data = this.sampleData;
    callback(data);
  }

  //restaurant data
    private restaurant!: Restaurant;
  setRestaurant(data: Restaurant) {
    console.log("Data set from SharedDataService", data);
    this.restaurant = data;
  }
  getRestaurant(): Restaurant {
    return this.restaurant;
  }
//user data
  private awsUser!: AwsUser;
  private userSource = new BehaviorSubject<AwsUser | null>(null);
  user$ = this.userSource.asObservable();

  setUserData(user: AwsUser) {
   // console.log("User set:", user);
    this.userSource.next(user);
  }
  getUserData() {
    return this.userSource.value;
  }


  //Food data
  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();

  private orderDataSource = new BehaviorSubject<FoodCataloguePageClass | null>(null);
  inputOrderData = this.orderDataSource.asObservable();


  
  // Holds the current list of selected food items
  private foodSource = new BehaviorSubject<FoodItemDTO[]>([]);
  selectedFoodItems = this.foodSource.asObservable();

  setData(data: any) {
    this.dataSource.next(data);
  }
  setInputOrderData(order: FoodCataloguePageClass) {
    this.orderDataSource.next(order);
  }
  getCurrentValue() {
    return this.dataSource.getValue();  // <-- returns the last value
  }
  // Call this to update the selected foods
  updateFood(data: FoodItem[]) {
    this.foodSource.next(data);
  }
  }
function callback(data: Restaurant) {
  throw new Error("Function not implemented.");
}
