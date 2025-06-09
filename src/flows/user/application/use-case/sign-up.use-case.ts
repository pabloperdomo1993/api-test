import { Injectable } from "@nestjs/common";

@Injectable()
export class SignUpUseCase {
    constructor() {}

    async execute() { 
        try {
            return 'Hi SignUpUseCase'
        } catch (error) {
            
        }
    }
}