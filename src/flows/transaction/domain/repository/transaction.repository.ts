import { Injectable } from "@nestjs/common";
import { ITransactionRepository } from "../interface/transaction.repository.interface";
import { TransactionEntity } from "../entity/transaction.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { FindManyOptions, Repository } from "typeorm";

@Injectable()
export class TransactionRepository implements ITransactionRepository {
    constructor(
        @InjectRepository(TransactionEntity)
        private readonly transactionRepository: Repository<TransactionEntity>
    ) { }

    async create(data: any): Promise<any> {
        const obj = this.transactionRepository.create(data);
        return await this.transactionRepository.save(obj);
    }

    async find(options: FindManyOptions): Promise<TransactionEntity[]> {
        return await this.transactionRepository.find(options);
    }
}