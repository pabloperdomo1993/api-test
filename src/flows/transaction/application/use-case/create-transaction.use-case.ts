import { HttpException, Inject, Injectable, Logger } from "@nestjs/common";
import { ITransactionRepository } from "../../domain/interface/transaction.repository.interface";

@Injectable()
export class CreateTransactionUseCase {
    constructor(
        @Inject('ITransactionRepository')
        private readonly transactionRepository: ITransactionRepository,
    ) { }

    async execute(data: any, userId: string) {
        try {
            const obj = {
                amount: data.amount,
                currency: data.currency,
                description: data.description,
                restaurantId: data.restaurantId,
                userId: userId
            };

            return await this.transactionRepository.create(obj);
        } catch (error) {
            Logger.error(
                `Error creating transaction:
                ${error?.response?.errorMessage || error.message}`,
                'CreateTransactionUseCase'
            )

            throw new HttpException(
                {
                    description: 'Error creating transaction',
                    errorMessage: error.response.errorMessage || error.message
                },
                error.status || 500
            )
        }
    }
}