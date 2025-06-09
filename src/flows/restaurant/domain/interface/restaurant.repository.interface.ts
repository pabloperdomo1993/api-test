import { FindManyOptions } from "typeorm";

export interface IRestaurantRepository {
    find(
        options: FindManyOptions<any>
    ): Promise<any>;
}