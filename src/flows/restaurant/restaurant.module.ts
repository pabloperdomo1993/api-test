import { Module } from "@nestjs/common";
import { RestaurantController } from "./presentation/controller/restaurant.controller";
import { GetRestaurantsUseCase } from "./application/use-case/get-restaurants.use-case";
import { GetCitiesUseCase } from "./application/use-case/get-cities.use-case";

@Module({
    imports: [],
    controllers: [
        RestaurantController
    ],
    providers: [
        GetRestaurantsUseCase,
        GetCitiesUseCase
    ]
})

export class RestaurantModule { }