import { HttpException, HttpStatus, Inject, Injectable, Logger } from "@nestjs/common";
import { IUserRepository } from "../../domain/interface/user.repository.interface";
import { hashSync } from 'bcryptjs';

@Injectable()
export class SignUpUseCase {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository
    ) { }

    async execute(data: any) {
        try {
            const user = this.userRepository.findOne({
                where: { email: data.email }
            });

            if (user) {
                throw new HttpException('Email exist', HttpStatus.BAD_REQUEST);
            }

            const password = hashSync(data.password, 8);
            data.password = password;

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