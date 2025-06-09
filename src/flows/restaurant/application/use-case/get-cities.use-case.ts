import { HttpException, Inject, Injectable, Logger } from "@nestjs/common";
import { ICityRepository } from "../../domain/interface/city.repository.interface";

@Injectable()
export class GetCitiesUseCase {
    constructor(
        @Inject('ICityRepository')
        private readonly cityRepository: ICityRepository,
    ) { }

    async execute() {
        try {
            const cities = await this.cityRepository.find({});
            return cities;
        } catch (error) {
            Logger.error(
                `Error getting cities:
                ${error?.response?.errorMessage || error.message}`,
                'GetCitiesUseCase'
            )

            throw new HttpException(
                {
                    description: 'Error getting cities',
                    errorMessage: error.response.errorMessage || error.message
                },
                error.status || 500
            )
        }
    }
}