import { HttpException, HttpStatus, Inject, Injectable, Logger } from "@nestjs/common";
import { IUserRepository } from "../../domain/interface/user.repository.interface";
import { compareSync } from "bcryptjs";
import { ConfigService } from "@nestjs/config";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class SignInUseCase {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
        private readonly configService: ConfigService
    ) { }

    async execute(data: any) {
        try {
            const user = await this.userRepository.findOne({
                where: { email: data.email }
            });

            if (!user) {
                throw new HttpException('Email not exist', HttpStatus.BAD_REQUEST);
            }

            const isPasswordValid = compareSync(data.password, user.password);

            if (!isPasswordValid) {
                throw new HttpException('Incorrect credentials', HttpStatus.BAD_REQUEST);
            }

            const obj = {
                idUser: user.idUser,
                documentNumber: user.documentNumber
            };

            const options = {
                expiresIn: this.configService.get<string>('JWT_EXPIRES')
            };

            const KEY_JWT = this.configService.get<string>('JWT_KEY');
            const token = jwt.sign(obj, KEY_JWT, options);

            return {
                accessToken: token
            }
        } catch (error) {
            Logger.error(
                `Error signing:
                ${error?.response?.errorMessage || error.message}`,
                'SignInUseCase'
            )

            throw new HttpException(
                {
                    description: 'Error signing',
                    errorMessage: error.response.errorMessage || error.message
                },
                error.status || 500
            )
        }
    }
}