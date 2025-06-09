import { Module } from "@nestjs/common";
import { RestaurantController } from "./presentation/controller/restaurant.controller";
import { GetRestaurantsUseCase } from "./application/use-case/get-restaurants.use-case";
import { GetCitiesUseCase } from "./application/use-case/get-cities.use-case";
import { CityRepository } from "./domain/repository/city.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CityEntity } from "./domain/entity/city.entity";
import { RestaurantRepository } from "./domain/repository/restaurant.repository";
import { RestaurantEntity } from "./domain/entity/restaurant.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CityEntity,
            RestaurantEntity
        ])
    ],
    controllers: [
        RestaurantController
    ],
    providers: [
        GetRestaurantsUseCase,
        GetCitiesUseCase,
        {
            provide: 'ICityRepository',
            useClass: CityRepository
        },
        {
            provide: 'IRestaurantRepository',
            useClass: RestaurantRepository
        },
    ]
})

export class RestaurantModule { }