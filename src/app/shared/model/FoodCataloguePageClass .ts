import { FoodItemDTO } from "./FoodItemDTO";
import { Restaurant } from "./Restaurant";

 
export class FoodCataloguePageClass {
  constructor(
    public foodItemsList: FoodItemDTO[],
    public userId: number,
    public restaurant: Restaurant
  ) {}
}
