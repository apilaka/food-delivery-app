import { Restaurant } from "../../order-summary/model/FoodItem";
import { FoodItemDTO } from "./FoodItemDTO";
 
 
 

export interface FoodCataloguePage{
    foodItemsList:FoodItemDTO[];
    restaurant:Restaurant;
    userId:number;
}