import { Module } from "@nestjs/common";
import { UserController } from "./presentation/controller/user.controller";
import { SignUpUseCase } from "./application/use-case/sign-up.use-case";
import { SignInUseCase } from "./application/use-case/sign-in.use-case";

@Module({
    imports: [],
    controllers: [
        UserController
    ],
    providers: [
        SignUpUseCase,
        SignInUseCase
    ]
})

export class UserModule { }