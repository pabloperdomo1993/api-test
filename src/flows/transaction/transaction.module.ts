import { Module } from "@nestjs/common";
import { TransactionController } from "./presentation/controller/transaction.controller";
import { GetTransactionsUseCase } from "./application/use-case/get-transactions.use-case";
import { CreateTransactionUseCase } from "./application/use-case/create-transaction.use-case";
import { TransactionRepository } from "./domain/repository/transaction.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TransactionEntity } from "./domain/entity/transaction.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            TransactionEntity
        ])
    ],
    controllers: [
        TransactionController
    ],
    providers: [
        GetTransactionsUseCase,
        CreateTransactionUseCase,
        {
            provide: 'ITransactionRepository',
            useClass: TransactionRepository
        },
    ]
})

export class TransactionModule { }