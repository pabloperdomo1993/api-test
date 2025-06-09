import { HttpException, Inject, Injectable, Logger } from "@nestjs/common";
import { IRestaurantRepository } from "../../domain/interface/restaurant.repository.interface";

@Injectable()
export class GetRestaurantsUseCase {
    constructor(
        @Inject('IRestaurantRepository')
        private readonly restaurantRepository: IRestaurantRepository,
    ) { }

    async execute(id: string) {
        try {
            const restaurants = await this.restaurantRepository.find({
                where: { cityId: id }
            });
            return restaurants;
        } catch (error) {
            Logger.error(
                `Error getting restaurants:
                ${error?.response?.errorMessage || error.message}`,
                'GetRestaurantsUseCase'
            )

            throw new HttpException(
                {
                    description: 'Error getting restaurants',
                    errorMessage: error.response.errorMessage || error.message
                },
                error.status || 500
            )
        }
    }
}