import { FindManyOptions } from "typeorm";
import { TransactionEntity } from "../entity/transaction.entity";

export interface ITransactionRepository {
    create(data: any): Promise<any>;

    find(options: FindManyOptions): Promise<TransactionEntity[]>;
}