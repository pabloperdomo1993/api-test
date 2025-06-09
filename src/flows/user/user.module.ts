import { Module } from "@nestjs/common";
import { UserController } from "./presentation/controller/user.controller";
import { SignUpUseCase } from "./application/use-case/sign-up.use-case";
import { SignInUseCase } from "./application/use-case/sign-in.use-case";
import { UserRepository } from "./domain/repository/user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./domain/entity/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity
        ])
    ],
    controllers: [
        UserController
    ],
    providers: [
        SignUpUseCase,
        SignInUseCase,
        {
            provide: 'IUserRepository',
            useClass: UserRepository
        },
    ]
})

export class UserModule { }