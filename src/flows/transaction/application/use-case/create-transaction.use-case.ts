import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateTransactionUseCase {
    constructor() {}

    async execute() {
        try {
            return 'Hi CreateTransactionUseCase'
        } catch (error) {
            
        }
    }
}