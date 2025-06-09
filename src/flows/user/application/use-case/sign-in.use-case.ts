import { Injectable } from "@nestjs/common";

@Injectable()
export class SignInUseCase {
    constructor() {}

    async execute() { 
        try {
            return 'Hi SignInUseCase'
        } catch (error) {
            
        }
    }
}