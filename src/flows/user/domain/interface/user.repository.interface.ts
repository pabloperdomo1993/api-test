import { FindOneOptions } from "typeorm";

export interface IUserRepository {
    create(data: any): Promise<any>;

    findOne(
        options: FindOneOptions<any>
    ): Promise<any>;
}