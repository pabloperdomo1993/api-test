import { Injectable } from "@nestjs/common";

@Injectable()
export class GetTransactionsUseCase {
    constructor() {}

    async execute() {
        try {
            return 'Hi GetTransactionsUseCase'
        } catch (error) {
            
        }
    }
}