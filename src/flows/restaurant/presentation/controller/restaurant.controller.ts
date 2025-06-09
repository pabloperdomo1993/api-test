import { Controller, Get, UseGuards } from "@nestjs/common";
import { GetRestaurantsUseCase } from "../../application/use-case/get-restaurants.use-case";
import { GetCitiesUseCase } from "../../application/use-case/get-cities.use-case";
import { AuthenticationGuard } from "src/common/guards/authentication.guard";

@UseGuards(AuthenticationGuard)
@Controller({ path: 'restaurant', version: '1' })
export class RestaurantController {
    constructor(
        private readonly getRestaurantsUseCase: GetRestaurantsUseCase,
        private readonly getCitiesUseCase: GetCitiesUseCase
    ) {}

    @Get()
    async getRestaurants() {
        return await this.getRestaurantsUseCase.execute();
    }

    @Get('cities')
    async getCities() {
        return await this.getCitiesUseCase.execute();
    }
}