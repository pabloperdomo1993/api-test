import { Module } from "@nestjs/common";
import { TransactionController } from "./presentation/controller/transaction.controller";
import { GetTransactionsUseCase } from "./application/use-case/get-transactions.use-case";

@Module({
    imports: [],
    controllers: [
        TransactionController
    ],
    providers: [
        GetTransactionsUseCase
    ]
})

export class TransactionModule { }