export interface FoodItem {
  foodId: number;
  itemName: string;
  quantity: number;
  price: number;
}

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  city: string;
  restaurantDescription: string;
}

export interface OrderSummary {
  foodItemsList: FoodItem[];
  userId: number;
  restaurant: Restaurant;
}
