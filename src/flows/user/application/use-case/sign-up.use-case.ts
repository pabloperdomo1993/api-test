import { HttpException, Inject, Injectable, Logger } from "@nestjs/common";
import { IUserRepository } from "../../domain/interface/user.repository.interface";

@Injectable()
export class SignUpUseCase {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository
    ) { }

    async execute(data: any) { 
        try {
            return await this.userRepository.create(data);
        } catch (error) {
            Logger.error(
                `Error creating user:
                ${error?.response?.errorMessage || error.message}`,
                'SignUpUseCase'
            )

            throw new HttpException(
                {
                    description: 'Error creating user',
                    errorMessage: error.response.errorMessage || error.message
                },
                error.status || 500
            )
        }
    }
}