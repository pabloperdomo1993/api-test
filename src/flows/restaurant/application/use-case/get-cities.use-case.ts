import { Injectable } from "@nestjs/common";

@Injectable()
export class GetCitiesUseCase {
    constructor() {}

    async execute() {
        try {
            return 'Hi cities'
        } catch (error) {
            
        }
    }
}