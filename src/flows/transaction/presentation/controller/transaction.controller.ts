import { Controller, Get } from "@nestjs/common";
import { GetTransactionsUseCase } from "../../application/use-case/get-transactions.use-case";

@Controller({ path: 'transaction', version: '1' })
export class TransactionController {
    constructor(
        private readonly getTransactionsUseCase: GetTransactionsUseCase
    ) {}

    @Get()
    async getTransactions() {
        return await this.getTransactionsUseCase.execute();
    }
}