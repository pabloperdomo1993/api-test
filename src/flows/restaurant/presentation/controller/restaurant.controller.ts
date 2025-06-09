import { Controller, Get } from "@nestjs/common";
import { GetRestaurantsUseCase } from "../../application/use-case/get-restaurants.use-case";

@Controller({ path: 'restaurant', version: '1' })
export class RestaurantController {
    constructor(
        private readonly getRestaurantsUseCase: GetRestaurantsUseCase
    ) {}

    @Get()
    async getRestaurants() {
        return await this.getRestaurantsUseCase.execute();
    }
}