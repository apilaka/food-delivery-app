import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../model/restaurant';
import { Router } from '@angular/router';
import { SharedDataService } from '../../shared/service/shared-data.service';

@Component({
  selector: 'app-restaurant-listing',
  standalone: false,
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css'
})
export class RestaurantListingComponent {

  constructor(private router: Router, private restaurantService: RestaurantService, private shareddataService: SharedDataService) { }
  ngOnInit() {

    this.getAllRestaurants();

// let user = this.shareddataService.getUserData();
//     console.log("user value from Restaurant listing" +JSON.stringify(user));
     
  }
  restaurantList: Restaurant[] = [];
  restaurant: Restaurant | null = null;
  restaurantById: Restaurant | null = null;


  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList = data;
     });
  }
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getRandomImage(): string {
    const imageCount = 8;
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`
  }
  orderNow(id: number) {
    this.restaurantService.findRestaurantById(id)
      .subscribe(response => {
        this.restaurant = response;
        this.shareddataService.setData(this.restaurant);
        this.router.navigate(
          ['/catalogue'],
          { queryParams: { data: JSON.stringify(response) } });
      });
  }

setRestaurantDetails(id: number) {
   this.restaurantService.findRestaurantById(id).subscribe({
    next: (restaurant: Restaurant) => {
      // save if needed
      this.restaurant = restaurant;
      this.shareddataService.setRestaurant(restaurant);
    

    },
    error: (err) => {
      console.error("Error loading restaurant", err);
    }
  });
}

sendData() {
  this.shareddataService.setSampleData("saibaba" );
}
 sendRestaurant() {
  console.log("sending Restaurant")
 }


}
