import { FindManyOptions, FindOneOptions } from "typeorm";
import { CityEntity } from "../entity/city.entity";

export interface ICityRepository {
    findOne(
        options: FindOneOptions<CityEntity>
    ): Promise<CityEntity>;

    find(
        options: FindManyOptions<CityEntity>
    ): Promise<CityEntity[]>;
}