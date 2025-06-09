import { FindOneOptions } from "typeorm";
import { UserEntity } from "../entity/user.entity";

export interface IUserRepository {
    create(data: any): Promise<UserEntity>;

    findOne(
        options: FindOneOptions<UserEntity>
    ): Promise<any>;
}