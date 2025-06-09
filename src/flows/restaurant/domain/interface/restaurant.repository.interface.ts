import { FindManyOptions } from "typeorm";
import { RestaurantEntity } from "../entity/restaurant.entity";

export interface IRestaurantRepository {
    find(
        options: FindManyOptions<RestaurantEntity>
    ): Promise<RestaurantEntity[]>;
}