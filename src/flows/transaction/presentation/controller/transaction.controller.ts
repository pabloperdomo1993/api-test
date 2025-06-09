import { Body, Controller, Get, Post, UseGuards, Headers } from "@nestjs/common";
import { GetTransactionsUseCase } from "../../application/use-case/get-transactions.use-case";
import { CreateTransactionUseCase } from "../../application/use-case/create-transaction.use-case";
import { AuthenticationGuard } from "src/common/guards/authentication.guard";

@UseGuards(AuthenticationGuard)
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
    async createTransaction(@Body() data: any, @Headers('user-id') userId: string) {
        return await this.createTransactionUseCase.execute(data, userId);
    }
}