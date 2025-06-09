import { FindManyOptions, FindOneOptions } from "typeorm";

export interface ICityRepository {
    findOne(
        options: FindOneOptions<any>
    ): Promise<any>;

    find(
        options: FindManyOptions<any>
    ): Promise<any>;
}