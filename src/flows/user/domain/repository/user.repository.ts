import { Injectable } from "@nestjs/common";
import { IUserRepository } from "../interface/user.repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async create(data: any): Promise<any> {
        const obj = this.userRepository.create(data);
        return await this.userRepository.save(obj);
    }
}