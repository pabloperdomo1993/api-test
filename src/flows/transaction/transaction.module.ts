import { Module } from "@nestjs/common";
import { TransactionController } from "./presentation/controller/transaction.controller";
import { GetTransactionsUseCase } from "./application/use-case/get-transactions.use-case";
import { CreateTransactionUseCase } from "./application/use-case/create-transaction.use-case";

@Module({
    imports: [],
    controllers: [
        TransactionController
    ],
    providers: [
        GetTransactionsUseCase,
        CreateTransactionUseCase
    ]
})

export class TransactionModule { }