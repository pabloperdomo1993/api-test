import { Injectable } from "@nestjs/common";

@Injectable()
export class GetRestaurantsUseCase {
    constructor() {}

    async execute() {
        try {
            return 'Hi GetRestaurants'
        } catch (error) {
            
        }
    }
}