import { Injectable } from "@nestjs/common";
import { IRestaurantRepository } from "../interface/restaurant.repository.interface";
import { FindManyOptions, Repository } from "typeorm";
import { RestaurantEntity } from "../entity/restaurant.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RestaurantRepository implements IRestaurantRepository {
    constructor(
        @InjectRepository(RestaurantEntity)
        private readonly restaurantRepository: Repository<RestaurantEntity>
    ) { }

    async find(options: FindManyOptions<RestaurantEntity>): Promise<RestaurantEntity[]> {
        return await this.restaurantRepository.find(options);
    }
}