import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../model/restaurant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  standalone: false,
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css'
})
export class RestaurantListingComponent {
 
constructor(private router: Router, private restaurantService: RestaurantService) {}
ngOnInit(){
this.getAllRestaurants ();

}
restaurantList: Restaurant[]= [];

getAllRestaurants (){
 this.restaurantService.getAllRestaurants().subscribe(
  data=>{
 this.restaurantList=data;
console.log(JSON.stringify(data)); 
 });
}

getRandomNumber(min: number, max: number){
 return Math.floor(Math.random() *(max-min))+min;
}

getRandomImage():string{
  const imageCount = 8;
  const randomIndex = this.getRandomNumber(1, imageCount);
  return `${randomIndex}.jpg`
}
onButtonClick(id:number){
  this.router.navigate(['/food-catelogue', id])
  console.log(id)

}

}
