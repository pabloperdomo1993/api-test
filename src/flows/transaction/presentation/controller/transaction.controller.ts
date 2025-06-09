import { Controller, Get, Post } from "@nestjs/common";
import { GetTransactionsUseCase } from "../../application/use-case/get-transactions.use-case";
import { CreateTransactionUseCase } from "../../application/use-case/create-transaction.use-case";

@Controller({ path: 'transaction', version: '1' })
export class TransactionController {
    constructor(
        private readonly getTransactionsUseCase: GetTransactionsUseCase,
        private readonly createTransactionUseCase: CreateTransactionUseCase
    ) {}

    @Get()
    async getTransactions() {
        return await this.getTransactionsUseCase.execute();
    }

    @Post()
    async createTransaction() {
        return await this.createTransactionUseCase.execute();
    }
}