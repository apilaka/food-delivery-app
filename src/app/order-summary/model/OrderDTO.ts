import { FoodItemDTO } from "../../shared/model/FoodItemDTO";
import { Restaurant } from "../../shared/model/Restaurant";
 
 


export interface OrderDTO{

    foodItemsList?: FoodItemDTO[];
      restaurant?: Restaurant;
}