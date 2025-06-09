import { Controller, Get, Param, ParseIntPipe, UseGuards } from "@nestjs/common";
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

    @Get('city/:id')
    async getRestaurants(@Param('id') id: string) {
        return await this.getRestaurantsUseCase.execute(id);
    }

    @Get('cities')
    async getCities() {
        return await this.getCitiesUseCase.execute();
    }
}