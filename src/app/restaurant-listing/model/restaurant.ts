export class Restaurant {
  id: number;
  name: string;
  address: string;
  city: string;
  restaurantDescription: string;

  

  constructor(
    id: number,
    name: string,
    address: string,
    city: string,
    restaurantDescription: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.restaurantDescription = restaurantDescription;
  }
}
