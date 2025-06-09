import { Injectable } from "@nestjs/common";
import { ICityRepository } from "../interface/city.repository.interface";
import { FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CityEntity } from "../entity/city.entity";

@Injectable()
export class CityRepository implements ICityRepository {
    constructor(
        @InjectRepository(CityEntity)
        private readonly cityRepository: Repository<CityEntity>
    ) { }

    async findOne(options: FindOneOptions<any>): Promise<any> {
        return await this.cityRepository.findOne(options);
    }

    async find(options: FindManyOptions<any>): Promise<any> {
        return await this.cityRepository.find(options);
    }
}